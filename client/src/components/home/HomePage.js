import React, { useContext, useState } from 'react';
import './homePage.scss';
import { Layout, Menu, Collapse, Button } from 'antd';
import { MenuOutlined, LeftOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { LanguageContext } from '../../context/LanguageContext';

const { Header, Footer, Sider, Content } = Layout;
const { Panel } = Collapse;
const { SubMenu } = Menu;

const HomePage = () => {
  const { currentLanguage } = useContext(LanguageContext);
  console.log(currentLanguage);
  return (
    <div id="HomePageContainer">
      <Layout style={{ minHeight: '100vh' }}>
        <Sider
          style={{ backgroundColor: 'white' }}
          breakpoint="md"
          collapsedWidth="0"
        >
          <Menu mode="inline">
            <Menu.Item key="6">
              <Link to="/">
                <span className="nav-text">
                  <LeftOutlined />
                  Choose a Language
                </span>
              </Link>
            </Menu.Item>
            <Menu.Item key="1">
              <span className="nav-text">Store Info</span>
            </Menu.Item>
            <Menu.Item key="2">
              <span className="nav-text">Pharmacy</span>
            </Menu.Item>
            <Menu.Item key="3">
              <span className="nav-text">Home</span>
            </Menu.Item>
            <Menu.Item key="4">
              <span className="nav-text">Eat In</span>
            </Menu.Item>
            <Menu.Item key="5">
              <span className="nav-text">Common Questions</span>
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
          </Content>
          <Footer style={{ textAlign: 'center' }}>Trazzle ©2020</Footer>
        </Layout>
      </Layout>
    </div>
  );
};
export default HomePage;
