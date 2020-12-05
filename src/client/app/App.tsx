import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import AuthContextProvider from './components/providers/AuthContextProvider';
import Home from './routes/Home';
import Login from './routes/Login';
import Register from './routes/Register';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <AuthContextProvider>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path="/register" component={Register} />
          <Route path="/login" component={Login} />
          <Route path="/" component={Home} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </AuthContextProvider>
  )
}

export default App;
