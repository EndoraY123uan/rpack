/*
 * @Author: jinzi.yuan
 * @description: $1
 * @Date: 2020-11-19 18:38:25
 * @LastEditors: jinzi.yuan
 * @LastEditTime: 2020-11-23 18:50:51
 * @FilePath: \rpack\src\__tests__\async.test.ts
 */
import request from "@/utils/request";
import fetch from "isomorphic-fetch";

const righrUrl = "http://localhost:3000/test";
const failUrl = "http://localhost:3000/test1";

// 正常异步请求
const asyncFun = (fn: Function) => {
  fetch(righrUrl)
    .then((data) => {
      return data.json();
    })
    .then((data) => {
      fn(data);
    });
};

// promise请求1
const asyncTwoFun = (fn: Function) => {
  request(righrUrl).then((data) => {
    fn(data);
  });
};

//promise请求2
const asyncPromise = (url: string) => {
  return request(url);
};

// async await
const awaitFn = (url: string) => {
  return request(url);
};

describe("async", () => {
  //   it("normal async fn", () => {
  //     asyncFun((data: any) => {
  //       expect(data.message).toBe("okr"); // 异步问题 永远通过 即使url不存在;
  //     });
  //   });

  //   it("promise fn", () => {
  //     asyncTwoFun((data: any) => {
  //       expect(data.message).toBe("ok"); // 正常
  //     });
  //   });

  it("promise then 1", () => {
    asyncPromise(failUrl).then((data) => {
      // 还是会通过 不走then
      expect(data).toEqual({
        message: "okr",
      });
    });

    // expect(asyncPromise(righrUrl)).resolves.toEqual({
    //   message: "ok",
    // });

    expect(asyncPromise(failUrl)).rejects.toEqual({
      message: "ok",
    });
  });

  //   it("async await ", async () => {
  //     return await expect(awaitFn(righrUrl)).resolves.toEqual({
  //       message: "ok",
  //     });
  //     // asyncPromise("http://localhost:3000/promise").then((data) => {
  //     //   expect(data).toEqual({
  //     //     message: "okr",
  //     //   });
  //     // });
  //   });

  // it("promise fail", () => {
  //   expect.assertions(1)
  //   asyncPromise("http://localhost:3000/promise").catch((e) => {
  //     expect(e.toString().indexOf("404") > -1).toBeFalsy();
  //   });
  // });
});
