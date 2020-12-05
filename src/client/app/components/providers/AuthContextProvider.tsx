import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import AuthContext from '../../contexts/AuthContext';
import useHttpClient from '../../hooks/useHttpClient';

const AuthContextProvider: React.FC = (props) => {
  const httpClient = useHttpClient();
  const history = useHistory();
  const [state, setState] = useState({
    authentication: false,
    username: '',
    login(response: any) {
      setState({ ...state, authentication: true, username: response.username, loaded: true });
      history.push('/');
    },
    logout() {
      setState({ ...state, authentication: false, username: '' });
      history.push('/');
    },
    loaded: false,
  });

  useEffect(() => {
    httpClient.get('/api/security/userinfo')
      .then((response) => setState({ ...state, authentication: true, username: response.username, loaded: true }))
      .catch(() => setState({ ...state, loaded: true }));
  }, []);

  return (
    <AuthContext.Provider value={state}>
      {state.loaded ? props.children : null}
    </AuthContext.Provider>
  )
}

export default AuthContextProvider;
