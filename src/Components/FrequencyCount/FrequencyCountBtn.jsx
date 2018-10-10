import React from "react";

const FrequencyCountBtn = props => {
  return (
    <a
      onClick={props.handleClick}
      className="waves-effect waves-light btn"
      style={{
        display: "inline-block",
        width: "25%",
        marginLeft: "40%",
        marginBottom: "2%"
      }}
    >
      Frequency Count
    </a>
  );
};

export default FrequencyCountBtn;
