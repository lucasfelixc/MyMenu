import { render } from '@testing-library/react';
import { RouterContext } from 'next/dist/shared/lib/router-context';
import { RecoilRoot } from 'recoil';

import { WrapperWithStyledComponents, createMockRouter } from '~/test/utils';

import { ListScreen } from './ListScreen';

const MockListCards = [
  {
    id: '1',
    name: 'Test 1',
    image: 'image.png',
    logo: '',
    description: '',
    telephone: '',
    price_range: '',
    payment_methods: '',
    website: '',
    opening_hours: '',
  },
];

describe('ListScreen', () => {
  test('Should render', () => {
    const { getByTestId } = WrapperWithStyledComponents(
      render,
      <RouterContext.Provider value={createMockRouter({})}>
        <RecoilRoot>
          <ListScreen listCards={MockListCards} />
        </RecoilRoot>
      </RouterContext.Provider>
    );

    const list = getByTestId('list-screen');
    const header = getByTestId('header');

    expect(list).toBeInTheDocument();
    expect(header).toBeInTheDocument();
  });
});
