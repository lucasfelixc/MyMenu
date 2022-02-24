import styled from 'styled-components';

type SubtitleProps = {
  isSmall: boolean;
};

export const Container = styled.div``;

export const Title = styled.h5`
  color: ${(props) => props.theme.colors.darkDown};
  font-size: ${(props) => props.theme.fontSizes['xxl']};
  margin-bottom: ${(props) => props.theme.space['3']};
`;

export const Subtitle = styled.p<SubtitleProps>`
  color: ${(props) => props.theme.colors.darkUp};
  font-size: ${(props) =>
    props.isSmall ? props.theme.fontSizes['lg'] : props.theme.fontSizes['xl']};
  font-weight: ${(props) => props.theme.fontWeights['regular']};
`;
