import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import StartScreenPlayerInput from "../components/StartScreenPlayerInput";
import "./StartScreen.css"

const StartScreen = (props) => {
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
    };
  };

  const toggleDisplay = () => {
    if (display === false) {
      setDisplay(true)
    } else {
      setDisplay(false)
      setNumber({
        number: ""
      });
      setPlayers([]);
    };
  };

  //HANDLES USERS INPUTTING PLAYER NAME 
  const handleNameInput = (index, event) => {
    let data = [...players]
    data[index][event.target.name] = event.target.value 
    setPlayers(data);
  };

  //DRAFT OPTION FUNCTIONS
  let navigate = useNavigate()
  const winnersGoFirst = () => {
    props.setPlayers(players)
    navigate("/draft")
  }

  const losersGoFirst = () => {
    let sortedPlayers = []
    for (let i = players.length - 1; i >= 0; i--) {
      sortedPlayers.push(players[i])
    }
    props.setPlayers(sortedPlayers)
    navigate("/draft")
  }

  // const randomize = (array)  => {
  //   let sortedPlayers = []
  //   for (let i = array.length - 1; i > 0; i--) {
  //     const j = Math.floor(Math.random() * (i + 1));
  //     [array[i], array[j]] = [array[j], array[i]];
  //     sortedPlayers.push(array[i])
  //   }
  //   props.setPlayers(sortedPlayers);
  // }


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
                key={index}
                handleNameInput={handleNameInput}
              />  
            )
          })}
          <p className="more-players" onClick={() => toggleDisplay()}>Wait, more players showed up.</p> 
        </div>   
        <div className="placement-options-wrapper">
            <p className="placement-options-text">Once all players names are typed in, select one of the draft options below to start the draft</p>
            <div className="placement-options">
              <div className="placement-buttons" onClick={() => winnersGoFirst()}><p className="draft-text">Previous winners go first</p></div>
              <div className="placement-buttons" onClick={() => losersGoFirst()}><p className="draft-text">Previous losers go first</p></div>
              {/* <div className="placement-buttons"><p className="draft-text">Randomize placement</p></div> */}
            </div>
          </div> 
        </div>
      }
    </div>
  );
};

export default StartScreen;