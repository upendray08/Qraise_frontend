import React from 'react'
import UserNavbar from './UserNavbar'

const Notification = () => {
     return (
          <>
               <div>
                    <UserNavbar />
               </div>
               <div className="card mb-3 mt-5" style={{ width: "75%", margin: "auto", padding: "50px 30px" }}>
                    <h4><strong>Notifications</strong></h4>
                    <br />
                    <table class="table table-hover align-middle mb-0 bg-white">
                         <thead class="bg-light">
                              <tr>
                                   <th style={{ width: '20%' }}>Date</th>
                                   <th>Message</th>
                              </tr>
                         </thead>
                         <tbody>
                              <tr>
                                   <td>12-10-2023</td>
                                   <td>You have donated 12000 rupees to Education Fund raise</td>
                              </tr>
                         </tbody>
                    </table>
               </div>
          </>
     )
}

export default Notification