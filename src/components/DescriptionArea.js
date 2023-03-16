import React, { useState, useEffect } from "react";
import styled from 'styled-components';
import { mediaQueries } from '../shared/config';


const Container = styled.div `
    /* width: 100vw; */
    height: fit-content;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const Textbox = styled.div`
    position: relative;
    width: 80vw;
    text-align: center;
    padding: 0em;
    margin: 0em auto 2em auto;
    font-family: 'Pontano Sans', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 30px;
    color: #023047;
    ${mediaQueries.mobile} {
        width: 60vw;
        font-size: 16px;
        margin: 2em auto 2em auto;
        padding-top: 2em;
    }
`

export default function DescriptionText(props) {
    return (
        <Container>
            <Textbox>
                {props.text}
            </Textbox>
        </Container>
    )
}
