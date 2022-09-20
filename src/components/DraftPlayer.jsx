// import PlayerSelections from "./PlayerSelections";
import React, { useState } from "react"

const DraftPlayer = (props) => {
//player object = {
//   index: Number,
//   player: {player: name}
//   selections: [Yoshi, Biddybuggy, Azure Rollers, Flower Glider]
// }

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
          <div className="show-stats" onClick={(() => toggleDisplay())}></div>
        </div>
      </div>  
      {display === true &&
      <div className="player-draft-picks">
          <p>Character: Yoshi</p>
          <p>Kart: Biddybuggy</p>
          <p>Wheels: Azure rollers</p>
          <p>Glider: Flower glider</p>
        </div>
      }
    </div>
  );
};

export default DraftPlayer;