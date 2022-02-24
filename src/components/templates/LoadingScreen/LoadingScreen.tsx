import { useEffect } from 'react';

import { LoadingTag } from '~/components';
import { useLoadingState } from '~/context/loadingAtom';

import { Container } from './LoadingScreen.style';
import { LoadingProps } from './types';

export const LoadingScreen = ({ loading }: LoadingProps) => {
  const {
    loading: { isLoading },
    setLoading,
  } = useLoadingState();

  useEffect(() => {
    setLoading({ isLoading: loading });
  }, [loading]);

  return (
    <>
      {isLoading ? (
        <Container data-testid="loading-screen">
          <LoadingTag direction="vertical" />
        </Container>
      ) : (
        <></>
      )}
    </>
  );
};
