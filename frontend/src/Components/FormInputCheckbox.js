import CheckBoxWrapper from "../Assets/StyledComponents/CheckboxWrapper"

const Checkbox = ({name, handleChange, isFulltime}) => {
  
  return (
    <CheckBoxWrapper>
        <label className="checkbox-container">
            <input type="checkbox" checked={isFulltime} name={name} onChange={handleChange} />
            <span className="checkmark"></span>
        </label>
        <div className="checkbox-title">Full time only</div>
    </CheckBoxWrapper>

  )
}

export default Checkbox