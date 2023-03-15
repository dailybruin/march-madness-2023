import React, { useState, useRef, useCallback } from "react";
import LandingGif from "./LandingGif";
import styled from "styled-components";
import { mediaQueries } from "../shared/config";

const Credits = styled.div`
  float: right;
  color: #023047;
  margin-right: 10px;
  padding-top: 0.5em;
  font-size: 18px;
  font-family: 'Pontano Sans', sans-serif;
  ${mediaQueries.mobile} {
    font-size: 14px;
  }
`;

const LandingImage = (props) => {
  let landingImage = props.landing_image;
  let landingCredits = props.landing_credits;
  let landingStatic = props.landing_image_static;

  let tempLanding =
    "https://user-images.githubusercontent.com/36126914/154766367-2c3d9c80-3cdc-4790-b15c-7eba5eee9fd2.gif";

  let tempCredits = "(Credits: Joe Bruin)";

  const gifEndRef = useRef(null);
  const [firstTime, setFirstTime] = useState(true);

  const scroller = useCallback(() => {
    setTimeout(() => {
      if (gifEndRef && gifEndRef.current) {
        gifEndRef.current.scrollIntoView({behavior: "smooth" });
        setFirstTime(false);
      }
    }, 4000);
  }, [gifEndRef]);

  return (
    <>
      {firstTime ? (
        <LandingGif landing_image={landingImage} />
      ) : (
        <LandingGif landing_image={landingStatic} />
      )}
      <div ref={gifEndRef}></div>
      {firstTime ? scroller() : null}
      <Credits>{landingCredits}</Credits>
    </>
  );
};

export default LandingImage;
