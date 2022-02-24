import Image from 'next/image';
import { useRouter } from 'next/router';

import ArrowLeft from '~/assets/icons/arrow-left.png';
import { ImagePerfil, TagInfo } from '~/components';

import {
  Container,
  ButtonBack,
  ContainerHeader,
  WrapperImagePerfil,
  ContainerInfo,
  Divider,
  Name,
  WrapperInfo,
} from './DetailScreen.style';
import { DetailScreenProps } from './types';

export const DetailScreen = ({ data }: DetailScreenProps) => {
  const { push } = useRouter();
  return (
    <Container>
      <ContainerHeader data-testid="header-detail" img={data.image}>
        <ButtonBack onClick={async () => await push('/')}>
          <Image src={ArrowLeft} />
        </ButtonBack>
        <WrapperImagePerfil>
          <ImagePerfil img={data.logo} />
        </WrapperImagePerfil>
      </ContainerHeader>
      <ContainerInfo>
        <Name>{data.name}</Name>
        <WrapperInfo>
          <TagInfo
            title="Descrição"
            subtitle={data.description}
            isSmall={false}
          />
        </WrapperInfo>
        <WrapperInfo>
          <TagInfo
            title="Contato"
            subtitle={`${data.telephone}\n${data.website}`}
            isSmall={false}
          />
        </WrapperInfo>
        <WrapperInfo>
          <TagInfo
            title="Faixa de preço"
            subtitle={data.price_range}
            isSmall={false}
          />
        </WrapperInfo>
        <Divider />
        <WrapperInfo>
          <TagInfo
            title="Horário de funcionamento"
            subtitle={data.opening_hours}
            isSmall={true}
          />
        </WrapperInfo>
        <WrapperInfo>
          <TagInfo
            title="Formas de pagamento"
            subtitle={data.payment_methods}
            isSmall={true}
          />
        </WrapperInfo>
      </ContainerInfo>
    </Container>
  );
};
