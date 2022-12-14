import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import StartScreenPlayerInput from "../components/StartScreenPlayerInput";
import "./StartScreen.css"

const StartScreen = (props) => {
  //DISPLAY STATES

  //HOW MANY PLAYERS?
  const [displayOne, setOne] = useState(true);
  
  //TYPE IN CHARACTER NAMES
  const [displayTwo, setTwo] = useState(false)

  //PLAYER NAMES MUST BE DIFFERENT FROM EACH OTHER
  const [error, setError] = useState(false);

  //SELECT DRAFT OPTIONS
  const [displayThree, setThree] = useState(false)


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
    if (displayOne === true) {
      setTwo(true)
      setOne(false)
    } else {
      setTwo(false)
      setOne(true)
      setNumber({
        number: ""
      });
      setPlayers([]);
    };
  };

  const checkDupes = () => {
    for (let i = 0; i < players.length; i++) {
      if (players[i + 1] && players[i].player === players[i + 1].player) {
        setError(true)
        return;
      } else {
        setThree(true)
        setTwo(false)
      };
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
  };

  const losersGoFirst = () => {
    let sortedPlayers = []
    for (let i = players.length - 1; i >= 0; i--) {
      sortedPlayers.push(players[i])
    }
    props.setPlayers(sortedPlayers)
    navigate("/draft")
  };

  const randomize = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    };
    props.setPlayers(array);
    navigate("/draft")
  };

  return(
    <div className="startscreen-wrapper">
      {displayOne === true && 
        <form onSubmit={handlePlayers}>
          <div className="draft-setup-questions">
            <div className="how-many-players-wrapper">
              <p className="name-label">Welcome to the MK8 Deluxe Draft! Please respond to the following prompts for draft set-up.</p>
              <label htmlFor="players">How many players are in your lobby?</label>
              <input
                className="players-input"
                type="number"
                min="2"
                max="12"
                name="number"
                value={numberInput.number}
                required={true}
                onChange={handleChange}
              />  
            </div>
          <input type="submit" className="letsa-go" value="Letsa Go!"/>
          </div>
        </form>
      }
      {displayTwo === true && 
        <div className="conditional-wrapper">
          <div className="players-wrapper-headers">
            <p className="name-label">Type in the player's names in order of first place to last place from the last tournament.</p>
            <p className="name-label">If the draft order will be randomized, type the player's name in any order.</p>
          </div>  
          {error === true &&
              <p className="error">Players names must be different from each other. </p>
            }
          <div className="players-wrapper">
            {players.map((player, index) => {
              return(
                <StartScreenPlayerInput
                  player={player}
                  index={index}
                  key={index}
                  players={players}
                  handleNameInput={handleNameInput}
                />  
              )
            })}
          </div>   
          <div className="placement-options">
            <div className="placement-buttons" onClick={() => checkDupes()}><p className="draft-text">Select draft option</p></div> 
          </div>
        </div>   
      } 
      {displayThree === true &&
        <div className="placement-options-wrapper">
          <p className="placement-options-text">All players accounted for!</p>
          <p className="placement-options-text">Players will get 60 seconds to select from each of the following categories: character, kart, wheels, and glider. If your timer runs out, your category pick will be autodrafted.</p>
          <p className="placement-options-text">Select one of the draft options below to start the draft.</p>
          <div className="placement-options">
            <div className="placement-buttons" onClick={() => winnersGoFirst()}><p className="draft-text">Winners go first</p></div>
            <div className="placement-buttons" onClick={() => losersGoFirst()}><p className="draft-text">Losers go first</p></div>
            <div className="placement-buttons" onClick={() => randomize(players)}><p className="draft-text">Randomize draft order</p></div>
          </div>
        </div> 
      }
    </div>
  );
};

export default StartScreen;