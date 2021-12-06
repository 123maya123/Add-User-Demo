//step-4:
//here we are gonna output user data
//to transform our user data to jsx we need map function in line 12
//props.users is our choice we can call it propos.anyname
//in line 9 user is also named by us
import Card from "../UI/Card";
import classes from './UsersList.module.css';

const UsersList=(props)=>{
    return (
    <Card className = {classes.users}>
      <ul>
        {props.users.map((user) => (
            <li key={user.id}> 
            {/* this id will be unique so react wont yell us */}
            {user.name} ({user.age} Years Old)
          </li>
        ))}
      </ul>
    </Card>
    );
}
export default UsersList