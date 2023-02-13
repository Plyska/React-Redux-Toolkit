import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { Post } from "../types/Post";

export const postApi = createApi({
    reducerPath: 'postApi',
    baseQuery: fetchBaseQuery({
        baseUrl: process.env.REACT_APP_URL as string
    }),
    endpoints: (build) => ({
        fetchAllPosts: build.query<Post[], number>({
            query: (userId: number) => ({
                url: '/posts',
                params: {
                    userId
                }
            })
        })
    }) 
})