import styled from 'styled-components';

export const Input = styled.input`
  width: 85%;
  height: 100%;

  border: none;
  outline: none;

  border-radius: ${(props) => props.theme.radii.medium};
`;

export const ContainerInput = styled.div`
  height: ${(props) => props.theme.sizes['13']};

  display: flex;
  align-items: center;
  justify-content: center;

  border: ${(props) => props.theme.borderWidths.hairline} solid
    ${(props) => props.theme.colors.lightMedium};

  border-radius: ${(props) => props.theme.radii.medium};

  background-color: ${(props) => props.theme.colors.white};
`;

export const ContentSearchImage = styled.div`
  width: 15%;

  display: flex;
  align-items: center;
  justify-content: center;
`;
