import React, { useState } from 'react'
import { useNavigate, NavLink } from 'react-router-dom'
import Navbar from './Navbar'
import back from '../asset/backg.jpg'

const stylee = {
     width: "40%",
     height: "460px",
     margin: "0px auto",
     backgroundColor: "rgba(176,176,176,0.7)",
     backdropFilter: "blur(1px)",
     borderRadius: "20px",
     boxShadow: " 0px 0px 10px 2px rgb(101 78 138)",
     padding: '30px'
}
const Login = () => {
     const navigate = useNavigate();
     const [email, setEmail] = useState("");
     const [password, setPassword] = useState("");

     const login = async (e) => {
          e.preventDefault();
          // console.log(email + " " + password);
          const res = await fetch("http://localhost:5000/login", {
               method: "POST",
               headers: {
                    "Content-Type": "application/json"
               },
               body: JSON.stringify({
                    email, password
               })
          });
          const data = await res.json();
          // console.log(data.resp + " " + data.status);
          if (data.status === 0) {
               window.alert('Invalid user');
          }
          else if (data.status === 1) {
               window.alert('User logged in successfully.')
               navigate("/");
          }
          else if (data.status === 2) {
               window.alert("Incorrect Password")
          }
     }

     return (
          <>
               <div>
                    <Navbar />
               </div>
               <div style={{ backgroundImage: `url(${back})`, padding: '123px 50px', height: '667px', backgroundSize: "cover" }}>
                    <div class="page" style={stylee}>
                         <div class="register">
                              <br />
                              <h2 style={{ textAlign: 'center', fontWeight: '500' }}>Login</h2>
                              <br />
                              <h6 style={{ textAlign: 'center', fontWeight: '500' }}>Already have an account.</h6>
                              <form method='POST' onSubmit={login}>
                                   <div class="mb-3">
                                        <label for="email" class="form-label">Email address</label>
                                        <input value={email} name="email" onChange={e => setEmail(e.target.value)} type="email" class="form-control" id="email" aria-describedby="emailHelp" />
                                   </div>
                                   <div class="mb-3">
                                        <label for="password" class="form-label">Password</label>
                                        <input value={password} name="password" onChange={e => setPassword(e.target.value)} type="password" class="form-control" id="password" />
                                   </div>
                                   <div class="mb-3" style={{ display: 'flex' }}>
                                        <NavLink to="/forget_pass" style={{ marginLeft: 'auto', color: 'black ' }}>Forgot Password?</NavLink>
                                   </div>
                                   <br />
                                   <div class="mb-3" style={{ flexDirection: 'row-reverse', display: 'flex' }}>
                                        <button class="btn btn-primary">Cancel</button>
                                        <button type="submit" style={{ marginRight: '5px' }} class="btn btn-primary">Login</button>
                                   </div>
                              </form>
                         </div>
                    </div>
               </div>
          </>
     )
}

export default Login