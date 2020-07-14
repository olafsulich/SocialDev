import React from "react";
import Navigation from "./Navigation/Navigation";

const Layout: React.FC = ({ children }) => {
  return (
    <div>
      <Navigation />
      <main id="main-content">{children}</main>
    </div>
  );
};

export default Layout;
