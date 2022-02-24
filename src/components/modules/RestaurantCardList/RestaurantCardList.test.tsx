import { render } from '@testing-library/react';
import { RouterContext } from 'next/dist/shared/lib/router-context';
import { RecoilRoot } from 'recoil';

import { WrapperWithStyledComponents, createMockRouter } from '~/test/utils';

import { RestaurantCardList } from './RestaurantCardList';

describe('RestaurantCardList', () => {
  test('Should render', () => {
    const { getByTestId } = WrapperWithStyledComponents(
      render,
      <RouterContext.Provider value={createMockRouter({})}>
        <RecoilRoot>
          <RestaurantCardList
            listCards={[
              {
                id: '',
                name: '',
                image: '',
                logo: '',
                description: '',
                telephone: '',
                price_range: '',
                payment_methods: '',
                website: '',
                opening_hours: '',
              },
            ]}
          />
        </RecoilRoot>
      </RouterContext.Provider>
    );
    const list = getByTestId('list-restaurant-cards');

    expect(list).toBeInTheDocument();
  });
});
