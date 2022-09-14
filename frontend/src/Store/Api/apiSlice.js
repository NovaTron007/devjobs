import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react" // for reactjs

// apiSlice object using createApi
export const apiSlice = createApi({
    reducerPath: "api", // default if excl, but can be changed here
    baseQuery: fetchBaseQuery( { baseUrl: "/api/v1"}), // base url
    tagTypes: ["Jobs"],
    endpoints: (builder) => ({ // builder cases
        getJobs: builder.query({
            query: (filters) =>{
                const { search, country, fulltime } = filters;
                return {
                    url:`/jobs`, // query method get request
                    params: { search, country, fulltime }
                };
            }
        }),
        getSingleJob: builder.query({
            query: (id) => ({
                url: `/jobs/${id}`,
                method: "GET"
            })
        }),
        // getFilteredJobs: builder.query({
        //     query: (filters) => ({
        //         url: `/jobs/?location=${filters.location}&type=${filters.fulltime}`,
        //         method: "GET"
        //     })
        // })
        
    })
})

// custom hooks to call slice
export const {
    useGetJobsQuery,
    useGetSingleJobQuery,
    useGetFilteredJobsQuery
} = apiSlice