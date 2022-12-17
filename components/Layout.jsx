import React from "react";

const Layout = ({ children }) => {
  return (
    <div className="container-fluid">
      <div className="column-gap-30 d-flex flex-md-row flex-column justify-content-center align-items-center w-100">
        {children}
      </div>
    </div>
  );
};

export default Layout;
