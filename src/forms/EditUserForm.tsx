import React, { useEffect, useState } from 'react';

const EditUserForm = (props: any) => {
    const [user, setUser] = useState(props.currentUser); // Corrected to props.currentUser

    const handleInputChange = (event: any) => {
        const { name, value } = event.target;
        setUser({ ...user, [name]: value });
    };

    const initialState = { id: null, name: "", username: "" };

    useEffect(() => {
        setUser(props.currentUser)
    }, [props]

    )

    return (
        <form onSubmit={(event) => {
            event.preventDefault();
            if (!user.name || !user.username) return;
            props.updatedUser(user.id, user);
            setUser(initialState);
        }}>
            <label>Name</label>
            <input type='text' name='name' onChange={handleInputChange} value={user.name}></input>
            <label>UserName</label>
            <input type='text' name='username' onChange={handleInputChange} value={user.username}></input>
            <button type='submit'>Update New User</button>
            <button type='button' onClick={() => props.setEdit(false)}>Cancel</button> {/* Changed type to button */}
        </form>
    );
};

export default EditUserForm;
