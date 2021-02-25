import React from 'react'
import Board from './components/GameBoard'
import { Layout } from 'antd';
import logo from './img/rs_school_js.svg';
import ghImg from './img/GitHub-Mark.png';

const { Header, Content, Footer } = Layout;

const App = () => {

  return (
    <Layout className="layout">
      <Header className="header">
        <h1>Memory Game</h1>
      </Header>
      <Content className="site-layout">
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

export default App;
