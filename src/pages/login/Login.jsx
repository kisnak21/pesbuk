/* eslint-disable linebreak-style */
/* eslint-disable max-len */
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/auth';
import './login.scss';

function Login() {
  const { login } = useContext(AuthContext);

  const handleLogin = () => {
    login();
  };

  return (
    <div className="login">
      <div className="card">
        <div className="left">
          <h1>Hello World.</h1>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore, cupiditate dolor deleniti quis facilis a.</p>
          <span>Don`t you have an account?</span>
          <Link to="/register">
            <button type="submit">Register</button>
          </Link>
        </div>
        <div className="right">
          <h1>Login</h1>
          <form action="">
            <input type="text" placeholder="Username" />
            <input type="password" placeholder="Password" />
            <button type="submit" onClick={handleLogin}>Login</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
