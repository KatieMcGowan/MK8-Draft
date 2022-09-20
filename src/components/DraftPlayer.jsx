// import PlayerSelections from "./PlayerSelections";
import React, { useState } from "react"

const DraftPlayer = (props) => {
  const [display, setDisplay] = useState(false);

  const toggleDisplay = () => {
    if (display === false) {
      setDisplay(true)
    } else {
      setDisplay(false)
    }
  }

  return(
    <div className=
    {props.playerUp.player === props.player.player
      ? "playerup-wrapper"
      : "player-wrapper"
    }>
      <div className="another-wrapper">
        <div className="name-and-placement">
          <p>{props.index + 1}. </p>
          <p>{props.player.player}</p>
        </div>
        <div className="toggle-stats">
          <div className=
            {display === false
            ? "show-stats" 
            : "hide-stats"
            }
          onClick={(() => toggleDisplay())}></div>
        </div>
      </div>  
      {display === true &&
      <div className="player-draft-picks">
          <p>Character: {props.player.character}</p>
          <p>Kart: {props.player.kart}</p>
          <p>Wheels: {props.player.wheel}</p>
          <p>Glider: {props.player.glider}</p>
        </div>
      }
    </div>
  );
};

export default DraftPlayer;

//Kart gets overriden in this display when you select wheels