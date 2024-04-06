/*
 * @Author: jinzi.yuan
 * @description: 一半函数
 * @Date: 2020-11-19 18:38:25
 * @LastEditors: jinzi.yuan
 * @LastEditTime: 2020-11-24 17:28:40
 * @FilePath: \rpack\src\__tests__\normal.test.ts
 */

const add = (a: number, b: number) => {
  return a + b;
};

describe("normal fn", () => {
  test("add", () => {
    expect(add(1, 2)).toBe(3);
  });

  test(" 判断相等 ", () => {
    expect(1).toBe(1);

    // 基本数值
    //  expect([1]).toBe([1])
    expect([1]).toEqual([1]);

    // 复杂类型
    //  expect({ name: "yuan" }).toBe({ name: "yuan" });
    expect({ name: "yuan" }).toEqual({ name: "yuan" });

    // 浮点数判断
    const value = 0.1 + 0.2
    //expect(value).toBe(0.3)
    expect(value).toBeCloseTo(0.3)
    
  });
});
