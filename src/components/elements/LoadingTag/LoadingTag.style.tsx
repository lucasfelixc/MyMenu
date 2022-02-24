import styled, { keyframes } from 'styled-components';

type StyleProps = {
  direction: 'vertical' | 'horizontal';
};

const loading = keyframes`
	0% {
		transform: rotate(0);
	}
	100% {
		transform: rotate(360deg);
	}
`;

export const Container = styled.div<StyleProps>`
  display: flex;
  flex-direction: ${(props) =>
    props.direction === 'vertical' ? 'column-reverse' : 'row'};
  align-items: center;
  justify-content: center;
`;

export const WrapperSpinner = styled.div`
  width: 20px;
  height: 20px;

  animation: ${loading} 2s linear infinite;
`;

export const SpanLoading = styled.span<StyleProps>`
  font-size: ${(props) =>
    props.direction === 'horizontal'
      ? props.theme.fontSizes['xl']
      : props.theme.fontSizes['2xl']};
  color: ${(props) => props.theme.colors['darkDown']};
  margin-right: ${(props) =>
    props.direction === 'horizontal' ? props.theme.space['4'] : '0'};
`;
