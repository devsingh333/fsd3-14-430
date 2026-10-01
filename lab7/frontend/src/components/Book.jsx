

export default function Book(props){

  const {bname, price, quantity, rating, picUrl} = props.book;

  const qtyStyle = {
    fontSize: "1rem",
    textAlign:"center",
    backgroundColor:"yellow",
    padding: "10px",
  };

  return(
      <div className="book">
        <img src={picUrl} alt={bname}></img>
        <h1>Lets Us React</h1>
        <h2>Price : {price}</h2>
        <h3>Quantity : {quantity}</h3>
        <h4 style={qtyStyle}>Rating : {rating}</h4>
        <button className="btn">Buy Now</button>
      </div> 
  );
}