import styled from 'styled-components';

type ContainerHeaderProps = {
  img: string;
};

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ContainerHeader = styled.div<ContainerHeaderProps>`
  background: linear-gradient(
      0deg,
      ${(props) => props.theme.colors.darkShadow},
      ${(props) => props.theme.colors.darkShadow}
    ),
    url(${(props) => props.img});
  background-size: cover;
  background-position: center;

  width: 100%;
  height: ${(props) => props.theme.sizes['26']};

  display: flex;
  position: relative;

  @media (min-width: 992px) {
    margin-bottom: ${(props) => props.theme.space['7']};
  }
`;

export const ButtonBack = styled.button`
  margin-top: ${(props) => props.theme.space['17']};
  margin-left: ${(props) => props.theme.space['13']};

  height: ${(props) => props.theme.sizes['10']};

  background: none;
  border: none;
  border-radius: ${(props) => props.theme.radii['medium']};

  @media (min-width: 992px) {
    width: auto;
    height: fit-content;

    margin-top: ${(props) => props.theme.space['6']};

    display: flex;

    align-self: top;
    padding: ${(props) => props.theme.space['2']};

    transition: 0.2s;

    :hover {
      background-color: ${(props) => props.theme.colors['lightOpacity-1']};
    }
  }
`;

export const WrapperButton = styled.div`
  display: flex;

  width: 30%;
`;

export const WrapperImage = styled.div`
  @media (min-width: 992px) {
    margin-right: ${(props) => props.theme.space['4']};
  }
`;

export const TextBack = styled.span`
  font-size: ${(props) => props.theme.fontSizes['lg']};
  color: ${(props) => props.theme.colors['white']};
`;

export const WrapperImagePerfil = styled.div`
  position: absolute;
  top: ${(props) => props.theme.space['20']};
  left: calc(50% - (${(props) => props.theme.sizes.variants['30']} / 2));

  @media (min-width: 992px) {
    position: static;
  }
`;

export const WrapperContentInfo = styled.div`
  display: flex;
  width: 70%;

  align-self: center;
  justify-content: flex-start;
`;

export const WrapperMainInformation = styled.div`
  display: flex;
  flex-direction: column;

  justify-content: center;

  padding-left: ${(props) => props.theme.space['6']};
`;

export const Title = styled.h1`
  color: ${(props) => props.theme.colors['white']};
`;

export const ContactInfo = styled.p`
  color: ${(props) => props.theme.colors['white']};
`;

export const ContainerInfo = styled.div`
  padding: 0 ${(props) => props.theme.space['10']};

  @media (min-width: 768px) {
    max-width: 60%;
  }

  @media (min-width: 992px) {
    max-width: 40%;
  }
`;

export const Name = styled.h2`
  text-align: center;
  color: ${(props) => props.theme.colors['darkDown']};

  padding-top: ${(props) => props.theme.space['10']};
  margin-bottom: ${(props) => props.theme.space['10']};
`;

export const WrapperInfo = styled.div`
  margin-bottom: ${(props) => props.theme.space['10']};
`;

export const Divider = styled.div`
  width: 100%;
  height: ${(props) => props.theme.sizes.variants['line-small']};

  background-color: ${(props) => props.theme.colors['light']};

  margin-bottom: ${(props) => props.theme.space['10']};
`;
