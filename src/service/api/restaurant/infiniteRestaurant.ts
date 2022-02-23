import { api } from '..';

export const fetchInfiniteData = <T>(url: string): Promise<T> => {
  return api
    .get<T>(url)
    .then((response) => {
      if (response.status >= 200 && response.status < 300) {
        return response.data;
      }

      throw new Error(response.status.toString());
    })
    .catch((error) => {
      throw new Error(error);
    });
};
