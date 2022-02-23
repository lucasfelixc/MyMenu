import { Header, RestaurantCardList } from '~/components';
import { ListProps } from '~/components/modules/RestaurantCardList/types';

import { Container } from './ListScreen.style';

export const ListScreen = ({ listCards }: ListProps) => {
  return (
    <Container data-testid="list-screen">
      <Header />
      <RestaurantCardList listCards={listCards} />
    </Container>
  );
};
