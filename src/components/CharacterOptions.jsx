import { useState, useEffect } from "react";
import CharacterDisplay from "./CharacterDisplay";

const CharacterOptions = (props) => {
  //ORIGINAL CHARACTER DATA FOR MAPPING ACROSS COMPONENTS
  const [characters, setCharacters] = useState(props.characters)

  //STATES FOR AUTODRAFT
  const [ghostCharacters, setGhosts] = useState([]);

  const [drafted, setDrafted] = useState()

  //FUNCTIONS FOR AUTODRAFT
  const randomIndex = () => {
    let random = Math.floor(Math.random() * ghostCharacters.length);
    return random;
  }

  const handleAutoSelect = () => {
    let random = randomIndex();
    props.players[props.playerIndex] = {player: props.playerUp.player, character: ghostCharacters[random]}
    setDrafted(ghostCharacters[random])
    ghostCharacters.splice(random, 1)
  };

  //INITIALIZES AUTODRAFT WHEN COUNT HITS 1
  useEffect(() => {
    if (props.count === 1 && !props.playerUp.character) {
      handleAutoSelect();
    };
  }, [props.count])

  useEffect(() => {
    for (let i = 0; i < characters.length; i++) {
      ghostCharacters.push(characters[i].name)
    }
  }, [])

  //USER SELECT FUNCTION
  const handleUserSelect = (name) => {
    console.log(name);
    for (let i = 0; i < ghostCharacters.length; i++) {
      if (name === ghostCharacters[i]) {
        ghostCharacters.splice(i, 1)
      };
    };
  };

  return(
    <div className="character-component">
        {characters.map((character, index) => {
          return <CharacterDisplay
                  index={index}
                  key={index}
                  character={character}
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

export default CharacterOptions;