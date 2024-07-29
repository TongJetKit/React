import React from 'react';
import { Link } from 'react-router-dom';
import "./Login.css"

function Login() {
  return (
    <div className='login'>
      <div className='login-container'>
        <div className='login-card'>
          <form>  
            <h1>Welcome</h1>
            <div className='input-box'>
                <input type="text" placeholder='Username' required></input>
            </div>
            <div className='input-box'>
              <input type="password" placeholder='Password' required></input>
            </div>
            <div className='forget-remember'>
              <label><input type='checkbox'></input> Remember Me</label>
              <Link to="/" className='links'>Forget Password</Link>
            </div>
            <button type="submit" className='btn'>Login</button>
            <div className='register-link'>
              <p>Don't have an account? <Link to="/" className='links'>Register</Link></p>
            </div>
          </form>
            
        </div>
      </div>
    </div>
    
  )
}

export default Login