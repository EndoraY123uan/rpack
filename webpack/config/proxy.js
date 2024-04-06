/*
 * @Author: jinzi.yuan
 * @description: $1
 * @Date: 2020-10-27 16:20:04
 * @LastEditors: jinzi.yuan
 * @LastEditTime: 2020-11-20 15:01:49
 * @FilePath: \rpack\webpack\config\proxy.js
 */
const { MOCK_ENV = "local", PORT = "3000" } = process.env;

const domains = {
  local: {
    api: `http://localhost:3000`,
    apiTarget: "/",
  },
  dev: {
    api: `http://localhost:${PORT}`,
    apiTarget: "/api",
  },
  qa: {
    api: `http://localhost:${PORT}`,
    apiTarget: "/api",
  },
  pl: {
    api: `http://localhost:${PORT}`,
    apiTarget: "/api",
  },
  online: {
    api: `http://localhost:${PORT}`,
    apiTarget: "/api",
  },
};

const domain = domains[MOCK_ENV];

module.exports = {
  MOCK_ENV,
  PORT,
  proxy: {
    "/api/": {
      target: domain.api,
      changeOrigin: true,
      pathRewrite: {
        "^/api": domain.apiTarget,
      },
    },
  },
};
