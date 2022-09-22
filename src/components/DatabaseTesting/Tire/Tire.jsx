const Tire = (props) => {
  return(
    <div className='item'>
      <h1>{props.tire.name}</h1>
      <img src={props.tire.img} alt="" />
    </div>
  );
};

export default Tire;