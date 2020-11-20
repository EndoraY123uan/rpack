import React from "react";
import { Form, Input, Button, Checkbox } from "antd";

import request from "@/utils/request";

import styles from "./index.less";

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

const Two2 = () => {
  const onFinish = (values: any) => {
    console.log(
      "%c 🍓 values: ",
      "font-size:20px;background-color: #E41A6A;color:#fff;",
      values
    );
    request("/api/login", values).then((data) => {
      console.log(
        "%c 🥞 data: ",
        "font-size:20px;background-color: #FFDD4D;color:#fff;",
        data
      );
    });
  };

  const onFinishFailed = (errorInfo: any) => {};

  return (
    <Form
      {...layout}
      name="basic"
      className={styles.login}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <h1>登录框</h1>
      <Form.Item
        label="Username"
        name="username"
        rules={[{ required: true, message: "Please input your username!" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, message: "Please input your password!" }]}
      >
        <Input.Password />
      </Form.Item>

      {/* <Form.Item {...tailLayout} name="remember" valuePropName="checked">
        <Checkbox>Remember me</Checkbox>
      </Form.Item> */}

      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit">
          登录
        </Button>
      </Form.Item>
    </Form>
  );
};

export default Two2;
