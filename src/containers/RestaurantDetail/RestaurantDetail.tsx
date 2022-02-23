import { useEffect, useState } from 'react';

import { useRouter } from 'next/router';

import ImagTest from '~/assets/image/headerSmall.png';
import { HeaderDetail } from '~/components';

import { RestaurantDetailProps } from './types';

export const RestaurantDetail = ({ data }: RestaurantDetailProps) => {
  const { push } = useRouter();
  const [detail, setDetail] = useState({
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
  });

  useEffect(() => {
    if (data.success) {
      setDetail({ ...data.data });
    }
  }, [data]);

  useEffect(() => {
    console.log(detail);
  }, [detail]);

  return (
    <>
      <HeaderDetail
        imgBg={detail.image}
        imgPerfil={detail.logo}
        onClickBack={async () => await push('/')}
      />
    </>
  );
};
