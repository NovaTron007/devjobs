import { createSlice } from "@reduxjs/toolkit"


// initialState object (this is an object!)
const initialState = {
    // useSelector: state.filters to access nested object or state if no nested object (filters)
    filters: {
        search: "",
        country: "",
        fulltime: true,
        page: 1
    },
    jobs: {}
}
// accepts obj of reducer funcs,slice name, init state value, & auto gens a slice reducer w/corresponding action creators & action types.
export const jobsSlice = createSlice({
    name: "jobsSlice", // action prefix name: jobs/addFilters 
    initialState, // initialState above
    reducers: { // call back function with actions: no need to write them separately
        // actions (update state with the payload!)
        addFilters: (state, action) => {
            console.log("state: ", state)
            state.filters = action.payload // state.filters if nested object in initialState, immer included (new immutable obj)
        },
        addJobs: (state, action) => {
            state.jobs = action.payload
        }
    },

})

export const { addFilters, addCountries, addJobs } = jobsSlice.actions // desctructure to allow us to dispatch action

export default jobsSlice.reducer