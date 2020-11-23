import React from "react";
import { shallow, mount, render } from "enzyme";
import Two2 from "../pages/two2";

const wrapper = shallow(<Two2 />);

describe("two2 dom", () => {
  test("Item", () => {
    expect(wrapper.at(0).contains("登录框")).toBe(true);
  });
  // it("登录", () => {
  //   //wrapper.simulate("click");
  // });
});
