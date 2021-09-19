import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import Home from "./pages/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import AllMovies from "./pages/AllMovies/AllMovies";
import Error from "./components/Error/Error";
import MovieDetails from "./pages/MovieDetails/MovieDetails";
import ActorPage from "./pages/ActorPage/Actor"

const queryClient = new QueryClient();

const App = () => {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Router>
          <Navbar />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/movies/:id">
              <MovieDetails />
            </Route>
            <Route path="/movies">
              <AllMovies />
            </Route>
            <Route path="/actor/:id">
              <ActorPage />
            </Route>
            <Route path="*">
              <Error />
            </Route>
          </Switch>
        </Router>
      </QueryClientProvider>
    </>
  );
};

export default App;
