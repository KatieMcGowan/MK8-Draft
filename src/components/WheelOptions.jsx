import { useState, useEffect } from "react";
import WheelDisplay from "./WheelDisplay";

const WheelOptions = (props) => {
  const [wheels, setWheels] = useState(["Azure Rollers", "Sponge", "Rollers", "Hylian Wheels", "Mercedes Wheels", "Big Orange"])

  //STATES FOR AUTODRAFT
  const [ghostWheels, setGhosts] = useState(wheels.slice(0));

  const [drafted, setDrafted] = useState()

  //FUNCTIONS FOR AUTODRAFT
  const randomIndex = () => {
    let random = Math.floor(Math.random() * ghostWheels.length);
    return random;
  }

  const handleAutoSelect = () => {
    let random = randomIndex();
    props.players[props.playerIndex] = {player: props.playerUp.player, character: props.playerUp.character, kart: props.playerUp.kart, wheel: ghostWheels[random]}
    setDrafted(ghostWheels[random])
    ghostWheels.splice(random, 1)
  };

  //INITIALIZES AUTODRAFT WHEN COUNT HITS 0
  useEffect(() => {
    if (props.count === 1 && !props.playerUp.wheel) {
      handleAutoSelect();
    };
  }, [props.count])

  //USER SELECT FUNCTION
  const handleUserSelect = (name) => {
    for (let i = 0; i < ghostWheels.length; i++) {
      if (name === ghostWheels[i]) {
        ghostWheels.splice(i, 1)
      };
    };
  };

  return(
    <div className="wheel-component">
        {wheels.map((wheel, index) => {
          return <WheelDisplay
                  index={index}
                  key={index}
                  wheel={wheel}
                  playerIndex={props.playerIndex}
                  players={props.players}
                  playerUp={props.playerUp}
                  setCount={props.setCount}
                  drafted={drafted}
                  handleUserSelect={handleUserSelect}
                />  
        })}
    </div>  
  );
};

export default WheelOptions