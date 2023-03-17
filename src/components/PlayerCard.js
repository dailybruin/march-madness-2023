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
        justify-items: center;
        align-items: center;
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
        width: 100%;
        height: 70em;
        border-radius: 0.625em;
        font-family: 'Faster One', sans-serif;
        text-align: left;
        box-sizing: border-box;
        position: relative;
        background-image: url(${WomenCard});
        background-repeat: no-repeat;
        ${mediaQueries.mobile} {
            background-image: url(${WomenCard});
            background-size: 100%;
            height: 30em;
        }
    `

    const Container2 = styled.div`
    display: flex;
    width: 100%;
    height: 70em;
    border-radius: 0.625em;
    font-family: 'Faster One', sans-serif;
    text-align: left;
    box-sizing: border-box;
    position: relative;
    margin-top: 1.2em;
    background-image: url(${MenCard});
    background-repeat: no-repeat;
    ${mediaQueries.mobile} {
        background-image: url(${MenCard});
        background-size: 100%;
        height: 30em;
    }
    `

    const Logo1 = styled.div`
        position: absolute;
        width: 29px;
        height: 300px;
        left: 17.5em;
        top: 200px;
        font-family: 'Notable';
        font-style: normal;
        font-weight: bold;
        font-size: 30px;
        line-height: 39px;
        display: flex;
        align-items: center;
        text-align: center;
        color: rgba(152, 214, 242, 0.52);
        ${mediaQueries.mobile} {
            display: none;
            height: 0;
            width: 0;
        }
    `

    const Logo2 = styled.div`
        position: absolute;
        width: 29px;
        height: 300px;
        left: 15.5em;
        top: 200px;
        font-family: 'Notable';
        font-style: normal;
        font-weight: bold;
        font-size: 30px;
        line-height: 39px;
        display: flex;
        align-items: center;
        text-align: center;
        color: rgba(152, 214, 242, 0.52);
        ${mediaQueries.mobile} {
            display: none;
            height: 0;
            width: 0;
        }
    `

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
        ${Container}:hover & {
            display: inline-block;
            background-color: rgba(152, 214, 242, 0.52);
            width: 373px;
            left: 136px;
            top: 625px;
        }
        ${mediaQueries.mobile} {
            display: inline-block;
            height: 75%;
            bottom: 2em;
        }
    `


    const Image1 = styled.img`
        display: block;
        position: absolute;
        max-width: 80%;
        max-height: 275px;
        margin: auto;
        left: 11em;
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
    max-width: 80%;
    max-height: 275px;
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

    /*const Link = styled.a`
        
        ${mediaQueries.mobile} {
            height: 100%;
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
        }

        max-width: 100%;
        height: 245px;
        <Title href={props.article_url}><Image src={props.card_image}/></Title>

        <ArticleInfo>
                <Title href={props.article_url}>{props.article_title}</Title>
            </ArticleInfo>
    `*/

    return (
        <OuterContainer>
            <Grid>
            <Container>
                <HashLink to="#women"> 
                <Image1 src={props.card_image_wbb}/>
                <ArticleInfo>
                </ArticleInfo>
                {/* <Logo1>
                B
                R
                U
                I
                N
                S
                </Logo1> */}
                </HashLink>
            </Container>

            <Container2>
                <HashLink to="#men"> 
                <Image2 src={props.card_image_mbb}/>
                <ArticleInfo>
                </ArticleInfo>
                {/* <Logo2>
                B
                R
                U
                I
                N
                S
                </Logo2> */}
                </HashLink>
            </Container2>
            </Grid>
        </OuterContainer>
    )
}