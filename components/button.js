import styles from './button.module.css';

function Button(props){
    return(
        <button className={styles.Btn}>{props.text}</button>
    );
}

export default Button;