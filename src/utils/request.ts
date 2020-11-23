/*
 * @Author: jinzi.yuan
 * @description: 方法
 * @Date: 2020-11-20 11:18:09
 * @LastEditors: jinzi.yuan
 * @LastEditTime: 2020-11-23 16:20:12
 * @FilePath: \rpack\src\utils\request.ts
 */
import { message } from "antd";
import fetch from 'isomorphic-fetch'

const request = (url: string, options?: object) => {
  if (!options) {
    return fetch(url).then((res) => {
      return res.json();
    });
    //   .then((jsonData) => {
    //     const { data, code, msg } = jsonData;
    //     if (code !== 0) {
    //       return message.error(msg);
    //     }
    //     return data;
    //   });
  } else {
    return fetch(url, {
      body: JSON.stringify(options),
      method: "POST",
    }).then((res) => {
      return res.json();
    });
    //   .then((jsonData) => {
    //     const { data, code, msg } = jsonData;
    //     if (code !== 0) {
    //       return message.error(msg);
    //     }
    //     return data;
    //   });
  }
};

export default request;
