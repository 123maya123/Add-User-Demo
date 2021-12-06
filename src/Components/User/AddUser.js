//step-1:
//here in this component we are just fetching data from user not outputing anything 
//here we wre relying on Ref instead of state but both are okay as per choice of developer but
//if you only want to read a value not intended to change anything then state is not a good idea use ref then
import React, { useState, useRef} from 'react';//useRef can be called inside functional component
import Card from '../UI/Card';
import classes from './AddUser.module.css';
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal';
import Wrapper from '../Helper/Wrapper';

const AddUser = (props) =>{
   const nameInputref = useRef();
   const ageInputref = useRef();

    const [error, setError] = useState()

    const addUserHandler = (event) => {
        event.preventDefault();
        const enteredName = nameInputref.current.value
        const enteredUserAge = ageInputref.current.value
        //trim() removes any white space. || is or operator
        if(enteredName.trim().length === 0 || enteredUserAge.trim().length === 0){
            setError({
                title: 'Invalid input',
                message: 'please enter a valid name n age (non-empty values).'
            })
            return;//if we return something here below code will not get execute as return statement finises
        }
        //+ensures its a number in js but its not mandatory
        if(+enteredUserAge<1){
            setError({
                title: 'Invalid input',
                message: 'please enter a valid age (>0).'
            })
            return;
        }
        props.onAddUser(enteredName,enteredUserAge );//onAddUser() is from App.js
        nameInputref.current.value="";
        ageInputref.current.value="";
    }

    const errorHandler = () =>{
        setError(null);
    }
    //Card component is just for styling
    //button is builtin but Button is our customMade cutton used in line 19
    return (
        <Wrapper>
        {error && <ErrorModal title={error.title}message={error.message} onConfirm={errorHandler}/>}
        <Card className={classes.input}>
            <form onSubmit={addUserHandler} >
                <label htmlFor="username">User Name</label><br/>
                <input id="username" type= "text" ref={nameInputref}/> <br/><br/>
                
                <label htmlFor="age">Age(Years)</label><br/>
                <input id="age" type= "text" ref={ageInputref}/> <br/><br/><br/>
               
                <Button type="submit">Add User</Button>
            </form>
        </Card>
        </Wrapper>
    )
}

export default AddUser
