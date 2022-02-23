import { useRouter } from 'next/router';

import { WrapperCard, TitleCard } from './RestaurantCard.style';
import { CardProps } from './types';

export const RestaurantCard = ({ id, img, title }: CardProps) => {
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
