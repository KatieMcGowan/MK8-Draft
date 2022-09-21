import React, { useState } from "react";

const KartDisplay = (props) => {
  const [available, setAvailable] = useState(true)

  const handleSelect = () => {
    if (available === true) {
      props.players[props.playerIndex] = {player: props.playerUp.player, character: props.playerUp.character, kart: props.kart};
      props.setCount(0);
      setAvailable(false);
    } else {
      return;
    }  
  }

  return(
    <div className=
    {available === true
      ? "placeholder-available border-gradient border-gradient-placeholder"
      : "placeholder-unavailable border-gradient"
    } onClick={() => handleSelect()}>
      <p className="character-name">{props.kart}</p>
    </div>
  );
};

export default KartDisplay

//Once kart selection is