import Image from 'next/image';

import ArrowLeft from '~/assets/icons/arrow-left.png';
import { ImagePerfil } from '~/components';

import {
  Container,
  ButtonBack,
  WrapperImagePerfil,
} from './HeaderDetail.style';
import { HeaderDetailProps } from './types';

export const HeaderDetail = ({
  imgBg,
  imgPerfil,
  onClickBack,
}: HeaderDetailProps) => {
  return (
    <Container data-testid="header-detail" img={imgBg}>
      <ButtonBack onClick={onClickBack}>
        <Image src={ArrowLeft} />
      </ButtonBack>
      <WrapperImagePerfil>
        <ImagePerfil img={imgPerfil} />
      </WrapperImagePerfil>
    </Container>
  );
};
