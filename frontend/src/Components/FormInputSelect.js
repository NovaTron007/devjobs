
const FormInputSelect = ({icon, name, list, value, handleChange}) => {
  console.log("input list: ", list)
  return (
    <div className="form-input-select-row">
        <span className="form-input-select-icon">
            {icon && <img src={icon} alt={`filter-${name}` } />}
        </span>
        <select name={name} placeholder={name} value={value} className="form-input-select" onChange={handleChange}>{/* update value using context */}
            {list && list.map((item, index) => 
                <option key={index}>{item}</option>
            )}
        </select>
    </div>
  )
}

export default FormInputSelect