import 'reflect-metadata';
import * as dotenv from 'dotenv';
import { App } from './app';
// Constants
import { msgConstant } from './constants';
// Commons
import { logger } from './Utils/Logger.util';

dotenv.config();

const PORT: number = Number(process.env.PORT as string) | 8081;
(async () => {
  const app = new App();
  app.app.listen(PORT, () => {
    logger.info(msgConstant.LISTENING_ON_PORT + ' ' + PORT);
  });
})();

