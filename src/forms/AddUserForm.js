import React, {useState} from 'react';

const AddUserForm = props =>{
    const initialFormState = {id:null,name:'',username:''}

    const [user, setUser] = useState(initialFormState)
    
    const handleInputChange = event =>{
        // console.log(event.target);
        const { name, value } = event.target;
        setUser({ ...user, [name]: value })
    }

    return(
        <form onSubmit={event =>{
            event.preventDefault();
            if(!user.name || !user.username)return
            console.log(props);
            props.myadduser(user)
            setUser(initialFormState)
        }} >
            <label>Name</label>
            <input type="text" required name="name" value={user.name} onChange={handleInputChange} />
            <label>Username</label>
            <input type="text" name="username" value={user.username} onChange={handleInputChange} />
            <button>Add new user</button>
        </form>
    )
}

export default  AddUserForm