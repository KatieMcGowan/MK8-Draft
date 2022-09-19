import React, { useEffect, useState } from "react";

const DraftCounter = (props) => {
  const [players, setPlayers] = useState(props.players);
  
  const [index, setIndex] = useState(0)

  const [playerUp, setPlayerUp] = useState(props.players[index])

  const [count, setCount] = useState(5)

  // const [selection, setSelection] = ["Character", "Kart", "Wheels", "Glider"]

  useEffect(() => {
    if (count <= 0) return;
    const countdown = setInterval(() => {
      setCount(count - 1)
    }, 1000);
    console.log(count);
    return () => clearInterval(countdown)
  }, [count])

  // useEffect(() => {
  //   if (count === 0 && index <= players.length) {
  //     setTimeout(() => {
  //       setIndex(index + 1)
  //     }, 1000);
  //     console.log(index)
  //     setTimeout(() => {
  //       setPlayerUp(players[index])
  //     }, 1500)
  //     console.log(playerUp)
  //     setTimeout(() => {
  //       setCount(5)
  //     }, 2000)
  //   }
  // }, [count])

  useEffect(() => {
    if (count === 0) {
      setIndex(index + 1)
      if (index >= players.length) {
        setIndex(0)
      }
    } 
  }, [count])

  useEffect(() => {
    setPlayerUp(players[index])
  }, [index])

  useEffect(() => {
    setCount(5)
  }, [playerUp])


  
  return(
    <div className="draft-header">
      <p className="category-selection">Character Selection: {count} seconds</p>
      <p className="player-turn">{playerUp.player}'s Turn</p>
      <p>Incrementer</p>
    </div>
  );
};

export default DraftCounter;

//Switches name after 1 minute, then switches 30s.