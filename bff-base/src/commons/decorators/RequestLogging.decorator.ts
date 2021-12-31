import { logger } from '../../Utils/Logger.util';

export const LogDecorator = (target: any, key: string, descriptor: any) => {
  const originalMethod = descriptor.value;
  descriptor.value = function (...args: any[]) {
    const reqId = args[0].reqId;
    const token: string = args[0].headers.authorization ? args[0].headers.authorization : 'UNSET';
    const body: string | undefined = args[0].body;
    const requestInfo = `CLIENT REQUEST  ${reqId} ${args[0].method} ${args[0].headers.host}${
      args[0].originalUrl
    }, body: ${body ? JSON.stringify(body) : ''},  Authorization: ${token}`;
    logger.info(requestInfo);
    return originalMethod.apply(this, args);
  };
  return descriptor;
};
