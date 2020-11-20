/*
 * @Author: jinzi.yuan
 * @description: $1
 * @Date: 2020-11-19 18:38:25
 * @LastEditors: jinzi.yuan
 * @LastEditTime: 2020-11-19 18:39:45
 * @FilePath: \rpack\src\__tests__\index.test.ts
 */
const add = (a: number, b: number) => {
  return a + b;
};

describe("fn", () => {
  it("add", () => {
    expect(add(1, 2)).toBe(3);
  });
});
