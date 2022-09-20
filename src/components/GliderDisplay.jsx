import React, { useState } from "react";

const GliderDisplay = (props) => {
  const [available, setAvailable] = useState(true);

  const handleSelect = () => {
    if (available === true) {
      props.players[props.playerIndex] = {player: props.playerUp.player, character: props.playerUp.character, kart: props.playerUp.kart, wheel: props.playerUp.wheel, glider: props.glider}
      props.setCount(0)
      setAvailable(false)
    } else {
      return;
    };  
  };

  return(
    <div className=
    {available === true
      ? "placeholder-available"
      : "placeholder-unavailable"
    } onClick={() => handleSelect()}>
      <p className="character-name">{props.glider}</p>
    </div>
  );
};

export default GliderDisplay;