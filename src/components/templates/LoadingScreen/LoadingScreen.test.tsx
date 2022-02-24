import { render } from '@testing-library/react';
import { RecoilRoot } from 'recoil';

import { WrapperWithStyledComponents } from '~/test/utils';

import { LoadingScreen } from './LoadingScreen';

describe('LoadingScreen', () => {
  test('should render', () => {
    const { getByTestId } = WrapperWithStyledComponents(
      render,
      <RecoilRoot>
        <LoadingScreen loading={true} />
      </RecoilRoot>
    );

    const container = getByTestId('loading-screen');

    expect(container).toBeInTheDocument();
  });
});
