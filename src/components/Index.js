import React, { useEffect, useState } from 'react'
import Typed from 'typed.js';
import UserNavbar from './UserNavbar'
import bg from '../asset/bg2.jpg'


const Index = () => {
     const typingRef = useState(null);
     useEffect(() => {
          const options = {
               strings: ["", "Happy to see you here..."],
               typeSpeed: 100,
               backSpeed: 40,
               loop: true
          };

          const typing = new Typed(typingRef.current, options);

          return () => {
               typing.destroy(); // Cleanup the Typed instance when the component unmounts
          };
          //eslint-disable-next-line
     }, []);
     return (
          <>
               <div>
                    <UserNavbar />
               </div>
               <div style={{ backgroundImage: `url(${bg})`, backgroundRepeat: 'no-repeat', backgroundPositionX: '90%', backgroundPositionY: '30px', paddingBottom: '100px' }}>
                    <form method="GET">
                         <div className='home-page' style={{ textAlign: "center", width: "100%", height: "100vh" }}>
                              <div className='home-div' style={{ padding: "180px 120px", textAlign: 'left' }}>
                                   <p style={{ fontFamily: 'Copperplate, Papyrus, fantasy', fontSize: '35px', color: 'black' }}>Welcome</p>
                                   <h1 style={{ fontFamily: 'Acme', fontSize: '55px', color: 'black' }}>Nitin</h1>
                                   {/* <h2>{show ? 'Happy to see you here' : 'We are the Mern Developer home'}</h2> */}
                                   <h2><div className="text1" style={{ fontFamily: 'Courier New, monospace', fontSize: '50px', color: ' #990099' }} ref={typingRef}></div></h2>
                              </div>
                         </div>
                    </form>
               </div>
          </>
     )
}

export default Index