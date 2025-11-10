import {Link, useInRouterContext} from "react-router-dom";
import {useState} from "react";

function NoteBook({ image, title, description, link = "" }){
  const [src, setSrc] = useState(image || "https://placehold.co/640x360?text=Notebook");
  const inRouter = useInRouterContext();
  const isSpa = typeof link === "string" && link.startsWith("/nb/");

  const Inner = (
    <>
      <div className="Card-media">
        <img
          src={src}
          alt={title || "Notebook"}
          onError={() => setSrc("https://placehold.co/640x360?text=Image+not+found")}
        />
      </div>
      <div className="Card-body">
        <h3 className="Card-title">{title || "Untitled notebook"}</h3>
        <p className="Card-desc">{description || "No description available."}</p>
      </div>
      <div className="Card-cta">Open</div>
    </>
  );

  return (
    <article className="Card hover-tilt">
      {inRouter && isSpa ? (
        <Link className="Card-link" to={link}>{Inner}</Link>
      ) : (
        <a className="Card-link" href={link || "#"} target={link ? "_blank" : undefined} rel="noreferrer">{Inner}</a>
      )}
    </article>
  );
}
export default NoteBook