import React from 'react'
import FormInputTextWrapper from "../Assets/StyledComponents/FormInputTextWrapper"

const FormInputText = ({name, value, placeholder, handleChange, icon}) => {

  return (
    <FormInputTextWrapper>
        <span className="form-icon">{icon && <img src={icon} alt={`filter-${name}`} /> }</span>
        <input className="form-input"
            type="text"
            name={name}
            value={value}
            placeholder={placeholder ?? ""}
            onChange={handleChange}
        />
    </FormInputTextWrapper>

  )
}

export default FormInputText