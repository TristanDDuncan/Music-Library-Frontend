import React, { useState } from 'react';

const SearchBar = ({ searchSongs }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    searchSongs(searchTerm);
  };

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Search..." value={searchTerm} onChange={handleChange} />
      <button type="submit" data-testid="search">Search</button>
    </form>
  );
};

export default SearchBar;