import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react" // for reactjs

// jobsSlice object
export const jobsSlice = createApi({
    reducerPath: "api", // default if excl, but can be changed here
    baseQuery: fetchBaseQuery( { baseUrl: "/api/v1"}), // base url
    endpoints: (builder) => ({ // builder cases
        getJobs: builder.query({
            query: () => "/jobs", // query method get request
        }),
        getSingleJob: builder.query({
            query: (id) => ({
                url: `/jobs/${id}`,
                method: "GET"
            })
        })
    })
})

// custom hooks to call slice
export const {
    useGetJobsQuery,
    useGetSingleJobQuery,
} = jobsSlice