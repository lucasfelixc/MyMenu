import { GetServerSideProps } from 'next';

import { restaurantDetail } from '~/service/api/restaurant';

const getServerSideProps: GetServerSideProps = async (context) => {
  const { query } = context;

  const data = await restaurantDetail(`/${query.id}`);

  return {
    props: { data },
  };
};

export default getServerSideProps;
