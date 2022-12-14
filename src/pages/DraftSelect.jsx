import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import CharacterOptions from "../components/CharacterOptions";
import KartOptions from "../components/KartOptions";
import WheelOptions from "../components/WheelOptions";
import GliderOptions from "../components/GliderOptions"
import DraftHeader from "../components/DraftHeader";
import DraftPlayer from "../components/DraftPlayer"
import "./DraftSelect.css"

const DraftSelect = (props) => {
  //STATE FOR DRAFT COUNTDOWN
  const [count, setCount] = useState(60)

  //STATES TO ITERATE THROUGH PLAYERS ARRAY
  const [players, setPlayers] = useState(props.players);
  
  const [playerUp, setPlayerUp] = useState(props.players[0]);

  const [playerIndex, setPlayerIndex] = useState(0)

  //STATES TO SWITCH CATEGORY COMPONENTS
  const [draftCategories, setCategories] = useState(["Character", "Kart", "Wheels", "Glider"]);
  
  const [currentDraft, setDraft] = useState(draftCategories[0]);

  const [categoryIndex, setCategoryIndex] = useState(0)

  // USEEFFECT HOOKS TO ITERATE OVER PLAYER AND CATEGORY STATES AS TIMER PROGRESSES
  useEffect(() => {
    if (count <= 0) return;
    const countdown = setInterval(() => {
      setCount(count - 1)
    }, 1000);
    return () => clearInterval(countdown)
  }, [count])

  useEffect(() => {
    if (count === 0 && playerIndex < players.length - 1) {
      setPlayerIndex(playerIndex + 1)
    } else if (count === 0 && playerIndex === players.length - 1) {
      setPlayerIndex(0)
      setCategoryIndex(categoryIndex + 1)
    }
  }, [count])

  useEffect(() => {
    setPlayerUp(players[playerIndex])
  }, [playerIndex])

  useEffect(() => {
    setCount(60)
  }, [playerUp])

  let navigate = useNavigate()
  useEffect(() => {
    if (categoryIndex < draftCategories.length) {
      setDraft(draftCategories[categoryIndex])
    } else if (categoryIndex === draftCategories.length) {
      navigate("/results")
    } 
  },[categoryIndex])
  
  return(
    <div className="draft-wrapper">
      <DraftHeader
        currentDraft={currentDraft}
        playerUp={playerUp}
        count={count}
      />  
      <div className="draft-body">
        <div className="draft-left border-gradient border-gradient-rainbow">
          <p className="turn-order-header">Turn Order</p>
          <div className="player-list">
            {players.map((player, index) => {
              return <DraftPlayer
                      index={index}
                      key={index}
                      player={player}
                      playerUp={playerUp}
                      data={props.data}
                    />
            })}
        </div>
      </div>  
        <div className="draft-right">
          {currentDraft === "Character" &&
            <CharacterOptions
              players={players}
              setPlayers={setPlayers}
              playerUp={playerUp}
              playerIndex={playerIndex}
              count={count}
              setCount={setCount}
              characters={props.data[0]}
            />  
          }
          {currentDraft === "Kart" &&
            <KartOptions
              players={players}
              setPlayers={setPlayers}
              playerUp={playerUp}
              playerIndex={playerIndex}
              setCount={setCount}
              count={count}
              karts={props.data[1]}
            />
          }
          {currentDraft === "Wheels" &&
            <WheelOptions
              players={players}
              setPlayers={setPlayers}
              playerUp={playerUp}
              playerIndex={playerIndex}
              setCount={setCount}
              count={count}
              wheels={props.data[2]}
            />
          }
          {currentDraft === "Glider" &&
            <GliderOptions
              players={players}
              setPlayers={setPlayers}
              playerUp={playerUp}
              playerIndex={playerIndex}
              setCount={setCount}
              count={count}
              gliders={props.data[3]}
            />
          }
        </div>  
      </div>  
    </div>
  );
};

export default DraftSelect;