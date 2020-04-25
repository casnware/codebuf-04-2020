import React, { useContext, useState } from 'react';
import './homePage.scss';
import { Layout, Menu, Collapse, Button } from 'antd';
import { MenuOutlined, LeftOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { LanguageContext } from '../../context/LanguageContext';

const googleApi = process.env.GOOGLE_API_KEY;
const googleTranslate = require('google-translate')(googleApi);
const { Header, Footer, Sider, Content } = Layout;
const { Panel } = Collapse;
const { SubMenu } = Menu;

const HomePage = () => {
  const { currentLanguage } = useContext(LanguageContext);

  const [isOpen, toggleMenu] = useState(false);
  const questionGroupList = [
    'Store Info',
    'Pharmacy',
    'Home',
    'Eat In',
    'Common Questions'
  ];
  var storeInfo = 'Store Info';
  var pharmacy = 'Pharmacy';
  var home = 'Home';
  var eatIn = 'Eat In';
  var common = 'Common Questions';

  storeInfo = await translate.translate(text, target);
  googleTranslate.translate(storeInfo, LanguageContext, function(err, translation) {
                     storeInfo = translation;
                    });
  googleTranslate.translate(pharmacy, LanguageContext, function(err, translation) {
                       pharmacy = translation;
                      });
  googleTranslate.translate(home, LanguageContext, function(err, translation) {
                       home = translation;
                      });
  googleTranslate.translate(eatIn, LanguageContext, function(err, translation) {
                       eatIn = translation;
                      });
  googleTranslate.translate(common, LanguageContext, function(err, translation) {
                         common = translation;
                        });
  const openMenu = () => {
    toggleMenu(isOpen ? false : true);
  };

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
              <span className="nav-text">'${storeInfo}'</span>
            </Menu.Item>
            <Menu.Item key="2">
              <span className="nav-text">{pharmacy}</span>
            </Menu.Item>
            <Menu.Item key="3">
              <span className="nav-text">{home}</span>
            </Menu.Item>
            <Menu.Item key="4">
              <span className="nav-text">{eatIn}</span>
            </Menu.Item>
            <Menu.Item key="5">
              <span className="nav-text">{common}</span>
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
