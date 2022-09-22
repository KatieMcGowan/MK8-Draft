import Tire from "./Tire";

const TiresContainer = (props) => {
  return(
    <div className="container">
      {props.tires.map((tire, index) => {
        return <Tire tire={tire} key={index}/>
      })}
    </div>
  );
};

export default TiresContainer;