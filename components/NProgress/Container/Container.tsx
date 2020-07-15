import React, { useEffect, useCallback, useRef } from "react";
import { updateStyles } from "../../../utils/updateStyles";
import styles from "./Container.module.scss";

interface Props {
  animationDuration: number;
  isFinished: boolean;
}

const Container: React.FC<Props> = ({
  children,
  isFinished,
  animationDuration,
}) => {
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
