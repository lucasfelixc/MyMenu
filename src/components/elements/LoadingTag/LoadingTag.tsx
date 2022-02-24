import Image from 'next/image';

import Spinner from '~/assets/icons/spinner.png';

import { Container, WrapperSpinner, SpanLoading } from './LoadingTag.style';
import { LoadingTagProps } from './types';

export const LoadingTag = ({ direction }: LoadingTagProps) => {
  return (
    <Container data-testid="loadingtag-container" direction={direction}>
      <SpanLoading direction={direction}>Carregando</SpanLoading>

      <WrapperSpinner>
        <Image src={Spinner} layout="intrinsic" width={15} height={15} />
      </WrapperSpinner>
    </Container>
  );
};
