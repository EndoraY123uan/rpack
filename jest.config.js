/*
 * @Author: jinzi.yuan
 * @description: jest配置文件
 * @Date: 2020-11-18 17:26:11
 * @LastEditors: jinzi.yuan
 * @LastEditTime: 2020-11-24 11:22:15
 * @FilePath: \rpack\jest.config.js
 */

const path = require("path");

module.exports = {
  // transform: {
  //   "^.+\\.tsx?$": "babel-jest",
  // },
  rootDir: path.resolve(__dirname, "src"),
  testMatch: [
    "<rootDir>/**/__tests__/**/*.{js,jsx,ts,tsx}",
    //  "<rootDir>/**/*.{spec,test}.{js,jsx,ts,tsx}",
  ],
  coverageDirectory: "<rootDir>/test-results/",
  testPathIgnorePatterns: ["<rootDir>/node_modules/"],
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  globals: {
    "ts-jest": {
      tsConfigFile: "./tsconfig.test.json",
    },
  },
  moduleNameMapper: {
    "\\.(less)$": "identity-obj-proxy",
    "@/(.*)$": "<rootDir>/$1",
    //"@/":"<rootDir>/"
  },
  // testRegex:['two2.test.tsx']
  setupFiles: ["<rootDir>/enzyme-setup.ts"],
};
