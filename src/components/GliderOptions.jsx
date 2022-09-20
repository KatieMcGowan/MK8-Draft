import GliderDisplay from "./GliderDisplay";

const GliderOptions = (props) => {
  const gliders = ["Plane Glider", "Bowser Glider", "Flower Glider", "Gold Kite", "Clouds", "Squirrel"]
  return(
    <div className="glider-component">
        {gliders.map((glider, index) => {
          return <GliderDisplay
                  index={index}
                  key={index}
                  glider={glider}
                  playerIndex={props.playerIndex}
                  players={props.players}
                  playerUp={props.playerUp}
                  setCount={props.setCount}
                />  
        })}
    </div>
  );
};

export default GliderOptions