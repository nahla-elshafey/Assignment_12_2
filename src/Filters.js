import React from 'react';

const Filter = ({ onFilter }) => {
  const handleChange = (e) => {
    onFilter(e.target.value);
  };

  return (
    <form>
      <label htmlFor="search">Search: </label>
      <input type="text" id="search"onChange={handleChange} style={{ marginLeft: '15px', marginBottom: '20px' }}/>
    </form>
  );
};

export default Filter;