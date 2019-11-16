import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";

import MovieCard from "../components/MovieCard/MovieCard";
import Navigation from "../components/Navigation/Navigation";

const MovieContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  margin: 1vw 1vw;
`;

const PopularMovies = props => {
  const API_KEY = process.env.REACT_APP_TMDB_API_KEY;

  const {
    movies,
    isLoading,
    clickedMovieState,
    searchRequest,
    searchComplete,
    handleMovieClick
  } = props;

  useEffect(() => {
    const fetchData = async () => {
      searchRequest();
      const response = await axios.get(
        `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=3`
      );

      await Promise.all(
        response.data.results.map(async movie => {
          movie.details = await getDetails(movie.id);
        })
      );
      // !! add error handling...
      // Call function passed in as props to lift results up to state in App.js
      searchComplete(response.data.results);
    };
    fetchData();
  }, []);

  // Append details object to each movie
  const getDetails = async id => {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`
    );

    return response.data;
  };

  return (
    <div>
      <div className="header-container">
        <Navigation />
      </div>
      <h1>movies</h1>
      <MovieContainer>
        {movies.map(movie => {
          return (
            <MovieCard
              movie={movie}
              loading={isLoading}
              handleMovieClick={handleMovieClick}
            />
          );
        })}
      </MovieContainer>
    </div>
  );
};

export default PopularMovies;

// /discover/movie?sort_by=popularity.desc

// in this component you need to:
// call the above endpoint to gather data
// show popular movies using moviecards as laid out in other page

// map over movies once data is gathered, and display as on other page.

// how would you use the reducer set up to send it your resutsl?//
