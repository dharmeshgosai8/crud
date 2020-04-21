import React, { useState, useEffect  } from 'react';

const EditUserForm = props => {
    
    const [user, setUser] = useState(props.currentUser)

    const handleInputChange = event => {
        // console.log(event.target);
        const { name, value } = event.target;
        setUser({ ...user, [name]: value })
    }

    useEffect(()=>{
        setUser(props.currentUser)
    },[props])

    return (
        <form onSubmit={event => {
            event.preventDefault();
            props.updateUser(user.id,user)
        }} >
            <label>Name</label>
            <input type="text" required name="name" value={user.name} onChange={handleInputChange} />
            <label>Username</label>
            <input type="text" name="username" value={user.username} onChange={handleInputChange} />
            <button>Update User</button>
            <button onClick={()=> props.setEditing(false)}>Cancel</button>
        </form>
    )
}

export default EditUserForm