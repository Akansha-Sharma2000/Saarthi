import React from "react";
import "./styles.css";
import Player from "react-wavy-audio";

function Audio(props) {
  return (
    <div className="App">
      <h1>Wavy Audio</h1>
      <Player
        imageUrl="https://pbs.twimg.com/media/A-lU5FnCcAA1Edi.jpg"
        audioUrl="https://www.mfiles.co.uk/mp3-downloads/gs-cd-track2.mp3"
        waveStyles={{
          cursorWidth: 1,
          progressColor: "#ee3ec9",
          responsive: true,
          waveColor: "#121640",
          cursorColor: "transparent",
          barWidth: 0
        }}
      />
    </div>
  );
}

export default Audio;
