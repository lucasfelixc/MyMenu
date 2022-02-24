import styled from 'styled-components';

type ContainerProps = {
  loading: boolean;
};

export const Container = styled.div<ContainerProps>`
  width: 100vw;
  height: 100vh;

  position: relative;
  overflow: ${(props) => props.loading && 'hidden'};
`;
