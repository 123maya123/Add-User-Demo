//step-2:
//import './Card.module.css'
//for non module regular css type above import works 
//but for module css it wont so the below import necessary
import classes from './Card.module.css'

//in line 9: by using tamplet literal {`${}`} we can use css styling by card n by coming via props at a time
const Card=(props) => {
    return (
      <div className={`${classes.card} ${props.className}`}>
        {props.children}
      </div>
    );
}
export default Card;
//in line 9 we can dp props.anything instead of props.className but in AddUser.js we would have to write 
//<Card anything={classes.input}>
