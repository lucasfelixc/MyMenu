import Image from 'next/image';

import Spinner from '~/assets/icons/spinner.png';

import { Container, WrapperSpinner, SpanLoading } from './LoadingTag.style';
import { LoadingTagProps } from './types';

export const LoadingTag = ({ direction }: LoadingTagProps) => {
  return (
    <Container direction={direction}>
      <SpanLoading direction={direction}>Carregando</SpanLoading>

      <WrapperSpinner>
        <Image src={Spinner} />
      </WrapperSpinner>
    </Container>
  );
};
