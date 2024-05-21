import {createApi, fetchBaseQuery, retry} from "@reduxjs/toolkit/query/react";

const API_URL = import.meta.env.VITE_API_URL;
const LOCAL_API = 'http://localhost:3001/api';

const baseQuery = fetchBaseQuery({
  baseUrl: API_URL || LOCAL_API,
})

const baseQueryWithRetry = retry(baseQuery, {maxRetries: 3})


export const api = createApi({
  reducerPath: 'api',
  baseQuery: baseQueryWithRetry,
  tagTypes: ['Board', 'Category', 'Task', 'History'],
  endpoints: () => ({}),
})

