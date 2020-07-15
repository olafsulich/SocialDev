import { useNProgress } from "@tanem/react-nprogress";
import React from "react";
import Bar from "../Bar/Bar";
import Container from "../Container/Container";
import Spinner from "../Spinner/Spinner";

interface Props {
  isAnimating: boolean;
}

const Progress: React.FC<Props> = ({ isAnimating }) => {
  const { animationDuration, isFinished, progress } = useNProgress({
    isAnimating,
  });

  return (
    <Container isFinished={isFinished} animationDuration={animationDuration}>
      <Bar progress={progress} animationDuration={animationDuration} />
      <Spinner />
    </Container>
  );
};

export default Progress;
