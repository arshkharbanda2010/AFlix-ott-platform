import React from "react";
import { useState, useEffect } from "react";
import axios from "./axios";
import "./Row.css";

function Row({ title, fetchURL, isLargeRow = false }) {
  const baseUrl = "https://image.tmdb.org/t/p/original/";
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchURL);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchURL]);
  console.log(movies);
  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row__posters">
        {movies.map(
          (movie) =>
            ((isLargeRow && movie.poster_path) ||
              (!isLargeRow && movie.backdrop_path)) && (
              <div className="row__tiles">
                <img
                  className={`row__poster ${isLargeRow && "row__posterLarge"}`}
                  key={movie.id}
                  src={`${baseUrl}${
                    isLargeRow ? movie.poster_path : movie.backdrop_path
                  }`}
                  alt={movie.title}
                />
                <h2>{movie.title}</h2>
              </div>
            )
        )}
      </div>
      {/* <div className="poster__names">
        {movies.map((movie) => (
          <h2>{movie.title}</h2>
        ))}
      </div> */}
    </div>
  );
}

export default Row;
