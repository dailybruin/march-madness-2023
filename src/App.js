import React, { useState, useEffect } from "react";
import styled from 'styled-components';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Landing from './components/LandingImage'
import Blurb from './components/DescriptionArea';
import Grid from './components/ArticleGrid';
import ArticleCard from './components/ArticleCard';
import background from './images/background.svg'

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

  const Container = styled.div`
  height: fit-content;
  background-image: url(${background});
  background-size: cover;
  background-repeat: repeat;
  /* overflow-y: scroll; */
`;

  return data && (
    <div className="App">
     
      <Container>
        <Header />
        <NavBar></NavBar>
        <Landing landing_image = {data.landing_image} landing_image_static = {data.landing_image_static} landing_credits={data.landing_credits}/>
        <Blurb text={data.description_text}/>
        <Women id="women">
          Women's Basketball
          <Grid stories={data.womens_stories} bgColor="yellow" borderColor="orange"/>
        </Women>
        <Men id="men">
          Men's Basketball
          <Grid stories={data.mens_stories} bgColor="blue" borderColor="blue"/>
        </Men>
        <Footer/>
      </Container>
      
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
