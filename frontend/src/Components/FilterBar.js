import React, { useState } from 'react'
import FilterBarWrapper from "../Assets/StyledComponents/FilterBarWrapper"
import FilterBarRow from "../Assets/StyledComponents/FilterBarRow"
import FormInputText from "./FormInputText"
import FormInputSelect from "./FormInputSelect"
import FormInputCheckbox from "./FormInputCheckbox"
import SearchButton from "./SearchButton"
import searchImg from "../Assets/Images/search.svg"
import locationImg from "../Assets/Images/location.svg"
import Modal from "./Modal"
import { useGetJobsQuery } from "../Store/Api/apiSlice"
import { useSelector, useDispatch } from "react-redux"
import { addFilters } from "../Store/reducer"

const FilterBar = () => {
  // get api data
  const { data } = useGetJobsQuery()
  const dispatch = useDispatch()

  // get countries in data using Set
  const createCountryList = () => {
    let countryListSet = new Set()
    data.jobs.forEach(item => {
      countryListSet.add(item.country)
    });
    return Array.from(countryListSet)
  }

  // set countriesListSet into countryList
  const [countryList] = useState(() => createCountryList())

  // state for modal
  const [showModal, setShowModal] = useState(false)

  // form input values
  const initialState = {
    search: "",
    location: "",
    fulltime: true
  }

  // filter state with form object and values
  const [formFilters, setFormFilters] = useState(initialState)

  // get values for filter form
  const handleInput = (e) => {
    if(e.target.name === "fulltime") {
      let fulltime = e.target.checked ? true : false
      setFormFilters({...formFilters, [e.target.name]: fulltime})
    } else {
      setFormFilters({...formFilters, [e.target.name]: e.target.value})
    }
    dispatch(addFilters(formFilters))
  }

  // submit object
  const handleSubmit = () => {
    console.log("handleSubmit: ", formFilters)
  }
  

  return (
    <>
      <FilterBarWrapper>
          <FilterBarRow>
              <FormInputText 
                name="search" 
                value={formFilters.search}
                placeholder="Filter by title, companies"
                handleChange={handleInput}
                icon={searchImg}
              />
              <FormInputSelect 
                name="location"
                value={formFilters.location}
                list={["", ...countryList]}
                placeholder="Filter by location"
                handleChange={handleInput}
                icon={locationImg}
              />            
              <FormInputCheckbox
                name="fulltime"
                isFulltime={formFilters.fulltime}
                labelText="Full time only"
                handleChange={handleInput}
              />
              <button onClick={() => {dispatch(addFilters(formFilters)); setFormFilters({})}}>clear me</button>
              <SearchButton text="Search" showModal={showModal} setShowModalCb={setShowModal} handleSubmitCb={handleSubmit} />
          </FilterBarRow>
      </FilterBarWrapper>
      {/* pass form state to modal */}
      <Modal 
          showModal={showModal} 
          setShowModal={setShowModal}
          list={countryList}
          locationValue={formFilters.location}
          locationName={"location"}
          fulltimeName="fulltime"
          isFulltime={formFilters.fulltime}
          placeholder="Filter by location"
          handleChange={handleInput}
          handleSubmit={handleSubmit}
          />
    </>
  )
}

export default FilterBar