import { useEffect, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';

import { ListScreen, LoadingTag } from '~/components';
import { useLoadingState } from '~/context/loadingAtom';
import { Restaurant } from '~/service/api/restaurant';
import { useInfiniteRestaurants } from '~/service/queries/useInfiniteRestaurant';

import { Container, WrapperLoading } from './Home.style';

export const Home = () => {
  const {
    loading: { isLoading },
  } = useLoadingState();
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

  const LoadingWrapper = () => {
    return (
      <WrapperLoading>
        <LoadingTag direction="horizontal" />
      </WrapperLoading>
    );
  };

  return (
    <Container loading={isLoading} data-testid="home">
      <InfiniteScroll
        dataLength={list.length}
        hasMore={!!hasNextPage}
        loader={<LoadingWrapper />}
        next={() => fetchNextPage()}
        scrollableTarget="scrollable-box"
      >
        <ListScreen listCards={list as Restaurant[]} />
      </InfiniteScroll>
    </Container>
  );
};
