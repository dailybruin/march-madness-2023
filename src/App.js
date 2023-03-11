import React, { useState, useEffect } from "react";
import styled from 'styled-components';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";

const Women = styled.div`
  width: 100%;
  height: 500px;
  background: blue;
  font-size: 18px;
  line-height: 23px;
  font-family: "Notable";
  padding: 50px;
  text-align: left;
`
const Men = styled.div`
  width: 100%;
  height: 500px;
  background: yellow;
  font-size: 18px;
  line-height: 23px;
  font-family: "Notable";
  padding: 50px;
  text-align: left;
`

function AppContent() {
  const [ data, setData ] = useState(null);
  
  useEffect(() => {
		fetch("https://kerckhoff.dailybruin.com/api/packages/flatpages/march-madness-2023")
		.then(res => res.json())
		.then(res => setData(res.data['article.aml']))
  }, [])

  return data && (
    <div className="App">
      <Header/>
      <NavBar></NavBar>
      <Women id="women">
        Women's Basketball
      </Women>
      <Men id="men">
        Men's Basketball
      </Men>
      <Footer/>
      
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="*" element={<AppContent />} />
      </Routes>
    </Router>
  );
}
export default App;
