import css from './CartIcon.module.css';

const CartIcon = props => {
    return (
        <div onClick={props.onClick} className={css.relative}>
            <img className={css.cartIcon} src='https://image.flaticon.com/icons/png/128/1170/1170627.png' alt='cart'/>
            {props.items !== 0 ? <p className={css.number}>{props.items}</p> : null}
        </div>
    )
}

export default CartIcon;