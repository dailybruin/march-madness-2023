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
import background from './images/background.svg';
import { mediaQueries } from './shared/config';
import PlayerCard from './components/PlayerCard';

const Women = styled.div`
  width: 100vw;
`
const Men = styled.div`
  width: 100vw;
`
const Title = styled.div`
  font-size: 50px;
  font-family: "Notable";
  text-align: left;
  margin-left: 2em;
  margin-top: 3em;
  ${mediaQueries.mobile} {
      text-align: center;
      font-size: 30px;
      line-height: 1.5em;
      margin-left: 0em;
  }
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
        <Landing landing_image = {data.landing_image} landing_image_static = {data.landing_image_static} landing_credits={data.landing_credits}/>
        <NavBar></NavBar>

        <PlayerCard card_image_wbb = {data.card_image_womens} card_image_mbb = {data.card_image_mens}></PlayerCard>

        <Blurb text={data.description_text}/>


        <Women id="women">
          <br></br>
          <Title>
            Women's Basketball
          </Title>
          <Grid stories={data.womens_stories} bgColor="yellow" borderColor="orange"/>
        </Women>

        <Men id="men">
          <br></br>
          <Title>
            Men's Basketball
          </Title>
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
