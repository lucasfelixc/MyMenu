import { render } from '@testing-library/react';

import { Header } from './Header';

describe('Header', () => {
  test('Should render', () => {
    const { getByTestId } = render(<Header />);
    const header = getByTestId('header');

    expect(header).toBeInTheDocument();
  });
});
