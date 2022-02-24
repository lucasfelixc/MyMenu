import Image from 'next/image';
import { useRouter } from 'next/router';

import ArrowLeft from '~/assets/icons/arrow-left.png';
import { ImagePerfil, TagInfo } from '~/components';
import { useWindowSize, FormatPhone } from '~/utils';

import {
  Container,
  ButtonBack,
  ContainerHeader,
  WrapperImagePerfil,
  ContainerInfo,
  Divider,
  Name,
  WrapperInfo,
  TextBack,
  WrapperButton,
  WrapperImage,
  WrapperContentInfo,
  Title,
  ContactInfo,
  WrapperMainInformation,
} from './DetailScreen.style';
import { DetailScreenProps } from './types';

export const DetailScreen = ({ data }: DetailScreenProps) => {
  const { push } = useRouter();
  const { width } = useWindowSize();

  return (
    <Container>
      <ContainerHeader data-testid="header-detail" img={data.image}>
        <WrapperButton>
          <ButtonBack onClick={async () => await push('/')}>
            <WrapperImage>
              <Image src={ArrowLeft} />
            </WrapperImage>

            {(width as number) > 992 && <TextBack>Voltar</TextBack>}
          </ButtonBack>
        </WrapperButton>
        <WrapperContentInfo>
          {(width as number) > 768 && (
            <WrapperImagePerfil>
              <ImagePerfil img={data.logo} />
            </WrapperImagePerfil>
          )}
          {(width as number) > 768 && (
            <WrapperMainInformation>
              <Title>{data.name}</Title>
              <ContactInfo>
                {FormatPhone(data.telephone) || data.telephone}
              </ContactInfo>
              <ContactInfo>{data.website}</ContactInfo>
            </WrapperMainInformation>
          )}
        </WrapperContentInfo>
      </ContainerHeader>

      <ContainerInfo>
        {(width as number) < 768 && (
          <WrapperImagePerfil>
            <ImagePerfil img={data.logo} />
          </WrapperImagePerfil>
        )}
        {(width as number) < 768 && <Name>{data.name}</Name>}
        <WrapperInfo>
          <TagInfo
            title="Descrição"
            lines={[{ line: data.description, isSmall: false }]}
          />
        </WrapperInfo>
        {(width as number) < 992 && (
          <WrapperInfo>
            <TagInfo
              title="Contato"
              lines={[
                {
                  line: FormatPhone(data.telephone) || data.telephone,
                  isSmall: false,
                },
                { line: data.website, isSmall: false },
              ]}
            />
          </WrapperInfo>
        )}
        <WrapperInfo>
          <TagInfo
            title="Faixa de preço"
            lines={[{ line: data.price_range, isSmall: false }]}
          />
        </WrapperInfo>
        <Divider />
        <WrapperInfo>
          <TagInfo
            title="Horário de funcionamento"
            lines={[{ line: data.opening_hours, isSmall: true }]}
          />
        </WrapperInfo>
        <WrapperInfo>
          <TagInfo
            title="Formas de pagamento"
            lines={[{ line: data.payment_methods, isSmall: true }]}
          />
        </WrapperInfo>
      </ContainerInfo>
    </Container>
  );
};
