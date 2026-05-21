import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const jokesApiSlice = createApi({
  reducerPath: 'jokes',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://dadjokes.bamboozledaardvark.com',
  }),
  endpoints: (builder) => {
    return {
      getJokes: builder.query({
        query: (cursor = '') =>
          `/api/jokes?limit=20${cursor ? `&cursor=${cursor}` : ''}`,
        keepUnusedDataFor: 300,
      }),
    };
  },
});

export const { useGetJokesQuery } = jokesApiSlice;
