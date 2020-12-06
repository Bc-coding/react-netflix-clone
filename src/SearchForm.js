import React from "react";
import "./SearchForm.css";
import { useGlobalContext } from "./context";

function SearchForm() {
  const { query, setQuery, error } = useGlobalContext();
  const handleChange = (e) => {
    if (e.target.value) {
      setQuery(e.target.value);
    }
    if (!e.target.value) {
      setQuery("");
    }
  };
  return (
    <form className="searchForm" onSubmit={(e) => e.preventDefault()}>
      <h1>Welcome!</h1>
      <h4>Millions of movies, TV shows and people to discover. Explore now.</h4>
      <input
        type="text"
        className="formInput"
        value={query}
        onChange={handleChange}
      />
      {error.show && <h2 className="error">{error.msg}</h2>}
    </form>
  );
}

export default SearchForm;
