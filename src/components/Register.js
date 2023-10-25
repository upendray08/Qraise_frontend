import React from 'react'
import Navbar from './Navbar'
import { NavLink } from 'react-router-dom'

const stylee = {
     width: "35%",
     height: "560px",
     marginRight: "200px",
     marginTop: "80px",
     backgroundColor: "rgba(255, 255, 255, 0.074)",
     marginBottom: "50px",
     backdropFilter: "blur(10px)",
     borderRadius: "20px",
     boxShadow: " 0px 0px 10px 2px rgb(101 78 138)",
     marginLeft: '100px',
     padding: '20px'
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
                              <form>
                                   <div class="mb-3">
                                        <label for="exampleInputEmail1" class="form-label">Email address</label>
                                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                        <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                                   </div>
                                   <div class="mb-3">
                                        <label for="exampleInputPassword1" class="form-label">Password</label>
                                        <input type="password" class="form-control" id="exampleInputPassword1" />
                                   </div>
                                   <div class="mb-3 form-check">
                                        <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                                        <label class="form-check-label" for="exampleCheck1">Check me out</label>
                                   </div>
                                   <button type="submit" class="btn btn-primary">Submit</button>
                              </form>
                         </div>
                    </div>
               </div>
          </>
     )
}

export default Register