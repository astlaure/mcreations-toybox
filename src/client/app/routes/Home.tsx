import React from 'react';
import FormLogin from '../components/forms/FormLogin';

const Home: React.FC = () => {
  return (
    <div className="home-component">
      <div className="background">
        <h1 className="title">Testing</h1>
        <div className="container pl-5">
          <div className="row">
            <div className="col tablet-4">
              <div className="card">
                <FormLogin />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home;
