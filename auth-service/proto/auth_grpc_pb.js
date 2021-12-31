// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var auth_pb = require('./auth_pb.js');

function serialize_auth_GetInfoRequest(arg) {
  if (!(arg instanceof auth_pb.GetInfoRequest)) {
    throw new Error('Expected argument of type auth.GetInfoRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_auth_GetInfoRequest(buffer_arg) {
  return auth_pb.GetInfoRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_auth_GetInfoResponse(arg) {
  if (!(arg instanceof auth_pb.GetInfoResponse)) {
    throw new Error('Expected argument of type auth.GetInfoResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_auth_GetInfoResponse(buffer_arg) {
  return auth_pb.GetInfoResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_auth_LoginRequest(arg) {
  if (!(arg instanceof auth_pb.LoginRequest)) {
    throw new Error('Expected argument of type auth.LoginRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_auth_LoginRequest(buffer_arg) {
  return auth_pb.LoginRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_auth_LoginResponse(arg) {
  if (!(arg instanceof auth_pb.LoginResponse)) {
    throw new Error('Expected argument of type auth.LoginResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_auth_LoginResponse(buffer_arg) {
  return auth_pb.LoginResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_auth_ValidateRequest(arg) {
  if (!(arg instanceof auth_pb.ValidateRequest)) {
    throw new Error('Expected argument of type auth.ValidateRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_auth_ValidateRequest(buffer_arg) {
  return auth_pb.ValidateRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_auth_ValidateResponse(arg) {
  if (!(arg instanceof auth_pb.ValidateResponse)) {
    throw new Error('Expected argument of type auth.ValidateResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_auth_ValidateResponse(buffer_arg) {
  return auth_pb.ValidateResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var AuthService = exports.AuthService = {
  login: {
    path: '/auth.Auth/Login',
    requestStream: false,
    responseStream: false,
    requestType: auth_pb.LoginRequest,
    responseType: auth_pb.LoginResponse,
    requestSerialize: serialize_auth_LoginRequest,
    requestDeserialize: deserialize_auth_LoginRequest,
    responseSerialize: serialize_auth_LoginResponse,
    responseDeserialize: deserialize_auth_LoginResponse,
  },
  getInfo: {
    path: '/auth.Auth/GetInfo',
    requestStream: false,
    responseStream: false,
    requestType: auth_pb.GetInfoRequest,
    responseType: auth_pb.GetInfoResponse,
    requestSerialize: serialize_auth_GetInfoRequest,
    requestDeserialize: deserialize_auth_GetInfoRequest,
    responseSerialize: serialize_auth_GetInfoResponse,
    responseDeserialize: deserialize_auth_GetInfoResponse,
  },
  validate: {
    path: '/auth.Auth/Validate',
    requestStream: false,
    responseStream: false,
    requestType: auth_pb.ValidateRequest,
    responseType: auth_pb.ValidateResponse,
    requestSerialize: serialize_auth_ValidateRequest,
    requestDeserialize: deserialize_auth_ValidateRequest,
    responseSerialize: serialize_auth_ValidateResponse,
    responseDeserialize: deserialize_auth_ValidateResponse,
  },
};

exports.AuthClient = grpc.makeGenericClientConstructor(AuthService);
