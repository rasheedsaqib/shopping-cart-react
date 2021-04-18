import css from './Cart.module.css';
import CartItems from './CartItems/CartItems';
import Backdrop from '../UI/Backdrop/Backdrop';

const Cart = props => {
    return(
      <div>
          <div className={css.cart}>
              <h2>Your Shopping Cart</h2>
              <p>Total Price: ${props.totalPrice.toFixed(2)}</p>
              <CartItems items={props.items} increaseQuantity={props.increaseQuantity} decreaseQuantity={props.decreaseQuantity} />
          </div>
          <Backdrop onClick={() => props.setShowCart(false)} />
      </div>
    );
}

export default Cart;