import { useState, useEffect } from "react";
import GliderDisplay from "./GliderDisplay";

const GliderOptions = (props) => {
  const [gliders, setGliders] = useState(["Plane Glider", "Bowser Glider", "Flower Glider", "Gold Kite", "Clouds", "Squirrel"])

  //STATES FOR AUTODRAFT
  const [ghostGliders, setGhosts] = useState(gliders.slice(0));

  const [drafted, setDrafted] = useState()

  //FUNCTIONS FOR AUTODRAFT
  const randomIndex = () => {
    let random = Math.floor(Math.random() * ghostGliders.length);
    return random;
  }

  const handleAutoSelect = () => {
    let random = randomIndex();
    props.players[props.playerIndex] = {player: props.playerUp.player, character: props.playerUp.character, kart: props.playerUp.kart, wheel: props.playerUp.wheel, glider: ghostGliders[random]}
    setDrafted(ghostGliders[random])
    ghostGliders.splice(random, 1)
  };

  //INITIALIZES AUTODRAFT WHEN COUNT HITS 0
  useEffect(() => {
    if (props.count === 1 && !props.playerUp.glider) {
      handleAutoSelect();
    };
  }, [props.count])

  //USER SELECT FUNCTION
  const handleUserSelect = (name) => {
    for (let i = 0; i < ghostGliders.length; i++) {
      if (name === ghostGliders[i]) {
        ghostGliders.splice(i, 1)
      };
    };
  };

  return(
    <div className="glider-component">
        {gliders.map((glider, index) => {
          return <GliderDisplay
                  index={index}
                  key={index}
                  glider={glider}
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

export default GliderOptions