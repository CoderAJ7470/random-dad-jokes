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
        query: (page = 1) => '/search?page=' + page,
      }),
    };
  },
});

export const { useGetJokesQuery } = jokesApiSlice;
