import { TagInfo } from '~/components';

import {
  Container,
  Name,
  Divider,
  WrapperInfo,
} from './RestaurantDetailInfo.style';
import { RestaurantDetailInfoProps } from './types';

export const RestaurantDetailInfo = ({
  userData,
}: RestaurantDetailInfoProps) => {
  return (
    <Container>
      <Name>{userData.name}</Name>
      <WrapperInfo>
        <TagInfo
          title="Descrição"
          subtitle={userData.description}
          isSmall={false}
        />
      </WrapperInfo>
      <WrapperInfo>
        <TagInfo
          title="Contato"
          subtitle={`${userData.telephone}\n${userData.website}`}
          isSmall={false}
        />
      </WrapperInfo>
      <WrapperInfo>
        <TagInfo
          title="Faixa de preço"
          subtitle={userData.price_range}
          isSmall={false}
        />
      </WrapperInfo>
      <Divider />
      <WrapperInfo>
        <TagInfo
          title="Horário de funcionamento"
          subtitle={userData.opening_hours}
          isSmall={true}
        />
      </WrapperInfo>
      <WrapperInfo>
        <TagInfo
          title="Formas de pagamento"
          subtitle={userData.payment_methods}
          isSmall={true}
        />
      </WrapperInfo>
    </Container>
  );
};
