import { useNProgress } from '@tanem/react-nprogress';
import React from 'react';
import Bar from './components/Bar/Bar';
import Container from './components/Container/Container';
import Spinner from './components/Spinner/Spinner';

type Props = {
  isAnimating: boolean;
};

const Progress = ({ isAnimating }: Props) => {
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
