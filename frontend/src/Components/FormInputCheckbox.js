import { useState } from 'react'
import CheckBoxWrapper from "../Assets/StyledComponents/CheckboxWrapper"

const Checkbox = () => {

  const [isChecked, setIsChecked] = useState(false)


  return (
    <CheckBoxWrapper>
        <label className="checkbox-container">
            <input type="checkbox" checked={isChecked ? true : false} onChange={() => setIsChecked(!isChecked)}/>
            <span className="checkmark"></span>
        </label>
        <div className="checkbox-title">Full time only</div>
    </CheckBoxWrapper>

  )
}

export default Checkbox