import { useEffect, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';

import { ListScreen } from '~/components';
import { Restaurant } from '~/service/api/restaurant';
import { useInfiniteRestaurants } from '~/service/queries/useInfiniteRestaurant';

import { Container } from './Home.style';

export const Home = () => {
  const { data, fetchNextPage, hasNextPage, isError, isFetching } =
    useInfiniteRestaurants();
  const [list, setList] = useState<Restaurant[]>([]);

  useEffect(() => {
    const updatedData = data?.pages
      .map((response) => response.data.data)
      .flat();

    if (data) {
      setList([...(updatedData as Restaurant[])]);
    }
  }, [data]);

  return (
    <Container>
      <InfiniteScroll
        dataLength={list.length}
        hasMore={!!hasNextPage}
        loader={<div />}
        next={() => fetchNextPage()}
        scrollableTarget="scrollable-box"
      >
        <ListScreen listCards={list as Restaurant[] | []} />
      </InfiniteScroll>
    </Container>
  );
};
