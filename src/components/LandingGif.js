import React from "react";

const LandingGif = (props) => {
  return (
    <React.Fragment>
      <img
        src={props.landing_image}
        alt="landing image"
        style={{ width: "100%", marginRight: "-1", display: "block" }}
      />
    </React.Fragment>
  );
};

export default LandingGif;
