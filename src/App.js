import React, { useState, useEffect } from "react";
import styled from 'styled-components';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Blurb from './components/DescriptionArea';
import background from './images/background.svg'

function App() {
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
      <Header/>
      <Blurb text={data.description_text}>
      </Blurb>
      <Footer/>
      </Container>
    </div>
  );
}

export default App;
