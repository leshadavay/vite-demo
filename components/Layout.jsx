import React from "react";

const Layout = ({ children }) => {
  return (
    <div className="container-fluid vh-100 d-inline d-md-flex">
      <div className="column-gap-30 d-flex flex-md-row flex-column justify-content-center align-items-center w-100 h-100 overflow-hidden">
        {children}
      </div>
    </div>
  );
};

export default Layout;
