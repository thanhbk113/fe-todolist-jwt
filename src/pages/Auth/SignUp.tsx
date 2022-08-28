import React from "react";
import { LockOutlined, UserOutlined, MailOutlined } from "@ant-design/icons";
import { Button, Form, Input } from "antd";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="my-4">
        <img src="images/vertical-lg.png" alt="" />
      </div>
      <p className="font-light mb-8">Ghi nhớ mọi thứ quan trọng.</p>
      <Form labelCol={{ span: 8 }} wrapperCol={{ span: 24 }} autoComplete="off">
        <Form.Item
          name="username"
          rules={[
            {
              required: true,
              message: "Vui lòng điền tên đăng nhập!",
              whitespace: true,
              min: 2,
            },
          ]}
          hasFeedback
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="Tên đăng nhập"
          />
        </Form.Item>
        <Form.Item
          name="email"
          rules={[
            {
              required: true,
              message: "Vui lòng điền email!",
              whitespace: true,
            },
            {
              type: "email",
              message: "Email không hợp lệ!",
            },
          ]}
          hasFeedback
        >
          <Input
            prefix={<MailOutlined className="site-form-item-icon" />}
            placeholder="Email"
          />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: "Vui lòng nhập mật khẩu!",
              min: 6,
            },
          ]}
          hasFeedback
        >
          <Input.Password
            prefix={<LockOutlined className="site-form-item-icon" />}
            placeholder="Mật khẩu"
          />
        </Form.Item>
        <Form.Item
          name="confirmpassword"
          rules={[
            {
              required: true,
              message: "Vui lòng nhập mật khẩu!",
              min: 6,
            },
            ({ getFieldValue }) => ({
              validator(rule, value) {
                if (!value || getFieldValue("password") === value) {
                  return Promise.resolve();
                }
                return Promise.reject("Mật khẩu không khớp!");
              },
            }),
          ]}
          hasFeedback
        >
          <Input.Password
            prefix={<LockOutlined className="site-form-item-icon" />}
            placeholder="Xác nhận mật khẩu"
          />
        </Form.Item>
        <Form.Item wrapperCol={{ span: 24 }}>
          <Button
            type="primary"
            htmlType="submit"
            className="w-full my-2 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Đăng ký
          </Button>
        </Form.Item>
      </Form>
      <div className="font-light">
        <p>
          Already have an account?{" "}
          <Link className="text-green-600 font" to="/login">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
