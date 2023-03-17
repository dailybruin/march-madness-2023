import React from 'react';
import styled from 'styled-components'
import {mediaQueries} from '../shared/config';
import WomenCard from '../images/wbb_final.svg';
import MenCard from '../images/mbb_final.svg'
import { HashLink } from "react-router-hash-link";

/*
width: 100%;
height: 50em;
*/
export default function PlayerCard(props){

    const OuterContainer = styled.div`
        max-width: 100vw;
        position: relative;
        margin-top: 4em;
        ${mediaQueries.mobile} {
            margin-top: 4em;
        }
`;
    
    const Grid = styled.div`
        width: 95vw;
        margin: auto;
        display: grid;
        grid-template-columns: 1fr 1fr;
        column-gap: 1em;
        /* column-gap: 1em; */
        justify-content: center;
        align-items: center;
        box-sizing: border-box;

        ${mediaQueries.mobile} {
            display: flex;
            flex-direction: column;
            width: 70vw;
            margin: auto;
            /* margin-top: 2em; */
            align-items: center;
            row-gap: 0em;
        }
`;


    const Container = styled.div`
        display: flex;
        justify-content: center;
        width: 100%;
        height: 70em;
        border-radius: 0.625em;
        font-family: 'Faster One', sans-serif;
        box-sizing: border-box;
        position: relative;
        /* background-image: url(${WomenCard}); */
        /* background-repeat: no-repeat; */

        ${mediaQueries.mobile} {
            background-image: url(${WomenCard});
            background-size: 100%;
            height: 30em;
        }

        img {
            display: block;
            text-align: center;
            margin: auto;
        }
    `

    const Container2 = styled.div`
        display: flex;
        width: 100%;
        height: 70em;
        border-radius: 0.625em;
        font-family: 'Faster One', sans-serif;
        /* text-align: left; */
        /* box-sizing: border-box; */
        position: relative;
        margin-top: 1.2em;
        /* background-image: url(${MenCard}); */
        /* background-repeat: no-repeat; */
        justify-content: center;

        ${mediaQueries.mobile} {
            background-image: url(${MenCard});
            background-size: 100%;
            height: 30em;
        }
        
        img {
            display: block;
            text-align: center;
            margin: auto;
        }
    `

    // const InnerContainer1 = styled.div`
    //     background-image: url(${WomenCard});
    //     background-repeat: no-repeat;
    // `

    // const InnerContainer2 = styled.div`
    //     background-image: url(${MenCard});
    //     background-repeat: no-repeat;
    // `


    const ArticleInfo = styled.div`  
        display: none;
        position: absolute;
        border-radius: 1em;
        height: 100%;
        width: 100%;
        width: 23.3125em;
        height: 5.5625em;
        left: 8.5em;
        top: 37.5em;
        /* ${Container}:hover & {
            display: inline-block;
            background-color: rgba(152, 214, 242, 0.52);
            width: 373px;
            left: 136px;
            top: 625px;
        } */
        ${mediaQueries.mobile} {
            display: inline-block;
            height: 75%;
            bottom: 2em;
        }
    `


    const Image1 = styled.img`
        display: block;
        position: absolute;
        max-width: 90%;
        max-height: 280px;
        margin: auto;
        left: 12em;
        right: 15em;
        top: 15em;
        box-sizing: content-box;
        border-radius: 10px;
        ${mediaQueries.mobile} {
            position: absolute;
            left: 4em;
            top: 6em;
            height: 130px;
            width: 170px;
            margin: auto;
        }
    `

    const Image2 = styled.img`
    display: block;
    position: absolute;
    max-width: 100%;
    max-height: 280px;
    margin: auto;
    left: 7em;
    right: 15em;
    top: 15em;
    box-sizing: content-box;
    border-radius: 10px;
    ${mediaQueries.mobile} {
        position: absolute;
        left: 2em;
        top: 6em;
        height: 130px;
        width: 170px;
        margin: auto;
    }
    `


    return (
        <OuterContainer>
            <Grid>
                <Container>
                    <HashLink to="#women"> 
                    <img src={WomenCard}/>
                    <Image1 src={props.card_image_wbb}/>
                    <ArticleInfo>
                    </ArticleInfo>
                    </HashLink>
                </Container>
            
            <Container2>
                <HashLink to="#men"> 
                <img src={MenCard}/>
                <Image2 src={props.card_image_mbb}/>
                <ArticleInfo>
                </ArticleInfo>
                </HashLink>
            </Container2>
            
            </Grid>
        </OuterContainer>
    )
}