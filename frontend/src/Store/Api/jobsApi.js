import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react" // for reactjs

// RTK step 1. jobsApi for requests: object using createApi for api requests
export const jobsApi = createApi({
    reducerPath: "api", // default named "api", if excl, but can be changed here
    baseQuery: fetchBaseQuery( { baseUrl: "/api/v1"}), // base url
    tagTypes: ["Jobs"],

    // builder query for get requests
    endpoints: (builder) => ({ 
        getJobs: builder.query({
            query: (values) => {
                 if(values) {
                    const { search, country, fulltime, page } = values;
                    return {
                        url:`/jobs`, 
                        method: "GET",
                        params: { search, country, fulltime, page}
                    }
                 } else {
                    return {
                        url: `/jobs`,
                        method:"GET"
                    }
                 }

                },
                // Only have one cache entry because the arg always maps to one string
                serializeQueryArgs: ({ endpointName }) => {
                return endpointName
                },
                // Always merge incoming data to the cache entry
                merge: (currentCache, newItems) => {
                currentCache.push(...newItems)
                },
                // Refetch when the page arg changes
                forceRefetch({ currentArg, previousArg }) {
return currentArg !== previousArg
      }
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
    useGetFilteredJobsQuery
} = jobsApi