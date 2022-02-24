import { render } from '@testing-library/react';

import { WrapperWithStyledComponents } from '~/test/utils';

import { SearchInput } from './SearchInput';

describe('LoadingTag', () => {
  test('should render', () => {
    const { getByTestId } = WrapperWithStyledComponents(
      render,
      <SearchInput />
    );

    const container = getByTestId('input');

    expect(container).toBeInTheDocument();
  });
});
