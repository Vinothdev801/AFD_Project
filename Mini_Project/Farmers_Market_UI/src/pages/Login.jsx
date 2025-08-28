import React from 'react'
import './css/login.css'
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
        <a href="#">Forgot Password?</a>
        <a href="#">Create Account</a>
      </div>
    </div>
  </div>
    </div>
    
  )
}

export default Login
