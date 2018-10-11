import React from "react";
// this is a button responsible for firing off frequency count
const FrequencyCountBtn = props => {
  return (
    <button
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
    </button>
  );
};

export default FrequencyCountBtn;
