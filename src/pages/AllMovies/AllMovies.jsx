import React, { useState } from "react";
import { useQuery } from "react-query";
import "./AllMovies.css";
import { getMovieGenres } from "../../Services/API";
import FilteredMovies from "../../components/FilteredMovies/FilteredMovies";

const AllMovies = () => {
  const [selectedGenre, setSelectedGenre] = useState();
  const { data, isError, isLoading, status } = useQuery(
    ["genres", selectedGenre],
    () => {
      return getMovieGenres(selectedGenre);
    }
  );

  const handleBtnClick = async (genre) => {
    setSelectedGenre(genre);
  };
  return (
    <section className="allMoviesSection">
      {isLoading && <p>Loading genres...</p>}
      {isError && <p>We have an error.</p>}
      {data && status === "success" && (
        <>
          <div className="btnContainer">
            {data.genres.map((genre, i) => (
              <div key={i} onClick={() => handleBtnClick(genre)}>
                <button className="genreButton">{genre.name}</button>
              </div>
            ))}
          </div>
          <hr></hr>
          {selectedGenre && <FilteredMovies genreId={selectedGenre.id} />}
        </>
      )}
    </section>
  );
}; 

export default AllMovies;
