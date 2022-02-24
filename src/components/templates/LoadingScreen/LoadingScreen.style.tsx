import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  z-index: 99999;
  position: fixed;
  overflow: hidden;

  top: 0;
  left: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  background: ${(props) => props.theme.colors['lightOpacity']};
`;
