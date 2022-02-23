import HeaderImageBackground from '~/assets/image/headerSmall.png';

import { Container, Title, Subtitle, Wrapper } from './Header.style';

export const Header = () => {
  return (
    <Container data-testid="header" imgBg={HeaderImageBackground.src}>
      <Wrapper>
        <Title>Descubra novos sabores</Title>
        <Subtitle>Aqui eu converso com você sobre nossa proposta</Subtitle>
      </Wrapper>
    </Container>
  );
};
