import React, { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form';

import axios from 'axios';
import './styles/styles.css'; 


const UserDetails = () => {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    gender: '',
    email: ''
  });

  useEffect(() => {
    const accessToken = localStorage.getItem('accessToken');

    if (accessToken) {
      axios.get('http://192.168.0.112:3000/profile-details', {
        headers: {
          Authorization: `Bearer ${accessToken}`
        }
      })
      .then(response => {
        if (response.data && response.data.data && response.data.data.length > 0) {
          const userData = response.data.data[0]; 
          setFormData({
            name: userData.name || '',
            age: userData.age || '',
            gender: userData.gender_name || '',
            email: userData.email || ''
          });
        }
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  }

  return (
    <Form className='align-baseline'>
      <Form.Group className="mb-3 align-baseline fs-4 left-align-label" controlId="formBasicEmail">
        <Form.Label className='align-baseline fs-4 left-align-label'>Name</Form.Label>
        <Form.Control
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className='border-0 border-bottom border-info border-4'
        />
      </Form.Group>

      <Form.Group className="mb-3 align-baseline fs-4 left-align-label" controlId="formBasicAge">
        <Form.Label className='text-lg-start fs-4 left-align-label'>Age</Form.Label>
        <Form.Control
          type="text"
          name="age"
          value={formData.age}
          onChange={handleChange}
          className='border-0 border-bottom border-info border-4'
        />
      </Form.Group>

      <Form.Group className="mb-3 align-baseline fs-4 left-align-label" controlId="formBasicGender">
        <Form.Label className='text-lg-start fs-4 left-align-label'>Gender</Form.Label>
        <Form.Control
          type="text"
          name="gender"
          value={formData.gender}
          onChange={handleChange}
          className='border-0 border-bottom border-info border-4'
        />
      </Form.Group>

      <Form.Group className="mb-3 align-baseline fs-4 left-align-label" controlId="formBasicPassword">
        <Form.Label className='text-lg-start fs-4 left-align-label'>Email address</Form.Label>
        <Form.Control
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className='border-0 border-bottom border-info border-4'
        />
      </Form.Group>
    </Form>
  );
}

export default UserDetails;
