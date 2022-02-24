import { useRouter } from 'next/router';

import { useLoadingState } from '~/context/loadingAtom';

import { WrapperCard, TitleCard } from './RestaurantCard.style';
import { CardProps } from './types';

export const RestaurantCard = ({ id, img, title }: CardProps) => {
  const { setLoading } = useLoadingState();
  const { push } = useRouter();

  const handlePush = async (id: string) => {
    setLoading({ isLoading: true });
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
