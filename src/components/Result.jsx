import React, { useEffect, useState } from "react";

const Result = (props) => {
  //STATE AND USEEFFECT HOOKS TO POPULATE IMAGE SRC
  const [character, setCharacter] = useState()

  const [kart, setKart] = useState()

  const [wheel, setWheel] = useState()

  const [glider, setGlider] = useState()


  useEffect(() => {
    for (let i = 0; i < props.data[0].length; i++) {
      if (props.data[0][i].name === props.player.character) {
        setCharacter(props.data[0][i].img)
      };
    };
  }, [])

  useEffect(() => {
    for (let i = 0; i < props.data[1].length; i++) {
      if (props.data[1][i].name === props.player.kart) {
        setKart(props.data[1][i].img)
      };
    };
  }, [])

  useEffect(() => {
    for (let i = 0; i < props.data[2].length; i++) {
      if (props.data[2][i].name === props.player.wheel) {
        setWheel(props.data[2][i].img)
      };
    };
  }, [])

  useEffect(() => {
    for (let i = 0; i < props.data[3].length; i++) {
      if (props.data[3][i].name === props.player.glider) {
        setGlider(props.data[3][i].img)
      };
    };
  }, [])

  return(

    <div className="player-result border-gradient border-gradient-rainbow">
      <p className="result-player-name">{props.player.player}</p>
        <div className="player-build">
          <div className="selected">
            <img src={character} alt="img" height="50" width="50" className="images"/>
            <p className="character">{props.player.character}</p>
          </div>
          <div className="selected">
            <img src={kart} alt="img" height="50" width="50" className="images"/>
            <p className="kart">{props.player.kart}</p>
          </div>
          <div className="selected">
            <img src={wheel} alt="img" height="50" width="50" className="images"/>
            <p className="wheels">{props.player.wheel}</p>
          </div>
          <div className="selected">
            <img src={glider} alt="img" height="50" width="50" className="images"/>
            <p className="glider">{props.player.glider}</p>
          </div>
        </div>
    </div>
  );
};

export default Result;