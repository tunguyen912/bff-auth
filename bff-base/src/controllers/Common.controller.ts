// Constants
import { prefixConstant, apiPath } from '../constants/index';
// Decorators
import { Controller } from '../commons/decorators/Controller.decorator';
import { LogDecorator } from '../commons/decorators/RequestLogging.decorator';
import { Get } from '../commons/decorators/Get.decorator';
//Models
import JsonResponse from '../models/JsonResponse.model';

@Controller(prefixConstant.COMMON)
export default class CommonController {
  @Get(apiPath.CHECK_HEALTH)
  @LogDecorator
  public async _checkHealth(): Promise<JsonResponse<any>> {
    return new JsonResponse<any>({
      response_msg: 'ALIVE',
    });
  }
}
