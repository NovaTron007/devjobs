import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    // useSelector state.filters to access object state or state if no nested object (filters)
    filters: {
        search: "",
        location: "",
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

export const { addFilters } = filterReducer.actions // desctructure to allow us to dispatch action

export default filterReducer.reducer