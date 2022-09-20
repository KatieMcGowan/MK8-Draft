import WheelDisplay from "./WheelDisplay";

const WheelOptions = (props) => {
  const wheels = ["Azure Rollers", "Sponge", "Rollers", "Hylian Wheels"]

  return(
    <div className="wheel-component">
        {wheels.map((wheel, index) => {
          return <WheelDisplay
                  index={index}
                  key={index}
                  wheel={wheel}
                  playerIndex={props.playerIndex}
                  players={props.players}
                  playerUp={props.playerUp}
                  setCount={props.setCount}
                />  
        })}
    </div>  
  );
};

export default WheelOptions