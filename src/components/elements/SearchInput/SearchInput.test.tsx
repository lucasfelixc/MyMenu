import { render, fireEvent } from '@testing-library/react';

import { WrapperWithStyledComponents } from '~/test/utils';

import { SearchInput } from './SearchInput';

describe('SearchInput', () => {
  test('should render', () => {
    const { getByTestId } = WrapperWithStyledComponents(
      render,
      <SearchInput />
    );

    const container = getByTestId('container-input');

    expect(container).toBeInTheDocument();
  });

  test('should change value', () => {
    const { getByTestId } = WrapperWithStyledComponents(
      render,
      <SearchInput />
    );

    const input = getByTestId('input');
    fireEvent.change(input, { target: { value: 'text test' } });

    expect(input).toHaveAttribute('value', 'text test');
  });
});
