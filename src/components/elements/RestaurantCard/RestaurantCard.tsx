import { useRouter } from 'next/router';

import { WrapperCard, TitleCard } from './RestaurantCard.style';
import { Props } from './types';

export const RestaurantCard = ({ id, img, title }: Props) => {
  const { push } = useRouter();

  const handlePush = async (id: string) => {
    await push(`/restaurantes/${id}`);
  };

  return (
    <WrapperCard
      data-testid="wrapper-card"
      img={img}
      onClick={() => handlePush(id)}
    >
      <TitleCard>{title}</TitleCard>
    </WrapperCard>
  );
};
