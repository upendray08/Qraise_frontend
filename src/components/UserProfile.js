import React from 'react'
import { NavLink } from 'react-router-dom'
import UserNavbar from './UserNavbar'

const UserProfile = () => {
     return (
          <>
               <div>
                    <UserNavbar />
               </div>
               <br />
               <div className='container mt-2' style={{ width: "70%" }}>
                    <ul class="nav nav-tabs" id="myTabs" role="tablist">
                         <li class="nav-item" role="presentation">
                              <a class="nav-link active " id="tab1-tab" data-bs-toggle="tab" href="#tab1" role="tab" aria-controls="tab1" aria-selected="true">Profile</a>
                         </li>
                         <li class="nav-item" role="presentation">
                              <a class="nav-link" id="tab2-tab" data-bs-toggle="tab" href="#tab2" role="tab" aria-controls="tab2" aria-selected="false">Donation History</a>
                         </li>
                         <li class="nav-item" role="presentation">
                              <a class="nav-link" id="tab3-tab" data-bs-toggle="tab" href="#tab3" role="tab" aria-controls="tab3" aria-selected="false">Campaign Created/Supported</a>
                         </li>
                    </ul>
               </div>
               <br />
               <div class="container mt-2">
                    <div class="tab-content" id="myTabContent">
                         <div class="tab-pane fade show active" id="tab1" role="tabpanel" aria-labelledby="tab1-tab">
                              <div className="card mb-3" style={{ width: "90%", margin: "auto", padding: "50px 30px" }}>
                                   <div className='row' style={{ width: "95%", margin: "auto" }}>
                                        <div className="card col-sm-8 mb-3" style={{ width: "75%", boxShadow: '0px 0px 10px 1px rgba(0,0,0,0.5)' }}>
                                             <div className="card-body">
                                                  <div className="row">
                                                       <div className="col-sm-3">
                                                            <h6 className="mb-0" style={{ fontSize: '15px' }} >Full Name</h6>
                                                       </div>
                                                       <div className="col-sm-9 text-secondary">
                                                            Kenneth Valdez
                                                            {/* {userData.name} */}
                                                       </div>
                                                  </div>
                                                  <hr />
                                                  <div className="row">
                                                       <div className="col-sm-3">
                                                            <h6 className="mb-0" style={{ fontSize: '15px' }} >Email</h6>
                                                       </div>
                                                       <div className="col-sm-9 text-secondary">
                                                            <a href='#/'>nitin@gmail.com</a>
                                                            {/* <a href='#/'>{email}</a> */}
                                                       </div>
                                                  </div>
                                                  <hr />
                                                  <div className="row">
                                                       <div className="col-sm-3">
                                                            <h6 className="mb-0" style={{ fontSize: '15px' }} >Phone</h6>
                                                       </div>
                                                       <div className="col-sm-9 text-secondary">
                                                            (239) 816-9029
                                                            {/* {phone} */}
                                                       </div>
                                                  </div>
                                                  <hr />
                                                  <div className="row">
                                                       <div className="col-sm-3">
                                                            <h6 className="mb-0" style={{ fontSize: '15px' }} >Password</h6>
                                                       </div>
                                                       <div className="col-sm-9 text-secondary">
                                                            abc@123
                                                            {/* {password} */}
                                                       </div>
                                                  </div>
                                             </div>
                                        </div>
                                        <div className="col-sm-1 mb-3" style={{ width: "2%" }}>
                                             <div className="card-body">

                                             </div>
                                        </div>
                                        <div className="card col-sm-3 mb-3" style={{ width: "22%", padding: "5px", boxShadow: '0px 0px 10px 1px rgba(0,0,0,0.5)' }}>
                                             <div className="card-body" style={{ padding: "10px" }}>
                                                  <img style={{ width: "100%", height: "197px" }} src='https://t3.ftcdn.net/jpg/02/22/36/14/360_F_222361406_FRccMrRh1v67wwzcGM8LyeALADwc5JwB.jpg' alt='profile=pic'></img>
                                                  {/* <img style={{ width: "100%", height: "177px" }} src={userData.image} alt='profile=pic'></img> */}
                                             </div>
                                        </div>
                                   </div>
                                   <br />
                                   <div style={{ margin: "auto", width: "95%", display: "flex", justifyContent: "flex-end", gap: "10px" }}>
                                        <NavLink className='btn btn-primary' data-bs-toggle="modal" data-bs-target="#myModal1">Change Password</NavLink>
                                        <NavLink className='btn btn-primary' data-bs-toggle="modal" data-bs-target="#myModal">Update Profile</NavLink>
                                        {/* <NavLink style={{ padding: "5px 12px", textDecoration: "none", boxShadow: "0px 0px 10px 1px rgba(0,0,0,0.75)", borderRadius: "5px", color: "white", backgroundColor: "#b005ff" }} type='button' to="/admin-faculty-update-profile" state={{ email: email }} >Update Profile</NavLink> */}
                                   </div>
                              </div>
                         </div>
                         <div class="tab-pane fade" id="tab2" role="tabpanel" aria-labelledby="tab2-tab">
                              <div className="card mb-3" style={{ width: "90%", margin: "auto", padding: "50px 30px" }}>
                                   <table class="table table-hover align-middle mb-0 bg-white">
                                        <thead class="bg-light">
                                             <tr>
                                                  <th>Date</th>
                                                  <th>Campaign</th>
                                                  {/* <th>Campaign Name</th> */}
                                                  <th>Amount Donated</th>
                                                  {/* <th style={{ paddingLeft: "57px" }}>Actions</th> */}
                                             </tr>
                                        </thead>
                                        <tbody>
                                             <tr>
                                                  <td>12-04-2019</td>
                                                  <td>
                                                       <div class="d-flex align-items-center">
                                                            <div class="ms-3">
                                                                 <p class="fw-bold mb-1">123456</p>
                                                                 <p class="text-muted mb-0">Education Fund Raise</p>
                                                            </div>
                                                       </div>
                                                  </td>
                                                  <td>&#8377;12456</td>
                                             </tr>
                                        </tbody>
                                   </table>
                              </div>
                         </div>
                         <div class="tab-pane fade" id="tab3" role="tabpanel" aria-labelledby="tab3-tab">
                              <div className="card mb-3" style={{ width: "90%", margin: "auto", padding: "50px 30px" }}>
                                   <table class="table table-hover align-middle mb-0 bg-white">
                                        <thead class="bg-light">
                                             <tr>
                                                  <th>Campaign Id</th>
                                                  <th>Campaign Name</th>
                                                  <th>Created/Supported Date</th>
                                             </tr>
                                        </thead>
                                        <tbody>
                                             <tr>
                                                  <td>123454</td>
                                                  <td>Education Fund Raise</td>
                                                  <td>12-10-2023</td>
                                             </tr>
                                        </tbody>
                                   </table>
                              </div>
                         </div>
                    </div>
               </div>


               {/* //update profile modal */}
               <div class="modal" id="myModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog">
                         <div class="modal-content">
                              <div class="modal-header">
                                   <h5 class="modal-title" id="exampleModalLabel">Update Profile</h5>
                                   <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                              </div>
                              <div class="modal-body">
                                   <form>
                                        <div class="mb-3">
                                             <label for="name" class="form-label">Full Name</label>
                                             <input type="text" class="form-control" id="name" />
                                        </div>
                                        <div class="mb-3">
                                             <label for="email" class="form-label">Email address</label>
                                             <input type="email" class="form-control" id="email" aria-describedby="emailHelp" disabled />
                                        </div>
                                        <div class="mb-3">
                                             <label for="phone" class="form-label">Phone</label>
                                             <input type="text" class="form-control" id="pnone" />
                                        </div>
                                   </form>
                              </div>
                              <div class="modal-footer">
                                   <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                   <button type="button" class="btn btn-primary">Save changes</button>
                              </div>
                         </div>
                    </div>
               </div>

               {/* change password modal */}

               <div class="modal" id="myModal1" tabindex="-1" aria-labelledby="exampleModalLabel1" aria-hidden="true">
                    <div class="modal-dialog">
                         <div class="modal-content">
                              <div class="modal-header">
                                   <h5 class="modal-title" id="exampleModalLabel">Change Password</h5>
                                   <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                              </div>
                              <div class="modal-body">
                                   <form>
                                        <div class="mb-3">
                                             <label for="email" class="form-label">Email address</label>
                                             <input type="email" class="form-control" id="email" aria-describedby="emailHelp" disabled />
                                        </div>
                                        <div class="mb-3">
                                             <label for="current_password" class="form-label">Current Password</label>
                                             <input type="password" class="form-control" id="current_password" />
                                        </div>
                                        <div class="mb-3">
                                             <label for="new_password" class="form-label">New Password</label>
                                             <input type="password" class="form-control" id="new_password" />
                                        </div>
                                        <div class="mb-3">
                                             <label for="re_password" class="form-label">Re-type Password</label>
                                             <input type="password" class="form-control" id="re_password" />
                                        </div>
                                   </form>
                              </div>
                              <div class="modal-footer">
                                   <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                   <button type="button" class="btn btn-primary">Save changes</button>
                              </div>
                         </div>
                    </div>
               </div>
          </>
     )
}

export default UserProfile