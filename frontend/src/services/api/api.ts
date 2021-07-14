import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseUrl = "/v1/";

export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl }),
  refetchOnMountOrArgChange: 5,
  endpoints: () => ({}),
});
