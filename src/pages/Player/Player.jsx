import { useEffect, useState } from "react";
import "../Player/Player.css";
import arrow from "/back-arrow.png";
import { useNavigate, useParams } from "react-router-dom";
export const Player = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [videoData, setVideoData] = useState({
    name: "",
    key: "",
    published_at: "",
    type: "",
  });
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1MzExYzRiMTQyOGE0NTkwMGI0YWEwOTZiOWI5NjkyZSIsIm5iZiI6MTczNTE5NDE1Mi43NDcsInN1YiI6IjY3NmNmNjI4MmM5MDk3YjI2NjYxMzRiMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.UXI8xBb6aGGiqcdDTKWx-kEpXn8deRsRy9cQiRSOUUQ",
    },
  };

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,
      options
    )
      .then((res) => res.json())
      .then((res) => {
        if (res.results && res.results.length > 0) {
          setVideoData(res.results[0]);
        } else {
          console.error("No video results found");
        }
      })

      .catch((err) => console.error(err));
  }, [id]);
  return (
    <>
      <div className="player">
        <img
          src={arrow}
          alt=""
          className="arrow-img"
          onClick={() => navigate("/home")}
        />
        <iframe
          src={`https://www.youtube.com/embed/${videoData.key}`}
          width="90%"
          height="90%"
          title="trailer"
          frameBorder="0"
          allowFullScreen
          className="Iframe-class"
        ></iframe>
        <div className="video-info" style={{ color: "black" }}>
          <p>{videoData.published_at.slice(0, 10)}</p>
          <p>{videoData.name}</p>
          <p>{videoData.type}</p>
        </div>
      </div>
    </>
  );
};
