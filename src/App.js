import "./styles.css";
import { useState } from "react";
import songsDatabase from "./favSongs.json";

export default function App() {
  var [isHovering, setIsHovering] = useState(false);
  var [showArtists, setShowArtists] = useState(false);
  var [favMusicBandsArtists, setFavMusicBandsArtists] = useState(
    songsDatabase.favMusicbandsArtists
  );

  function popMusicClickHandler() {
    setShowArtists(true);
    setFavMusicBandsArtists(songsDatabase.pop);
  }

  function rockMusicClickHandler() {
    setShowArtists(true);
    setFavMusicBandsArtists(songsDatabase.rock);
  }

  function partyMusicClickHandler() {
    setShowArtists(true);
    setFavMusicBandsArtists(songsDatabase.party);
  }

  function favbandsClickHandler() {
    setShowArtists(false);
    setFavMusicBandsArtists(songsDatabase.favMusicbandsArtists);
  }

  function handleMouseOver() {
    setIsHovering(true);
  }

  function handleMouseOut() {
    setIsHovering(false);
  }

  function getOpacityOnHover() {
    if (!isHovering) {
      return "unset";
    }
    return "0.8";
  }

  function getDisplayOnHover() {
    if (!isHovering) {
      return "none";
    }
    return "block";
  }

  function getArtistsNames() {
    if (showArtists && isHovering) {
      return "block";
    }
    return "none";
  }

  return (
    <div className="App">
      <h1 id="app-heading">My Music Recommendation</h1>
      <p id="app-intro">
        {" "}
        Checkout my favourite music🎵 from each genre. Select any genre to get
        started{" "}
      </p>
      <div className="genres">
        <button id="pop-music" onClick={popMusicClickHandler}>
          {" "}
          Pop Music{" "}
        </button>
        <button id="modern-rock" onClick={rockMusicClickHandler}>
          {" "}
          Modern Rock{" "}
        </button>
        <button id="party" onClick={partyMusicClickHandler}>
          {" "}
          Party{" "}
        </button>
        <button id="fav-bands" onClick={favbandsClickHandler}>
          {" "}
          Favourite bands + Artists
        </button>
      </div>

      <hr />

      <div className="fav-bands">
        <ul className="bands">
          {favMusicBandsArtists.map(function (musicBand) {
            return (
              <a href={musicBand.link}>
                {" "}
                <li
                  key={musicBand.name}
                  style={{
                    backgroundImage: `url(${musicBand.image}`,
                    backgroundPosition: "top 30% center",
                    backgroundRepeat: "no-repeat",
                    borderRadius: "1rem",
                    opacity: getOpacityOnHover(),
                    transition: "opacity 0.35s"
                  }}
                >
                  <div
                    className="band-details"
                    onMouseOver={handleMouseOver}
                    onMouseOut={handleMouseOut}
                  >
                    <h1
                      id="band-name"
                      style={{
                        display: getDisplayOnHover(),
                        transition: "display 0.8s"
                      }}
                    >
                      {" "}
                      {musicBand.name}{" "}
                    </h1>

                    <div id="artists" style={{ display: getArtistsNames() }}>
                      {musicBand.artists}
                    </div>

                    <div
                      id="genre"
                      style={{
                        display: getDisplayOnHover(),
                        transition: "display 0.8s"
                      }}
                    >
                      {" "}
                      Genre: {musicBand.genre}{" "}
                    </div>
                    <div
                      id="rating"
                      style={{
                        display: getDisplayOnHover(),
                        transition: "display 0.8s"
                      }}
                    >
                      {" "}
                      {musicBand.rating}{" "}
                    </div>
                  </div>
                </li>{" "}
              </a>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
