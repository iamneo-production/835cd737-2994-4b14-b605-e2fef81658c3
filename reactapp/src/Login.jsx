import React from 'react';
import {Navigate} from "react-router-dom";



const LoginForm = () => {

    
  const handle = (e) => {
    return <Navigate to="/Home"></Navigate>
  }


  return (
    <div>
        
       <form>
        <div className="form-inner">
        <h2> Login</h2>
        <div className="form-group">
                   <label htmlFor="name">Name:</label>
                   <input type="text" name="name" id="name" />
                </div>
         
                <div className="form-group">
                    <label htmlFor="email">Email: </label>
                    <input type="email" name="email" id="email"/>
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password: </label>
                    <input type="password" name="password" id="password"/>
                </div>
          <input type="submit"  id="loginButton" onClick={handle} value="LOGIN"/>
          <div className="signup">
            <p>New user?</p>
              <a  id="signupLink" href="SignupForm">Create an account</a>
            </div>
            </div>
      </form>
      
    </div>
  )
}

export default LoginForm;