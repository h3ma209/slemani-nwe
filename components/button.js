import styles from './button.module.css';

function Button(props){
    return(
        <div className={styles.BtnCont}>
            <a className={styles.Btn}>{props.text}</a>
        </div>
    );
}

export default Button;