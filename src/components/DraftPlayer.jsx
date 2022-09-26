import React, { useState, useEffect } from "react"

const DraftPlayer = (props) => {
  const [display, setDisplay] = useState(false);

  const toggleDisplay = () => {
    if (display === false) {
      setDisplay(true)
    } else {
      setDisplay(false)
    }
  }

  //STATE AND USEEFFECT HOOKS TO POPULATE IMAGES
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
  }, [props.player.character])

  useEffect(() => {
    for (let i = 0; i < props.data[1].length; i++) {
      if (props.data[1][i].name === props.player.kart) {
        setKart(props.data[1][i].img)
      };
    };
  }, [props.player.kart])

  useEffect(() => {
    for (let i = 0; i < props.data[2].length; i++) {
      if (props.data[2][i].name === props.player.wheel) {
        setWheel(props.data[2][i].img)
      };
    };
  }, [props.player.wheel])

  useEffect(() => {
    for (let i = 0; i < props.data[3].length; i++) {
      if (props.data[3][i].name === props.player.glider) {
        setGlider(props.data[3][i].img)
      };
    };
  }, [props.player.glider])

  useEffect(() => {
    if (props.player === props.playerUp) {
      setDisplay(true)
    } else if (props.player !== props.playerUp) {
      setTimeout(() => {
        setDisplay(false)
      }, 500)
    }
  }, [props.playerUp])

  return(
    <div className={props.playerUp.player === props.player.player
      ? "playerup-wrapper"
      : "player-wrapper"
    }>
      <div className="another-wrapper">
        <div className="name-and-placement">
          <p>{props.index + 1}. </p>
          <p>{props.player.player}</p>
        </div>
      </div>  
      {display === true &&
      <div className="player-draft-picks">
        <div className="turn-order-container">
          {!props.player.character
            ? <p className="unpicked">?</p>
            : <div>
                <img src={character} alt="img" height="30" width="30" className="turnorder-images"/>
                <p className="turn-order-choices">{props.player.character}</p>
              </div>  
          }
        </div>  
        <div className="turn-order-container">
          {!props.player.kart
            ? <p className="unpicked">?</p>
            : <div>
                <img src={kart} alt="img" height="30" width="30" className="turnorder-images"/>
                <p className="turn-order-choices">{props.player.kart}</p>
              </div>
          }
        </div>    
        <div className="turn-order-container">
          {!props.player.wheel
            ? <p className="unpicked">?</p>
            : <div>
                <img src={wheel} alt="img" height="30" width="30" className="turnorder-images"/>
                <p className="turn-order-choices">{props.player.wheel}</p>
              </div>
          }  
        </div>
        <div className="turn-order-container">   
          {!props.player.glider
            ? <p className="unpicked">?</p>
            : <div>
                <img src={glider} alt="img" height="30" width="30" className="turnorder-images"/>
                <p className="turn-order-choices">{props.player.glider}</p>
              </div>
          }
        </div>  
      </div>
      }
    </div>
  );
};

export default DraftPlayer;