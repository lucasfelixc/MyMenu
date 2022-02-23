import { render, fireEvent, waitFor } from '@testing-library/react';
import { RouterContext } from 'next/dist/shared/lib/router-context';

import {
  WrapperWithStyledComponents,
  createMockRouter,
} from '../../../test/utils';
import { RestaurantCard } from './RestaurantCard';

const MockRestaurant = {
  title: 'Restaurante 1',
  img: 'image.png',
  id: '1',
};

const pushFunc = jest.fn();

jest.mock('next/router', () => ({
  useRouter: () => ({
    push: pushFunc,
  }),
}));

describe('Restaurant Card', () => {
  test('Should render a simple restaurant card', () => {
    const { getByTestId } = WrapperWithStyledComponents(
      render,
      <RouterContext.Provider value={createMockRouter({})}>
        <RestaurantCard
          id={MockRestaurant.id}
          img={MockRestaurant.img}
          title={MockRestaurant.title}
        />
      </RouterContext.Provider>
    );
    const WrapperCard = getByTestId('wrapper-card');

    expect(WrapperCard).toBeInTheDocument();
  });

  test('Should call detail route when click', async () => {
    const { getByTestId } = WrapperWithStyledComponents(
      render,
      <RouterContext.Provider value={createMockRouter({})}>
        <RestaurantCard
          id={MockRestaurant.id}
          img={MockRestaurant.img}
          title={MockRestaurant.title}
        />
      </RouterContext.Provider>
    );
    const WrapperCard = getByTestId('wrapper-card');
    fireEvent.click(WrapperCard);

    await waitFor(async () => {
      expect(pushFunc).toHaveBeenCalledWith('/restaurantes/1');
    });
  });
});
