import styled, { keyframes } from 'styled-components';

const loading = keyframes`
	0% {
		transform: rotate(0);
	}
	100% {
		transform: rotate(360deg);
	}
`;

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  z-index: 99999;
  position: fixed;
  overflow: hidden;

  top: 0;
  left: 0;

  background: ${(props) => props.theme.colors['lightOpacity']};

  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  justify-content: center;

  color: ${(props) => props.theme.colors['darkDown']};
  font-size: ${(props) => props.theme.fontSizes['2xl']};
`;

export const WrapperSpinner = styled.div`
  animation: ${loading} 2s linear infinite;
`;

export const SpanLoading = styled.span``;
