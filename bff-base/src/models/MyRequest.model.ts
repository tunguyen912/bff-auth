import { Request } from 'express';
import { Session } from 'express-session';

export interface MyRequest extends Request{
  reqId?: string
  session: Session
}
