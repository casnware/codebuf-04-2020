import React, { useContext } from 'react';
import './landingPage.scss';
import { List, Row, Col, Layout, Button } from 'antd';
import { RightOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { LanguageContext } from '../../context/LanguageContext';
const { Footer, Content } = Layout;

const LandingPage = () => {
  const { setLanguage } = useContext(LanguageContext);
  const languageList = [
    'English',
    'Russian',
    'Ukranian',
    'Italian',
    'Spanish',
    'French',
    'German',
  ];
  return (
    <div id="landingPageContainer">
      <Layout>
        <Content style={{ backgroundColor: 'white' }}>
          <Row>
            <Col sm={{ span: 0 }} lg={{ span: 8 }}></Col>
            <Col sm={{ span: 24 }} lg={{ span: 8 }}>
              <div id="landingHeader">
                <h1>Wegmans</h1>
                <h3>Choose your base</h3>
                <h3>language</h3>
              </div>
              <div id="landingMenu">
                <List
                  itemLayout="horizontal"
                  dataSource={languageList}
                  renderItem={(item) => (
                    <Link
                      style={{ cursor: 'pointer' }}
                      to={'/home'}
                      onClick={() => {
                        setLanguage(item);
                      }}
                    >
                      <List.Item>
                        <List.Item.Meta description={`${item}`} />
                        <div>
                          <RightOutlined />
                        </div>
                      </List.Item>
                    </Link>
                  )}
                />
              </div>
            </Col>
          </Row>
        </Content>
        <Footer style={{ backgroundColor: 'white', textAlign: 'center' }}>
          <span>
            Part of the team? <Link to="/login">Login</Link>
          </span>
        </Footer>
      </Layout>
    </div>
  );
};
export default LandingPage;
