<<<<<<< HEAD
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

=======
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

>>>>>>> 40d3f5c578858cb4d8da71bbb6a2db7ab3b0c574
export default Input;