import { useState, useEffect } from "react";
import CharacterDisplay from "./CharacterDisplay";

const CharacterOptions = (props) => {
  const characters = ["Yoshi", "Shy Guy", "Mario", "Bowser", "Waluigi", "Peach"]

  const [characterIndex, setCharacterIndex] = useState()

  useEffect(() => {
    if (props.count === 0 && !props.playerUp.character) {
      let random = Math.floor(Math.random() * characters.length);
      setCharacterIndex(random);
      console.log(characterIndex);
      props.players[props.playerIndex] = {player: props.playerUp.player, character: characters[random]};
    };
  }, [props.count])

  return(
    <div className="character-component">
        {characters.map((character, index) => {
          return <CharacterDisplay
                  index={index}
                  key={index}
                  characterIndex={characterIndex}
                  character={character}
                  playerIndex={props.playerIndex}
                  players={props.players}
                  playerUp={props.playerUp}
                  setCount={props.setCount}
                />  
        })}
    </div>
  );
};

export default CharacterOptions;