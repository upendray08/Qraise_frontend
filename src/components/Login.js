import React from 'react'
import Navbar from './Navbar'

const stylee = {
     width: "35%",
     height: "420px",
     margin: "50px auto",
     backgroundColor: "rgb(54 54 54 / 20%)",
     // backdropFilter: "blur(10px)",
     borderRadius: "20px",
     boxShadow: " 0px 0px 10px 2px rgb(101 78 138)",
     padding: '30px'
}
const Login = () => {
     return (
          <>
               <div>
                    <Navbar />
               </div>
               <div>
                    <div class="page" style={stylee}>
                         <div class="register">
                              <br />
                              <h2 style={{ textAlign: 'center', fontWeight: '500' }}>Login</h2>
                              <br />
                              <h6 style={{ textAlign: 'center', fontWeight: '500' }}>Already have an account.</h6>
                              <form>
                                   <div class="mb-3">
                                        <label for="email" class="form-label">Email address</label>
                                        <input type="email" class="form-control" id="email" aria-describedby="emailHelp" />
                                   </div>
                                   <div class="mb-3">
                                        <label for="password" class="form-label">Password</label>
                                        <input type="password" class="form-control" id="password" />
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

export default Login