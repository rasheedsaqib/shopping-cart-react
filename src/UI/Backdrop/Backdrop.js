import css from './Backdrop.module.css';

const Backdrop = props => {
    return(
        <div onClick={props.onClick} className={css.bakdrop}></div>
    );
}

export default Backdrop;