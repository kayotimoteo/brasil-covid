import React from 'react';

import Header from './components/Header';
import Main from './components/Main';
import Box from './components/Box';
import Table from './components/Table';
import Footer from './components/Footer';

import './global.css';

function App() {
  
  return (
    <div className="flex-container">
      <div className="content">
        <Header title={"COVID-19 - BRASIL"}/>
        <Main>
          <Box/>
          <Table/>
        </Main>
      </div>
      <div className="footer1">
        <Footer/>
      </div>
    </div>
  );
}

export default App;
