import { QueryClient, QueryClientProvider } from 'react-query';

import { render } from '@testing-library/react';
import { RecoilRoot } from 'recoil';

import { WrapperWithStyledComponents } from '~/test/utils';

import { Home } from './Home';

describe('Home', () => {
  test('should render', () => {
    const { getByTestId } = WrapperWithStyledComponents(
      render,
      <QueryClientProvider client={new QueryClient()}>
        <RecoilRoot>
          <Home />
        </RecoilRoot>
      </QueryClientProvider>
    );

    const container = getByTestId('home');

    expect(container).toBeInTheDocument();
  });
});
