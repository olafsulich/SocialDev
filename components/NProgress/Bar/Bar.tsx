import React, { useEffect, useCallback, useRef } from "react";
import { updateStyles } from "../../../utils/updateStyles";
import styles from "./Bar.module.scss";

interface Props {
  progress: number;
  animationDuration: number;
}

const Bar: React.FC<Props> = ({ progress, animationDuration }) => {
  const animateBar = useRef<HTMLElement | null>(null);

  const updateBarStyles = useCallback(() => {
    updateStyles(animateBar.current, {
      marginLeft: `${(-1 + progress) * 100}%`,
      transition: `margin-left ${animationDuration}ms linear`,
    });
  }, [animateBar]);

  useEffect(() => {
    updateBarStyles();
  }, [updateBarStyles]);

  return (
    <>
      {/* <div className={styles.barInside}></div>
      <div className={styles.barOutside}></div> */}
      <div
        style={{
          background: "#29d",
          height: 2,
          left: 0,
          marginLeft: `${(-1 + progress) * 100}%`,
          position: "fixed",
          top: 0,
          transition: `margin-left ${animationDuration}ms linear`,
          width: "100%",
          zIndex: 1031,
        }}
      >
        <div
          style={{
            boxShadow: "0 0 10px #29d, 0 0 5px #29d",
            display: "block",
            height: "100%",
            opacity: 1,
            position: "absolute",
            right: 0,
            transform: "rotate(3deg) translate(0px, -4px)",
            width: 100,
          }}
        />
      </div>
    </>
  );
};

export default Bar;
