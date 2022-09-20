import React, { useState } from "react";

const CharacterDisplay = (props) => {
  const [available, setAvailable] = useState(true);

  const handleSelect = () => {
    if (available === true) {
      props.players[props.playerIndex] = {player: props.playerUp.player, character: props.character};
      props.setCount(0);
      setAvailable(false);
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
      <p className="character-name">{props.character}</p>
    </div>
  );
};

export default CharacterDisplay;