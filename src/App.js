import {useState} from 'react';
import Products from './Products/Products';
import css from './App.module.css';
import Cart from './Cart/Cart';
import CartIcon from './UI/CartIcon/CartIcon';

function App() {

  const [cartItems, setCartItems] = useState([]);

  const [showCart, setShowCart] = useState(false);

  const addToCart = product => {

      const items = [...cartItems];

      const itemIndex = cartItems.findIndex(item=>{
          return item.id === product.id;
      });

      if(itemIndex === -1){
          const item = {
              id: product.id,
              title: product.title,
              image: product.image,
              price: product.price,
              quantity: 1
          }
          items.push(item);
          setCartItems(items);
      }
      else {
          increaseQuantity(items[itemIndex].id);
      }
  }

  const increaseQuantity = id => {
      const itemIndex = cartItems.findIndex(item=>{
          return item.id === id;
      });

      const items = [...cartItems];
      items[itemIndex].quantity += 1;

      setCartItems(items);
  }

  const decreaseQuantity = id => {
      const itemIndex = cartItems.findIndex(item=>{
          return item.id === id;
      });

      const items = [...cartItems];
      if(items[itemIndex].quantity > 1){
          items[itemIndex].quantity -= 1;
      }

      setCartItems(items);
  }

  const totalPrice = ()=>{
      let price = 0;
      cartItems.forEach(item=>{
         price += (item.price * item.quantity);
      });
      return price;
  }

  return (
    <div>
        <div className={css.navbar}>
            <h1>All Products</h1>
            <CartIcon onClick={setShowCart} items={cartItems.length} />
        </div>
        <Products addToCart={addToCart} />
        {showCart ? <Cart
                        items={cartItems}
                        setShowCart={setShowCart}
                        totalPrice={totalPrice()}
                        increaseQuantity={increaseQuantity}
                        decreaseQuantity={decreaseQuantity} /> : null}
    </div>
  );
}

export default App;
