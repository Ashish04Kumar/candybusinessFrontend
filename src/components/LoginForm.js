import React, { useState } from "react";

import { useNavigate } from 'react-router-dom';
import axios from "axios";
import "./LoginForm.css";

export default function LoginForm()  {
  
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
 
 
    async function login(event) {
        event.preventDefault();
        try {
          await axios.post("/api/v1/employee/login", {
            email: email,
            password: password,
            }).then((res) =>
            {
             console.log(res.data);
            
             if (res.data.message === "Email does not exists")
             {
               alert("Email not exits");
             }
             else if(res.data.message === "Login Success")
             {
                
                navigate('/');
             }
              else
             {
                alert("Incorrect Email and Password not match");
             }
          }, fail => {
           console.error(fail); // Error!
  });
        }
 
         catch (err) {
          alert(err);
        }
      
      }

  return (
    
      <div className="login-form-container">
        <h2>Login</h2>
        <form onSubmit={login}>
          <div className="form-group">
            <label>Email</label>
            <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>
          <button type="submit">Login</button>
        </form>
      </div>
    );
  
}