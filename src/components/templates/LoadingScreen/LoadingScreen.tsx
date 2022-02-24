import { useEffect } from 'react';

import Image from 'next/image';

import Spinner from '~/assets/icons/spinner.png';
import { useLoadingState } from '~/context/loadingAtom';

import { Container, WrapperSpinner, SpanLoading } from './LoadingScreen.style';
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
        <Container>
          <SpanLoading>Carregando</SpanLoading>

          <WrapperSpinner>
            <Image src={Spinner} />
          </WrapperSpinner>
        </Container>
      ) : (
        <></>
      )}
    </>
  );
};
