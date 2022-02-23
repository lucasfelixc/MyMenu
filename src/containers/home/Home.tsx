import { Header, RestaurantCard } from '~/components';

import { Container } from './Home.style';

export const Home = () => {
  return (
    <Container>
      <Header />
      <RestaurantCard id="1" img="test.png" title="test" />
    </Container>
  );
};
