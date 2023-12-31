import React from 'react'
import './Login.css'
export default function Login() {
  return (
    <>
    <div className="container login">
  <div className="left">
    <div className="header">
      <h2 className="animation a1">Welcome Back</h2>
      <h4 className="animation a2">Log in to your account using email and password</h4>
    </div>
    <div className="form">
      <input type="email" className="form-field animation a3" placeholder="Email Address"/>
      <input type="password" className="form-field animation a4" placeholder="Password"/>
      <p className="animation a5"><a href="/">Sign Up</a></p>
      <p className="animation a5"><a href="/">Forgot Password</a></p>
      <button className="animation a6">LOGIN</button>
    </div>
  </div>
  <div className="right"></div>
</div>
      
    </>
  )
}
