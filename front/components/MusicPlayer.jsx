import React, { useRef } from "react";

import musica from "../sounds/Musica.mp3";

const audio = new Audio(musica);
audio.play();


const MusicPlayer = () => {
  const audioRef = useRef(null);

  const toggleMusic = () => {
    if (audioRef.current.paused) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  };

  return (
    <div className="text-center mt-3">
      <audio ref={audioRef} src={musica} />
      <button className="btn btn-warning" onClick={toggleMusic}>
        🎵 Reproducir / Pausar Música
      </button>
    </div>
  );
};

export default MusicPlayer;
