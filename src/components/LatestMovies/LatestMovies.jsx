import React, { useState } from "react";
import "./LatestMovies.css";
import { useQuery } from "react-query";
import { getLatestMovies } from "../../Services/API";
import MovieCard from "../MovieCard/MovieCard";

const LatestMovies = () => {
  const [latestMovie, setLatestMovie] = useState();
  const { data, isError, isLoading, status } = useQuery(
    ["latestMovie", latestMovie],
    () => {
      setLatestMovie(latestMovie);
      return getLatestMovies(latestMovie);
    }
  );

  return (
    <section className="latestMoviesSection">
      <h2 className="latestMoviesH2">Latest movies:</h2>
      {isLoading && <p>Loading latest movies...</p>}
      {isError && <p>We have an error.</p>}
      {data && status === "success" && (
        <>
          <ul className="latestMoviesUL">
            <li className="latestMoviesItems">
              {data.results.slice(0, 10).map((movie, i) => (
                <MovieCard key={i} {...movie} />
              ))}
            </li>
          </ul>
        </>
      )}
    </section>
  );
};

export default LatestMovies;
