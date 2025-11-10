import Header from "./Header";
import Footer from "./Footer";
import SearchBar from "./SearchBar";
import Notebooks from "./Notebooks";
import Recent from "./Recent";
import About from "./About";
import Contacts from "./Contacts";
import Projects from "./Projects";
import {notebooks} from "./data/Notebooks";
import {useMemo, useState} from "react";

function App(){
  const [query, setQuery] = useState("");

  const byDateDesc = useMemo(
    () => [...notebooks].sort((a,b) => new Date(b.date) - new Date(a.date)),
    []
  );

  const norm = (s) =>
    (s || "")
      .toLowerCase()
      .replace(/&/g, " and ")
      .replace(/[^a-z0-9]+/g, " ")
      .trim()
      .replace(/\s+/g, " ");

  const recent = byDateDesc.slice(0, 3);

  const filtered = useMemo(() => {
    const q = norm(query);
    if (!q) return byDateDesc;
    return byDateDesc.filter((nb) =>
      norm(`${nb.title} ${nb.description} ${nb.id || ""}`).includes(q)
    );
  }, [query, byDateDesc]);

  const hasQuery = query.trim().length > 0;

  return(
    <>
      <Header/>
      <About/>
      <SearchBar onChange={setQuery}/>
      {hasQuery ? (
        <Notebooks title={`Search results for "${query}"`} items={filtered}/>
      ) : (
        <>
          <Recent items={recent}/>
          <Notebooks title="All notebooks" items={byDateDesc}/>
        </>
      )}
      <Projects/>
      <Contacts/>
      <Footer/>
    </>
  );
}
export default App