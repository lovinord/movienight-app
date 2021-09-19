import React from "react";
import { getMovieDetails, getMovieCredits } from "../../Services/API";
import "./MovieDetails.css";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";

const MovieDetails = () => {
  const { id } = useParams();
  const movieDetails = useQuery(["movieDetails", id], () =>
    getMovieDetails(id)
  );
  const movieCredits = useQuery(["movieCredits", id], () =>
    getMovieCredits(id)
  );
  return (
    <section className="movieDetailsSection">
      {movieDetails.data && (
        <article className="movieDetailsItems">
          <span className="movieDetailsFlex">
            <img
              src={`https://image.tmdb.org/t/p/w500${movieDetails.data.poster_path}`}
              className="movieDetailsPoster"
              alt={movieDetails.data.title}
            />
            <div>
              <h1 className="movieDetailsH1">{movieDetails.data.title}</h1>
              <p className="movieDetailsP">{movieDetails.data.overview}</p>
            </div>
          </span>
          {movieCredits.data && (
            <article className="movieCreditsArticle">
              <h2 className="castH2">Cast</h2>
              <ul className="movieCastList">
                {movieCredits.data.cast.map((actor, i) => (
                  <Link to={`/actor/${actor.id}`} className="actorItem" key={i}>
                    <img
                      src={`https://image.tmdb.org/t/p/w500${actor.profile_path}`}
                      className="actorPoster"
                      alt={actor.title}
                    />
                    <li className="actorName" key={i}>
                      {actor.name}
                    </li>
                  </Link>
                ))}
              </ul>
            </article>
          )}
        </article>
      )}
    </section>
  );
};

export default MovieDetails;
