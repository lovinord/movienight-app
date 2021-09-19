import React from "react";
import "./Actor.css";
import { useParams } from "react-router-dom";
import { getActorById, getMovieByActorId } from "../../Services/API";
import { useQuery } from "react-query";
import MovieCard from "../../components/MovieCard/MovieCard";
import { Link } from "react-router-dom";

const Actor = () => {
  const { id } = useParams();
  const actorDetails = useQuery(["actorById", id], () => getActorById(id));
  const actorMovie = useQuery(["movieByActorId", id], () => {
    return getMovieByActorId(id);
  });

  return (
    <section className="actorSection">
      {actorDetails.data && (
        <article className="actorDetailsArticle">
          <h1 className="actorDetailsH1">{actorDetails.data.name}</h1>
          <p className="actorDetailsP">{actorDetails.data.place_of_birth}</p>
          <img
            src={`https://image.tmdb.org/t/p/w500${actorDetails.data.profile_path}`}
            className="actorDetailsPoster"
            alt={actorDetails.data.title}
          />
        </article>
      )}
      {actorMovie.data && (
        <article className="actorMovieArticle">
          <h2 className="actorDetailsH2">Seen in</h2>
          <span className="ActorMovieContainer">
            {actorMovie.data.results.map((movie, i) => (
              <Link
                to={`/movie/${movie.id}`}
                key={i}
                className="actorMovieItem"
              >
                <MovieCard {...movie} className="actorMovieCard"/>
              </Link>
            ))}
          </span>
        </article>
      )}
    </section>
  );
};

export default Actor;
