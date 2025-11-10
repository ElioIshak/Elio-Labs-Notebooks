import {useMemo, useState, useEffect} from "react";
import NoteBook from "./NoteBook";

function Notebooks({ items = [], title = "All notebooks" }){
  const [visible, setVisible] = useState(6);
  useEffect(() => { setVisible(6); }, [items]);

  const shown = useMemo(() => items.slice(0, visible), [items, visible]);
  const canLoad = visible < items.length;

  return (
    <section className="NoteBooks">
      <h2 className="NoteBooks-title">{title}</h2>
      <span className="NoteBooks-line" />
      {items.length === 0 ? (
        <p style={{marginTop: 10, color: "var(--muted)"}}>No notebooks match your search.</p>
      ) : (
        <>
          <div className="Cards">
            {shown.map((nb) => (
              <NoteBook key={nb.id} {...nb} />
            ))}
          </div>
          {canLoad && (
            <div className="LoadMore-wrap">
              <button className="LoadMore" onClick={() => setVisible(v => v + 6)}>
                See more
              </button>
            </div>
          )}
        </>
      )}
    </section>
  );
}
export default Notebooks