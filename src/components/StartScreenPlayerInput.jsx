import React, {useState} from "react"

const StartScreenPlayerInput = (props) => {
  return(
    <div className="players-name-placement">
      <input className="player-name"
        type="text"
        name="player"
        minLength="1"
        maxLength="10"
        required={true}
        value={props.player.player}
        onChange={event => props.handleNameInput(props.index, event)}
      />  
    </div>
  );    
};

export default StartScreenPlayerInput