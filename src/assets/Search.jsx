import  { useState } from 'react';
import Button from './Button'; // Import the custom button component
import './Search.css'; // Import custom CSS for search component

const Search = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    onSearch(query);
  };

  return (
    <div className="search-container">
      <input
        type="text"
        className="search-input"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search..."
      />
      <Button
        text="Search"
        onClick={handleSearch}
        className="search-button"
      />
    </div>
  );
};

export default Search
