import { Link } from "react-router-dom";
import "../TitleCards/TitleCards.css";
//import movie_data from "../../assets/movie_cards/movie_data";
import { useEffect, useRef, useState } from "react";

export const TitleCards = ({ title, category }) => {
  const [movieData, setMovieData] = useState([]);
  const moviesRef = useRef();
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1MzExYzRiMTQyOGE0NTkwMGI0YWEwOTZiOWI5NjkyZSIsIm5iZiI6MTczNTE5NDE1Mi43NDcsInN1YiI6IjY3NmNmNjI4MmM5MDk3YjI2NjYxMzRiMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.UXI8xBb6aGGiqcdDTKWx-kEpXn8deRsRy9cQiRSOUUQ",
    },
  };

  function handleWheel(e) {
    e.preventDefault();
    moviesRef.current.scrollLeft += e.deltaY;
  }

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${
        category ? category : "now_playing"
      }?language=en-US&page=1`,
      options
    )
      .then((res) => res.json())
      .then((res) => {
        console.log("Fetched data : ", res.results);
        setMovieData(res.results);
      })
      .catch((err) => console.error("Error while fetching movie data", err));
  }, []);

  useEffect(() => {
    if (moviesRef.current) {
      moviesRef.current.addEventListener("wheel", handleWheel);
    }

    return () => {
      if (moviesRef.current) {
        moviesRef.current.addEventListener("wheel", handleWheel);
      }
    };
  }, [moviesRef]);

  console.log(movieData);
  return (
    <>
      <div className="titlecards">
        <h2> {title ? title : "Popular on Netflix"} </h2>
        <div className="movie-list">
          {movieData.map((movie) => {
            return (
              <Link
                to={`/player/${movie.id}`}
                className="movie_data"
                key={movie.id}
                ref={moviesRef}
              >
                <img
                  src={`https://image.tmdb.org/t/p/w500` + movie.backdrop_path}
                  alt=""
                  className="movie_images"
                />
                <p>{movie.original_title}</p>
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
};
