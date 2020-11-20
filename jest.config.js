/*
 * @Author: jinzi.yuan
 * @description: jest配置文件
 * @Date: 2020-11-18 17:26:11
 * @LastEditors: jinzi.yuan
 * @LastEditTime: 2020-11-20 10:56:39
 * @FilePath: \rpack\jest.config.js
 */
module.exports = {
  transform: {
    "^.+\\.tsx?$": "babel-jest",
  },
  rootDir: "./src",
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
    "@/(.*)$": "<rootDir>/$",
  },
  // testRegex:['two2.test.tsx']
  setupFiles: ["<rootDir>/enzyme-setup.ts"],
};
