import React from "react";
import "./MovieCard.css";
import { Link } from "react-router-dom";

const MovieCard = (props) => {
  return (
    <Link to={`/movie/${props.id}`}>
      <article
        className="movieCardArticle"
        style={{ color: "#fe019a", cursor: "pointer" }}
      >
        <img
          src={`https://image.tmdb.org/t/p/w500${props.poster_path}`}
          className="firstPoster"
          alt={props.title}
        />
        <h3 className="movieCardTitle">
          {props.title}
        </h3>
      </article>
    </Link>
  );
}; 

export default MovieCard;
