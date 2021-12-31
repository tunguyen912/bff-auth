import { MyRequest } from '../models/MyRequest.model';
import { 
  GetInfoRequest, 
  GetInfoResponse, 
  LoginRequest,
  LoginResponse,
  ValidateResponse,
  ValidateRequest
} from '../../proto/auth_pb';
import { client } from '../Utils/grpc.utils';

class AuthService {
  public async login(req: MyRequest): Promise<LoginResponse> {
    const { username, password } = req.body;

    return new Promise<LoginResponse>((resolve, reject) => {
      const request = new LoginRequest();
      
      request.setEmail(username);
      request.setPassword(password);      
      
      client.login(request, (err, response) => {        
        if (err) {
          console.log(err);
          reject(err);
        }
        else resolve(response);
      });
    });
  }
  
  public async getInfo(req: MyRequest): Promise<GetInfoResponse | undefined> {
    const token = req.headers['authorization'];

    if (token) {
      return new Promise<GetInfoResponse>((resolve, reject) => {
        const request = new GetInfoRequest();
        request.setToken(token as string);

        client.getInfo(request, (err, response) => {                  
          if (err) reject(err);
          else resolve(response);
        });
      });
    } else throw new Error();
  }
  
  public async validateToken(req: MyRequest): Promise<ValidateResponse | undefined> {
    const token = req.headers['authorization'];

    if (token) {
      return new Promise<ValidateResponse>((resolve, reject) => {
        const request = new ValidateRequest();
        request.setToken(token as string);

        client.validate(request, (err, response) => {                  
          if (err) reject(err);
          else resolve(response);
        });
      });
    } else throw new Error();
  }
}

export default new AuthService();
