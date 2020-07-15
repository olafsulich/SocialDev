import React, { useState, useEffect } from "react";
import Navigation from "./Navigation/Navigation";
import Progress from "./NProgress/Progress/Progress";

const callFakeAPI = (delay) =>
  new Promise((resolve) => {
    setTimeout(resolve, delay);
  });

const Layout: React.FC = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      await callFakeAPI(3000);
      setIsLoading(false);
    })();
  }, []);
  return (
    <>
      <Progress isAnimating={isLoading} />
      <div>
        <Navigation />
        <main id="main-content">{children}</main>
      </div>
    </>
  );
};

export default Layout;
