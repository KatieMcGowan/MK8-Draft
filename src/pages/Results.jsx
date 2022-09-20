import "./Results.css"

const Results = (props) => {
  console.log(props.players)
  return(
    <div className="results-wrapper">
      <p className="results-header">Results</p>
      <div className="results-container">
        <div className="player-result">
          <p>Becky</p>
          <div className="player-build">
            <div className="selected">
              <div className="results-placeholder"></div>
              <p className="character">Yoshi</p>
            </div>
            <div className="selected">
              <div className="results-placeholder"></div>
              <p className="kart">Biddybuggy</p>
            </div>
            <div className="selected">
              <div className="results-placeholder"></div>
              <p className="wheels">Azure Roller</p>
            </div>
            <div className="selected">
              <div className="results-placeholder"></div>
              <p className="glider">Flower Glider</p>
            </div>
          </div>
        </div>
        <div className="player-result">
          <p>Becky</p>
          <div className="player-build">
            <div className="selected">
              <div className="results-placeholder"></div>
              <p className="character">Yoshi</p>
            </div>
            <div className="selected">
              <div className="results-placeholder"></div>
              <p className="kart">Biddybuggy</p>
            </div>
            <div className="selected">
              <div className="results-placeholder"></div>
              <p className="wheels">Azure Roller</p>
            </div>
            <div className="selected">
              <div className="results-placeholder"></div>
              <p className="glider">Flower Glider</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Results;