import { render } from '@testing-library/react';

import Logo from '~/assets/image/logo.svg';
import { WrapperWithStyledComponents } from '~/test/utils';

import { Header } from './Header';

describe('Header', () => {
  test('Should render', () => {
    const { getByTestId } = WrapperWithStyledComponents(render, <Header />);

    expect(getByTestId('header')).toBeInTheDocument();
  });
});
