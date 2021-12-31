import express from 'express';
import DBMysql from './database/MySql.db';
// import RedisUtil from './database/Redis.db';

class App {
  public app: express.Application;

  constructor() {
    this.app = express();
    DBMysql.connect();
    // RedisUtil.connect();
    // this.app.use(RedisUtil.redisSession);
  }
}

export { App };
