import { useState, useEffect, useCallback } from 'react';

const useScrollPosition = (scrollPosition: number) => {
  const [scrolled, setScrolled] = useState(false);
  const handleScroll = useCallback(
    () => (window && window.scrollY > scrollPosition ? setScrolled(true) : setScrolled(false)),
    [scrollPosition],
  );

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  return [scrolled, setScrolled];
};

export default useScrollPosition;
