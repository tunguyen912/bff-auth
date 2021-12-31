import express from 'express';
import { v4 as uuidv4 } from 'uuid';
import * as bodyParser from 'body-parser';
// Commons
import { IRouteDefinition } from './commons/definitions/Route.definition';
import { logger } from './Utils/Logger.util';
// Controllers
import AuthController from './controllers/Auth.controller';
import CommonController from './controllers/Common.controller';
// Models
import JsonResponse from './models/JsonResponse.model';
import { MyRequest } from './models/MyRequest.model';

class App {
  public app: express.Application;

  constructor() {
    this.app = express();
    this.config();
    this.initRoutes();
  }

  private config(): void {
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: false }));
  }

  private initRoutes(): void {
    const listController: any = [CommonController, AuthController];
    listController.forEach((controller: any) => {
      const instance = new controller();
      const prefix = Reflect.getMetadata('prefix', controller);
      const routes: IRouteDefinition[] = Reflect.getMetadata('routes', controller);
      routes.forEach((route) => {
        this.app[route.requestMethod](prefix + route.path, async (req: MyRequest, res) => {
          const reqId = uuidv4();
          const start: number = Date.now();
          try {
            req.reqId = reqId;
            const data: JsonResponse<any> = await instance[route.methodName](req, res);
            logger.info(`PROCESS ${reqId} TOTALTIME: ${(Date.now() - start).toString()}ms`);
            data.request_id = reqId;
            res.status(data.getStatusCode());
            res.json(data.getData());
          } catch (e: any) {
            const message = e.role === 1 ? e.message : undefined;
            const data = new JsonResponse({
              status_code: e.role === 1 ? e.status : 500,
              response_msg: message,
              error_info: e.info,
              data: e.name === 'BADREQUEST_ERROR' && e.data ? e.data : [],
            });
            data.request_id = reqId;
            res.status(data.getStatusCode());
            res.json(data.getData());
            const logError = `${reqId} ${
              e.response?.data ? e.message + ' ' + JSON.stringify(e.response.data) : e.stack
            }`;
          }
        });
      });
    });
  }
}

export { App };
