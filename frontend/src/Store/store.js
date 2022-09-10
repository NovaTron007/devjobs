import { configureStore } from "@reduxjs/toolkit" /// to create store
import { apiSlice } from "./Api/apiSlice" // import apiSlice into store
import filterReducer from "./filterSlice" // filterReducer w/state & action creators

// create store
export const store = configureStore({
    // provide api slice
    reducer: {
        [apiSlice.reducerPath]: apiSlice.reducer, // refer slice
        filters: filterReducer // refer as filters for getting state and dispatch
    },
    // provide middleware to default middleware
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(apiSlice.middleware),
    // allow devtools
    devTools: true
})