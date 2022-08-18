import React from 'react'
import FilterBarWrapper from "../Assets/StyledComponents/FilterBarWrapper"
import FilterBarRow from "../Assets/StyledComponents/FilterBarRow"
import FormInput from "./FormInput"
import Checkbox from "./Checkbox"
import Button from "./Button"
import searchImg from "../Assets/Images/search.svg"
import locationImg from "../Assets/Images/location.svg"

const FilterBar = () => {
  return (
    <FilterBarWrapper>
        <FilterBarRow>
            <FormInput 
              type="text"
              name="search" 
              value=""
              placeholder="Filter by title, companies"
              handleChange="search"
              icon={searchImg}
            />
            <FormInput 
              type="text" 
              name="location" 
              value=""
              placeholder="Filter by location"
              handleChange="location"
              icon={locationImg}
            />            
              <Checkbox 
                checked={false}
                labelText="Full time only"
              />
              <Button text="Search"/>
        </FilterBarRow>
    </FilterBarWrapper>
  )
}

export default FilterBar