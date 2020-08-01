import React, { useEffect, useCallback, useRef, ReactNode } from 'react';
import { updateStyles } from '../../../../../../shared/utils/updateStyles';
import styles from './Container.module.scss';

type Props = {
  animationDuration: number;
  isFinished: boolean;
  children: ReactNode;
};

const Container = ({ children, isFinished, animationDuration }: Props) => {
  const animateContainer = useRef<HTMLDivElement | null>(null);

  const updateContainerStyles = useCallback(() => {
    updateStyles(animateContainer.current, {
      opacity: `${isFinished ? 0 : 1}`,
      transition: `opacity ${animationDuration}ms linear`,
    });
  }, [isFinished, animationDuration]);

  useEffect(() => {
    updateContainerStyles();
  }, [updateContainerStyles]);

  return (
    <>
      <div ref={animateContainer} className={styles.container}>
        {children}
      </div>
    </>
  );
};

export default Container;
