import React from 'react';
import styled from 'styled-components';
import { mediaQueries } from '../shared/config';


export default function ArticleCard(props){
    function getBackground(backgroundColor){
        if (backgroundColor === "yellow"){
            return "FFD100";
        }
        if (backgroundColor === "blue"){
            return "C1E6F8";
        }
    }

    function getBorder(borderColor){
        if (borderColor === "orange"){
            return "FB8500";
        }
        if (borderColor === "blue"){
            return "2774AE";
        }
    }
    let Container = styled.div`
          position: relative;
          display: flex;
          flex-direction: row-reverse;
          width: 100%;
          height: fit-content;
          margin: auto;
          box-sizing: border-box;
          background-color: #${getBackground(props.backgroundColor)};
          padding: 0.7em;
          border-radius: 20px;
          ${mediaQueries.mobile} {
            width: 90%;
            height: 50%;
          }
        `;

        let Container2 = styled.div`
        position: relative;
        display: flex;
        flex-direction: row-reverse;
        width: 100%;
        height: fit-content;
        margin: auto;
        box-sizing: border-box;
        border: 3px solid #${getBorder(props.borderColor)};
        border-radius:20px;
        ${mediaQueries.mobile} {
            width: 100%;
            height: 100%;
          }
        `

    let ArticleInfo = styled.div`
        flex: 0.5;
        color: #ffffff;
      `;

    let ArticleImage = styled.div`
    padding: 0.7em;
        flex: 0.5;
        height: 100%;
      `;

      let Image = styled.img`
        width: 100%;
        height: 100%;
        box-sizing: content-box;
        object-fit: cover;
        background-color: #d9d9d9;
      `;

      let Title = styled.a`
        display: block;
        margin-top:1.2em;
        margin-left:0.7em;
        font-size: 80px;
        text-align: left;
        text-decoration: none;
        line-height: 1em;
        color: black;
        font-family: 'Sawarabi Mincho', serif;
        ${mediaQueries.mobile} {
          font-size: 20px;
        }
      `;

     let ByLine = styled.p`
        display: block;
        margin-left:1.3em;
        font-size: 50px;
        font-weight: 500;
        text-align: left;
        color: black;
        font-family: 'Pavanam', sans-serif;
        white-space: pre-line;
        ${mediaQueries.mobile} {
          font-size: 12px;
        }
      `;
    
return (
<Container>
    <Container2>
        <ArticleImage>
            <a href= {props.article_url}>
            <Image src={props.article_image}></Image>
            </a>
        </ArticleImage>
        <ArticleInfo>
            <Title href={props.article_url}> {props.article_title}</Title>
            <ByLine>
            {props.article_byline}
            </ByLine>
        </ArticleInfo>
        </Container2>
  </Container>
);
}
