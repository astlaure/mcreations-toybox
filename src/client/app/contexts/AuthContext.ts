import React from 'react';

const AuthContext = React.createContext({
  authentication: false,
  username: '',
  login(response: any) {},
  logout() {},
});

export default AuthContext;
