import { render } from '@testing-library/react';

import { WrapperWithStyledComponents } from '~/test/utils';

import { HeaderDetail } from './HeaderDetail';

jest.mock('next/image', () => ({ src, alt }: any) => (
  <img src={src} alt={alt} />
));

describe('Header', () => {
  test('Should render', () => {
    const { getByTestId } = WrapperWithStyledComponents(
      render,
      <HeaderDetail
        imgBg="image.png"
        imgPerfil="image.png"
        onClickBack={() => console.log('voltou')}
      />
    );

    expect(getByTestId('header-detail')).toBeInTheDocument();
  });
});
