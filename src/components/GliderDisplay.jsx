import React, { useState, useEffect } from "react";

const GliderDisplay = (props) => {
  const [available, setAvailable] = useState(true);

    //MAKES CHARACTER UNAVAILABLE IF CHARACTER HAS BEEN AUTODRAFTED
    useEffect(() => {
      if (props.drafted === props.glider.name) {
        setAvailable(false)
      };
    }, [props.drafted])

  const handleSelect = () => {
    if (available === true) {
      props.players[props.playerIndex] = {player: props.playerUp.player, character: props.playerUp.character, kart: props.playerUp.kart, wheel: props.playerUp.wheel, glider: props.glider.name};
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
      <img src={props.glider.img} height="50" width="50" alt="img"></img>
      <p>{props.glider.name}</p>
    </div>
  );
};

export default GliderDisplay;