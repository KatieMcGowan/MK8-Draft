const DatabaseTesting = (props) => {
  
  const character = props.data[0];
  const vehicle = props.data[1];
  const wheel = props.data[2];
  const glider = props.data[3];

  return(
    <div>
      <h1>Database Testing</h1>
      <div>
        <h2>{character[0].name}</h2>
        <img src={character[0].img} alt=""></img>
      </div>
      <div>
        <h2>{vehicle[0].name}</h2>
        <img src={vehicle[0].img} alt=""></img>
      </div>
      <div>
        <h2>{wheel[0].name}</h2>
        <img src={wheel[0].img} alt=""></img>
      </div>
      <div>
        <h2>{glider[0].name}</h2>
        <img src={glider[0].img} alt=""></img>
      </div>

    </div>
  );
};

export default DatabaseTesting;