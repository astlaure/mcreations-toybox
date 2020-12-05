import React, { useState } from 'react';
import useHttpClient from '../hooks/useHttpClient';

const Register: React.FC = () => {
  const httpClient = useHttpClient();
  const [state, setState] = useState({
    username: '',
    password: '',
    confirmation: '',
    email: '',
  });
  const [errors, setErrors] = useState({});

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    try {
      const response = await httpClient.post('/api/security/register', state);
      // redirect
    } catch (err) {
      setErrors(err);
    }
  }

  const handleChange = (event: React.FormEvent<HTMLInputElement>) => {
    setState({
      ...state,
      [event.currentTarget.name]: event.currentTarget.value,
    });
  }

  return (
    <div>
      <h1>Register</h1>
      <form action="#" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            name="username"
            id="username"
            value={state.username}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            value={state.password}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="confirmation">Confirmation</label>
          <input
            type="password"
            name="confirmation"
            id="confirmation"
            value={state.confirmation}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            value={state.email}
            onChange={handleChange}
          />
        </div>
        <input type="submit" value="register"/>
      </form>
    </div>
  )
}

export default Register;
