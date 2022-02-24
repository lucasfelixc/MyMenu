import styled from 'styled-components';

export const Container = styled.div`
  padding: 0 ${(props) => props.theme.space['10']};
`;

export const Name = styled.h2`
  text-align: center;
  color: ${(props) => props.theme.colors['darkDown']};

  padding-top: ${(props) => props.theme.space['10']};
  margin-bottom: ${(props) => props.theme.space['10']};
`;

export const WrapperInfo = styled.div`
  margin-bottom: ${(props) => props.theme.space['10']};
`;

export const Divider = styled.div`
  width: 100%;
  height: ${(props) => props.theme.sizes.variants['line-small']};

  background-color: ${(props) => props.theme.colors['light']};

  margin-bottom: ${(props) => props.theme.space['10']};
`;
