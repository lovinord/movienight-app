import React from "react";
import PopularMovies from "../../components/PopularMovies/PopularMovies";
import Hero from "../../components/Hero/Hero";
import LatestMovies from "../../components/LatestMovies/LatestMovies";
import "./Home.css";
import TopMovies from "../../components/TopMovies/TopMovies";

function Home() {
  return (
    <div className="App">
      <Hero />
      <PopularMovies />
      <TopMovies />
      <LatestMovies />
    </div>
  );
}

export default Home;
