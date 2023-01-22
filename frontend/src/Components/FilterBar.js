import { useState } from 'react'
import { useDispatch, useSelector } from "react-redux"
import FilterBarWrapper from "../Assets/StyledComponents/FilterBarWrapper"
import FilterBarRow from "../Assets/StyledComponents/FilterBarRow"
import FormInputText from "./FormInputText"
import FormInputSelect from "./FormInputSelect"
import FormInputCheckbox from "./FormInputCheckbox"
import SearchButton from "./SearchButton"
import searchImg from "../Assets/Images/search.svg"
import locationImg from "../Assets/Images/location.svg"
import Modal from "./Modal"
// store
import { useGetJobsQuery } from "../Store/Api/jobsApi"
import { addFilters } from "../Store/jobsSlice"


const FilterBar = () => {
  // state from store
  const { filters } = useSelector((state) => state.filters)

  // call api (refetches based on local state when using query)
  const { data, isSuccess } = useGetJobsQuery(filters)

  // local state for filter inputs
  const [values, setValues] = useState({search: "", country: "", fulltime: false})

  // checkbox state
  const [checked, setChecked] = useState(false)

  // show modal
  const [showModal, setShowModal] = useState(false)

  // dispatch action in slice to update store
  const dispatch = useDispatch()


  
  // handle form inputs
  const handleInput = (e) => {
    // input fields
    setValues({...values, [e.target.name]: e.target.value})
    console.log("handleInput: ", e.target.value)
  }

  // handle checkbox, update checkbox first then add to values
  const handleCheckbox = (e) => {
    setChecked(!checked)
    setValues({...values, [e.target.name]: checked})
  }

  // submit object to api
  const handleSubmit = (e) => {
    e.preventDefault()
    // dispatch filters for modal
    dispatch(addFilters(values))
  }


  if (isSuccess) return (
    <>
      <form>
        <FilterBarWrapper>
          <FilterBarRow>
            <FormInputText
              name="search"
              value={values?.search}
              placeholder="Filter by title, companies"
              handleChange={handleInput}
              icon={searchImg}
            />
            <FormInputSelect
              name="country"
              value={values?.country}
              list={data && ["All", ...data.countries]}
              placeholder="Filter by location"
              handleChange={handleInput}
              icon={locationImg}
            />
            <FormInputCheckbox
              name="fulltime"
              labelText="Full time only"
              checked={values?.fulltime}
              value={values?.fulltime}
              handleChange={handleCheckbox}
            />
            {/* search and mobile filter button */}
            <SearchButton text="Search" showModal={showModal} setShowModalCb={setShowModal} handleSubmitCb={handleSubmit} />
          </FilterBarRow>
        </FilterBarWrapper>
      </form>

      {/* Modal: pass state to modal */}
      <Modal 
        showModal={showModal} 
        setShowModalCb={setShowModal} 
        list={data?.countries} 
        handleChange={handleInput} 
        values={values} />
    </>

  )
}

export default FilterBar