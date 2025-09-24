import React from 'react'
import './Style/Login.css'

const Login = () => {
  return (
    <div className="wrap">
      <h2>Login</h2>

      <form action="#" method="post">
        <label htmlFor="email">Email</label>
        <input 
          id="email" 
          name="email" 
          type="email" 
          placeholder="aman@example.com" 
          required 
        />

        <label htmlFor="pw">Password</label>
        <input 
          id="pw" 
          name="password" 
          type="password" 
          placeholder="Enter your password" 
          required 
        />

        <div className="actions">
          <button type="submit">Login</button>
          <button type="reset" className="btn-ghost">Reset</button>
        </div>

        <div className="small">
          Don’t have an account? <a href="#">Sign up</a>
        </div>
      </form>
    </div>
  )
}

export default Login
