import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react" // for reactjs

// apiSlice object
export const apiSlice = createApi({
    reducerPath: "api", // default if excl, but can be changed here
    baseQuery: fetchBaseQuery( { baseUrl: "/api/v1"}), // base url
    endpoints: (builder) => ({ // builder cases
        getJobs: builder.query({
            query: () => "/jobs", // query method get request
        })
    })
})

// custom hooks to call slice
export const {
    useGetJobsQuery
} = apiSlice