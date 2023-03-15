import styled from 'styled-components';
import { mediaQueries } from '../shared/config';
import Card from "./ArticleCard";

const OuterContainer = styled.div`
    max-width: 100vw;
    margin-top: 5em;
    position: relative;
    ${mediaQueries.mobile} {
        margin-top: 3em;
    }
`;

const Grid = styled.div`
    max-width: 90vw;
    margin: auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 3em;
    row-gap: 3em;
    justify-items: center;
    ${mediaQueries.mobile} {
        display: flex;
        flex-direction: column;
        width: 90vw;
        margin: auto;
        margin-top: 2em;
        align-items: center;
        row-gap: 1em;
    }
`;

export default function ArticleGrid(props) {
    return(
    <>
        <OuterContainer>
            <Grid>
            {props && props.stories
                  ? props.stories.map((item) => {
                      return (
                          <Card
                          article_title={item.article_title}
                          article_byline={item.article_byline}
                          article_image={item.article_image}
                          article_url={item.article_url}
                          backgroundColor = {props.bgColor}
                          borderColor = {props.borderColor}
                      />
                      );
                  })
              : null}
            </Grid>
        </OuterContainer>
    </>
    );
}