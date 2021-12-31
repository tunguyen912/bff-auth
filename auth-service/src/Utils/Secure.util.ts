import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import { AuthenticationError } from '../commons/errors/Authentication.error';
import { IPayload } from '../models/IAccount.model';
import { msgConstant } from '../constants';
import { logger } from '../commons/Logger.common';

dotenv.config();
class SecureUtil {
  public generateToken(payload: IPayload): string{
    const payloadObj: object = {...payload};
    return jwt.sign(payloadObj, process.env.JWT_SECRET_KEY as string, { expiresIn: Number(process.env.JWT_EXPIRE_TIME) });
  }
  
  public async hashPassword(password: string): Promise<string>{
    return  await bcrypt.hash(password, Number(process.env.BCRYPT_SALT_NUMBER || 10));
  }
  
  public async comparePassword(passWord: string, passWordHashed: string): Promise<boolean>{
    return await bcrypt.compare(passWord, passWordHashed);
  }

  public decodeToken(token: string): any{
    return jwt.decode(token);
  }
  public async verifyToken(token: string): Promise<any>{
    try {
      return jwt.verify(token, process.env.JWT_SECRET_KEY as string);
    }
    catch (e) {
      logger.error(e);
    }
  }
}
export default new SecureUtil();