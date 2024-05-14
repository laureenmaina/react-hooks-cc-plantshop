import React from "react";

function Search({ handleSearchChange }) {
  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Type a name to search..."
        onChange={handleSearchChange} // Use the passed handler
      />
    </div>
  );
  
}
export default Search;

