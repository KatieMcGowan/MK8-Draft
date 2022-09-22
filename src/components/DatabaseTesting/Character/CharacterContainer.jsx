import Character from "./Character";

const CharacterContainer = (props) => {
  return(
    <div className="container">
      {props.characters.map((character, index) => {
        return <Character character={character} key={index}/>
      })}
    </div>
  );
};

export default CharacterContainer;