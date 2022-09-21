import { useState, useEffect } from "react";
import CharacterDisplay from "./CharacterDisplay";

const CharacterOptions = (props) => {
  //ORIGINAL CHARACTER DATA FOR MAPPING ACROSS COMPONENTS
  const [characters, setCharacters] = useState(["Yoshi", "Shy Guy", "Mario", "Bowser", "Waluigi", "Peach"])

  //TEST STATES AND FUNCTIONS FOR AUTODRAFT
  const [availableCharacters, setAvailable] = useState(characters.slice(0))

  const [arrayOfIndexes, setArray] = useState([0,1,2,3,4,5])

  const [autoIndex, setAutoIndex] = useState()

  const handleAutoSelect = () => {
    setAutoIndex(arrayOfIndexes[0])
    arrayOfIndexes.splice(0,1)
    setArray(arrayOfIndexes)
    availableCharacters.splice(autoIndex, 1)
    setAvailable(availableCharacters)
    setAutoIndex(arrayOfIndexes[0])
  };

  // const handleUserSelect = (num) => {
    //send component index back up. 

  // }

  const randomize = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    };
    setArray(array);
  };

  useEffect(() => {
    if (availableCharacters.length === characters.length) {
      randomize(arrayOfIndexes);
    };
  }, [availableCharacters, characters]);

  //Steps 
    //arrayofIndexes is randomized
    //0 index of array of indexes is set to autoIndex, making it a random number between 0 - 5
    //On autodraft, that first index is spliced off, leaving 5 indexes
    //The available character located at that index is spliced off, leaving 5 indexes
    //props.autoindex === props.index



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
                  autoIndex={autoIndex}
                />  
        })}
        <button onClick={() => handleAutoSelect()}>Test</button>
    </div>
  );
};

export default CharacterOptions;