const CharacterOptions = (props) => {
  return(
    <div className="character-component">
      <p onClick={() => props.setOption("kart")}>Character</p>
    </div>
  );
};

export default CharacterOptions