import { ListScreen } from '~/components';

import { Container } from './Home.style';

export const Home = () => {
  return (
    <Container>
      <ListScreen
        listCards={[
          {
            id: '1',
            title: 'Test 1',
            img: 'image.png',
          },
        ]}
      />
    </Container>
  );
};
