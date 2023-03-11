import React from "react";
import styled from "styled-components";
import { mediaQueries } from "../shared/config";
import { HashLink } from "react-router-hash-link";


const Container = styled.div`
    position: sticky;
    top: 0;
    width: 100%;
    padding-top: 35px;
    padding-bottom: 35px;
`
const InnerContainer = styled.div`
    display: inline-block;
    padding-left: 3.3em;
    padding-right: 3.3em;
    font-weight: 400;
    font-size: 18px;
    line-height: 23px;
    font-family: "Notable";
    color: #023047;
`
export default function NavBar(){
    return(
        <Container>
            <HashLink to="#women">
                <InnerContainer>Women's</InnerContainer>
           </HashLink>
           <HashLink to="#men">
                <InnerContainer>Men's</InnerContainer>
           </HashLink>
        </Container>
    )
}