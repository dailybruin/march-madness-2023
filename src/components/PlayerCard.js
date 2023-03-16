import React from 'react';
import styled from 'styled-components'
import {mediaQueries} from '../shared/config';
import WomenCard from '../images/wbb_new.svg'
import MenCard from '../images/mbb_new.svg';
import { HashLink } from "react-router-hash-link";

/*
width: 100%;
height: 50em;
*/
export default function PlayerCard(props){

    const Container = styled.div`
        display: inline-block;
        width: 50%;
        height: 50em;
        border-radius: 0.625em;
        font-family: 'Faster One', sans-serif;
        text-align: left;
        box-sizing: border-box;
        position: relative;
        background-image: url(${WomenCard});
        ${mediaQueries.mobile} {
            background-image: url(${WomenCard});
            background-size: cover;
        }
    `
    //background-image: url(${WomenCard});
    const ContainerM = styled.div`
        position: relative;
        float: right;
        display: inline-block;
        width: 50%;
        height: 50em;
        border-radius: 0.625em;
        font-family: 'Faster One', sans-serif;
        text-align: left;
        box-sizing: border-box;
        background-image: url(${MenCard});

        ${mediaQueries.mobile} {
            background-image: url(${MenCard});
            background-size: cover;
        }
    `
    //background-image: url(${MenCard});
    const Logo = styled.div`
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
        align-items: center:
        text-align: center;
        color: rgba(152, 214, 242, 0.52);
    `
    const LogoM = styled.div`
        position: absolute;
        width: 29px;
        height: 300px;
        left: 15em;
        top: 200px;
        font-family: 'Notable';
        font-style: normal;
        font-weight: bold;
        font-size: 30px;
        line-height: 39px;
        display: flex;
        align-items: center:
        text-align: center;
        color: rgba(152, 214, 242, 0.52);
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
            left: 126px;
            top: 630px;
        }
        ${mediaQueries.mobile} {
            display: inline-block;
            height: 75%;
            bottom: 2em;
        }
    `
    const ArticleInfoM = styled.div`  
        display: none;
        position: absolute;
        border-radius: 1em;
        height: 100%;
        width: 100%;
        width: 23.3125em;
        height: 5.5625em;
        left: 4em;
        top: 37.5em;
        ${ContainerM}:hover & {
            display: inline-block;
            background-color: rgba(152, 214, 242, 0.52);
            width: 373px;
            left: 75px;
            top: 605px;
        }
        ${mediaQueries.mobile} {
            display: inline-block;
            height: 75%;
            bottom: 2em;
        }
    `


    const Image = styled.img`
        display: block;
        position: absolute;
        max-width: 100%;
        max-height: 275px;
        margin: auto;
        left: 170px;
        top: 200px;
        box-sizing: content-box;
        border-radius: 10px;
        ${mediaQueries.mobile} {
            height: 170px;
            margin: auto;
        }
    `
    const ImageM = styled.img`
        display: block;
        position: absolute;
        max-width: 100%;
        max-height: 275px;
        margin: auto;
        left: 100px;
        top: 200px;
        box-sizing: content-box;
        border-radius: 10px;
        ${mediaQueries.mobile} {
            height: 170px;
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
        <React.Fragment>
                <HashLink to="#women">
        <Container>
                    <Image src={props.card_image} />
                    
            <ArticleInfo>
            </ArticleInfo>
                    
         <Logo>
            B
            R
            U
            I
            N
            S
         </Logo>
        </Container>
    </HashLink>
    
    <HashLink to="#men">
        <ContainerM>
            <ImageM src={props.card_image_mens} />
            <ArticleInfoM>
            </ArticleInfoM>
            <LogoM>
                B
                R
                U
                I
                N
                S
            </LogoM>
        </ContainerM>
    </HashLink>

    </React.Fragment>
    )
}