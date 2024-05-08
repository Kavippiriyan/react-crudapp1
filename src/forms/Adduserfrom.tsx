import React, { useState } from 'react'

const AdduserForm = (props: any) => {

    const Initailstate = { id: null, name: "", username: "" }
    const [user, setuser] = useState(Initailstate)

    const handleInputChange = (event: any) => {
        const { name, value } = event.target
        setuser({ ...user, [name]: value })
    }

    return (
        <form onSubmit={
            event => {
                event.preventDefault();
                if (!user.name || !user.username) return;
                props.addUser(user);
                setuser(Initailstate)
            }
        }>

            <label>Name</label>
            <input type='text' name='name' onChange={handleInputChange} value={user.name}></input>
            <label>UserName</label>
            <input type='text' name='username' onChange={handleInputChange} value={user.username} ></input>
            <button type='submit'>Submit</button>

        </form>
    )
}

export default AdduserForm