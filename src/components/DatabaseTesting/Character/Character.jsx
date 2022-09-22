const Character = (props) => {
  return(
    <div className='item'>
      <h1>{props.character.name}</h1>
      <img src={props.character.img} alt="" />
    </div>
  );
};

export default Character;