import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const jokesApiSlice = createApi({
  reducerPath: 'jokes',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://icanhazdadjoke.com',
    prepareHeaders: (headers) => {
      headers.set('Accept', 'application/json');
    },
  }),
  endpoints: (builder) => {
    return {
      getJokes: builder.query({
        query: () => '/search',
      }),
    };
  },
});

export const { useGetJokesQuery } = jokesApiSlice;
