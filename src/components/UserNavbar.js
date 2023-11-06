import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import img from '../asset/logo.jpg'
import blank_profile from '../asset/blank_profile.webp'
import Styles from './Navbar.module.css'

const UserNavbar = (props) => {
     const [username , setusername] = useState("")
     useEffect(()=>{
          setusername(props.username)
     },[])
     // console.log(props.state)
     // console.log(props.userid , props.username)
     return (
          <>
               <div style={{ width: "100%", height: "55px", display: 'flex', boxShadow: "0px 0px 10px 2px rgb(101 78 138)" }}>
                    <div style={{ display: 'flex' }}>
                         <a class="btn btn-primary" style={{ backgroundColor: 'white', border: 'none', color: '#2c3f81', fontSize: '30px' }} data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample">
                              <i class="fa-solid fa-bars"></i>
                         </a>
                         <img src={img} alt="" style={{ width: "160px", padding: "5px" }} />
                    </div>
                    <div style={{ width: '100%', display: 'flex', flexDirection: 'row-reverse' }}>
                         <div style={{ width: '200px', padding: '10px', textAlign: 'center' }}>
                              <img src={blank_profile} alt="" style={{ width: "30px", height: '30px', borderRadius: '10px', marginRight: '10px' }} />
                              {/* <img src={props.image} alt="" style={{ width: "30px", height: '30px', borderRadius: '10px', marginRight: '10px' }} /> */}
                              {/* <NavLink to="/register" className={Styles.btnst}>Register</NavLink> */}
                              <NavLink to="/logout" style={{ padding: '10px' }} className={Styles.btnst}><i class="fa-solid fa-right-from-bracket"></i>Logout</NavLink>
                         </div>
                    </div>
               </div>
               <div>
                    <div class="offcanvas offcanvas-start" style={{ width: '20%' }} tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
                         <div class="offcanvas-header">
                              <h5 class="offcanvas-title" id="offcanvasExampleLabel"><img src={img} alt="" style={{ width: "160px", padding: "5px" }} /></h5>
                              <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                         </div>
                         <div class="offcanvas-body">
                              <p>Welcome, {username} </p>
                              {/* <div className={Styles.side_btn} >
                                   <NavLink to="/" className={Styles.btnsd}><i class="fa-solid fa-house"></i> Dashboard</NavLink>
                              </div>
                              <hr /> */}
                              <p>Campaigns</p>
                              <div className={Styles.side_btn}>
                                   <NavLink to="/create_campaign" className={Styles.btnsd}><i class="fa-solid fa-square-plus"></i> Create Campaign</NavLink>
                              </div>
                              <br />
                              <div className={Styles.side_btn}>
                                   <NavLink to="/view_campaign" className={Styles.btnsd}><i class="fa-solid fa-layer-group"></i> View Campaigns</NavLink>
                              </div>
                              <br />
                              <div className={Styles.side_btn}>
                                   <NavLink to="/your_campaign" className={Styles.btnsd}><i class="fa-solid fa-layer-group"></i> Your Campaigns</NavLink>
                              </div>
                              <hr />
                              <p>User Details</p>
                              <div className={Styles.side_btn}>
                                   <NavLink to={{ pathname: '/profile' }} className={Styles.btnsd}><i class="fa-solid fa-user"></i> Profile</NavLink>
                              </div>
                              <br />
                              <div className={Styles.side_btn}>
                                   <NavLink to="/notification" className={Styles.btnsd}><i class="fa-solid fa-bell"></i> Notification</NavLink>
                              </div>
                         </div>
                    </div>
               </div>
          </>
     )
}

export default UserNavbar;