
const FormInputSelect = ({icon, name, value, list, handleChange}) => {
  return (
    <div className="form-input-select-row">
        <span className="form-input-select-icon">
            {icon && <img src={icon} alt={`filter-${name}` } />}
        </span>
        <select name={name} placeholder={name} value={value} className="form-input-select" onChange={handleChange}>{/* update value using context */}
            <option>test</option>
        </select>
    </div>
  )
}

export default FormInputSelect