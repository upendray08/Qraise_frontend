import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from './Navbar'
import back from '../asset/backg.jpg'

const stylee = {
     width: "40%",
     height: "600px",
     margin: "0px auto",
     backgroundColor: "rgba(176,176,176,0.7)",
     backdropFilter: "blur(1px)",
     borderRadius: "20px",
     boxShadow: " 0px 0px 10px 2px rgb(101 78 138)",
     padding: '30px'
}
const Register = () => {
     const navigate = useNavigate();
     const [name, setName] = useState("");
     const [email, setEmail] = useState("");
     const [password, setPassword] = useState("");
     const [cpassword, setCpassword] = useState("");


     const register = async (e) => {
          e.preventDefault();
          console.log(name + " " + email + " " + cpassword + " " + password);
          const res = await fetch("http://localhost:5000/register", {
               method: "POST",
               headers: {
                    "Content-Type": "application/json"
               },
               body: JSON.stringify({
                    name, email, password, cpassword
               })
          });
          const data = await res.json();
          console.log(data.resp + " " + data.status);
          if (data.status === 0) {
               window.alert('User already exists');
          }
          else if (data.status === 1) {
               window.alert('User created successfully.')
               navigate("/login");
          }
          else if (data.status === 2) {
               window.alert("Password and Confirm Password should be same.")
          }
     }

     return (
          <>
               <div>
                    <Navbar />
               </div>
               <div style={{ backgroundImage: `url(${back})`, padding: '30px 50px', height: '667px', backgroundSize: "cover" }}>
                    <div class="page" style={stylee}>
                         <div class="register">
                              <br />
                              <h2 style={{ textAlign: 'center', fontWeight: '500' }}>Register</h2>
                              <br />
                              <h6 style={{ textAlign: 'center', fontWeight: '500' }}>Create a new account.</h6>
                              <form method='POST' onSubmit={register}>
                                   <div class="mb-3">
                                        <label htmlFor="name" class="form-label">Name</label>
                                        <input value={name} name="name" onChange={e => setName(e.target.value)} type="text" class="form-control" id="name" required />
                                   </div>
                                   <div class="mb-3">
                                        <label htmlFor="email" class="form-label">Email address</label>
                                        <input value={email} name="email" onChange={e => setEmail(e.target.value)} type="email" class="form-control" id="email" aria-describedby="emailHelp" required />
                                   </div>
                                   <div class="mb-3">
                                        <label htmlFor="password" class="form-label">Password</label>
                                        <input value={password} name="password" onChange={e => setPassword(e.target.value)} type="password" class="form-control" id="password" required />
                                   </div>
                                   <div class="mb-3">
                                        <label htmlFor="confirm_password" class="form-label">Re-type Password</label>
                                        <input value={cpassword} name="cpassword" onChange={e => setCpassword(e.target.value)} type="password" class="form-control" id="confirm_password" required />
                                   </div>
                                   <br />
                                   <div class="mb-3" style={{ flexDirection: 'row-reverse', display: 'flex' }}>
                                        <button class="btn btn-primary">Cancel</button>
                                        <button type="submit" style={{ marginRight: '5px' }} class="btn btn-primary">Register</button>
                                   </div>
                              </form>
                         </div>
                    </div>
               </div>
          </>
     )
}

export default Register