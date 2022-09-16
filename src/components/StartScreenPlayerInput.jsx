import React, {useState} from "react"

const StartScreenPlayerInput = (props) => {

  console.log(props)

  const [name, setName] = useState({})

  return(
    <div className="players-name-placement">
      <input className="player-name"
        type="text"
        key="index"
      />  
    </div>
  );    
};

export default StartScreenPlayerInput