import React, { useState, useEffect } from "react";

const CharacterDisplay = (props) => {
  const [available, setAvailable] = useState(true);

  //MAKES CHARACTER UNAVAILABLE IF CHARACTER HAS BEEN AUTODRAFTED
  useEffect(() => {
    if (props.drafted === props.character) {
      setAvailable(false)
    };
  }, [props.drafted])

  const handleSelect = () => {
    console.log(props.character)
    if (available === true) {
      props.players[props.playerIndex] = {player: props.playerUp.player, character: props.character};
      props.handleUserSelect(props.character);
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