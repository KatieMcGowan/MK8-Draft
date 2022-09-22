import Glider from "./Glider";

const GlidersContainer = (props) => {
  return(
    <div className="container">
      {props.gliders.map((glider, index) => {
        return <Glider glider={glider} key={index}/>
      })}
    </div>
  );
};

export default GlidersContainer;