import CheckBoxWrapper from "../Assets/StyledComponents/CheckboxWrapper"

const Checkbox = ({name, isChecked, value, handleChange}) => {
  
  return (
    <CheckBoxWrapper>
        <label className="checkbox-container">
            <input type="checkbox" name={name} checked={isChecked} value={value} onChange={handleChange} />
            <span className="checkmark"></span>
        </label>
        <div className="checkbox-title">Full time only</div>
    </CheckBoxWrapper>

  )
}

export default Checkbox