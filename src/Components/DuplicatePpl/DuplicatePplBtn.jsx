import React from "react";

const DuplicatePplBtn = props => {
  return (
    <a
      onClick={props.handleDuplicates}
      className="waves-effect waves-light btn"
      style={{
        display: "inline-block",
        width: "25%",
        marginLeft: "40%",
        marginBottom: "2%"
      }}
    >
      Duplicate People
    </a>
  );
};

export default DuplicatePplBtn;
