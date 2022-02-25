import { RestaurantCard, SearchInput } from '~/components';
import { useWindowSize } from '~/utils';

import {
  Container,
  Wrapper,
  Title,
  WrapperInput,
} from './RestaurantCardList.style';
import { ListProps } from './types';

export const RestaurantCardList = ({ listCards }: ListProps) => {
  const { width } = useWindowSize();

  return (
    <Container data-testid="list-restaurant-cards">
      {(width as number) < 768 && (
        <WrapperInput data-testid="wrapper-input">
          <SearchInput />
        </WrapperInput>
      )}

      <Title>Restaurantes</Title>
      <Wrapper>
        {listCards.map((card, index) => (
          <RestaurantCard
            key={index}
            id={card.id}
            title={card.name}
            img={card.image}
          />
        ))}
      </Wrapper>
    </Container>
  );
};
