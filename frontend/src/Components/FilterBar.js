import React from 'react'
import FilterBarWrapper from "../Assets/StyledComponents/FilterBarWrapper"
import FilterBarRow from "../Assets/StyledComponents/FilterBarRow"
import FormInputText from "./FormInputText"
import FormInputCheckbox from "./FormInputCheckbox"
import SearchButton from "./SearchButton"
import searchImg from "../Assets/Images/search.svg"
import locationImg from "../Assets/Images/location.svg"
import Modal from "./Modal"

const FilterBar = () => {
  return (
    <>
    <FilterBarWrapper>
        <FilterBarRow>
            <FormInputText 
              type="text"
              name="search" 
              value=""
              placeholder="Filter by title, companies"
              handleChange="search"
              icon={searchImg}
            />
            <FormInputText 
              type="text" 
              name="location" 
              value=""
              placeholder="Filter by location"
              handleChange="location"
              icon={locationImg}
            />            
              <FormInputCheckbox 
                checked={false}
                labelText="Full time only"
              />
              <SearchButton text="Search"/>
        </FilterBarRow>
    </FilterBarWrapper>
    <Modal />
    </>
  )
}

export default FilterBar