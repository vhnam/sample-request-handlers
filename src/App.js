import React from 'react';
import {Provider} from 'react-redux';
import {Layout} from 'antd';

import store from './store/index';

import Header from './components/Header';

import Home from './scenes/Home';

import './App.css';

function App() {
  const {Footer, Content} = Layout;

  return (
    <Provider store={store()}>
      <Layout>
        <Header />
        <Content>
          <Home />
        </Content>
        <Footer />
      </Layout>
    </Provider>
  );
}

export default App;
