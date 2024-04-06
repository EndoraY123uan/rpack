/*
 * @Author: jinzi.yuan
 * @description: 方法
 * @Date: 2020-11-20 11:18:09
 * @LastEditors: jinzi.yuan
 * @LastEditTime: 2020-11-24 11:29:07
 * @FilePath: \rpack\src\utils\request.ts
 */
import { message } from "antd";
import fetch from "isomorphic-fetch";

const request = (url: string, options?: object) => {
  if (!options) {
    return fetch(url).then((res) => {
      return res.json();
    });
  } else {
    return fetch(url, {
      body: JSON.stringify(options),
      method: "POST",
    }).then((res) => {
      return res.json();
    });
  }
};

export default request;
