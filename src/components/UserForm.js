import React, { useState, useEffect } from 'react';

const UserForm = ({ formData, setFormData, isEditing, addUser, editUser }) => {
  const [formState, setFormState] = useState(formData);

  useEffect(() => {
    setFormState(formData);
  }, [formData]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isEditing) {
      editUser(formState);
    } else {
      addUser(formState);
    }
    setFormData({ id: '', name: '', username: '', email: '', company: '' });
    setFormData((prevState) => ({
      ...prevState,
      company: {
        ...prevState.company,
        name: '', // Clear company name
      },
    }));
  };

  const handleCompanyNameChange = (e) => {
    setFormState((prevState) => ({
      ...prevState,
      company: {
        ...prevState.company,
        name: e.target.value
      },
    }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div>
      <h2>{isEditing ? 'Edit User' : 'Add New User'}</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={formState.name}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={formState.username}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formState.email}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="companyName"
          placeholder="Company Name"
          value={formState.company.name}
          onChange={handleCompanyNameChange}
          required
        />
        <button type="submit">{isEditing ? 'Update User' : 'Add User'}</button>
        <button type="button" onClick={() => setFormData({ id: '', name: '', username: '', email: '', company: '' })}>Cancel</button>
      </form>
    </div>
  );
};

export default UserForm;
