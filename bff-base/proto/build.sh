#!/bin/sh

PROTO_DIR="./proto"

# Running on Win
# PROTOC_GEN_TS_PATH="C:/Users/admin/Desktop/bff-auth/bff-base/node_modules/.bin/protoc-gen-ts.cmd"
# GRPC_TOOLS_NODE_PROTOC_PLUGIN="C:/Users/admin/Desktop/bff-auth/bff-base/node_modules/.bin/grpc_tools_node_protoc_plugin.cmd"
# GRPC_TOOLS_NODE_PROTOC="C:/Users/admin/Desktop/bff-auth/bff-base/node_modules/.bin/grpc_tools_node_protoc.cmd"

PROTOC_GEN_TS_PATH="./node_modules/.bin/protoc-gen-ts"
GRPC_TOOLS_NODE_PROTOC_PLUGIN="./node_modules/.bin/grpc_tools_node_protoc_plugin"
GRPC_TOOLS_NODE_PROTOC="./node_modules/.bin/grpc_tools_node_protoc"

${GRPC_TOOLS_NODE_PROTOC} \
      --js_out=import_style=commonjs,binary:"${PROTO_DIR}" \
      --grpc_out="${PROTO_DIR}" \
      --plugin=protoc-gen-grpc="${GRPC_TOOLS_NODE_PROTOC_PLUGIN}" \
      -I "${PROTO_DIR}" \
      "${PROTO_DIR}"/*.proto

  ${GRPC_TOOLS_NODE_PROTOC} \
      --plugin=protoc-gen-ts="${PROTOC_GEN_TS_PATH}" \
      --ts_out="${PROTO_DIR}" \
      -I "${PROTO_DIR}" \
      "${PROTO_DIR}"/*.proto