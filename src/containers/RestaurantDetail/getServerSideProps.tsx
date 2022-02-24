import { GetServerSideProps } from 'next';

import { restaurantApi } from '~/service/api/restaurant';

const getServerSideProps: GetServerSideProps = async (context) => {
  const { query } = context;

  const data = await restaurantApi(`/${query.id}`);

  return {
    props: { data },
  };
};

export default getServerSideProps;
