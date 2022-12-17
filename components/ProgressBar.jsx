import React from "react";

const ProgressBar = ({ type, width }) => {
  return (
    <>
      <div
        className={`bar-height-normal border-radius-normal position-absolute ${type}`}
        style={{ width: `${width}%`, zIndex: 2 }}
      ></div>
      <div
        className={
          "bar-height-normal border-radius-normal bg-light-gray position-absolute"
        }
        style={{ width: "100%", zIndex: 1 }}
      ></div>
    </>
  );
};

export default ProgressBar;
