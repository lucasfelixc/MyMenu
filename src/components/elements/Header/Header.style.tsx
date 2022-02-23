import styled from 'styled-components';

type ContainerProps = {
  imgBg: string;
};

export const Container = styled.div<ContainerProps>`
  background: url(${(props) => props.imgBg}) no-repeat;
  background-size: cover;
  background-position: center;
`;

export const Title = styled.h2`
  color: ${(props) => props.theme.colors.darkDown};
  font-size: ${(props) => props.theme.fontSizes['3xl']};

  max-width: 80%;
  padding-bottom: ${(props) => props.theme.space[6]};
`;

export const Subtitle = styled.span`
  color: ${(props) => props.theme.colors.darkDown};
  font-size: ${(props) => props.theme.fontSizes['2xl']};
`;

export const Wrapper = styled.div`
  padding: 0 ${(props) => props.theme.space[11]};
  padding-top: ${(props) => props.theme.space[13]};
  padding-bottom: ${(props) => props.theme.space[20]};
`;
