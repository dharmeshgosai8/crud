import React, {useState} from 'react';
import './App.css';
import UserTable from './tables/UserTable';
import AddUserForm from './forms/AddUserForm';
import EditUserForm from './forms/EditUserForm';

const App = () => {
  const usersData = [
    {id:1,name:'Shivani',username:'Shivu'},
    {id:2,name:'Tania',username:'test'},
    {id:3,name:'Anu',username:'Anuu'}
  ]
  // const blank = { id: null, name: '', username: '' }
  const [users, setUsers] = useState(usersData);

  //edit data
  const[editing, setEditing] = useState(false);
  const initialFormState = { id: null, name: '', username: '' }
  const [currentUser, setCurrentUser] = useState(initialFormState);

  const editRow = user => {
    setEditing(true);
    setCurrentUser({id:user.id,name:user.name,username:user.username})
  }
  const updateUser = (id, updatedUser) => {
    setEditing(false);
    setUsers(users.map(user=> (user.id === id ? updatedUser : user)))
    // console.log(editing);
  }

  const addUser = user => {
    user.id = users.length + 1;
    setUsers([...users,user])
  }

  const deleteUser = id =>{
    setUsers(users.filter(user=> user.id !== id))
  }

  return (
    <div className="container">
      <h1>CRUD App with Hooks</h1>
      <div className="flex-row">
        <div className="flex-large">
          {editing ? ( 
            <div>
              <h2>Edit user</h2>
              <EditUserForm
                setEditing={setEditing}
                currentUser={currentUser}
                updateUser={updateUser}
              />
            </div>        
          ):(
            <div>
              <h2>Add user</h2>
              <AddUserForm myadduser={addUser}/>
            </div>
          )}
        </div>
        <div className="flex-large">
          <h2>View users</h2>
          <UserTable myusers={users} deleteMyUser={deleteUser} editMyUser={editRow}/>
        </div>
      </div>
    </div>
  );
}

export default App;
