// Constants
import { prefixConstant, apiPath } from '../constants/index';
// Decorators
import { Controller } from '../commons/decorators/Controller.decorator';
import { LogDecorator } from '../commons/decorators/RequestLogging.decorator';
import { Post } from '../commons/decorators/Post.decorator';
// Models
import JsonResponse from '../models/JsonResponse.model';
import { MyRequest } from '../models/MyRequest.model';
// Service
import AuthService from '../services/Auth.service';
import { Get } from '../commons/decorators/Get.decorator';

@Controller(prefixConstant.AUTH)
export default class AuthController {
  @Post(apiPath.LOGIN)
  @LogDecorator
  public async login(req: MyRequest): Promise<JsonResponse<any>> {
    const result = await AuthService.login(req);
    if (result?.hasError()) {
      return new JsonResponse<any>({
        status_code: 500,
        response_msg: result.getError(),
      });
    }
    return new JsonResponse<any>({
      response_msg: 'SUCCESS',
      data: {
        token: result.getJwt()
      },
    });
  }
  
  @Get(apiPath.INFO)
  @LogDecorator
  public async getInfo(req: MyRequest): Promise<JsonResponse<any>> {
    const result = await AuthService.getInfo(req);
    if (result?.hasError()) {
      return new JsonResponse<any>({
        status_code: 500,
        response_msg: result.getError(),
      });
    }
    return new JsonResponse<any>({
      response_msg: 'SUCCESS',
      data: {
        account_id: result?.getAccountid(),
        name: result?.getName(),
        department: result?.getDepartment(),
      },
    });
  }
  
  @Post(apiPath.VALIDATE)
  @LogDecorator
  public async validateToken(req: MyRequest): Promise<JsonResponse<any>> {
    const result = await AuthService.validateToken(req);
    if (result?.hasError()) {
      return new JsonResponse<any>({
        status_code: 500,
        response_msg: result.getError(),
      });
    }
    return new JsonResponse<any>({
      response_msg: 'SUCCESS',
      data: {
        account_id: result?.getAccountid(),
        name: result?.getIsadmin(),
      },
    });
  }
}
