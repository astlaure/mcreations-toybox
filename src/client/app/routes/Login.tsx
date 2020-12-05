import React, { useContext, useState } from 'react';
import AuthContext from '../contexts/AuthContext';
import useHttpClient from '../hooks/useHttpClient';

const Login: React.FC = () => {
  const httpClient = useHttpClient();
  const authContext = useContext(AuthContext);
  const [state, setState] = useState({
    username: '',
    password: '',
  });
  const [errors, setErrors] = useState({});

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    try {
      const response = await httpClient.post('/api/security/login', state);
      authContext.login(response);
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
      <h1>Login</h1>
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
        <input type="submit" value="login"/>
      </form>
    </div>
  )
}

export default Login;
