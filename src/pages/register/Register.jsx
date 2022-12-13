/* eslint-disable linebreak-style */
/* eslint-disable max-len */
import React from 'react';
import './register.scss';
import { Link } from 'react-router-dom';

function Register() {
  return (
    <div className="register">
      <div className="card">
        <div className="left">
          <h1>Pesbuk.</h1>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore, cupiditate dolor deleniti quis facilis a.</p>
          <span>Do you have an account?</span>
          <Link to="/login">
            <button type="submit">Login</button>
          </Link>
        </div>
        <div className="right">
          <h1>Register</h1>
          <form action="">
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <input type="text" placeholder="Username" />
            <input type="password" placeholder="Password" />
            <button type="submit">Register</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
