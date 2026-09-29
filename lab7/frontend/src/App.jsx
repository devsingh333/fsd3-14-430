
const b1 = {
  picUrl: "https://m.media-amazon.com/images/I/61aYZnnMaHL._AC_UL480_FMwebp_QL65_.jpg",
  bname:"React DEsign Pattern",
  price: 1199,
  quantity: 10,
  rating: 5.0,
};


const b2 = {
  picUrl: "https://m.media-amazon.com/images/I/518+W2zr3BL._AC_UY327_FMwebp_QL65_.jpg",
  bname:"The Road To The React",
  price: 2886,
  quantity: 3,
  rating: 4.5,
};


function Book(props){
  return(
      <div>
        <img src={props.book.picUrl} alt={props.book.bname}></img>
        <h1>Lets Us React</h1>
        <h2>Price : {props.book.price}</h2>
        <h3>Quantity : {props.book.quantity}</h3>
        <h4>Rating : {props.book.rating}</h4>
      </div> 
  );
}

export default function App(){
  return (
    <>
      <Book book={b1}/>
      <h1>Hello React</h1>
      <Book book={b2}/>
    </>
  );
}