import NoteBook from "./NoteBook";

function Recent({items}){
  if (!items?.length) return null;

  return(
    <section className="Recent">
      <h2 className="Recent-title">Recent notebooks</h2>
      <span className="Recent-line"></span>

      <div className="Cards">
        {items.map(nb => (
          <NoteBook key={nb.id} {...nb} />
        ))}
      </div>
    </section>
  );
}
export default Recent