import React, { useState } from "react";

const WheelDisplay = (props) => {
  const [available, setAvailable] = useState(true);

  const handleSelect = () => {
    if (available === true) {
      props.players[props.playerIndex] = {player: props.playerUp.player, character: props.playerUp.character, kart: props.playerUp.kart, wheel: props.wheel}
      props.setCount(0)
      setAvailable(false)
    } else {
      return;
    };  
  };

  return(
    <div className=
    {available === true
      ? "placeholder-available border-gradient border-gradient-placeholder"
      : "placeholder-unavailable border-gradient"
    } onClick={() => handleSelect()}>
      <p className="character-name">{props.wheel}</p>
    </div>
  );
};

export default WheelDisplay;