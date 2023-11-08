 import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Profile = () => {
  const [user, setUser] = useState({});

  useEffect(() => {
    axios.get('http://localhost:3001/api/profile')
      .then(response => {
        setUser(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  const handleUpdateProfile = () => {
    axios.put('http://localhost:3001/api/profile', user)
      .then(response => {
        console.log('Profile updated successfully');
      })
      .catch(error => {
        console.error(error);
      });
  };

  const handleChange = (e) => {
    setUser(prevUser => ({
      ...prevUser,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div>
      <h1>Profile</h1>
      <input type="text" name="name" value={user.name} onChange={handleChange} />
      <input type="text" name="email" value={user.email} onChange={handleChange} />
      <button onClick={handleUpdateProfile}>Update Profile</button>
    </div>
  );
};

export default Profile;
