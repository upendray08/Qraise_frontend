import React, { useState } from 'react'
import { useNavigate, NavLink } from 'react-router-dom'
import Navbar from './Navbar'
import back from '../asset/backg.jpg'

const stylee = {
     width: "40%",
     height: "300px",
     margin: "0px auto",
     backgroundColor: "rgba(176,176,176,0.7)",
     backdropFilter: "blur(1px)",
     borderRadius: "20px",
     boxShadow: " 0px 0px 10px 2px rgb(101 78 138)",
     padding: '30px'
}
const Forgotpass = () => {

     const navigate = useNavigate();
     const [email, setEmail] = useState("");
     const [cupassword, setCupassword] = useState("");
     const [password, setPassword] = useState("");
     const [repassword, setRepassword] = useState("");

     const forgot = async (e) => {
          e.preventDefault();
          console.log(email + " " + password);
          const res = await fetch("http://localhost:5000/forgot", {
               method: "POST",
               headers: {
                    "Content-Type": "application/json"
               },
               body: JSON.stringify({
                    email, cupassword, password, repassword
               })
          });
          const data = await res.json();
          if (data.status === 0) {
               window.alert('Entered wrong current password');
          }
          else if (data.status === 1) {
               window.alert('Password updated successfully.')
               navigate("/login");
          }
          else if (data.status === 2) {
               window.alert("Email doesn't exist")
          }
          else if (data.status == 3) {
               window.alert('New password and confirm password didnot matched.')
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
                              <h2 style={{ textAlign: 'center', fontWeight: '500' }}>Forget Password</h2>
                              <br />
                              <form>
                                   <div class="mb-3">
                                        <label for="email" class="form-label">Email address</label>
                                        <input value={email} name="email" onChange={e => setEmail(e.target.value)} type="email" class="form-control" id="email" aria-describedby="emailHelp" />
                                   </div>
                                   <div class="mb-3" style={{ flexDirection: 'row-reverse', display: 'flex' }}>
                                        <button class="btn btn-primary">Cancel</button>
                                        <NavLink data-bs-toggle="modal" data-bs-target="#myModal1" style={{ marginRight: '5px' }} className='btn btn-primary'>Submit</NavLink>
                                   </div>
                              </form>
                         </div>
                    </div>
               </div>
               <div class="modal" id="myModal1" tabindex="-1" aria-labelledby="exampleModalLabel1" aria-hidden="true">
                    <div class="modal-dialog">
                         <div class="modal-content">
                              <div class="modal-header">
                                   <h5 class="modal-title" id="exampleModalLabel">Change Password</h5>
                                   <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                              </div>
                              <form method='POST' onSubmit={forgot}>
                                   <div class="modal-body">
                                        <div class="mb-3">
                                             <label for="email" class="form-label">Email address</label>
                                             <input value={email} type="email" class="form-control" id="email" aria-describedby="emailHelp" disabled />
                                        </div>
                                        <div class="mb-3">
                                             <label for="current_password" class="form-label">Current Password</label>
                                             <input value={cupassword} name="cupassword" onChange={e => setCupassword(e.target.value)} type="password" class="form-control" id="current_password" />
                                        </div>
                                        <div class="mb-3">
                                             <label for="new_password" class="form-label">New Password</label>
                                             <input value={password} name="password" onChange={e => setPassword(e.target.value)} type="password" class="form-control" id="new_password" />
                                        </div>
                                        <div class="mb-3">
                                             <label for="re_password" class="form-label">Re-type Password</label>
                                             <input value={repassword} name="repassword" onChange={e => setRepassword(e.target.value)} type="password" class="form-control" id="re_password" />
                                        </div>
                                   </div>
                                   <div class="modal-footer">
                                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                        <button type="submit" class="btn btn-primary">Save changes</button>
                                   </div>
                              </form>
                         </div>
                    </div>
               </div>
          </>
     )
}

export default Forgotpass