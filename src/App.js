import React from 'react';
import {Routes, Route } from 'react-router-dom';
import { Layout, Typography, Space } from 'antd';
// import Navbar from './components/Navbar';
import { Navbar, Exchanges, Cryptocurrencies  , Homepage, CryptoDetails,News } from './components';
import './App.css';
// import '~ntd/dist/reset.css';


const App = () => {
  return (
    <div className='app'>
        <div className='navbar'>
            <Navbar/>
        </div>
        <div className='main'>
            <Layout>
              <div className='routes'>
                <Routes>
                  <Route exact path ="/"  element={<Homepage />}/>
                  <Route exact path ="/exchanges"  element={<Exchanges />}/>
                  <Route exact path ="/cryptocurrencies"  element={<Cryptocurrencies />}/>
                  <Route exact path ="/news"  element={<News />}/>
                  <Route exact path ="/crypto/:coinId"  element={<CryptoDetails />}/>
                  <Route exact path ="/"  element={<Homepage />}/>
                </Routes>    
                  {/* <Route exact path ="/exchanges">
                      <Exchanges/>
                  </Route>
                  <Route exact path ="/cryptocurriences">
                      <Cryptocurriences/>
                  </Route>
                  <Route exact path ="/crypto/:coinId">
                      <CryptoDetails/>
                  </Route>
                  <Route exact path ="/news">
                      <News/>
                  </Route> */}
               

              </div>
            </Layout>
        </div>
        <div className='footer'>

        </div>
    </div>
  );
}

export default App