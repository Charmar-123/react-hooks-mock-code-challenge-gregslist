import React, {useState} from "react";

function Search({handleSearch}) {

  const [internalSearch, setInternalSearch] = useState("")

  function handleSubmit(e) {
    e.preventDefault();
    handleSearch(internalSearch);
  }


  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        value={internalSearch}
        onChange={(e) => setInternalSearch(e.target.value)}
      />
      <button type="submit">🔍</button>
    </form>
  );
}

export default Search;
