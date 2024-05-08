import React from 'react'
import './UserTable.css'

type userdataProps =
    {
        users: {
            id: number,
            name: string,
            username: string,
        }[]
        deleteUsers: (id: number) => void;
        editrow:(user: { id: number, name: string, username: string }) => void;
    }

const UserTable = (props: userdataProps) => {
    return (
        <table className='table'>
            <thead>
                <tr>
                    <td>Name</td>
                    <td>UserName</td>
                    <td>Actions</td>
                </tr>
            </thead>
            <tbody>
                {props.users.length > 0 ? (
                    props.users.map((user) => (
                        <tr key={user.id}>
                            <td>{user.name}</td>
                            <td>{user.username}</td>
                            <td><button onClick={() => props.editrow(user)}>Edit</button></td>
                            <td><button onClick={() => props.deleteUsers(user.id)}>Delete</button></td>
                        </tr>
                    ))
                ) : (
                    <tr>
                        <td colSpan={3}>No Users</td>
                    </tr>
                )}
            </tbody>
        </table>
    )
}

export default UserTable
