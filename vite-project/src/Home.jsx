import React, { useState } from "react";
import songs from "./songs"; // Import song list
import "./home.css"; // Import updated CSS

const Home = () => {
  const [currentSong, setCurrentSong] = useState(null);

  const playSong = (song) => {
    setCurrentSong(song.src);
  };

  return (
    <div className="home-container">
      <h2 className="featured-title">🎵 Featured Songs 🎵</h2>
      <div className="song-list">
        {songs.map((song) => (
          <div key={song.id} className="song-card">
            <p className="song-title">{song.title}</p>
            <p className="song-artist">{song.artist}</p>
            <button className="play-button" onClick={() => playSong(song)}>
              ▶ Play
            </button>
          </div>
        ))}
      </div>

      {/* Audio Player */}
      {currentSong && (
        <audio key={currentSong} controls autoPlay>
          <source src={currentSong} type="audio/mp3" />
          Your browser does not support the audio element.
        </audio>
      )}
    </div>
  );
};

export default Home;
