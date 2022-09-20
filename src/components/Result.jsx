const Result = (props) => {
  return(
    <div className="player-result border-gradient border-gradient-rainbow">
      <p>{props.player.player}</p>
        <div className="player-build">
          <div className="selected">
            <div className="results-placeholder"></div>
            <p className="character">{props.player.character}</p>
          </div>
          <div className="selected">
            <div className="results-placeholder"></div>
            <p className="kart">{props.player.kart}</p>
          </div>
          <div className="selected">
            <div className="results-placeholder"></div>
            <p className="wheels">{props.player.wheel}</p>
          </div>
          <div className="selected">
            <div className="results-placeholder"></div>
            <p className="glider">{props.player.glider}</p>
          </div>
        </div>
    </div>
  );
};

export default Result;