import { DetailScreen } from '~/components';

import { Container } from './RestaurantDetail.style';
import { RestaurantDetailControllerProps } from './types';

export const RestaurantDetail = ({ data }: RestaurantDetailControllerProps) => {
  return (
    <Container>
      <DetailScreen data={data.data} />
    </Container>
  );
};
