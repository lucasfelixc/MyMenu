export type Restaurant = {
  id: string;
  name: string;
  image: string;
  logo: string;
  description: string;
  telephone: string;
  price_range: string;
  payment_methods: string;
  website: string;
  opening_hours: string;
};

export type RestaurantList = {
  data: Restaurant[];
};

export type RestaurantFetchResponse = {
  success: boolean;
  pagination: {
    total: number;
    per_page: number;
  };
  data: Restaurant[];
};
