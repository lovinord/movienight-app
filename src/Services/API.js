import axios from "axios";

axios.defaults.baseURL = "https://api.themoviedb.org/3/";

const get = async (endpoint) => {
  const response = await axios.get(endpoint);
  return response.data;
};

export const getMovieGenres = async () => {
  return get(
    "genre/movie/list?api_key=c376ce2218893c14ecc81f3b497246ae&language=en-US"
  );
};
export const getMoviesWithGenres = async (genreId, page) => {
  return get(
    `discover/movie?api_key=c376ce2218893c14ecc81f3b497246ae&language=en-US&page=${page}&with_genres=${genreId}`
  );
};
export const getMovieDetails = async (id) => {
  return get(
    `movie/${id}?api_key=c376ce2218893c14ecc81f3b497246ae&language=en-US`
  );
};

export const getLatestMovies = async () => {
  return get(
    "movie/now_playing?api_key=c376ce2218893c14ecc81f3b497246ae&language=en-US&page=1"
  );
};

export const getPopularMovies = async () => {
  return get(
    `/discover/movie?api_key=c376ce2218893c14ecc81f3b497246ae&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`
  );
};

export const getMovieCredits = async (movie_id) => {
  return get(
    `movie/${movie_id}/credits?api_key=c376ce2218893c14ecc81f3b497246ae&language=en-US`
  );
}

export const getActorById = (id) => {
  return get(
    `/person/${id}?api_key=c376ce2218893c14ecc81f3b497246ae&language=en-US`
  );
};
 
export const getMovieByActorId = (id, page) => {
  return get(
    `discover/movie?api_key=c376ce2218893c14ecc81f3b497246ae&language=en-US&sort_by=popularity.desc&include_adult=false&page=${page}&with_cast=${id}`
  );
}
export const getTopMovies = async () => {
  return get(
    "movie/top_rated?api_key=c376ce2218893c14ecc81f3b497246ae&language=en-US&page=1"
  );
};

const apiQueryObject = {
  getMovieGenres,
  getLatestMovies,
  getMovieDetails,
  getPopularMovies,
  getActorById,
  getMoviesWithGenres,
  getMovieCredits,
  getMovieByActorId,
  getTopMovies,
}

export default apiQueryObject;
