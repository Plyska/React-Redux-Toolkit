import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { Album } from "../types/Album";

export const albumApi = createApi({
    reducerPath: 'albumApi',
    baseQuery: fetchBaseQuery({
        baseUrl: process.env.REACT_APP_URL as string
    }),
    endpoints: (build) => ({
        fetchAllAlbums: build.query<Album[], number>({
            query: (userId: number) => ({
                url: '/albums',
                params: {
                    userId
                }
            })
        })
    }) 
})