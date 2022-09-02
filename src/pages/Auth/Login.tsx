import React from "react";
import { LockOutlined, MailOutlined } from "@ant-design/icons";
import { Button, Form, Input, message } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { authSelector, loginHandler } from "../../features/authSlice";

const Login = () => {
  const dispatch = useAppDispatch();
  const auth = useAppSelector(authSelector);
  const navigate = useNavigate();

  const onFinish = async (values: { email: string; password: string }) => {
    dispatch(loginHandler(values));
  };

  if (auth.user !== null) {
    message.success("Login success");
    navigate("/");
  }

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="my-4 cursor-pointer" onClick={() => navigate("/landing")}>
        <img src="images/vertical-lg.png" alt="" />
      </div>
      <p className="font-light mb-8">Ghi nhớ mọi thứ quan trọng.</p>
      <Form
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 24 }}
        autoComplete="off"
        onFinish={onFinish}
      >
        <Form.Item name="email">
          <Input
            prefix={<MailOutlined className="site-form-item-icon" />}
            placeholder="Email"
          />
        </Form.Item>
        <Form.Item name="password">
          <Input.Password
            prefix={<LockOutlined className="site-form-item-icon" />}
            placeholder="Mật khẩu"
          />
        </Form.Item>
        <Form.Item wrapperCol={{ span: 24 }}>
          <Button
            type="primary"
            htmlType="submit"
            className="w-full my-2 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            loading={auth.loading}
          >
            Đăng nhập
          </Button>
        </Form.Item>
      </Form>
      <div className="font-light">
        <p>
          Chưa có tài khoản?{" "}
          <Link className="text-green-600 font" to="/signup">
            Đăng kí
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
