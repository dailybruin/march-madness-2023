import React from "react";
import styled from "styled-components";
import { mediaQueries } from "../shared/config";
import { HashLink } from "react-router-hash-link";
import{ useState, useEffect }from "react";

const Container = styled.div`
    position: sticky;
    width: 100%;
    padding-top: 55px;
    padding-bottom: 35px;
    z-index: 100;
    top: 0;
    background-color: rgb(193,230,248, 0.7);
    ${mediaQueries.mobile} {
      padding-top: 45px;
      padding-bottom: 25px;
    }
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
    ${mediaQueries.mobile} {
      font-size: 15px;
    }
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