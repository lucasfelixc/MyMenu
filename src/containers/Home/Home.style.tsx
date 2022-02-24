import styled from 'styled-components';

type ContainerProps = {
  loading: boolean;
};

export const Container = styled.div<ContainerProps>`
  height: 100vh;

  position: relative;
  overflow: ${(props) => props.loading && 'hidden'};
`;
