import {
  ServerUnaryCall,
  sendUnaryData,
} from 'grpc';

import { IAuthServer } from '../../proto/auth_grpc_pb';
import { LoginResponse,
  LoginRequest,
  GetInfoRequest,
  GetInfoResponse,
  ValidateRequest,
  ValidateResponse
} from '../../proto/auth_pb';
import { getRepository } from 'typeorm';
import { AccountEntity } from '../database/entities/Accounts.entity';
import { EmployeeEntity } from '../database/entities/Employees.entity';
import { authConstant, msgConstant } from '../constants';
import { AuthenticationError } from '../commons/errors/Authentication.error';
import SecureUtil from '../Utils/Secure.util';
import { IPayload } from '../models/IAccount.model';
import RedisUtil from '../database/Redis.db';

export class AuthServer implements IAuthServer {
  async login(call: ServerUnaryCall<LoginRequest>, callback: sendUnaryData<LoginResponse>) {
    const email = call.request.getEmail();
    const password = call.request.getPassword();
    const userResponse = new LoginResponse();
    
    const user = await getRepository<AccountEntity>(AccountEntity).findOne({
      where: {
        email: email,
        is_active: authConstant.ACTIVE_ACCOUNT
      }
    });

    if (!user) { 
      userResponse.setError(msgConstant.MESSAGE_ERROR_AUTHENTICATE);
      callback(null, userResponse);
      throw new AuthenticationError({ message: msgConstant.MESSAGE_ERROR_AUTHENTICATE });
    };
    const isMatchPassword = await SecureUtil.comparePassword(password, user.password);

    if (!isMatchPassword) {
      userResponse.setError(msgConstant.MESSAGE_ERROR_AUTHENTICATE);
      callback(null, userResponse);
      throw new AuthenticationError({ message: msgConstant.MESSAGE_ERROR_AUTHENTICATE });
    }

    const payload: IPayload = {
      accountId: user.id,
      isAdmin: user.is_admin
    }
    const jwt = SecureUtil.generateToken(payload);
    await RedisUtil.clientSync.set(jwt, JSON.stringify(payload), 'EX', process.env.REDIS_EXPIRE_TIME);
    userResponse.setId(user.id.toString());
    userResponse.setEmail(user.email);
    userResponse.setJwt(jwt);
    
    callback(null, userResponse);
  }

  async getInfo(call: ServerUnaryCall<GetInfoRequest>, callback: sendUnaryData<GetInfoResponse>) {
    const token: string = call.request.getToken().replace('Bearer ', '');
    const info: IPayload = SecureUtil.decodeToken(token);
    const getInfoResponse = new GetInfoResponse();

    if (!info) {
      getInfoResponse.setError(msgConstant.INVALID_TOKEN);
      callback(null, getInfoResponse);
      throw new AuthenticationError({ message: msgConstant.INVALID_TOKEN });
    }
    if (info.exp && Date.now() < info.exp * 1000) {
      getInfoResponse.setError(msgConstant.TOKEN_EXPIRE);
      callback(null, getInfoResponse);
      throw new AuthenticationError({ message: msgConstant.TOKEN_EXPIRE });
    }
    const employee = await getRepository<EmployeeEntity>(EmployeeEntity).findOne({
      where: {
        account_id: info.accountId
      }
    });
    if (!employee) {
      getInfoResponse.setError(msgConstant.INVALID_ACCOUNT_ID);
      callback(null, getInfoResponse);
      throw new AuthenticationError({ message: msgConstant.INVALID_ACCOUNT_ID });
    } 
    getInfoResponse.setAccountid(info.accountId);
    getInfoResponse.setDepartment(employee.department_code);
    getInfoResponse.setName(employee.name);
    callback(null, getInfoResponse);
  }
  
  async validate(call: ServerUnaryCall<ValidateRequest>, callback: sendUnaryData<ValidateResponse>) {
    const token: string = call.request.getToken().replace('Bearer ', '');
    await SecureUtil.verifyToken(token);
    
    const redisValue = await RedisUtil.clientSync.get(token);
    const info = redisValue ? JSON.parse(redisValue) : null;

    const validateResponse = new ValidateResponse();
    if (!info) {
      validateResponse.setError(msgConstant.INVALID_TOKEN);
    } else {
      validateResponse.setAccountid(info.accountId);
      validateResponse.setIsadmin(info.isAdmin);
    }
    callback(null, validateResponse);
  }
}