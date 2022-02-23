import styled from 'styled-components';

type ContainerProps = {
  img: string;
};

export const Container = styled.div<ContainerProps>`
  width: ${(props) => props.theme.sizes.variants['30']};
  height: ${(props) => props.theme.sizes.variants['30']};

  background: url(${(props) => props.img}) no-repeat;
  background-size: cover;
  background-position: center;

  border-radius: 50% 50%;
  border: ${(props) => props.theme.borderWidths.thin} solid
    ${(props) => props.theme.colors.white};
`;
