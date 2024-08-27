/* eslint-disable react/prop-types */
// InputComponent.jsx
 
function Input({  label, type = 'text', value, placeholder ,onInputChange }) {
  return (
    <div className="custom-input">
      <label>{label}</label>
      <input
        type={type}
        value={value}
        onChange={(e) => onInputChange(e.target.value)} 
        placeholder={placeholder}
        className="custom-input-field"
      />
    </div>
  );
}

export default Input;