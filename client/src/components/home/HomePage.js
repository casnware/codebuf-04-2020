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

 /* storeInfo = await translate.translate(text, target);
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
  };*/

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
              <Panel header="Hello! What can we help you with today?" key="1">
                <Collapse>
                  <Panel header="Did you find everything you are looking for today?" key="1">
                    <p><button>Yes</button><button>No</button></p>
                  </Panel>
                  <Panel header="Would you like to return an item?" key="2">
                    <p><button>Yes</button><button>No</button></p>
                  </Panel>
                  <Panel header="This is panel header 3" key="3">
                    <p><button>Yes</button><button>No</button></p>
                  </Panel>
                </Collapse>
              </Panel>
              <Panel header="Where are the store departments?" key="2">
                <Collapse>
                  <Panel header="Where are the Frozen Isles?" key="1">
                    <p>Back Left Corner</p>
                  </Panel>
                  <Panel header="Where is the Bakery?" key="2">
                    <p>Front Right by the cash registers</p>
                  </Panel>
                  <Panel header="This is panel header 3" key="3">
                    <p>text</p>
                  </Panel>
                </Collapse>
              </Panel>
              <Panel header="What's the purpose of this app?" key="3">
                <Collapse>
                  <Panel header="The Purpose" key="1">
                    <p>Is to provide an enriched customer experience to the anyone who struggles to speak English. This app would have communication between customers on it and employees watching the server so it can flawlessly translate back and forth. Much faster than speaking into a phone and will give a buffer in the event of checking out which does become and issue when it is hard to return items you no longer want and/or are having a hard time understanding payment interactions. </p>
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
