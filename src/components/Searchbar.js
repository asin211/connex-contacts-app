import React from "react";

function Searchbar({ searchTerm, setSearchTerm }) {
  return (
    <div className="input-group gap-2 mb-3 input-group-lg">
      <input
        type="text"
        className="form-control"
        placeholder="Search by name"
        aria-label="Search contacts"
        aria-describedby="basic-addon2"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)} // Update search term
      />
      {searchTerm && (
        <button
          className="btn btn-outline-secondary"
          type="button"
          onClick={() => setSearchTerm("")} // Clear search term
        >
          &times;
        </button>
      )}
    </div>
  );
}

export default Searchbar;
