import React from 'react'
import FormInputWrapper from "../Assets/StyledComponents/FormInputWrapper"

const FormInput = ({type, name, value, placeholder, handleChange, icon}) => {

  return (
    <FormInputWrapper>
        <span className="form-icon">{icon && <img src={icon} alt={`filter-${name}`} /> }</span>
        <input className="form-input"
            type={type}
            name={name}
            value={value}
            placeholder={placeholder ?? ""}
            onChange={handleChange}
        />
    </FormInputWrapper>

  )
}

export default FormInput