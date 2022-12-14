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
      props.handleUserSelect(props.glider.name);
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
        <img src={props.glider.img} alt="img" className="draft-kart-image"></img>
        <p className="draft-name">{props.glider.name}</p>
      </div>  
    </div>
  );
};

export default GliderDisplay;