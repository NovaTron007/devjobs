import { createSlice } from "@reduxjs/toolkit"

// initialState object
const initialState = {
    filters: { // useSelector state.filters to access object state or state if no nested object (filters)
        search: "",
        country: "",
        fulltime: true
    }
}
// accepts obj of reducer funcs,slice name, init state value, & auto gens a slice reducer w/corresponding action creators & action types.
export const filterReducer = createSlice({
    name: "filters", // action prefix name: filters/addFilters 
    initialState, // initialState above
    reducers: { // call back function with actions: no need to write them separately
        // actions
        addFilters: (state, action) => {
            state.filters = action.payload
        }
    }
})

export const { addFilters, addCountries } = filterReducer.actions // desctructure to allow us to dispatch action

export default filterReducer.reducer