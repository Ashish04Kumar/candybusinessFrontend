import React, { useState } from "react";
import axios from "axios";
import "./SignupForm.css";

export default function SignupForm() {
  
    const [employeename, setEmployeename] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
 
 
    async function save(event) {
        event.preventDefault();
        try {
          await axios.post("https://candybusiness.herokuapp.com/api/v1/employee/save", {
          employeename: employeename,
          email: email,
          password: password,
          });
          alert("Employee Registration Successfully");
 
        } catch (err) {
          alert(err);
        }
      };

  return (
    <div className="signup-form-container">
      <h2>Sign Up</h2>
      <form onSubmit={save}>
        <div className="form-group">
          <label>Username</label>
          <input type="text" value={employeename} onChange={(e) => setEmployeename(e.target.value)} />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
          
        </div>
        
        <div className="form-group">
          <label>Password</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}

