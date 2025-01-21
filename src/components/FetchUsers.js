import React, { useState, useEffect } from 'react';
import axios from 'axios';

const FetchUsers = ({ updateUsers }) => {
  const [error, setError] = useState('');
  
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        updateUsers(response.data);
      } catch (err) {
        setError('Failed to fetch users');
      }
    };
    fetchUsers();
  }, [updateUsers]);

  return <>{error && <div className="error">{error}</div>}</>;
};

export default FetchUsers;
