import styled from 'styled-components';

type ContainerHeaderProps = {
  img: string;
};

export const Container = styled.div``;

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
`;

export const ButtonBack = styled.button`
  margin-top: ${(props) => props.theme.space['17']};
  margin-left: ${(props) => props.theme.space['13']};

  width: ${(props) => props.theme.sizes['10']};
  height: ${(props) => props.theme.sizes['10']};

  background: none;
  border: none;
  border-radius: ${(props) => props.theme.radii['medium']};
`;

export const WrapperImagePerfil = styled.div`
  position: absolute;
  top: ${(props) => props.theme.space['20']};
  left: calc(50% - (${(props) => props.theme.sizes.variants['30']} / 2));
`;

export const ContainerInfo = styled.div`
  padding: 0 ${(props) => props.theme.space['10']};
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
