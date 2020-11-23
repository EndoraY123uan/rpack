/*
 * @Author: jinzi.yuan
 * @description: 一半函数
 * @Date: 2020-11-19 18:38:25
 * @LastEditors: jinzi.yuan
 * @LastEditTime: 2020-11-23 18:48:37
 * @FilePath: \rpack\src\__tests__\normall.test.ts
 */

const add = (a: number, b: number) => {
  return a + b;
};

describe("normal fn", () => {
  test("add", () => {
    expect(add(1, 2)).toBe(3);
  });
});
