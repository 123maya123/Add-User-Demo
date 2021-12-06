import React, { useState } from 'react';
import AddUser from './Components/User/AddUser';
import UsersList from './Components/User/UsersList';
const App = () => {
  const [usersList, setUsersList] = useState([])
  //<UsersList/> supposed to output userdata but it will throw error as users is not a array outside 
  //of jsx in UserList.js. so empty [] will do the trick
  //now lets lift the state up by useState so that user inputs are stored not just console.log
  //here addUserHandler is called from AddUser.js
  const addUserHandler = (uName, uAge) =>{
    setUsersList((prevUsersList) => {
      return[...prevUsersList,{ name:uName, age:uAge,id:Math.random().toString() }]
    });//here we updated the state by taking old list n appending a new element toit
  }
  return (
    <div>
      <AddUser onAddUser={addUserHandler}/>
      {/* when the AddUser is clicked the onAddUser function should get executed */}
      <UsersList users={usersList}/>
    </div>
  )
}

export default App

