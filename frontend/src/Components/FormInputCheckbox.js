import CheckBoxWrapper from "../Assets/StyledComponents/CheckboxWrapper"

const Checkbox = ({name, checked, value, handleChange}) => {
  console.log("checkbox value: ", value)
  return (
    <CheckBoxWrapper>
        <label className="checkbox-container">
            <input type="checkbox" name={name} checked={checked} value={checked} onChange={handleChange} />
            <span className="checkmark"></span>
        </label>
        <div className="checkbox-title">Full time only</div>
    </CheckBoxWrapper>

  )
}

export default Checkbox