const Glider = (props) => {
  return(
    <div className='item'>
      <h1>{props.glider.name}</h1>
      <img src={props.glider.img} alt="" />
    </div>
  );
};

export default Glider;