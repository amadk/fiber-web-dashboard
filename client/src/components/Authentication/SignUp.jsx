import React from 'react';
import { Link } from 'react-router-dom';

class SignUp extends React.Component {

  render() {
    return (
      <div>
        <h1>Hey There!</h1>
        <h2>Create an Account</h2>
        <p>
          <Link to="/">Go back to the main page</Link>
        </p>
      </div>
    );
  }
}

export default SignUp