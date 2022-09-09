import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    search: "",
    location: "",
    fulltime: true
}

export const filterSlice = createSlice({
    name: "filters", // initialState above renamed
    initialState,
    reducers: { // call back function with actions: no need to write them separately
        // actions
        addFilters: (state, action) => {
            state.filters = action.payload
        }
    }
})

export const { addFilters } = filterSlice.actions // desctructure to allow us to dispatch action

export default filterSlice.reducer