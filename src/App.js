import React, { useState, useEffect } from "react";
import ArticleCard from './components/ArticleCard';
import styled from 'styled-components';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Grid from './components/ArticleGrid';

function App() {
  const [ data, setData ] = useState(null);
  
  useEffect(() => {
		fetch("https://kerckhoff.dailybruin.com/api/packages/flatpages/march-madness-2023")
		.then(res => res.json())
		.then(res => setData(res.data['article.aml']))
  }, [])

  return data && (
    <div className="App">
          <Header />
          <Grid stories={data.womens_stories} bgColor="yellow" borderColor="orange"/>
          <Grid stories={data.mens_stories} bgColor="blue" borderColor="blue"/>
          <Footer />
    </div>
  );
}

export default App;
