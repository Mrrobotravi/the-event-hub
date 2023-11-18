import React from 'react'
import './Login.css'
export default function Signup() {
  return (
    <>
    <div className="container login">
      <div className="left">
        <div className="header">
          <h2 className="animation a1">Welcome </h2>
          <h4 className="animation a2">Sign Up in to your account using email and password</h4>
        </div>
        <div className="form">
          <input type="text" placeholder="Username"   className="form-field animation a3"   required/> 
          <input type="email" className="form-field animation a4" placeholder="Email Address"/>
          <input type="password" className="form-field animation a5" placeholder="Password"/>
          <input type="password" className="form-field animation a6" placeholder="Repeat Password"/>
          <p className="animation a7"><a href="/"> Sign in</a></p>
          <button className="animation a8">LOGIN</button>
        </div>
      </div>
      <div className="right"></div>
    </div>

    </>
  )
}
