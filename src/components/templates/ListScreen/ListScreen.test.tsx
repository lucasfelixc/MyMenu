import { render } from '@testing-library/react';
import { RouterContext } from 'next/dist/shared/lib/router-context';

import { WrapperWithStyledComponents, createMockRouter } from '~/test/utils';

import { ListScreen } from './ListScreen';

const MockListCards = [
  {
    id: '1',
    title: 'Test 1',
    img: 'image.png',
  },
];

describe('ListScreen', () => {
  test('Should render', () => {
    const { getByTestId } = WrapperWithStyledComponents(
      render,
      <RouterContext.Provider value={createMockRouter({})}>
        <ListScreen listCards={MockListCards} />
      </RouterContext.Provider>
    );

    const list = getByTestId('list-screen');
    const header = getByTestId('header');

    expect(list).toBeInTheDocument();
    expect(header).toBeInTheDocument();
  });
});
