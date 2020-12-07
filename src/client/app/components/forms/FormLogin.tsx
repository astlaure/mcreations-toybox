import React, { useContext, useState } from 'react';
import useHttpClient from '../../hooks/useHttpClient';
import AuthContext from '../../contexts/AuthContext';

interface FormLoginProps {
  errorCallback?: () => {};
}

const FormLogin: React.FC<FormLoginProps> = (props) => {
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
      if (props.errorCallback) {
        props.errorCallback();
      }
    }
  }

  const handleChange = (event: React.FormEvent<HTMLInputElement>) => {
    setState({
      ...state,
      [event.currentTarget.name]: event.currentTarget.value,
    });
  }

  return (
    <form action="#" onSubmit={handleSubmit}>
      <div className="input">
        <label htmlFor="username">Username</label>
        <input
          type="text"
          name="username"
          id="username"
          value={state.username}
          onChange={handleChange}
        />
      </div>
      <div className="input">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          value={state.password}
          onChange={handleChange}
        />
      </div>
      <input type="submit" className="btn" value="login"/>
    </form>
  )
}

export default FormLogin;
