/*
 * @Author: jinzi.yuan
 * @description: $1
 * @Date: 2020-11-19 18:38:25
 * @LastEditors: jinzi.yuan
 * @LastEditTime: 2020-11-24 18:21:08
 * @FilePath: \rpack\src\__tests__\async.test.ts
 */
import request from "@/utils/request";
import fetch from "isomorphic-fetch";

const righrUrl = "http://localhost:3000/test";
const failUrl = "http://localhost:3000/test1";

// callback 回调
const asyncFun = (fn: Function) => {
  fetch(righrUrl)
    .then((data) => {
      return data.json();
    })
    .then((data) => {
      fn(data);
    });
};

// promise  回调
const asyncTwoFun = (fn: Function) => {
  request(righrUrl).then((data) => {
    fn(data);
  });
};

//promise
const asyncPromise = (url: string) => {
  return request(url);
};

// async await
const awaitFn = (url: string) => {
  return request(url);
};

describe("async", () => {
  let test = "test";
  beforeAll(() => {
    console.log("这是父级 集合", test);
  });

  describe("solve async callback", () => {
    beforeAll(() => {
      console.log("这是子集 1", test);
    });

    // 使用正常异步请求方法
    // it("normal async fn", (done) => {
    //   asyncFun((data: any) => {
    //     expect(data.message).toBe("ok"); // 异步问题 永远通过 即使url不存在;
    //     done();
    //   });
    // });

    it("normal async", () => {
      asyncFun((data: any) => {
        expect(data.message).toBe("okry"); // 异步问题 永远通过 即使url不存在
      });
    });

    // 使用promise解决回调
    //   it("promise fn", () => {
    //     asyncTwoFun((data: any) => {
    //       expect(data.message).toBe("ok"); // 测试正常
    //     });
    //   });
  });

  // describe("async solutions", () => {
  //   beforeAll(() => {
  //     console.log("这是子集 2", test);
  //   });

  //   it("promise", () => {
  //     // asyncPromise(failUrl).then((data) => {
  //     //   // 还是会通过 不走then
  //     //   expect(data).toEqual({
  //     //     message: "okr",
  //     //   });
  //     // });

  //     expect.assertions(1);

  //     // expect(asyncPromise(failUrl)).rejects.toEqual({
  //     //   FetchError:
  //     //     "......",
  //     // });

  //     return expect(asyncPromise(righrUrl)).resolves.toEqual({
  //       message: "ok",
  //     }); // 必须使用 return 返回 否则报错
  //   });

  //   it("async await ", async () => {
  //     await expect(awaitFn(righrUrl)).resolves.toEqual({
  //       message: "ok",
  //     });
  //   });
  // });
});
