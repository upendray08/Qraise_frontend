import React from 'react'
import Navbar from './Navbar'
import { NavLink } from 'react-router-dom'

const stylee = {
     width: "35%",
     height: "560px",
     margin: "50px auto",
     backgroundColor: "rgb(54 54 54 / 20%)",
     // backdropFilter: "blur(10px)",
     borderRadius: "20px",
     boxShadow: " 0px 0px 10px 2px rgb(101 78 138)",
     padding: '30px'
}
const Register = () => {
     return (
          <>
               <div>
                    <Navbar />
               </div>
               <div>
                    <div class="page" style={stylee}>
                         <div class="register">
                              <br />
                              <h2 style={{ textAlign: 'center', fontWeight: '500' }}>New User! Register</h2>
                              <br />
                              <form>
                                   <div class="mb-3">
                                        <label for="name" class="form-label">Name</label>
                                        <input type="text" class="form-control" id="name" />
                                   </div>
                                   <div class="mb-3">
                                        <label for="email" class="form-label">Email address</label>
                                        <input type="email" class="form-control" id="email" aria-describedby="emailHelp" />
                                   </div>
                                   <div class="mb-3">
                                        <label for="password" class="form-label">Password</label>
                                        <input type="password" class="form-control" id="password" />
                                   </div>
                                   <div class="mb-3">
                                        <label for="confirm_password" class="form-label">Password</label>
                                        <input type="password" class="form-control" id="confirm_password" />
                                   </div>
                                   <br />
                                   <div class="mb-3" style={{ flexDirection: 'row-reverse', display: 'flex' }}>
                                        <button type="submit" class="btn btn-primary">Cancel</button>
                                        <button type="submit" style={{ marginRight: '5px' }} class="btn btn-primary">Submit</button>
                                   </div>
                              </form>
                         </div>
                    </div>
               </div>
          </>
     )
}

export default Register