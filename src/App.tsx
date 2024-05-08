import React, { useState } from 'react';
import './App.css';
import UserTable from './component/UserTable';
import AdduserForm from './forms/Adduserfrom';
import EditUserForm from './forms/EditUserForm';

const App = () => {
  const initialUserData = [
    { id: 1, name: "Kavippiriyan S", username: "Kavi" },
    { id: 2, name: "Kesavan", username: "K7" },
    { id: 3, name: "Naveen", username: "Navi" },
  ];

  const [users, setUsers] = useState(initialUserData);
  const [edit, setEdit] = useState(false);
  const [currentUser, setCurrentUser] = useState(initialUserData[0]);

  const addUser = (user: any) => {
    user.id = users.length + 1;
    setUsers([...users, user]);
  };

  const deleteUsers = (id: any) => {
    setUsers(users.filter((user) => user.id !== id))
    setEdit(false)
  }

  const editRow = (user: any) => {
    setEdit(true)
    setCurrentUser({ id: user.id, name: user.name, username: user.username })
  }

  const updateUser = (id: any, updatedUser: any) => {
    setEdit(false)
    setUsers(users.map((user) => (user.id === id ? updatedUser : user)
    ))
  }

  return (
    <div className="container">
      <div className="add-user">
        {edit ? (<div>
          <h2> Edit User</h2>
          <EditUserForm setEdit={setEdit} currentUser={currentUser} updatedUser={updateUser} />
        </div>) : (<div>   <h2>Add User</h2>
          <AdduserForm addUser={addUser} /></div>)}
      </div>
      <div className="user-table">
        <h2>User Table</h2>
        <UserTable editrow={editRow} deleteUsers={deleteUsers} users={users} />
      </div>
    </div>
  );
}

export default App;
