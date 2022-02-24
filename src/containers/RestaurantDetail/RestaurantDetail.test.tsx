import { QueryClient, QueryClientProvider } from 'react-query';

import { render } from '@testing-library/react';
import { RecoilRoot } from 'recoil';

import { WrapperWithStyledComponents } from '~/test/utils';

import { RestaurantDetail } from './RestaurantDetail';

const pushFunc = jest.fn();

jest.mock('next/router', () => ({
  useRouter: () => ({
    push: pushFunc,
  }),
}));

describe('RestaurantDetail', () => {
  test('should render', () => {
    const { getByTestId } = WrapperWithStyledComponents(
      render,
      <QueryClientProvider client={new QueryClient()}>
        <RecoilRoot>
          <RestaurantDetail
            data={{
              data: {
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
              success: true,
            }}
          />
        </RecoilRoot>
      </QueryClientProvider>
    );

    const container = getByTestId('restaurant-detail');

    expect(container).toBeInTheDocument();
  });
});
