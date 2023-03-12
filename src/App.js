import React, { useState, useEffect } from "react";
import ArticleCard from './components/ArticleCard';
import styled from 'styled-components';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';

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
          <ArticleCard 
          article_image={data.article_image} 
          article_title={data.article_title} 
          article_url={data.article_url} 
          article_byline={data.article_byline}
          backgroundColor="yellow"
          borderColor="orange" />
          <Footer />
    </div>
  );
}

export default App;
