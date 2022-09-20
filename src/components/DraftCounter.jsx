import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const DraftCounter = (props) => {
  //STATES TO ITERATE THROUGH PLAYERS ON TIMER
  const [players, setPlayers] = useState(props.players);
  
  const [index, setIndex] = useState(0)

  const [playerUp, setPlayerUp] = useState(props.players[index])

  const [count, setCount] = useState(5)

  //STATE TO SWITCH CATEGORY COMPONENTS
  const [categoryIndex, setCategoryIndex] = useState(0)

  //USEEFFECT HOOKS TO ITERATE OVER PLAYER AND CATEGORY STATES AS TIMER PROGRESSES
  useEffect(() => {
    if (count <= 0) return;
    const countdown = setInterval(() => {
      setCount(count - 1)
    }, 1000);
    return () => clearInterval(countdown)
  }, [count])

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
    if (categoryIndex < props.draftCategories.length) {
      props.setDraft(props.draftCategories[categoryIndex])
    } else if (categoryIndex === props.draftCategories.length) {
      navigate("/results")
    } 
  },[categoryIndex])

  
  return(
    <div className="draft-header">
      <p className="category-selection">{props.draft} Selection: {count} seconds</p>
      <p className="player-turn">{playerUp.player}'s Turn</p>
    </div>
  );
};

export default DraftCounter;