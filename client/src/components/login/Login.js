import React, { useState } from 'react';
import './login.scss';
import { Row, Col, Layout, Button, Form, Input } from 'antd';
import { Link } from 'react-router-dom';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
const { Header, Footer, Sider, Content } = Layout;

const Login = () => {
  return (
    <div id="loginContainer">
      <Layout>
        <Row justify="center" align="middle" style={{ height: '100vh' }}>
          <Col span={6}>
            <Content>
              <Form
                name="normal_login"
                className="login-form"
                initialValues={{ remember: true }}
                // onFinish={onFinish}
              >
                <Form.Item
                  name="username"
                  rules={[
                    { required: true, message: 'Please input your Username!' },
                  ]}
                >
                  <Input
                    prefix={<UserOutlined className="site-form-item-icon" />}
                    placeholder="Username"
                  />
                </Form.Item>
                <Form.Item
                  name="password"
                  rules={[
                    { required: true, message: 'Please input your Password!' },
                  ]}
                >
                  <Input
                    prefix={<LockOutlined className="site-form-item-icon" />}
                    type="password"
                    placeholder="Password"
                  />
                </Form.Item>
                <Form.Item>
                  <Button
                    type="primary"
                    htmlType="submit"
                    className="login-form-button"
                    style={{ width: '100%' }}
                  >
                    Log in
                  </Button>
                </Form.Item>
              </Form>
            </Content>
          </Col>
        </Row>
      </Layout>
    </div>
  );
};
export default Login;
