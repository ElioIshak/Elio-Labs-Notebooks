import {useState} from "react";

function SearchBar({onChange}){
  const [q, setQ] = useState("");

  const submit = (e) => {
    e.preventDefault();
    if(onChange) onChange(q.trim());
  };

  const handleChange = (e) => {
    const val = e.target.value;
    setQ(val);
    if(onChange) onChange(val.trim());
  };

  const clear = () => {
    setQ("");
    if(onChange) onChange("");
  };

  return(
    <form className="SearchBar-container" role="search" onSubmit={submit}>
      <input
        className="SearchBar"
        type="search"
        placeholder="Search notebooks (e.g., 'welcome', 'preprocessing')"
        value={q}
        onChange={handleChange}
      />
      <button className="Search-button" type="submit">Search</button>
      {q && (
        <button className="Search-clear" type="button" aria-label="Clear search" onClick={clear}>
          ×
        </button>
      )}
    </form>
  );
}
export default SearchBar