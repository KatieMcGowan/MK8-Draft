import React, { useState, useEffect } from "react";

const KartDisplay = (props) => {
  const [available, setAvailable] = useState(true)

  //MAKES CHARACTER UNAVAILABLE IF CHARACTER HAS BEEN AUTODRAFTED
  useEffect(() => {
    if (props.drafted === props.kart.name) {
      setAvailable(false)
    };
  }, [props.drafted])
  

  const handleSelect = () => {
    if (available === true) {
      props.players[props.playerIndex] = {player: props.playerUp.player, character: props.playerUp.character, kart: props.kart.name};
      props.handleUserSelect(props.kart.name);
      props.setCount(0);
      setAvailable(false);
    } else {
      return;
    }  
  }

  return(
    <div className=
    {available === true
      ? "placeholder-available border-gradient border-gradient-placeholder"
      : "placeholder-unavailable border-gradient"
    } onClick={() => handleSelect()}>
      <div className="image-and-name">
        <img src={props.kart.img} className="draft-kart-image" alt="img"></img>
        <p className="draft-name">{props.kart.name}</p>
      </div>  
    </div>
  );
};

export default KartDisplay
