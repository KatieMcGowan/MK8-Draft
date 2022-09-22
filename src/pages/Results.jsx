import Result from "../components/Result"
import "./Results.css"

const Results = (props) => {
  console.log(props.players)
  return(
    <div className="results-wrapper">
      <p className="results-header">Results</p>
      <div className="results-container">
        {props.players.map((player, index) => {
          return <Result
                  key={index}
                  player={player}
                  data={props.data}
                />
        })}
      </div>
    </div>
  );
};

export default Results;