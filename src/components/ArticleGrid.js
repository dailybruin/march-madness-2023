import React from "react";
import styled from "styled-components";
import { mediaQueries } from "../shared/config";
//import Card from "./ArticleCard";

// NOTES: UNCOMMENT IMPORT LINE AND CARD IN RETURN STATEMENT
//        DELETE IMAGE IN RETURN STATEMENT
//        added one more prop header={"header title here"}

const OuterContainer = styled.div`
  max-width: 100vw;
  overflow: hidden;
  ${mediaQueries.mobile} {
    margin-left: 2em;
    margin-right: 2em;
  }
`;

const Container = styled.div`
  max-width: 100vw;
  position: relative;
  overflow: visible;
  margin-top: 5em;
  margin-bottom: 5em;
`;

const Grid = styled.div`
  display: grid;
  margin: auto;
  max-width: 90vw;
  grid-template-columns: repeat(2, 1fr);
  row-gap: 3em;
  column-gap: 3em;
  overflow: hidden;
  padding: 2em;
  place-items: center;
  ${mediaQueries.mobile} {
    display: flex;
    flex-direction: column;
    width: 90vw;
    margin: auto;
    align-items: center;
  }
`;

const Heading = styled.div`
  font-size: 48px;
  text-align: left;
  color: #023047;
  font-family: Notable, sans-serif;
  margin-left: 3em;
  max-width: 100vw;
  overflow: hidden;
  ${mediaQueries.mobile} {
    text-align: center;
    font-size: 30px;
    max-width: 80%;
    margin-left: 1em;
  }
`;

export default function ArticleGrid(props) {
  return (
    <>
      <Heading>{props.header}</Heading>
      <OuterContainer>
        <Grid>
          {props && props.articles
            ? props.articles.map((item) => {
                return (
                  // DELETE
                  // <img
                  //   src="https://cdn10.bigcommerce.com/s-3tqgz/template/images/angled_scratcher_carpet_scratching.jpg"
                  //   alt="TEMPORARY CARD"
                  // />
                  //UNCOMMENT
                  <Card
                    article_title={item.article_title}
                    article_image={item.article_image}
                    article_url={item.article_url}
                    article_byline={item.article_byline}
                  />
                );
              })
            : null}
        </Grid>
      </OuterContainer>
    </>
  );
}
