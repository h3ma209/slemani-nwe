import styles from './button.module.css';

function Button(props){
    return(
        <div className={styles.BtnCont}>
            <a href={props.link} className={styles.Btn}>{props.text}</a>
        </div>
    );
}

export default Button;