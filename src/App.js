import React, { useState, useEffect } from "react";
import styled from "styled-components";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ArticleGrid from "./components/ArticleGrid";

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(
      "https://kerckhoff.dailybruin.com/api/packages/flatpages/march-madness-2023"
    )
      .then((res) => res.json())
      .then((res) => setData(res.data["article.aml"]));
  }, []);

  return (
    data && (
      <div className="App">
        <Header />
        Hello Daily Bruin!
        <ArticleGrid
          header={"WOMEN'S BASKETBALL"}
          articles={data.womens_stories}
        />
        <ArticleGrid header={"MEN'S BASKETBALL"} articles={data.mens_stories} />
        <Footer />
      </div>
    )
  );
}

export default App;
