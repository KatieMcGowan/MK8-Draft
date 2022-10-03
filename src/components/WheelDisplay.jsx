import React, { useState, useEffect } from "react";

const WheelDisplay = (props) => {
  const [available, setAvailable] = useState(true);

  //MAKES CHARACTER UNAVAILABLE IF CHARACTER HAS BEEN AUTODRAFTED
  useEffect(() => {
    if (props.drafted === props.wheel.name) {
      setAvailable(false)
    };
  }, [props.drafted])

  const handleSelect = () => {
    if (available === true) {
      props.players[props.playerIndex] = {player: props.playerUp.player, character: props.playerUp.character, kart: props.playerUp.kart, wheel: props.wheel.name};
      props.handleUserSelect(props.wheel.name);
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
      <div className="image-and-name">
        <img src={props.wheel.img} className="draft-kart-image" alt="img"></img>
        <p className="draft-name">{props.wheel.name}</p>
      </div>
    </div>
  );
};

export default WheelDisplay;