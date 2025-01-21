import React from 'react';

const UserTable = ({ users, deleteUser, setFormData, setIsEditing, paginate, currentPage, totalPages }) => {
  return (
    <div>
      <h2>Users</h2>
      <table className="user-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Username</th>
            <th>Email</th>
            <th>Company Name</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.slice((currentPage - 1) * 5, currentPage * 5).map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name.split(' ')[0]}</td>
              <td>{user.name.split(' ')[1]}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>{user.company.name}</td>
              <td>
                <button onClick={() => { setIsEditing(true); setFormData(user); }}>Edit</button>
                <button onClick={() => deleteUser(user.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination controls */}
      <div className="pagination">
        <button onClick={() => paginate('prev')} disabled={true && currentPage === 1}>
          Prev
        </button>
        <span>{currentPage} of {totalPages}</span>
        <button onClick={() => paginate('next')} disabled={true && currentPage === totalPages}>
          Next
        </button>
      </div>
    </div>
  );
};

export default UserTable;
