import React from 'react'
import CheckBoxWrapper from "../Assets/StyledComponents/CheckboxWrapper"

const Checkbox = ({checked}) => {
  return (
    <CheckBoxWrapper>
        <label className="checkbox-container">
            <input type="checkbox" checked="checked" />
            <span className="checkmark"></span>
        </label>
        <div className="checkbox-title">Full time only</div>
    </CheckBoxWrapper>

  )
}

export default Checkbox