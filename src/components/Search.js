import React from "react";

function Search({searchTitle, searchFilter, filterBy}) {

  const handleChange = (e) => {
    searchTitle(e.target.value)
  }

  const handleFilter = (e) => {
    searchFilter(e.target.value)
  }

  return (
    <div className="filter">
      <select onChange={handleFilter}>
        <option value="title">Title</option>
        <option value="body">Body</option>
        {/* <option value="Date Created">Date Created</option>
        <option value="Date Edited">Date Edited</option> */}
      </select>
      <input id="search-bar" type="text" placeholder={`Search ${filterBy}`} onChange={handleChange} />
    </div>
  );
}

export default Search;
