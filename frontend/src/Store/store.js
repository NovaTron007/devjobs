import { configureStore } from "@reduxjs/toolkit" /// to create store
import { jobsApi } from "./Api/jobsApi" // import jobsApi into store
import jobsSlice from "./jobsSlice" // jobsSlice w/state & action creators

// RTK STEP 2. api and slice to store (apis) to reducer and STATE. RTK query is directly built into store, has own state
export const store = configureStore({
    // provide api slice and create state
    reducer: {
        [jobsApi.reducerPath]: jobsApi.reducer, // register reducer from rtk query here
        filters: jobsSlice, //slice key name
        jobs: jobsSlice
    },
    // add all middlewares from rtk query to default middleware
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(jobsApi.middleware),
    // allow devtools
    devTools: true
})