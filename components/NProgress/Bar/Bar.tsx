import React, { useEffect, useCallback, useRef } from "react";
import { updateStyles } from "../../../utils/updateStyles";
import styles from "./Bar.module.scss";

interface Props {
  progress: number;
  animationDuration: number;
}

const Bar: React.FC<Props> = ({ progress, animationDuration }) => {
  const animateBar = useRef<HTMLDivElement | null>(null);

  const updateBarStyles = useCallback(() => {
    updateStyles(animateBar.current, {
      transform: `translateX(${(-1 + progress) * 100}%)`,
      transition: `transform ${animationDuration}ms linear`,
    });
  }, [animateBar, progress, animationDuration]);

  useEffect(() => {
    updateBarStyles();
  }, [updateBarStyles]);

  return (
    <>
      <div ref={animateBar} className={styles.barOutside}>
        <div className={styles.barInside}></div>
      </div>
    </>
  );
};

export default Bar;
