import { RestaurantCard } from '~/components';

import { Container, Wrapper, Title } from './RestaurantCardList.style';
import { ListProps } from './types';

export const RestaurantCardList = ({ listCards }: ListProps) => {
  return (
    <Container data-testid="list-restaurant-cards">
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
