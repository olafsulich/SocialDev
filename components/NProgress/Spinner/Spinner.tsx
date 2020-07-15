import React from "react";
import styles from "./Spinner.module.scss";

const Spinner: React.FC = () => {
  return (
    <>
      <div className="spinnerContainer">
        <div className="spinnerCircle" />
      </div>
    </>
  );
};

export default Spinner;
