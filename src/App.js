import React, { useState } from 'react';
import './App.css';
import UserTable from './components/UserTable';
import UserForm from './components/UserForm';
import FetchUsers from './components/FetchUsers';
import Footer from './components/Footer';
// import Pagination from './components/Pagination';

function App() {
  const [users, setUsers] = useState([]);
  const [formData, setFormData] = useState({ id: '', name: '', username: '', email: '', company: '' });
  const [isEditing, setIsEditing] = useState(false);
  
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  // Fetch users and set state
  const updateUsers = (data) => {
    setUsers(data);
    setTotalPages(Math.ceil(data.length / 5)); // Assuming 5 users per page
  };

  // Add new user
  const addUser = (newUser) => {
    alert('User added successfully');
    setUsers([...users, { ...newUser, id: users.length + 1 }]);

    console.log(users);
  };

  // Edit user
  const editUser = (updatedUser) => {
    alert('User updated successfully');
    const updatedUsers = users.map((user) => (user.id === updatedUser.id ? updatedUser : user));
    setUsers(updatedUsers);
    setIsEditing(false);
    console.log(users);
  };

  // Delete user
  const deleteUser = (id) => {
    alert('User deleted successfully');
    setUsers(users.filter((user) => user.id !== id));

    console.log(users);
  };

  // Pagination handler
  const paginate = (direction) => {
    if (direction === 'prev' && currentPage > 1) {
      setCurrentPage(currentPage - 1);
    } else if (direction === 'next' && currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div className="container">
      <h1>User Management</h1>

      {/* Fetch and display users */}
      <FetchUsers updateUsers={updateUsers} />

      {/* Display user table */}
      <UserTable
        users={users}
        deleteUser={deleteUser}
        setFormData={setFormData}
        setIsEditing={setIsEditing}
        paginate={paginate}
        currentPage={currentPage}
        totalPages={totalPages}
      />

      {/* Add/Edit form */}
      <UserForm formData={formData} setFormData={setFormData} isEditing={isEditing} addUser={addUser} editUser={editUser} />

      {/* Footer  */}
      <Footer />
    </div>
  );
}

export default App;
