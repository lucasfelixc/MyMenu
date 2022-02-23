import { render } from '@testing-library/react';

import { WrapperWithStyledComponents } from '~/test/utils';

import { ImagePerfil } from './ImagePerfil';

describe('ImagePerfil', () => {
  test('Should render', () => {
    const { getByTestId } = WrapperWithStyledComponents(
      render,
      <ImagePerfil img={'test.png'} />
    );
    const container = getByTestId('container-image');

    expect(container).toBeInTheDocument();
  });
});
