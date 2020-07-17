import React, { useState, useEffect, Suspense } from "react";
import Navigation from "./Navigation/Navigation";
import Progress from "./NProgress/Progress/Progress";

const callFakeAPI = (delay: number) =>
  new Promise((resolve: () => void) => {
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
      <Navigation />
      <main id="main-content">{children}</main>
      <button onClick={() => notnotnot()} />
    </>
  );
};

export default Layout;
