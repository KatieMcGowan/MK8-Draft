import KartDisplay from "./KartDisplay";

const KartOptions = (props) => {
  const karts = ["Biddybuggy", "Wild Wiggler", "Varmint", "Mercedes GLA", "Prancer", "Pipe Frame"]

  return(
    <div className="kart-component">
        {karts.map((kart, index) => {
          return <KartDisplay
                  index={index}
                  key={index}
                  kart={kart}
                  playerIndex={props.playerIndex}
                  players={props.players}
                  playerUp={props.playerUp}
                  setCount={props.setCount}
                />  
        })}
    </div>
  );
};

export default KartOptions;