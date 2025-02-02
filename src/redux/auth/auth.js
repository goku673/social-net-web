import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

    const authApi = createApi({
        reducerPath: "authApi",
        baseQuery: fetchBaseQuery({
            baseUrl: process.env.NEXT_PUBLIC_URL_BALSE + "/user", 
        }),
        endpoints: (builder) => ({
            login: builder.mutation({
                query: (credentials) => ({
                    url: "/login",
                    method: "POST",
                    body: credentials,
                }),
            }),
            register: builder.mutation({
                query: (credentials) => ({
                    url: "/register",
                    method: "POST",
                    body: credentials,
                }),
            }),
        }),
    });


    export const { useLoginMutation, useRegisterMutation } = authApi;

    export default authApi;