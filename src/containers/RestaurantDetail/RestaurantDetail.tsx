import { useEffect, useState } from 'react';

import ImagTest from '~/assets/image/headerSmall.png';
import { ImagePerfil } from '~/components';

import { RestaurantDetailProps } from './types';

export const RestaurantDetail = ({ data }: RestaurantDetailProps) => {
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

  return (
    <>
      <div>hello detail</div>
      <ImagePerfil img={ImagTest.src} />
    </>
  );
};
