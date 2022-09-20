import CharacterDisplay from "./CharacterDisplay";

const CharacterOptions = (props) => {
  const characters = ["Yoshi", "Shy Guy", "Mario", "Bowser"]

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
                />  
        })}
    </div>
  );
};

export default CharacterOptions;