import React, { useState } from "react";
import { useQuery } from "react-query";
import "./PopularMovies.css";
import { Carousel } from "react-bootstrap";
import { getPopularMovies } from "../../Services/API";
import { Link } from "react-router-dom";

const PopularMovies = () => {
  const [popularMovie, setPopularMovie] = useState();
  const { data, isError, isLoading, status } = useQuery(
    ["popularMovie", popularMovie],
    () => {
      setPopularMovie(popularMovie);
      return getPopularMovies(popularMovie);
    }
  );
  return (
    <section className="popularMoviesSection">
      <h2 className="popularMoviesH2">Popular right now:</h2>
      {isLoading && <p>Loading popular movies...</p>}
      {isError && <p>We have an error.</p>}
      {!!data && status === "success" && (
        <div className="carousel">
          <Carousel interval={5000} controls={false} fade={true}>
            {data.results.slice(0, 10).map((movie) => (
              <Carousel.Item key={movie.id}>
                <Link to={`/movies/${movie.id}`}>
                  <img
                    className="d-block w-100"
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    alt="popular movie"
                  />
                </Link>
              </Carousel.Item>
            ))}
          </Carousel>
        </div>
      )}
    </section>
  );
};

export default PopularMovies;
