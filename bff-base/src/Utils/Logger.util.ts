import winston from 'winston';

class LoggerUtil {
  logger: winston.Logger;

  constructor() {
    this.init();
  }

  private init(): void {
    const { combine, timestamp, printf } = winston.format;
    const myFormat = printf(({ level, message, timestamp: tp }) => `${tp}: ${level.toUpperCase()}: ${message}`);
    this.logger = winston.createLogger({
      level: 'info',
      format: combine(timestamp(), myFormat),
    });
    this.logger.add(
      new winston.transports.Console({
        format: combine(timestamp(), myFormat),
      }),
    );
  }
}

const loggerUtil = new LoggerUtil();
const logger = loggerUtil.logger;
export { logger };
