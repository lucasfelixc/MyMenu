import styled from 'styled-components';

type ContainerProps = {
  imgBg: string;
};

export const Container = styled.div<ContainerProps>`
  background: url(${(props) => props.imgBg}) no-repeat;
  background-size: cover;
  background-position: center;

  @media (min-width: 768px) {
    height: ${(props) => props.theme.sizes.variants['31']};
  }
`;

export const Title = styled.h2`
  color: ${(props) => props.theme.colors.darkDown};
  font-size: ${(props) => props.theme.fontSizes['3xl']};

  max-width: 80%;
  padding-bottom: ${(props) => props.theme.space['6']};

  @media (min-width: 768px) {
    padding-bottom: ${(props) => props.theme.space['4']};
    max-width: 100%;
  }
`;

export const Subtitle = styled.p`
  color: ${(props) => props.theme.colors.darkDown};
  font-size: ${(props) => props.theme.fontSizes['xxl']};
  font-weight: ${(props) => props.theme.fontWeights['regular']};

  @media (min-width: 768px) {
    color: ${(props) => props.theme.colors.lightSubtitle};

    font-size: ${(props) => props.theme.fontSizes['xl']};

    padding-left: 30%;
  }
`;

export const Wrapper = styled.div`
  padding: 0 ${(props) => props.theme.space[11]};
  padding-top: ${(props) => props.theme.space['13']};
  padding-bottom: ${(props) => props.theme.space['20']};

  @media (min-width: 768px) {
    text-align: end;

    padding: ${(props) => props.theme.space['8']}
      ${(props) => props.theme.space.variants['24']};
  }

  @media (min-width: 992px) {
    display: flex;
    justify-content: space-between;
  }
`;

export const WrapperImage = styled.div`
  padding-top: ${(props) => props.theme.space['4']};
`;
export const WrapperText = styled.div``;
