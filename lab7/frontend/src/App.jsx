
import Book from "./components/Book";
import Pen from "./components/Pen";

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

const p1 = {
  picUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRKpW1h6rE6YwrrpBHKFMkiLKd_XLx46Fvnr2cqMh04Q&s=10",
  company: "pentonic",
  price: 1199,
};

const p2 = {
  picUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLC_erg-FMyv19Oi5_TJMceHjFOIro2h4Dw5qwIP3KfA&s=10",
  company: "shakalaka bumbum",
  price: "7Cr",
};




export default function App(){
  return (
    <>
    <h1>Online Book Store</h1>
    <div className="container">
      <Book book={b1}/>
      <h1>Hello React</h1>
      <Book book={b2}/>
      <Book book={b1}/>
      <Book book={b2}/>

      <Pen pen={p1}/>
      <Pen pen={p2}/>

    </div>   
    </>
  );
}