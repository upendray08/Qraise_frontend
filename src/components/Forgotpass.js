import React from 'react'
import Navbar from './Navbar'
import back from '../asset/backg.jpg'
import { NavLink } from 'react-router-dom'

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
                              {/* <h6 style={{ textAlign: 'center', fontWeight: '500' }}>Already have an account.</h6> */}
                              <form>
                                   <div class="mb-3">
                                        <label for="email" class="form-label">Email address</label>
                                        <input type="email" class="form-control" id="email" aria-describedby="emailHelp" />
                                   </div>
                                   {/* <div class="mb-3">
                                        <label for="password" class="form-label">Password</label>
                                        <input type="password" class="form-control" id="password" />
                                   </div>
                                   <div class="mb-3" style={{ display: 'flex' }}>
                                        <NavLink to="/forgot_pass" style={{ marginLeft: 'auto', color: 'black ' }}>Forgot Password?</NavLink>
                                   </div>
                                   <br /> */}
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

export default Forgotpass