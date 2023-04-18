import React, { useState } from "react";
import axios from "axios";
import "./SignupForm.css";

export default function ContactUs() {
  
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
 
 
    async function save(event) {
        event.preventDefault();
        try {
          await axios.post("https://candybusiness.herokuapp.com/api/v1/employee/contact", {
          name: name,
          email: email,
          message: message,
          });
          alert("Enquiry Registered Successfully");
 
        } catch (err) {
          alert(err);
        }
      };

  return (
    <div className="signup-form-container">
      <h2>Contact Us </h2>
      <form onSubmit={save}>
        <div className="form-group">
          <label>Username</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
          
        </div>
        
        <div className="form-group">
          <label>Message</label>
          <input type="test" placeholder={message} onChange={(e) => setMessage(e.target.value)} />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
    
  );
}

