import CharacterContainer from "./Character/CharacterContainer";
import VehicleContainer from "./Vehicle/VehicleContainer";
import TiresContainer from "./Tire/TiresContainer";
import GlidersContainer from "./Glider/GlidersContainer";

import './database.css';

const DatabaseTesting = (props) => {
  
  const characters = props.data[0];
  const vehicle = props.data[1];
  const tires = props.data[2];
  const gliders = props.data[3];

  return(
    <div className="wrapper">
      <CharacterContainer characters={characters}/>
      <VehicleContainer vehicles={vehicle}/>
      <TiresContainer tires={tires}/>
      <GlidersContainer gliders={gliders}/>
    </div>
  );
};

export default DatabaseTesting;