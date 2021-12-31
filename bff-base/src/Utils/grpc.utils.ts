import { credentials } from 'grpc';
import { AuthClient } from "../../proto/auth_grpc_pb";
import dotenv from 'dotenv';

dotenv.config();

export const client = new AuthClient(
  `${process.env.GRPC_HOST}:${process.env.GRPC_PORT}`,
  credentials.createInsecure()
);