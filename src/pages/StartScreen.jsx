import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

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
          <div className="placement-options-wrapper">
            <p className="placement-options-text">Placement options:</p>
            <div className="placement-options">
              <button className="placement-buttons">Previous winners go first</button>
              <button className="placement-buttons">Previous losers go first</button>
              <button className="placement-buttons">Randomize placement</button>
            </div>
          </div> 
        <div className="players-wrapper-headers">
          <p>Name</p>
          <p>No.</p>
        </div>  
        <div className="players-wrapper">
          <div class="players-name-placement">
            <input
              className="player-name"
              type="text"
            />
            <input
              className="player-placement"
              type="number"
              min="1"
              max="12"
            />    
          </div>
          <div class="players-name-placement">
            <input
              className="player-name"
              type="text"
            />
            <input
              className="player-placement"
              type="number"
              min="1"
              max="12"
            />    
          </div>
          <div class="players-name-placement">
            <input
              className="player-name"
              type="text"
            />
            <input
              className="player-placement"
              type="number"
              min="1"
              max="12"
            />    
          </div>
          <div class="players-name-placement">
            <input
              className="player-name"
              type="text"
            />
            <input
              className="player-placement"
              type="number"
              min="1"
              max="12"
            />    
          </div>
        </div>   
        <input type="submit" className="submit" value="Submit"></input>
        </div>
      </form>
    </div>
  );
};

export default StartScreen;