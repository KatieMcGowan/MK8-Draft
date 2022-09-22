import React, { useState, useEffect } from "react";

const GliderDisplay = (props) => {
  const [available, setAvailable] = useState(true);

    //MAKES CHARACTER UNAVAILABLE IF CHARACTER HAS BEEN AUTODRAFTED
    useEffect(() => {
      if (props.drafted === props.glider) {
        setAvailable(false)
      };
    }, [props.drafted])

  const handleSelect = () => {
    if (available === true) {
      props.players[props.playerIndex] = {player: props.playerUp.player, character: props.playerUp.character, kart: props.playerUp.kart, wheel: props.playerUp.wheel, glider: props.glider};
      props.handleUserSelect(props.glider);
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
      <p className="character-name">{props.glider}</p>
    </div>
  );
};

export default GliderDisplay;