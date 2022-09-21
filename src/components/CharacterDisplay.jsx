import React, { useState, useEffect } from "react";

const CharacterDisplay = (props) => {
  const [available, setAvailable] = useState(true);

  useEffect(() => {
    if (props.autoIndex === props.index) {
      console.log(props.character + "'s index is the same as autoindex, should be highlighted");
      setAvailable(false)
    };
  }, [props.autoIndex])

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
      ? "placeholder-available border-gradient border-gradient-placeholder"
      : "placeholder-unavailable border-gradient"
    } onClick={() => handleSelect()}>
      <p className="character-name">{props.character}</p>
    </div>
  );
};

export default CharacterDisplay;