import React from 'react'
import './signin.style.css'
function Signin() {
  return (
    <>
    <div className="wrapper" >
        <form action="">
            <h1>Sign In</h1>
            <div className="input-box">
                <input type="text" placeholder="username" required/>
                <i className='bx bxs-user'></i>
            </div>
            <div className="input-box">
                <input type="text" placeholder="password" required/>
                <i className='bx bxs-lock-alt'></i>
            </div>
            <div className="remember-forget">
                <label><input type="checkbox"/>Remember me</label>
                <a href="#">Forget password?</a>
            </div>
            <button type="submit" className="btn">Sign In</button>
            <div className="register-link">
                <p>Don't have an account? <a href="#">Register</a></p>
            </div>
        </form>
    </div></>
  )
}

export default Signin
