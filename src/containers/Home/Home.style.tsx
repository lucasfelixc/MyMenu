import styled from 'styled-components';

type ContainerProps = {
  loading: boolean;
};

export const Container = styled.div<ContainerProps>`
  height: 100vh;

  position: relative;
  overflow: ${(props) => props.loading && 'hidden'};
`;

export const WrapperLoading = styled.div`
  margin: ${(props) => props.theme.space['4']} 0;

  @media (max-width: 768px) {
    position: absolute;
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
