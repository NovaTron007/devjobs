import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react" // for reactjs

// apiSlice object using createApi
export const apiSlice = createApi({
    reducerPath: "api", // default if excl, but can be changed here
    baseQuery: fetchBaseQuery( { baseUrl: "/api/v1"}), // base url
    tagTypes: ["Jobs"],
    endpoints: (builder) => ({ // builder cases
        getJobs: builder.query({
            query: () => "/jobs", // query method get request
        }),
        getSingleJob: builder.query({
            query: (id) => ({
                url: `/jobs/${id}`,
                method: "GET"
            })
        }),
        // getSearchFilters: builder.query({
        //     query: (filters) => ({
        //         url: `/jobs/?location=${filters.location}&type=${filters.type}`,
        //         method: "GET"
        //     })
        // })
        
    })
})

// custom hooks to call slice
export const {
    useGetJobsQuery,
    useGetSingleJobQuery,
    useGetSearchFiltersQuery
} = apiSlice