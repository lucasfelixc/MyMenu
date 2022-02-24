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

  @media (min-width: 768px) {
    width: 80%;
    height: ${(props) => props.theme.sizes.variants['30']};

    transition: 0.4s;

    :hover {
      background: linear-gradient(0deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
        url(${(props) => props.img});
      background-size: cover;
      background-position: center;

      box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);

      transform: scale(1.02);
      -webkit-transform: scale(1.02);

      cursor: pointer;
    }
  }
`;

export const TitleCard = styled.span`
  color: ${(props) => props.theme.colors.white};
  font-weight: ${(props) => props.theme.fontWeights.strong};

  padding-left: ${(props) => props.theme.space['4']};
  padding-bottom: ${(props) => props.theme.space['4']};
`;
