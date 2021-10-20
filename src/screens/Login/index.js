import React from "react";
import { Button, Card, Form, Input, notification } from "antd";

const { Item } = Form;

const LoginForm = () => {
  const [form] = Form.useForm();
  const onFinish = ({ username }) => {
    notification.open({
      message: "connected successfully",
      description: `Hello back ${username}`,
    });
  };

  return (
    <div className="container">
      <Card title="Login Form">
        <Form form={form} onFinish={onFinish}>
          <Item rules={[{ required: true }]} label="Username" name="username">
            <Input size="large" />
          </Item>
          <Item rules={[{ required: true }]} label="Password" name="password">
            <Input size="large" />
          </Item>
          <Button type="primary" htmlType="submit">
            Se connecter
          </Button>
        </Form>
      </Card>
    </div>
  );
};

export default LoginForm;
