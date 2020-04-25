import React, { useContext, useState } from 'react';
import './accountPage.scss';
import { LanguageContext } from '../../context/LanguageContext';
import { Layout, Menu, Collapse, Button, Row, Col, Form, Input } from 'antd';
import { MenuOutlined, LeftOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

const { Header, Footer, Sider, Content } = Layout;
const { Panel } = Collapse;
const { TextArea } = Input;

const AccountPage = () => {
  const { currentLanguage } = useContext(LanguageContext);

  return (
    <div id="accountPageContainer">
      <Layout style={{ minHeight: '100vh' }}>
        <Sider
          style={{ backgroundColor: 'white' }}
          breakpoint="md"
          collapsedWidth="0"
        >
          <Menu mode="inline">
            <Menu.Item key="1">
              <Link to="/">
                <span className="nav-text">
                  <LeftOutlined />
                  Log out
                </span>
              </Link>
            </Menu.Item>
            <Menu.Item key="2">
              <span className="nav-text">Questions</span>
            </Menu.Item>
            <Menu.Item key="3">
              <span className="nav-text">Create</span>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Content
            style={{
              margin: '24px 16px 0',
              backgroundColor: 'white',
              padding: '2rem',
            }}
          >
            <div id="questions" style={{ display: 'none' }}>
              <Collapse>
                <Panel header="This is panel header 1" key="1">
                  <Collapse>
                    <Panel header="This is panel header 1" key="1">
                      <p>text</p>
                    </Panel>
                    <Panel header="This is panel header 2" key="2">
                      <p>text</p>
                    </Panel>
                    <Panel header="This is panel header 3" key="3">
                      <p>text</p>
                    </Panel>
                  </Collapse>
                </Panel>
                <Panel header="This is panel header 2" key="2">
                  <Collapse>
                    <Panel header="This is panel header 1" key="1">
                      <p>text</p>
                    </Panel>
                    <Panel header="This is panel header 2" key="2">
                      <p>text</p>
                    </Panel>
                    <Panel header="This is panel header 3" key="3">
                      <p>text</p>
                    </Panel>
                  </Collapse>
                </Panel>
                <Panel header="This is panel header 3" key="3">
                  <Collapse>
                    <Panel header="This is panel header 1" key="1">
                      <p>text</p>
                    </Panel>
                    <Panel header="This is panel header 2" key="2">
                      <p>text</p>
                    </Panel>
                    <Panel header="This is panel header 3" key="3">
                      <p>text</p>
                    </Panel>
                  </Collapse>
                </Panel>
                <Panel header="This is panel header 4" key="4">
                  <Collapse>
                    <Panel header="This is panel header 1" key="1">
                      <p>text</p>
                    </Panel>
                    <Panel header="This is panel header 2" key="2">
                      <p>text</p>
                    </Panel>
                    <Panel header="This is panel header 3" key="3">
                      <p>text</p>
                    </Panel>
                  </Collapse>
                </Panel>
              </Collapse>
            </div>
            <div id="createForm">
              <Row justify="center" align="middle">
                <Col span={6}>
                  <Content>
                    <Form
                      name="normal_login"
                      className="login-form"
                      initialValues={{ remember: true }}
                      // onFinish={onFinish}
                    >
                      <Form.Item
                        name="category"
                        rules={[
                          {
                            required: true,
                            message: 'Please input your Category Type!',
                          },
                        ]}
                      >
                        <Input placeholder="Category" />
                      </Form.Item>
                      <Form.Item
                        name="title"
                        rules={[
                          {
                            required: true,
                            message: 'Please input your Question Title!',
                          },
                        ]}
                      >
                        <Input placeholder="Question title" />
                      </Form.Item>
                      <Form.Item
                        name="answer"
                        rules={[
                          {
                            required: true,
                            message: 'Please input your Answer!',
                          },
                        ]}
                      >
                        <TextArea placeholder="Answer..." rows={4} />
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
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>Trazzle ©2020</Footer>
        </Layout>
      </Layout>
    </div>
  );
};
export default AccountPage;
