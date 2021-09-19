import React,  {useState} from 'react'
import "../LatestMovies/LatestMovies.css"
import { useQuery } from 'react-query';
import MovieCard from '../MovieCard/MovieCard';
import { getTopMovies } from "../../Services/API";

const TopMovies = () => {
  const [topMovie, setTopMovie] = useState();
  const { data, isError, isLoading, status } = useQuery(
    ["topMovie", topMovie],
    () => {
      setTopMovie(topMovie);
      return getTopMovies(topMovie);
    }
  );
  return (
    <section className="latestMoviesSection">
      <h2 className="latestMoviesH2">Top rated movies:</h2>
      {isLoading && <p>Loading top rated movies...</p>}
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
}

export default TopMovies
