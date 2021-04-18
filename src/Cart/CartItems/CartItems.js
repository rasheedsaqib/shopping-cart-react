import CartItem from './CartItem/CartItem';

const CartItems = props => {

    const itemsList = props.items.map(item => {
       return <CartItem
                    key={item.id}
                    title={item.title}
                    image={item.image}
                    price={item.price}
                    quantity={item.quantity}
                    increaseQuantity={()=>props.increaseQuantity(item.id)}
                    decreaseQuantity={()=>props.decreaseQuantity(item.id)}
                />
    });

    return(
        <div>
            {itemsList}
        </div>
    )
}

export default CartItems;