import readline from "readline/promises";
import { stdin, stdout } from "process";
import { readFile, writeFile } from "fs/promises";

// Database using file starts
const FILE = "product.json";

const getCart = async () => {
  const data = await readFile(FILE, "utf-8");
  return JSON.parse(data);
};

const saveCart = async (cart) => {
  await writeFile(FILE, JSON.stringify(cart, null, 2));
};

const addToCart = async (product) => {
  const cart = await getCart();
  const isFoundInCart = cart.find((item) => item.id === product.id);
  if (isFoundInCart) {
    isFoundInCart.qty += product.qty;
  } else cart.push(product);
  await saveCart(cart);
  console.log(`${product.name} added/updated to ðŸ›’`);
};

const displayCart = async () => {
  const cart = await getCart();
  if (cart.length == 0) {
    console.log("\nCart is empty\n");
    return;
  }
  console.table(cart);
  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  console.log(`Total payble amount Rs. ${total}`);
};

const removeProduct = async (pid) =>{
    const cart = await getCart();
    const isFoundInCart = cart.find((item) => item.id === pid);
    let x = cart.length;
    // const newProducts = cart.filter((item)=> item.id != pid);
    const newProducts = cart.filter((item) => item.id !== pid);
    let y = newProducts.length;
    if(y < x){
        await saveCart(newProducts);
        console.log(`product with id ${pid} is removed from cart`);
    }
    else{
        console.log(`product with id ${pid} not found`); 
    }

}

const main = async () => {
  let choice;
  const cin = readline.createInterface({ input: stdin, output: stdout });

  do {
    console.log("\n\nWelcome to Amazon Shopping ðŸ›’");
    console.log("1........Show Cart");
    console.log("2........Add Product");
    console.log("3........Remove Product");
    console.log("4........Update Quantity");
    console.log("5........Checkout");
    choice = await cin.question("Enter your choice: ");

    switch (Number(choice)) {
      case 1:
        await displayCart();
        break;
      case 2:
        const item = await cin.question("Enter id,name,price,qty:");
        const [id, name, price, qty] = item.split(",").map((p) => p.trim());

        await addToCart({
          id: Number(id),
          name,
          price: Number(price),
          qty: Number(qty),
        });
        break;

      case 3:
        // console.log("remove product");
        let pid = await cin.question("enter product id : ");
        await removeProduct(Number(pid));
        break;
      case 4:
        console.log("update quantity");
        break;
      case 5:
        console.log("checkout");
        break;
      default:
        console.log("ðŸ›‘ invalid choice! Try again");
    }
  } while (choice != 5);
  cin.close();
};

main();