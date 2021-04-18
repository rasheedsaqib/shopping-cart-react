import css from './Product.module.css';

const product = props => {
    return(
        <div className={css.product}>
            <div className={css.center}>
                <img src={props.image} alt="Product" />
            </div>
            <h3>{props.title.substr(0,50)}...</h3>
            <p>{props.description.substr(0, 100)}...</p>
            <p className={css.price}>${props.price.toFixed(2)}</p>
            <div className={css.center}>
                <button onClick={props.addToCart}>Add to cart</button>
            </div>
        </div>
    );
}

export default product;