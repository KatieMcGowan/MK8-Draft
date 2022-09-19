import DraftCounter from "../components/DraftCounter";
import DraftPlayer from "../components/DraftPlayer"
import "./DraftSelect.css"

const DraftSelect = (props) => {

  console.log(props)

  
  return(
    <div className="draft-wrapper">
      <DraftCounter
        players={props.players}
      />  
      <div className="draft-body">
        <div className="draft-left">
          <p className="turn-order-header">Turn Order</p>
          <div className="player-list">
            {props.players.map((player, index) => {
              return <DraftPlayer
                      index={index}
                      key={index}
                      player={player}
                    />
            })}
        </div>
      </div>  
        <div className="draft-right">
          <div className="placeholder"></div>
          <div className="placeholder"></div>
          <div className="placeholder"></div>
          <div className="placeholder"></div>
          <div className="placeholder"></div>
          <div className="placeholder"></div>
          <div className="placeholder"></div>
          <div className="placeholder"></div>
          <div className="placeholder"></div>
          <div className="placeholder"></div>
          <div className="placeholder"></div>
          <div className="placeholder"></div>
        </div>  
      </div>  
    </div>
  );
};

export default DraftSelect;