import { render } from '@testing-library/react';

import { WrapperWithStyledComponents } from '~/test/utils';

import { DetailScreen } from './DetailScreen';

const pushFunc = jest.fn();

jest.mock('next/router', () => ({
  useRouter: () => ({
    push: pushFunc,
  }),
}));

describe('DetailScreen', () => {
  test('Should render', () => {
    const { getByTestId } = WrapperWithStyledComponents(
      render,
      <DetailScreen
        data={{
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
        }}
      />
    );

    const container = getByTestId('detail-screen');

    expect(container).toBeInTheDocument();
  });
});
