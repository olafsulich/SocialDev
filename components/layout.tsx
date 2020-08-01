import React, { useState, useEffect, Suspense } from 'react';
import Navigation from './navigation/Navigation';
import ProgressBar from './navigation/components/ProgressBar/ProgressBar';

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
      <ProgressBar isAnimating={isLoading} />
      <Navigation />
      <main id="main-content">{children}</main>
    </>
  );
};

export default Layout;
