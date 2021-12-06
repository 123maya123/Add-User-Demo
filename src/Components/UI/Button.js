//step3:
import classes from './Button.module.css';
const Button=(props) =>{
    return (
      <button className={classes.button}
        type={props.type || "button"} onClick={props.onClick}>
        {props.children}
      </button>
    );
}
export default Button;
//now go to AddUser.js and change  button with Button so that all these styles will be inherited