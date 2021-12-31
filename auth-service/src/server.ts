import * as dotenv from 'dotenv';
import { App } from './app';
import { Server, ServerCredentials } from 'grpc';
import { AuthService } from "../proto/auth_grpc_pb";
import { AuthServer } from "./services/Auth.service";
import { logger } from './commons/Logger.common';
import { msgConstant } from './constants';

dotenv.config();

const PORT: number = parseInt(process.env.AUTH_SERVICE_PORT as string, 10) | 8082;
(async () => {
  const server = new Server();
  server.addService(AuthService, new AuthServer());
  const uri = `${process.env.AUTH_SERVICE_HOST}:${process.env.GRPC_PORT}`;
  server.bind(uri, ServerCredentials.createInsecure());
  server.start();

  const app = new App();
  app.app.listen(PORT, () => {
    logger.info(msgConstant.LISTENING_ON_PORT + ' ' + PORT);
  });
})();
