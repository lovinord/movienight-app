import React, { useState } from "react";
import { useQuery } from "react-query";
import { useHistory, useParams } from "react-router-dom";
import "./AllMovies.css";
import { getMovieGenres } from "../../Services/API";
import FilteredMovies from "../../components/FilteredMovies/FilteredMovies";

const AllMovies = () => {
  let { genreId, genreName, genrePage } = useParams();

  const [selectedGenre, setSelectedGenre] = useState({
    id: genreId,
  });

  const {
    data: movieGenresData,
    isError,
    isLoading,
    status,
  } = useQuery(["genres", selectedGenre], () => {
    return getMovieGenres(selectedGenre);
  });

  let history = useHistory();

  const handleBtnClick = async (genre) => {
    setSelectedGenre(genre);
    history.push(`/movies/${genre.name}/${genre.id}/1`);
  };

  return (
    <section className="allMoviesSection">
      {isLoading && <p>Loading genres...</p>}
      {isError && <p>We have an error.</p>}
      {movieGenresData && status === "success" && (
        <>
          <div className="btnContainer">
            {movieGenresData.genres.map((genre, i) => (
              <div key={i} onClick={() => handleBtnClick(genre)}>
                <button className="genreButton">{genre.name}</button>
              </div>
            ))}
          </div>
          <hr></hr>
          {selectedGenre && (
            <FilteredMovies genreId={genreId} genreName={genreName} genrePage={genrePage} />
          )}
        </>
      )}
    </section>
  );
};

export default AllMovies;
