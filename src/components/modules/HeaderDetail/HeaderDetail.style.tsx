import styled from 'styled-components';

type ContainerProps = {
  img: string;
};

export const Container = styled.div<ContainerProps>`
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
