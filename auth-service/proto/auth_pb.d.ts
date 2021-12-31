// package: auth
// file: auth.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class LoginRequest extends jspb.Message { 
    getEmail(): string;
    setEmail(value: string): LoginRequest;
    getPassword(): string;
    setPassword(value: string): LoginRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): LoginRequest.AsObject;
    static toObject(includeInstance: boolean, msg: LoginRequest): LoginRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: LoginRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): LoginRequest;
    static deserializeBinaryFromReader(message: LoginRequest, reader: jspb.BinaryReader): LoginRequest;
}

export namespace LoginRequest {
    export type AsObject = {
        email: string,
        password: string,
    }
}

export class LoginResponse extends jspb.Message { 

    hasId(): boolean;
    clearId(): void;
    getId(): string | undefined;
    setId(value: string): LoginResponse;

    hasEmail(): boolean;
    clearEmail(): void;
    getEmail(): string | undefined;
    setEmail(value: string): LoginResponse;

    hasJwt(): boolean;
    clearJwt(): void;
    getJwt(): string | undefined;
    setJwt(value: string): LoginResponse;

    hasError(): boolean;
    clearError(): void;
    getError(): string | undefined;
    setError(value: string): LoginResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): LoginResponse.AsObject;
    static toObject(includeInstance: boolean, msg: LoginResponse): LoginResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: LoginResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): LoginResponse;
    static deserializeBinaryFromReader(message: LoginResponse, reader: jspb.BinaryReader): LoginResponse;
}

export namespace LoginResponse {
    export type AsObject = {
        id?: string,
        email?: string,
        jwt?: string,
        error?: string,
    }
}

export class GetInfoRequest extends jspb.Message { 
    getToken(): string;
    setToken(value: string): GetInfoRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetInfoRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetInfoRequest): GetInfoRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetInfoRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetInfoRequest;
    static deserializeBinaryFromReader(message: GetInfoRequest, reader: jspb.BinaryReader): GetInfoRequest;
}

export namespace GetInfoRequest {
    export type AsObject = {
        token: string,
    }
}

export class GetInfoResponse extends jspb.Message { 

    hasDepartment(): boolean;
    clearDepartment(): void;
    getDepartment(): string | undefined;
    setDepartment(value: string): GetInfoResponse;

    hasAccountid(): boolean;
    clearAccountid(): void;
    getAccountid(): number | undefined;
    setAccountid(value: number): GetInfoResponse;

    hasName(): boolean;
    clearName(): void;
    getName(): string | undefined;
    setName(value: string): GetInfoResponse;

    hasError(): boolean;
    clearError(): void;
    getError(): string | undefined;
    setError(value: string): GetInfoResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetInfoResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetInfoResponse): GetInfoResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetInfoResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetInfoResponse;
    static deserializeBinaryFromReader(message: GetInfoResponse, reader: jspb.BinaryReader): GetInfoResponse;
}

export namespace GetInfoResponse {
    export type AsObject = {
        department?: string,
        accountid?: number,
        name?: string,
        error?: string,
    }
}

export class ValidateRequest extends jspb.Message { 
    getToken(): string;
    setToken(value: string): ValidateRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ValidateRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ValidateRequest): ValidateRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ValidateRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ValidateRequest;
    static deserializeBinaryFromReader(message: ValidateRequest, reader: jspb.BinaryReader): ValidateRequest;
}

export namespace ValidateRequest {
    export type AsObject = {
        token: string,
    }
}

export class ValidateResponse extends jspb.Message { 

    hasAccountid(): boolean;
    clearAccountid(): void;
    getAccountid(): number | undefined;
    setAccountid(value: number): ValidateResponse;

    hasIsadmin(): boolean;
    clearIsadmin(): void;
    getIsadmin(): number | undefined;
    setIsadmin(value: number): ValidateResponse;

    hasError(): boolean;
    clearError(): void;
    getError(): string | undefined;
    setError(value: string): ValidateResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ValidateResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ValidateResponse): ValidateResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ValidateResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ValidateResponse;
    static deserializeBinaryFromReader(message: ValidateResponse, reader: jspb.BinaryReader): ValidateResponse;
}

export namespace ValidateResponse {
    export type AsObject = {
        accountid?: number,
        isadmin?: number,
        error?: string,
    }
}
