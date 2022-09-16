import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import StartScreenPlayerInput from "../components/StartScreenPlayerInput";
import "./StartScreen.css"

const StartScreen = () => {
  //TOGGLES PLAYER FIELDS AFTER NUMBER OF PLAYERS ARE SELECTED
  const [display, setDisplay] = useState(false);

  //POPULATES PLAYER STATE WITH AN ARRAY OF OBJECTS INDEXED TO NUMBER SELECTED
  const [numberInput, setNumber] = useState({
    number: "",
  })

  const [players, setPlayers] = useState([])

  const handleChange = (event) => {
    setNumber({
      ...numberInput,
      [event.target.name]: event.target.value
    });
  }; 

  const handlePlayers = (event) => {
    event.preventDefault()
    toggleDisplay()
    for (let i = 0; i < numberInput.number; i++) {
      players.push({player: ""})
    }
  }

  const toggleDisplay = () => {
    if (display === false) {
      setDisplay(true)
    } else {
      setDisplay(false)
      setNumber({
        number: ""
      });
      setPlayers([]);
    }
  }

  // console.log(numberInput)
  // console.log(players);


  return(
    <div className="startscreen-wrapper">
      {display === false 
        ? <form onSubmit={handlePlayers}>
          <div className="draft-setup-questions">
            <div className="how-many-players-wrapper">
                <label htmlFor="players">How many players are in your lobby?</label>
                <input
                  className="players-input"
                  type="number"
                  min="2"
                  max="12"
                  maxLength="2"
                  name="number"
                  value={numberInput.number}
                  required={true}
                  onChange={handleChange}
                />  
            </div>
          <input type="submit" className="letsa-go" value="Letsa Go!"/>
          </div>
        </form>
      : <div className="conditional-wrapper">
        <div className="players-wrapper-headers">
          <p className="name-label">Type in players names in order of first place to last place</p>
        </div>  
        <div className="players-wrapper">
          {players.map((player, index) => {
            return(
              <StartScreenPlayerInput
                player={player}
                index={index}
              />  
            )
          })}
          {/* <div className="players-name-placement">
            <input
              className="player-name"
              type="text"
            /> 
          </div>
          <div className="players-name-placement">
            <input
              className="player-name"
              type="text"
            />  
          </div>
          <div className="players-name-placement">
            <input
              className="player-name"
              type="text"
            />   
          </div>
          <div className="players-name-placement">
            <input
              className="player-name"
              type="text"
            />  
          </div> */}
          <p className="more-players" onClick={() => toggleDisplay()}>Wait, more players showed up.</p>
        </div>   
        <div className="placement-options-wrapper">
            <p className="placement-options-text">Draft Options</p>
            <div className="placement-options">
              <div className="placement-buttons"><p className="draft-text">Previous winners go first</p></div>
              <div className="placement-buttons"><p className="draft-text">Previous losers go first</p></div>
              <div className="placement-buttons"><p className="draft-text">Randomize placement</p></div >
            </div>
          </div> 
        </div>
      }
    </div>
  );
};

export default StartScreen;