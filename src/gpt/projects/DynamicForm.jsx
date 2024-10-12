<<<<<<< HEAD
/* eslint-disable react/prop-types */
import   { useState } from 'react';
import Button from '../../assets/Button';

const FormField = ({ field, onChange }) => {
  switch (field.type) {
    case 'text':
      return <input type="text" placeholder={field.label} onChange={(e) => onChange(field.name, e.target.value)} />;
    case 'number':
      return <input type="number" placeholder={field.label} onChange={(e) => onChange(field.name, e.target.value)} />;
    case 'date':
      return <input type="date" onChange={(e) => onChange(field.name, e.target.value)} />;
    case 'select':
      return (
        <select onChange={(e) => onChange(field.name, e.target.value)}>
          {field.options.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
      );
    default:
      return null;
  }
};

const DynamicForm = () => {
  const [formData, setFormData] = useState({});
  const [formFields, setFormFields] = useState([
    { name: 'name', label: 'Name', type: 'text' },
    { name: 'age', label: 'Age', type: 'number' },
    { name: 'dob', label: 'Date of Birth', type: 'date' },
    { name: 'gender', label: 'Gender', type: 'select', options: ['Male', 'Female', 'Other'] },
  ]);

  const handleFieldChange = (fieldName, value) => {
    setFormData({ ...formData, [fieldName]: value });
  };

  const handleSubmit = () => {
    console.log('Form Data:', formData);
  };

  return (
    <div style={{ backgroundColor:"#BEBE11", color:"white"}}>
      <h1>Dynamic Form Builder</h1>
      {formFields.map((field, index) => (
        <div key={index}>
          <FormField field={field} onChange={handleFieldChange} />
        </div>
      ))}
      <Button style={{backgroundColor:"#92920B", color:"white"}} onClick={handleSubmit} text="Submit"/>
    </div>
  );
};

export default DynamicForm;
=======
/* eslint-disable react/prop-types */
import   { useState } from 'react';
import Button from '../../assets/Button';

const FormField = ({ field, onChange }) => {
  switch (field.type) {
    case 'text':
      return <input type="text" placeholder={field.label} onChange={(e) => onChange(field.name, e.target.value)} />;
    case 'number':
      return <input type="number" placeholder={field.label} onChange={(e) => onChange(field.name, e.target.value)} />;
    case 'date':
      return <input type="date" onChange={(e) => onChange(field.name, e.target.value)} />;
    case 'select':
      return (
        <select onChange={(e) => onChange(field.name, e.target.value)}>
          {field.options.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
      );
    default:
      return null;
  }
};

const DynamicForm = () => {
  const [formData, setFormData] = useState({});
  const [formFields, setFormFields] = useState([
    { name: 'name', label: 'Name', type: 'text' },
    { name: 'age', label: 'Age', type: 'number' },
    { name: 'dob', label: 'Date of Birth', type: 'date' },
    { name: 'gender', label: 'Gender', type: 'select', options: ['Male', 'Female', 'Other'] },
  ]);

  const handleFieldChange = (fieldName, value) => {
    setFormData({ ...formData, [fieldName]: value });
  };

  const handleSubmit = () => {
    console.log('Form Data:', formData);
  };

  return (
    <div style={{ backgroundColor:"#BEBE11", color:"white"}}>
      <h1>Dynamic Form Builder</h1>
      {formFields.map((field, index) => (
        <div key={index}>
          <FormField field={field} onChange={handleFieldChange} />
        </div>
      ))}
      <Button style={{backgroundColor:"#92920B", color:"white"}} onClick={handleSubmit} text="Submit"/>
    </div>
  );
};

export default DynamicForm;
>>>>>>> 40d3f5c578858cb4d8da71bbb6a2db7ab3b0c574
