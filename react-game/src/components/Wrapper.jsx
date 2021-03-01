import React, { useState } from 'react'
import Board from './GameBoard'
import { Layout, Switch, Modal } from 'antd';
import "antd/dist/antd.css";
import { AudioMutedOutlined, AudioOutlined } from '@ant-design/icons';
import logo from '../utils/img/rs_school_js.svg';
import ghImg from '../utils/img/GitHub-Mark.png';

const { Header, Content, Footer } = Layout;

const Wrapper = () => {
  const [counter, setCounter] = useState(0);

  return (
    <Layout className="layout">
      <Header className="header" style={{background: '#daebe8'}}>
        <h1>Memory Game</h1>
        <h3>Counter: {counter} </h3>
        <Switch
          checkedChildren={<AudioOutlined />}
          unCheckedChildren={<AudioMutedOutlined />}
          defaultChecked
          onChange={() => console.log('click')}
        />
      </Header>
      <Content className="site-layout" style={{background: '#cfe0e8'}}>
        <Board counter={counter} setCounter={setCounter} />
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
