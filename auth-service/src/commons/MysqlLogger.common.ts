/* eslint-disable @typescript-eslint/no-unused-vars */
import { Logger, QueryRunner } from 'typeorm';
// Utils
import { logger } from './Logger.common';

export default class MysqlLogger implements Logger {
  log(level: 'log' | 'info' | 'warn', message: any, queryRunner?: QueryRunner): any {}

  logMigration(message: string, queryRunner?: QueryRunner): any {}

  logQuery(query: string, parameters?: any[], queryRunner?: QueryRunner): any {
    logger.info(`DATABSE_QUERY: ${query}, PARAMETERS: [${parameters || ''}]`);
  }

  logQueryError(error: string | Error, query: string, parameters?: any[], queryRunner?: QueryRunner): any {
    logger.error(`DATABSE_QUERY: ${error} - ${query}, PARAMETERS: [${parameters || ''}]`);
  }

  logQuerySlow(time: number, query: string, parameters?: any[], queryRunner?: QueryRunner): any {}

  logSchemaBuild(message: string, queryRunner?: QueryRunner): any {}
}
