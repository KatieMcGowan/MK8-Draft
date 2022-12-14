import React, { useState, useEffect } from "react";

const CharacterDisplay = (props) => {
  const [available, setAvailable] = useState(true);

  //MAKES CHARACTER UNAVAILABLE IF CHARACTER HAS BEEN AUTODRAFTED
  useEffect(() => {
    if (props.drafted === props.character.name) {
      setAvailable(false)
    };
  }, [props.drafted])

  const handleSelect = () => {
    if (available === true) {
      props.players[props.playerIndex] = {player: props.playerUp.player, character: props.character.name};
      props.handleUserSelect(props.character.name);
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
      <div className="individual-draft-option">
        <img src={props.character.img} className="draft-character-image" alt="img"></img>
        <p className="draft-name">{props.character.name}</p>
      </div>  
    </div>
  );
};

export default CharacterDisplay;