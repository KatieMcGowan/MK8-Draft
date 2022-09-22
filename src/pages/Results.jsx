import { useNavigate } from "react-router-dom"
import Result from "../components/Result"
import "./Results.css"

const Results = (props) => {
  let navigate = useNavigate();
  
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
      <div className="reverse-placement-button" onClick={() => navigate("/")}><p className="draft-text">Start another draft</p></div>
    </div>
  );
};

export default Results;