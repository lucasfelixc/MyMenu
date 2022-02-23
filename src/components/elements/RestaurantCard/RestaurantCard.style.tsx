import styled from 'styled-components';

type WrapperCardProps = {
  img: string;
};

export const WrapperCard = styled.div<WrapperCardProps>`
  width: ${(props) => props.theme.sizes['25']};
  height: ${(props) => props.theme.sizes['26']};

  background: linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(${(props) => props.img});
  background-size: cover;
  background-position: center;

  border-radius: ${(props) => props.theme.radii.medium};

  display: flex;
  align-items: end;
  justify-self: center;
`;

export const TitleCard = styled.span`
  color: ${(props) => props.theme.colors.white};
  font-weight: ${(props) => props.theme.fontWeights.strong};

  padding-left: ${(props) => props.theme.space['4']};
  padding-bottom: ${(props) => props.theme.space['4']};
`;
