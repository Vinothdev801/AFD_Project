import React from 'react'
import './css/login.css'
import { Link } from 'react-router-dom'
const Login = () => {
  return (
    <div className="body">
      <div class="login-container">
    {/* Background circles */}
    <div class="circle circle-green"></div>
    <div class="circle circle-yellow"></div>

     {/* Login Card  */}
    <div class="login-card">
      <div class="login-header">
        <i class="fa-solid fa-leaf logo-icon"></i>
        <h1>Farmers Market</h1>
      </div>

      <form>
        <label>Email</label>
        <input type="email" placeholder="farmer@example.com"/>

        <label>Password</label>
        <input type="password" placeholder="••••••••"/>

        <button type="submit">Login</button>
      </form>

      <div class="links">
        <Link >Forgot Password?</Link>
        <Link to='/farm-market/register'>Create Account</Link>
      </div>
    </div>
  </div>
    </div>
    
  )
}

export default Login
