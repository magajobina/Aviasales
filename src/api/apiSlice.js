/* eslint-disable import/prefer-default-export */
/* eslint-disable no-unused-vars */
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const api = createApi({
  baseQuery: fetchBaseQuery({
    // Fill in your own server starting URL here
    baseUrl: '/',
  }),
  endpoints: (build) => ({}),
})