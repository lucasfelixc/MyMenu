import { Restaurant } from '~/service/api/restaurant';

export type RestaurantDetailProps = {
  data: {
    data: Restaurant;
    success: boolean;
  };
};
