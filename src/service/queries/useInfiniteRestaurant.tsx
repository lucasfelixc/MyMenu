import { useInfiniteQuery, UseInfiniteQueryResult } from 'react-query';

import {
  restaurantApi,
  RestaurantFetchResponse,
} from '~/service/api/restaurant';

type InfiniteRestaurantParams = {
  pageParam?: number;
};

export type InfiniteRestaurantQueryProps = {
  total: number;
  data: RestaurantFetchResponse;
};

export const useInfiniteRestaurants =
  (): UseInfiniteQueryResult<InfiniteRestaurantQueryProps> => {
    return useInfiniteQuery(
      'restaurants',
      ({ pageParam = 1 }: InfiniteRestaurantParams) => {
        const url = `?page=${pageParam}&limit=10`;

        return restaurantApi<any>(url).then((response: any) => {
          return {
            total: response?.count ?? 0,
            data: response ?? undefined,
          };
        });
      },
      {
        getNextPageParam: (
          lastPage: InfiniteRestaurantQueryProps,
          allPages: any
        ) => allPages.length + 1,
      }
    );
  };
