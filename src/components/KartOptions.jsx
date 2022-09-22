import { useState, useEffect } from "react";
import KartDisplay from "./KartDisplay";

const KartOptions = (props) => {
  //ORIGINAL CHARACTER DATA FOR MAPPING ACROSS COMPONENTS
  const [karts, setKarts] = useState(["Biddybuggy", "Wild Wiggler", "Varmint", "Mercedes GLA", "Prancer", "Pipe Frame"])

  //STATES FOR AUTODRAFT
  const [ghostKarts, setGhosts] = useState(karts.slice(0));

  const [drafted, setDrafted] = useState()

  //FUNCTIONS FOR AUTODRAFT
  const randomIndex = () => {
    let random = Math.floor(Math.random() * ghostKarts.length);
    return random;
  }

  const handleAutoSelect = () => {
    let random = randomIndex();
    props.players[props.playerIndex] = {player: props.playerUp.player, character: props.playerUp.character, kart: ghostKarts[random]}
    setDrafted(ghostKarts[random])
    ghostKarts.splice(random, 1)
  };

  //INITIALIZES AUTODRAFT WHEN COUNT HITS 1
  useEffect(() => {
    if (props.count === 1 && !props.playerUp.kart) {
      handleAutoSelect();
    };
  }, [props.count])

  //USER SELECT FUNCTION
  const handleUserSelect = (name) => {
    for (let i = 0; i < ghostKarts.length; i++) {
      if (name === ghostKarts[i]) {
        ghostKarts.splice(i, 1)
      };
    };
  };

  return(
    <div className="kart-component">
        {karts.map((kart, index) => {
          return <KartDisplay
                  index={index}
                  key={index}
                  kart={kart}
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

export default KartOptions;