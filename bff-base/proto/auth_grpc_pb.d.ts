// package: auth
// file: auth.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as auth_pb from "./auth_pb";

interface IAuthService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    login: IAuthService_ILogin;
    getInfo: IAuthService_IGetInfo;
    validate: IAuthService_IValidate;
}

interface IAuthService_ILogin extends grpc.MethodDefinition<auth_pb.LoginRequest, auth_pb.LoginResponse> {
    path: "/auth.Auth/Login";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<auth_pb.LoginRequest>;
    requestDeserialize: grpc.deserialize<auth_pb.LoginRequest>;
    responseSerialize: grpc.serialize<auth_pb.LoginResponse>;
    responseDeserialize: grpc.deserialize<auth_pb.LoginResponse>;
}
interface IAuthService_IGetInfo extends grpc.MethodDefinition<auth_pb.GetInfoRequest, auth_pb.GetInfoResponse> {
    path: "/auth.Auth/GetInfo";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<auth_pb.GetInfoRequest>;
    requestDeserialize: grpc.deserialize<auth_pb.GetInfoRequest>;
    responseSerialize: grpc.serialize<auth_pb.GetInfoResponse>;
    responseDeserialize: grpc.deserialize<auth_pb.GetInfoResponse>;
}
interface IAuthService_IValidate extends grpc.MethodDefinition<auth_pb.ValidateRequest, auth_pb.ValidateResponse> {
    path: "/auth.Auth/Validate";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<auth_pb.ValidateRequest>;
    requestDeserialize: grpc.deserialize<auth_pb.ValidateRequest>;
    responseSerialize: grpc.serialize<auth_pb.ValidateResponse>;
    responseDeserialize: grpc.deserialize<auth_pb.ValidateResponse>;
}

export const AuthService: IAuthService;

export interface IAuthServer {
    login: grpc.handleUnaryCall<auth_pb.LoginRequest, auth_pb.LoginResponse>;
    getInfo: grpc.handleUnaryCall<auth_pb.GetInfoRequest, auth_pb.GetInfoResponse>;
    validate: grpc.handleUnaryCall<auth_pb.ValidateRequest, auth_pb.ValidateResponse>;
}

export interface IAuthClient {
    login(request: auth_pb.LoginRequest, callback: (error: grpc.ServiceError | null, response: auth_pb.LoginResponse) => void): grpc.ClientUnaryCall;
    login(request: auth_pb.LoginRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: auth_pb.LoginResponse) => void): grpc.ClientUnaryCall;
    login(request: auth_pb.LoginRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: auth_pb.LoginResponse) => void): grpc.ClientUnaryCall;
    getInfo(request: auth_pb.GetInfoRequest, callback: (error: grpc.ServiceError | null, response: auth_pb.GetInfoResponse) => void): grpc.ClientUnaryCall;
    getInfo(request: auth_pb.GetInfoRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: auth_pb.GetInfoResponse) => void): grpc.ClientUnaryCall;
    getInfo(request: auth_pb.GetInfoRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: auth_pb.GetInfoResponse) => void): grpc.ClientUnaryCall;
    validate(request: auth_pb.ValidateRequest, callback: (error: grpc.ServiceError | null, response: auth_pb.ValidateResponse) => void): grpc.ClientUnaryCall;
    validate(request: auth_pb.ValidateRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: auth_pb.ValidateResponse) => void): grpc.ClientUnaryCall;
    validate(request: auth_pb.ValidateRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: auth_pb.ValidateResponse) => void): grpc.ClientUnaryCall;
}

export class AuthClient extends grpc.Client implements IAuthClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public login(request: auth_pb.LoginRequest, callback: (error: grpc.ServiceError | null, response: auth_pb.LoginResponse) => void): grpc.ClientUnaryCall;
    public login(request: auth_pb.LoginRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: auth_pb.LoginResponse) => void): grpc.ClientUnaryCall;
    public login(request: auth_pb.LoginRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: auth_pb.LoginResponse) => void): grpc.ClientUnaryCall;
    public getInfo(request: auth_pb.GetInfoRequest, callback: (error: grpc.ServiceError | null, response: auth_pb.GetInfoResponse) => void): grpc.ClientUnaryCall;
    public getInfo(request: auth_pb.GetInfoRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: auth_pb.GetInfoResponse) => void): grpc.ClientUnaryCall;
    public getInfo(request: auth_pb.GetInfoRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: auth_pb.GetInfoResponse) => void): grpc.ClientUnaryCall;
    public validate(request: auth_pb.ValidateRequest, callback: (error: grpc.ServiceError | null, response: auth_pb.ValidateResponse) => void): grpc.ClientUnaryCall;
    public validate(request: auth_pb.ValidateRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: auth_pb.ValidateResponse) => void): grpc.ClientUnaryCall;
    public validate(request: auth_pb.ValidateRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: auth_pb.ValidateResponse) => void): grpc.ClientUnaryCall;
}
