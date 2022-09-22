import Vehicle from "./Vehicle";

const VehicleContainer = (props) => {
  return(
    <div className="container">
      {props.vehicles.map((vehicle, index) => {
        return <Vehicle vehicle={vehicle} key={index}/>
      })}
    </div>
  );
};

export default VehicleContainer;