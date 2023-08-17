import { apiSlice } from '../apiSlice';

export const authSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (credentials) => ({
        url: '/auth/login',
        method: 'POST',
        body: { ...credentials },
      }),
    })
  }),
});

export const { useLoginMutation } = authSlice