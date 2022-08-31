import { configureStore } from "@reduxjs/toolkit"
import { jobsSlice } from "./Api/jobsSlice"

// create store
export const store = configureStore({
    // provide api slice
    reducer: {
        [jobsSlice.reducerPath]: jobsSlice.reducer, // refer slice
    },
    // provide middleware to default middleware
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(jobsSlice.middleware),
    devTools: true
})