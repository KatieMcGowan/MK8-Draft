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
  const [count, setCount] = useState(5)

  //STATES TO ITERATE THROUGH PLAYERS ARRAY
  const [players, setPlayers] = useState(props.players);
  
  const [playerUp, setPlayerUp] = useState(props.players[0]);

  const [index, setIndex] = useState(0)

  //STATES TO SWITCH CATEGORY COMPONENTS
  const [draftCategories, setCategories] = useState(["Character", "Kart", "Wheels", "Glider"]);
  
  const [currentDraft, setDraft] = useState(draftCategories[0]);

  const [categoryIndex, setCategoryIndex] = useState(0)

  //USEEFFECT HOOKS TO ITERATE OVER PLAYER AND CATEGORY STATES AS TIMER PROGRESSES
  // useEffect(() => {
  //   if (count <= 0) return;
  //   const countdown = setInterval(() => {
  //     setCount(count - 1)
  //   }, 1000);
  //   return () => clearInterval(countdown)
  // }, [count])

  useEffect(() => {
    if (count === 0 && index < players.length - 1) {
      setIndex(index + 1)
    } else if (count === 0 && index === players.length - 1) {
      setIndex(0)
      setCategoryIndex(categoryIndex + 1)
    }
  }, [count])

  useEffect(() => {
    setPlayerUp(players[index])
  }, [index])

  useEffect(() => {
    setCount(5)
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
        // players={props.players}
        // draft={currentDraft}
        // setDraft={setDraft}
        // draftCategories={draftCategories}
        currentDraft={currentDraft}
        playerUp={playerUp}
        count={count}
      />  
      <div className="draft-body">
        <div className="draft-left">
          <p className="turn-order-header">Turn Order</p>
          <div className="player-list">
            {players.map((player, index) => {
              return <DraftPlayer
                      index={index}
                      key={index}
                      player={player}
                      playerUp={playerUp}
                    />
            })}
        </div>
      </div>  
        <div className="draft-right">
          {currentDraft === "Character" &&
            <CharacterOptions
              setDraft={setDraft}
              draftCategories={setCategories}
              players={players}
            />  
          }
          {currentDraft === "Kart" &&
            <KartOptions
              setDraft={setDraft}
              draftCategories={setCategories}
              players={players}
            />
          }
          {currentDraft === "Wheels" &&
            <WheelOptions
              setDraft={setDraft}
              draftCategories={setCategories}
              players={players}
            />
          }
          {currentDraft === "Glider" &&
            <GliderOptions
              setDraft={setDraft}
              draftCategories={setCategories}
              players={players}
            />
          }
        </div>  
      </div>  
    </div>
  );
};

export default DraftSelect;