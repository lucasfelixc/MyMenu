import { Restaurant } from '~/service/api/restaurant';

export type RestaurantDetailControllerProps = {
  data: {
    data: Restaurant;
    success: boolean;
  };
};

export type RestaurantDetailScreenProps = {
  data: Restaurant;
};
