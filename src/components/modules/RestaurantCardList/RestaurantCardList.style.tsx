import styled from 'styled-components';

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  row-gap: ${(props) => props.theme.space['7']};

  position: -webkit-sticky;
  position: sticky;
`;

export const Container = styled.div`
  border-radius: ${(props) => props.theme.radii['xlarge']}
    ${(props) => props.theme.radii['xlarge']} 0 0;

  background-color: ${(props) => props.theme.colors['white']};

  width: 100%;
  position: relative;
  top: 50vw;
  left: 0;

  @media (min-width: 768px) {
    width: 80%;
    position: static;
  }

  @media (min-width: 992px) {
    width: 50%;
    position: static;
  }
`;

export const Title = styled.h5`
  padding: ${(props) => props.theme.space['10']}
    ${(props) => props.theme.space['10']} ${(props) => props.theme.space['5']}
    ${(props) => props.theme.space['10']};

  font-size: ${(props) => props.theme.fontSizes['xxl']};
`;

export const WrapperInput = styled.div`
  margin-top: ${(props) => props.theme.space['8']};
  padding: 0 ${(props) => props.theme.space['8']};
`;
