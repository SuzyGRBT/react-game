import React from 'react'
import useSound from 'use-sound'
import Board from './GameBoard'
import { Layout, Switch } from 'antd';
import "antd/dist/antd.css";
import { AudioMutedOutlined, AudioOutlined } from '@ant-design/icons';
import logo from '../utils/img/rs_school_js.svg';
import ghImg from '../utils/img/GitHub-Mark.png';

const { Header, Content, Footer } = Layout;

const Wrapper = () => {

  const [soundEnable] = useSound(
     { soundEnabled: false }
);
  function onChange(checked) {
    if(checked) {
      soundEnable();
    }
  }

  return (
    <Layout className="layout">
      <Header className="header" style={{background: '#daebe8'}}>
        <h1>Memory Game</h1>
        <Switch style={{marginLeft: '30%' }}
          checkedChildren={<AudioOutlined />}
          unCheckedChildren={<AudioMutedOutlined />}
          defaultChecked 
          onChange={onChange}
        />
      </Header>
      <Content className="site-layout" style={{background: '#cfe0e8'}}>
        <Board />
      </Content>
      <Footer className="footer">
        <a href="https://github.com/SuzyGRBT" target="_blank" rel="noreferrer" className="footer-item">
          <img src={ghImg} alt="Suzanna" height="30px" width="30px" />
        </a>
        <p className="footer-item">2020</p>
        <a href="https://rs.school/js/" target="_blank" rel="noreferrer" className="footer-item">
          <img src={logo} alt="rs-school" height="30px" width="60px" />
        </a>
      </Footer>
    </Layout>
  );
}

export default Wrapper;
