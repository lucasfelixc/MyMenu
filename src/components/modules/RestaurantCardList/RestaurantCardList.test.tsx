import { render } from '@testing-library/react';
import { RouterContext } from 'next/dist/shared/lib/router-context';

import { WrapperWithStyledComponents, createMockRouter } from '~/test/utils';

import { RestaurantCardList } from './RestaurantCardList';

describe('RestaurantCardList', () => {
  test('Should render', () => {
    const { getByTestId } = WrapperWithStyledComponents(
      render,
      <RouterContext.Provider value={createMockRouter({})}>
        <RestaurantCardList
          listCards={[{ id: '1', img: 'image.png', title: 'Title test' }]}
        />
      </RouterContext.Provider>
    );
    const list = getByTestId('list-restaurant-cards');

    expect(list).toBeInTheDocument();
  });
});
