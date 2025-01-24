import { Navbar } from "../../components/Navbar/Navbar";
import "../Home/Home.css";
import banner from "../../assets/banner-image.jpg";
import titleimage from "../../assets/title-image.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faCircleInfo, faPlay } from "@fortawesome/free-solid-svg-icons";
import { TitleCards } from "../../components/TitleCards/TitleCards";
import { Footer } from "../../components/Footer/Footer";
export const Home = () => {
  return (
    <div className="home" style={{ backgroundColor: "black" }}>
      <Navbar />
      <div className="banner">
        <img src={banner} alt="" className="banner-image" />
        <div className="caption-div">
          <img src={titleimage} alt="" className="image-caption" />
          <p>
            Jawan: Shah Rukh Khan’s electrifying blockbuster!
            <br /> A rollercoaster of action, emotion, and drama that leaves you
            in awe.
          </p>
          <div className="banner-btns btns">
            <button className="play-btn">
              <FontAwesomeIcon
                icon={faPlay}
                className="icons"
                style={{ width: 24, height: 24 }}
              />
              Play
            </button>
            <button className="more-info-btn btns">
              <FontAwesomeIcon
                icon={faCircleInfo}
                className="icons"
                style={{ width: 24, height: 24 }}
              />
              More Info
            </button>
          </div>
          <TitleCards />
        </div>
      </div>
      <div className="more-movies">
        <TitleCards title={"Upcoming"} category={"top_rated"} />
        <TitleCards
          title={"Top 10 Movies In India Today"}
          category={"popular"}
        />
        <TitleCards title={"Only on Netflix"} category={"upcoming"} />
        <TitleCards title={"Blockbuster Movies"} category={"now_playing"} />
      </div>
      <Footer />
    </div>
  );
};
