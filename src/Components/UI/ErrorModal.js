import Card from "./Card";
import Button from "./Button";
import classes from "./ErrorModal.module.css";
import React from "react";
import ReactDOM from 'react-dom';

//in public=>index.html we have adeed 2 lines i.e <div id="backdrop-root"></div> n <div id="overlay-root"></div>
//we hv separated our modal into 2 diff. components i.e. Backdrop n Modal Overlay
const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onConfirm}></div>
}
const ModalOverlay = (props) =>{
  return (
    <Card  className = {classes.modal}>
    <header className={classes.header}>
        <h2>{props.title}</h2>
    </header>
    <div className={classes.content}>
        <p>{props.message}</p>
    </div>
    <footer className={classes.actions}>
      <Button onClick={props.onConfirm}>okay</Button>
    </footer>
</Card>
)
}
//createPortal takes 2 arguments
const ErrorModal = (props)=>{
    return (
      <React.Fragment>
        {ReactDOM.createPortal(
          <Backdrop onConfirm={props.onConfirm} />,
          document.getElementById("backdrop-root")
        )}
        {ReactDOM.createPortal(
          <ModalOverlay
            title={props.title}
            message={props.message}
            onConfirm={props.onConfirm}
          />,
          document.getElementById("overlay-root")
        )}
      </React.Fragment>
    );
}
export  default ErrorModal
//lets import ErrorModal in AddUser.js