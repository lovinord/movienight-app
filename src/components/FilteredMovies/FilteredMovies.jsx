import React from "react";
import "./FilteredMovies.css";
import MovieCard from "../../components/MovieCard/MovieCard";
import { getMoviesWithGenres } from "../../Services/API";
import { useQuery } from "react-query";
import "../LatestMovies/LatestMovies.css";

const FilteredMovies = ({ genreId }) => {
  const [page, setPage] = React.useState(1);
  const { data, isPreviousData } = useQuery(
    ["getMoviesWithGenre", page],
    () => getMoviesWithGenres(genreId, page),
    {
      keepPreviousData: true,
    }
  );

  return (
    <section className="filteredMoviesSection">
      {data && (
        <div className="filteredMoviesItems">
          {data.results.map((movie, i) => (
            <MovieCard key={i} {...movie} />
          ))}
        </div>
      )}
      <span className="pagBtnWrapper">
        <button
          className="pagBtn"
          onClick={() => setPage((old) => Math.max(old - 1, 1))}
          disabled={page === 1}
        >
          Previous Page
        </button>
        <button
          className="pagBtn"
          onClick={() => {
            if (!isPreviousData && page < data.total_pages) {
              setPage(data.page + 1);
            }
          }}
          disabled={isPreviousData || data?.page === data?.total_pages}
        >
          Next
        </button>
      </span>
    </section>
  );
};

export default FilteredMovies;
