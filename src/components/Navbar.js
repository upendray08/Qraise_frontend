import React from 'react'
import { NavLink } from 'react-router-dom'
import img from '../asset/logo.jpg'
import Styles from './Navbar.module.css'

const Navbar = () => {
     return (
          <>
               <div style={{ width: "100%", height: "55px", display: 'flex', boxShadow: "0px 0px 10px 2px rgb(101 78 138)" }}>
                    <img src={img} alt="" style={{ width: "160px", padding: "5px" }} />
                    <div style={{ width: '100%', display: 'flex', flexDirection: 'row-reverse' }}>
                         <div style={{ width: '200px', padding: '15px', textAlign: 'center' }}>
                              <NavLink to="/register" className={Styles.btnst}>Register</NavLink>
                              <NavLink to="/login" className={Styles.btnst}>Login</NavLink>
                         </div>
                    </div>
               </div>
          </>
     )
}

export default Navbar;