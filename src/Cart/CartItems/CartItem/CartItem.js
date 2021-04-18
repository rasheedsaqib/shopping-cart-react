import css from './CartItem.module.css';

const CartItem = props => {
    return(
        <div>
            <div className={css.flex}>
                <div style={{marginRight: '20px', width: '100%'}}>
                    <h3>{props.title.substr(0,60)}</h3>
                    <div className={css.flex}>
                        <p>Unit Price: ${props.price.toFixed(2)}</p>
                        <p>Total Price: ${(props.price*props.quantity).toFixed(2)}</p>
                    </div>
                    <div className={css.flex}>
                        <button onClick={props.decreaseQuantity} className={css.button}>-</button>
                        <p>{props.quantity}</p>
                        <button onClick={props.increaseQuantity} className={css.button}>+</button>
                    </div>
                </div>
                <div>
                    <img className={css.productImg} src={props.image} alt='Product' />
                </div>
            </div>
            <hr />
        </div>
    )
}

export default CartItem;