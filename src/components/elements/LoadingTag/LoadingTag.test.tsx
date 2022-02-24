import { render } from '@testing-library/react';

import { WrapperWithStyledComponents } from '~/test/utils';

import { LoadingTag } from './LoadingTag';

describe('LoadingTag', () => {
  test('should render', () => {
    const { getByTestId } = WrapperWithStyledComponents(
      render,
      <LoadingTag direction="horizontal" />
    );

    const container = getByTestId('loadingtag-container');

    expect(container).toBeInTheDocument();
  });
});
