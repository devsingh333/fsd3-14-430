
const b1 = {
  picUrl: "https://m.media-amazon.com/images/I/61aYZnnMaHL._AC_UL480_FMwebp_QL65_.jpg",
  bname:"React DEsign Pattern",
  price: 1199,
  quantity: 10,
  rating: 5.0,
};

function Book(){
  return(
      <div>
        <img src="https://m.media-amazon.com/images/I/61aYZnnMaHL._AC_UL480_FMwebp_QL65_.jpg" alt="Design Pattern React JS"></img>
        <h1>Lets Us React</h1>
        <h2>Price : 999</h2>
        <h3>Quantity : 3</h3>
        <h4>Rating : 5.0</h4>
      </div> 
  );
}

export default function App(){
  return (
    <>
      <Book />
      <h1>Hello React</h1>
      <Book />
    </>
  );
}