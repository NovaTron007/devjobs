import { configureStore } from "@reduxjs/toolkit" /// to create store
import { apiSlice } from "./Api/apiSlice" // import apiSlice into store
import filterSlice from "./reducer"

// create store
export const store = configureStore({
    // provide api slice
    reducer: {
        [apiSlice.reducerPath]: apiSlice.reducer, // refer slice
        filters: filterSlice
    },
    // provide middleware to default middleware
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(apiSlice.middleware),
    devTools: true
})