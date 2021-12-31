import delay from 'delay';
import { createConnection, getConnectionOptions } from 'typeorm';
import { logger } from '../commons/Logger.common';
import { msgConstant } from '../constants';
import MysqlLogger from '../commons/MysqlLogger.common';


class DBMysql {
  public retry = 0;

  public async connect(): Promise<void> {
    try {
      const connectionOptions = await getConnectionOptions();
      Object.assign(connectionOptions, { logger: process.env.SQL_DEBUG_FLG === '1' ? new MysqlLogger() : false });
      logger.info(`${msgConstant.MYSQL_CONNECTING}: ${process.env.TYPEORM_HOST}:${process.env.TYPEORM_PORT}`);
      await createConnection(connectionOptions);
      logger.info(msgConstant.MYSQL_CONNECTED);
    } catch (e) {
      await delay(3000);
      this.retry++;
      logger.error(`MYSQL RETRY ${this.retry} WITH ERROR: ${(e as Error).stack}`);
      await this.connect();
    }
  }
}

export default new DBMysql();
