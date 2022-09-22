const Vehicle = (props) => {

  return(
    <div className='item'>
      <h1>{props.vehicle.name}</h1>
      <img src={props.vehicle.img} alt="" />
    </div>
  );
};

export default Vehicle;