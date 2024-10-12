import { useState } from 'react';
import Button from '../../assets/Button';

const Contact = () => {
  const [contacts, setContacts] = useState([]);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const addContact = () => {
    if (name && phone) {
      setContacts([...contacts, { name, phone }]);
      setName('');
      setPhone('');
    }
  };

  return (
    <div style={{backgroundColor:"#0554D4", color:"white"}}>
      <h1>Contact List</h1>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Phone"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />
      <Button style={{backgroundColor:"#0A3B8A", color:"white"}} onClick={addContact} text="Add Contact"/>
      <ul>
        {contacts.map((contact, index) => (
          <li key={index}>{contact.name} - {contact.phone}</li>
        ))}
      </ul>
    </div>
  );
};

export default Contact;
