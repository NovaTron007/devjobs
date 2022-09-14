import { useState } from 'react'
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
import { useGetJobsQuery } from "../Store/Api/apiSlice"
import { useSelector, useDispatch } from "react-redux"
import { addFilters } from "../Store/filterSlice"

const FilterBar = () => {
  // dispatch action
  const dispatch = useDispatch()

  // get filters state from store
  const { filters } = useSelector((state) => state.filters)

  // get data from api
  const { data, isSuccess } = useGetJobsQuery(filters)

  // show modal
  const [showModal, setShowModal] = useState(false)

  // set filter values from filter form inputs
  const handleInput = (e) => {
    // update checkbox: use state for controlled checkbox
    if (e.target.name === "fulltime") {
      dispatch(addFilters({ ...filters, [e.target.name]: !filters.fulltime }))
    } else {
      dispatch(addFilters({ ...filters, [e.target.name]: e.target.value }))
    }
  }

  // submit object to api
  const handleSubmit = (e) => {
    e.preventDefault()
  }


  if (isSuccess) return (
    <>
      <form>
        <FilterBarWrapper>
          <FilterBarRow>
            <FormInputText
              name="search"
              value={filters && filters.search}
              placeholder="Filter by title, companies"
              handleChange={handleInput}
              icon={searchImg}
            />
            <FormInputSelect
              name="country"
              value={filters && filters.country}
              list={data && ["All", ...data.countries]}
              placeholder="Filter by location"
              handleChange={handleInput}
              icon={locationImg}
            />
            <FormInputCheckbox
              name="fulltime"
              value="fulltime"
              isChecked={filters && filters.fulltime}
              labelText="Full time only"
              handleChange={handleInput}
            />
            {/* search and mobile filter button */}
            <SearchButton text="Search" showModal={showModal} setShowModalCb={setShowModal} handleSubmitCb={handleSubmit} />
          </FilterBarRow>
        </FilterBarWrapper>
      </form>

      {/* Modal: pass state to modal */}
      <Modal showModal={showModal} setShowModalCb={setShowModal} list={data && data.countries} handleChange={handleInput} />
    </>

  )
}

export default FilterBar