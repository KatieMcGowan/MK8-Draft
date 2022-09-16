import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./StartScreen.css"

const StartScreen = () => {
  // const [players, setPlayers] = useState({
  //   display: false,
  //   number: 0,
  //   order: "",
  // });

  // const handleChange = (event) => {
  //   setPlayers({
  //     ...players,
  //     [event.target.name]: event.target.value
  //   });
  // }; 

  // const togglePlayers = () => {
    
  // }

  return(
    <div className="startscreen-wrapper">
      <form>
        <div className="draft-setup-questions">
          <div className="how-many-players-wrapper">
              <label htmlFor="players">How many players are in your lobby?</label>
              <input
                className="players-input"
                type="number"
                min="1"
                max="12"
                // value={players.number}
                required={true}
                // onChange={togglePlayers}
              />  
          </div>
        <div className="players-wrapper-headers">
          <p>Name</p>
        </div>  
        <div className="players-wrapper">
          <div class="players-name-placement">
            <input
              className="player-name"
              type="text"
            /> 
          </div>
          <div class="players-name-placement">
            <input
              className="player-name"
              type="text"
            />  
          </div>
          <div class="players-name-placement">
            <input
              className="player-name"
              type="text"
            />   
          </div>
          <div class="players-name-placement">
            <input
              className="player-name"
              type="text"
            />  
          </div>
        </div>   
        {/* <input type="submit" className="submit" value="Submit"></input> */}
        <div className="placement-options-wrapper">
            <p className="placement-options-text">Draft Options</p>
            <div className="placement-options">
              <div className="placement-buttons"><p className="draft-text">Previous winners go first</p></div>
              <div className="placement-buttons"><p className="draft-text">Previous losers go first</p></div>
              <div className="placement-buttons"><p className="draft-text">Randomize placement</p></div >
            </div>
          </div> 
        </div>
      </form>
    </div>
  );
};

export default StartScreen;