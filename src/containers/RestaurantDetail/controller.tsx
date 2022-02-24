import { RestaurantDetail } from './RestaurantDetail';
import { RestaurantDetailControllerProps } from './types';

const Controller = ({ data, ...rest }: RestaurantDetailControllerProps) => {
  return <RestaurantDetail data={data} {...rest} />;
};

export default Controller;
