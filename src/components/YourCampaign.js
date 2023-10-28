import React from 'react'
import UserNavbar from './UserNavbar'
import styles from './ViewCampaign.module.css'
import { CircularProgress, CircularProgressLabel } from '@chakra-ui/react'
import { NavLink } from 'react-router-dom'


const YourCampaign = () => {
     return (
          <>
               <div>
                    <UserNavbar />
               </div>
               <div style={{ backgroundColor: 'grey', paddingBottom: '100px' }}>
                    <div class="container">
                         <div class="row">
                              <div class="col-md-2" style={{ backgroundColor: '#f2f2f2', marginTop: '30px', borderRadius: '5px', height: '720px' }}>
                                   <div style={{ margin: '30px 10px' }}>
                                        <h4>Categories</h4><hr />
                                        <div style={{ display: 'flex', flexDirection: 'column', padding: '20px 10px' }}>
                                             <h6>All Categories</h6><br />
                                             <a style={{ textDecoration: 'none', color: 'black' }} href="">Education</a><br />
                                             <a style={{ textDecoration: 'none', color: 'black' }} href="">Medical</a><br />
                                             <a style={{ textDecoration: 'none', color: 'black' }} href="">Women & Girls</a><br />
                                             <a style={{ textDecoration: 'none', color: 'black' }} href="">Animals</a><br />
                                             <a style={{ textDecoration: 'none', color: 'black' }} href="">Creative</a><br />
                                             <a style={{ textDecoration: 'none', color: 'black' }} href="">Food & Hunger</a><br />
                                             <a style={{ textDecoration: 'none', color: 'black' }} href="">Environment</a><br />
                                             <a style={{ textDecoration: 'none', color: 'black' }} href="">Children</a><br />
                                             <a style={{ textDecoration: 'none', color: 'black' }} href="">Memorial</a><br />
                                             <a style={{ textDecoration: 'none', color: 'black' }} href="">Community Development</a><br />
                                             <a style={{ textDecoration: 'none', color: 'black' }} href="">Others</a><br />
                                        </div>
                                   </div>
                              </div>
                              <div class="col-md-10">
                                   <br />
                                   <div style={{ textAlign: 'center' }}>
                                        <input placeholder="Search campaign..." type="text" name="text" class={styles.search_input} />
                                   </div>
                                   <div className={styles.flexcard}>
                                        <div className={styles.card}>
                                             <div className={styles.image}></div>
                                             <div className={styles.content}>
                                                  <span className={styles.title}>
                                                       Lorem ipsum dolor sit.
                                                  </span>
                                                  <p className={styles.desc}>
                                                       Lorem ipsum dolor sit amet, hi there how able are you to donaitee
                                                  </p>
                                                  <h6>
                                                       Created by: Nitin Kumar
                                                  </h6>
                                                  <div className="row">
                                                       <div className="col-md-3" style={{ padding: '0px 12px' }}>
                                                            <CircularProgress size='70px' thickness='15px' value={Math.abs(Math.floor((Number(800) / Number(1000)) * 100))} color='green'>
                                                                 <CircularProgressLabel style={{ top: '60%', left: '50%' }}>{Math.abs(Math.floor((Number(800) / Number(1000)) * 100)) > 100 ? 100 : Math.abs(Math.floor((Number(800) / Number(1000)) * 100))}%</CircularProgressLabel>
                                                            </CircularProgress>
                                                       </div>
                                                       <div className="col-md-9" style={{ padding: '15px 0px 0px 20px' }}>
                                                            <br />
                                                            <p>
                                                                 Amount Raised: ₹800
                                                                 Target Amount: ₹1000
                                                            </p>
                                                       </div>
                                                  </div>
                                                  <div>
                                                       <NavLink className={styles.action} data-bs-toggle="modal" data-bs-target="#myModal3" >
                                                            <span aria-hidden="true">
                                                                 <i class="fa-solid fa-pen-to-square fa-lg" style={{ color: "#271f51" }}></i>
                                                            </span>
                                                            Edit
                                                       </NavLink>&nbsp;
                                                       <NavLink className={styles.action} data-bs-toggle="modal" data-bs-target="#myModal4" >
                                                            <span aria-hidden="true">
                                                                 <i class="fa-solid fa-trash fa-lg" style={{ color: "#9e0000" }}></i>
                                                            </span>
                                                            Delete
                                                       </NavLink>&nbsp;
                                                       <NavLink className={styles.action} to="/details_campaign">
                                                            View more
                                                            <span aria-hidden="true">
                                                                 →
                                                            </span>
                                                       </NavLink>
                                                  </div>
                                             </div>
                                        </div>
                                        <div className={styles.card}>
                                             <div className={styles.image}></div>
                                             <div className={styles.content}>
                                                  <span className={styles.title}>
                                                       Lorem ipsum dolor sit.
                                                  </span>
                                                  <p className={styles.desc}>
                                                       Lorem ipsum dolor sit amet, hi there how able are you to donaitee
                                                  </p>
                                                  <h6>
                                                       Created by: Nitin Kumar
                                                  </h6>
                                                  <div className="row">
                                                       <div className="col-md-3" style={{ padding: '0px 12px' }}>
                                                            <CircularProgress size='70px' thickness='15px' value={Math.abs(Math.floor((Number(800) / Number(1000)) * 100))} color='green'>
                                                                 <CircularProgressLabel style={{ top: '60%', left: '50%' }}>{Math.abs(Math.floor((Number(800) / Number(1000)) * 100)) > 100 ? 100 : Math.abs(Math.floor((Number(800) / Number(1000)) * 100))}%</CircularProgressLabel>
                                                            </CircularProgress>
                                                       </div>
                                                       <div className="col-md-9" style={{ padding: '15px 0px 0px 20px' }}>
                                                            <br />
                                                            <p>
                                                                 Amount Raised: ₹800
                                                                 Target Amount: ₹1000
                                                            </p>
                                                       </div>
                                                  </div>
                                                  <div>
                                                       <NavLink className={styles.action} data-bs-toggle="modal" data-bs-target="#myModal3" >
                                                            <span aria-hidden="true">
                                                                 <i class="fa-solid fa-pen-to-square fa-lg" style={{ color: "#271f51" }}></i>
                                                            </span>
                                                            Edit
                                                       </NavLink>&nbsp;
                                                       <NavLink className={styles.action} data-bs-toggle="modal" data-bs-target="#myModal4" >
                                                            <span aria-hidden="true">
                                                                 <i class="fa-solid fa-trash fa-lg" style={{ color: "#9e0000" }}></i>
                                                            </span>
                                                            Delete
                                                       </NavLink>&nbsp;
                                                       <NavLink className={styles.action} to="/details_campaign">
                                                            View more
                                                            <span aria-hidden="true">
                                                                 →
                                                            </span>
                                                       </NavLink>
                                                  </div>
                                             </div>
                                        </div>
                                        <div className={styles.card}>
                                             <div className={styles.image}></div>
                                             <div className={styles.content}>
                                                  <span className={styles.title}>
                                                       Lorem ipsum dolor sit.
                                                  </span>
                                                  <p className={styles.desc}>
                                                       Lorem ipsum dolor sit amet, hi there how able are you to donaitee
                                                  </p>
                                                  <h6>
                                                       Created by: Nitin Kumar
                                                  </h6>
                                                  <div className="row">
                                                       <div className="col-md-3" style={{ padding: '0px 12px' }}>
                                                            <CircularProgress size='70px' thickness='15px' value={Math.abs(Math.floor((Number(800) / Number(1000)) * 100))} color='green'>
                                                                 <CircularProgressLabel style={{ top: '60%', left: '50%' }}>{Math.abs(Math.floor((Number(800) / Number(1000)) * 100)) > 100 ? 100 : Math.abs(Math.floor((Number(800) / Number(1000)) * 100))}%</CircularProgressLabel>
                                                            </CircularProgress>
                                                       </div>
                                                       <div className="col-md-9" style={{ padding: '15px 0px 0px 20px' }}>
                                                            <br />
                                                            <p>
                                                                 Amount Raised: ₹800
                                                                 Target Amount: ₹1000
                                                            </p>
                                                       </div>
                                                  </div>
                                                  <div>
                                                       <NavLink className={styles.action} data-bs-toggle="modal" data-bs-target="#myModal3" >
                                                            <span aria-hidden="true">
                                                                 <i class="fa-solid fa-pen-to-square fa-lg" style={{ color: "#271f51" }}></i>
                                                            </span>
                                                            Edit
                                                       </NavLink>&nbsp;
                                                       <NavLink className={styles.action} data-bs-toggle="modal" data-bs-target="#myModal4" >
                                                            <span aria-hidden="true">
                                                                 <i class="fa-solid fa-trash fa-lg" style={{ color: "#9e0000" }}></i>
                                                            </span>
                                                            Delete
                                                       </NavLink>&nbsp;
                                                       <NavLink className={styles.action} to="/details_campaign">
                                                            View more
                                                            <span aria-hidden="true">
                                                                 →
                                                            </span>
                                                       </NavLink>
                                                  </div>
                                             </div>
                                        </div>
                                        <div className={styles.card}>
                                             <div className={styles.image}></div>
                                             <div className={styles.content}>
                                                  <span className={styles.title}>
                                                       Lorem ipsum dolor sit.
                                                  </span>
                                                  <p className={styles.desc}>
                                                       Lorem ipsum dolor sit amet, hi there how able are you to donaitee
                                                  </p>
                                                  <h6>
                                                       Created by: Nitin Kumar
                                                  </h6>
                                                  <div className="row">
                                                       <div className="col-md-3" style={{ padding: '0px 12px' }}>
                                                            <CircularProgress size='70px' thickness='15px' value={Math.abs(Math.floor((Number(800) / Number(1000)) * 100))} color='green'>
                                                                 <CircularProgressLabel style={{ top: '60%', left: '50%' }}>{Math.abs(Math.floor((Number(800) / Number(1000)) * 100)) > 100 ? 100 : Math.abs(Math.floor((Number(800) / Number(1000)) * 100))}%</CircularProgressLabel>
                                                            </CircularProgress>
                                                       </div>
                                                       <div className="col-md-9" style={{ padding: '15px 0px 0px 20px' }}>
                                                            <br />
                                                            <p>
                                                                 Amount Raised: ₹800
                                                                 Target Amount: ₹1000
                                                            </p>
                                                       </div>
                                                  </div>
                                                  <div>
                                                       <NavLink className={styles.action} data-bs-toggle="modal" data-bs-target="#myModal3" >
                                                            <span aria-hidden="true">
                                                                 <i class="fa-solid fa-pen-to-square fa-lg" style={{ color: "#271f51" }}></i>
                                                            </span>
                                                            Edit
                                                       </NavLink>&nbsp;
                                                       <NavLink className={styles.action} data-bs-toggle="modal" data-bs-target="#myModal4" >
                                                            <span aria-hidden="true">
                                                                 <i class="fa-solid fa-trash fa-lg" style={{ color: "#9e0000" }}></i>
                                                            </span>
                                                            Delete
                                                       </NavLink>&nbsp;
                                                       <NavLink className={styles.action} to="/details_campaign">
                                                            View more
                                                            <span aria-hidden="true">
                                                                 →
                                                            </span>
                                                       </NavLink>
                                                  </div>
                                             </div>
                                        </div>
                                        <div className={styles.card}>
                                             <div className={styles.image}></div>
                                             <div className={styles.content}>
                                                  <span className={styles.title}>
                                                       Lorem ipsum dolor sit.
                                                  </span>
                                                  <p className={styles.desc}>
                                                       Lorem ipsum dolor sit amet, hi there how able are you to donaitee
                                                  </p>
                                                  <h6>
                                                       Created by: Nitin Kumar
                                                  </h6>
                                                  <div className="row">
                                                       <div className="col-md-3" style={{ padding: '0px 12px' }}>
                                                            <CircularProgress size='70px' thickness='15px' value={Math.abs(Math.floor((Number(800) / Number(1000)) * 100))} color='green'>
                                                                 <CircularProgressLabel style={{ top: '60%', left: '50%' }}>{Math.abs(Math.floor((Number(800) / Number(1000)) * 100)) > 100 ? 100 : Math.abs(Math.floor((Number(800) / Number(1000)) * 100))}%</CircularProgressLabel>
                                                            </CircularProgress>
                                                       </div>
                                                       <div className="col-md-9" style={{ padding: '15px 0px 0px 20px' }}>
                                                            <br />
                                                            <p>
                                                                 Amount Raised: ₹800
                                                                 Target Amount: ₹1000
                                                            </p>
                                                       </div>
                                                  </div>
                                                  <div>
                                                       <NavLink className={styles.action} data-bs-toggle="modal" data-bs-target="#myModal3" >
                                                            <span aria-hidden="true">
                                                                 <i class="fa-solid fa-pen-to-square fa-lg" style={{ color: "#271f51" }}></i>
                                                            </span>
                                                            Edit
                                                       </NavLink>&nbsp;
                                                       <NavLink className={styles.action} data-bs-toggle="modal" data-bs-target="#myModal4" >
                                                            <span aria-hidden="true">
                                                                 <i class="fa-solid fa-trash fa-lg" style={{ color: "#9e0000" }}></i>
                                                            </span>
                                                            Delete
                                                       </NavLink>&nbsp;
                                                       <NavLink className={styles.action} to="/details_campaign">
                                                            View more
                                                            <span aria-hidden="true">
                                                                 →
                                                            </span>
                                                       </NavLink>
                                                  </div>
                                             </div>
                                        </div>
                                        <div className={styles.card}>
                                             <div className={styles.image}></div>
                                             <div className={styles.content}>
                                                  <span className={styles.title}>
                                                       Lorem ipsum dolor sit.
                                                  </span>
                                                  <p className={styles.desc}>
                                                       Lorem ipsum dolor sit amet, hi there how able are you to donaitee
                                                  </p>
                                                  <h6>
                                                       Created by: Nitin Kumar
                                                  </h6>
                                                  <div className="row">
                                                       <div className="col-md-3" style={{ padding: '0px 12px' }}>
                                                            <CircularProgress size='70px' thickness='15px' value={Math.abs(Math.floor((Number(800) / Number(1000)) * 100))} color='green'>
                                                                 <CircularProgressLabel style={{ top: '60%', left: '50%' }}>{Math.abs(Math.floor((Number(800) / Number(1000)) * 100)) > 100 ? 100 : Math.abs(Math.floor((Number(800) / Number(1000)) * 100))}%</CircularProgressLabel>
                                                            </CircularProgress>
                                                       </div>
                                                       <div className="col-md-9" style={{ padding: '15px 0px 0px 20px' }}>
                                                            <br />
                                                            <p>
                                                                 Amount Raised: ₹800
                                                                 Target Amount: ₹1000
                                                            </p>
                                                       </div>
                                                  </div>
                                                  <div>
                                                       <NavLink className={styles.action} data-bs-toggle="modal" data-bs-target="#myModal3" >
                                                            <span aria-hidden="true">
                                                                 <i class="fa-solid fa-pen-to-square fa-lg" style={{ color: "#271f51" }}></i>
                                                            </span>
                                                            Edit
                                                       </NavLink>&nbsp;
                                                       <NavLink className={styles.action} data-bs-toggle="modal" data-bs-target="#myModal4" >
                                                            <span aria-hidden="true">
                                                                 <i class="fa-solid fa-trash fa-lg" style={{ color: "#9e0000" }}></i>
                                                            </span>
                                                            Delete
                                                       </NavLink>&nbsp;
                                                       <NavLink className={styles.action} to="/details_campaign">
                                                            View more
                                                            <span aria-hidden="true">
                                                                 →
                                                            </span>
                                                       </NavLink>
                                                  </div>
                                             </div>
                                        </div>
                                        <div className={styles.card}>
                                             <div className={styles.image}></div>
                                             <div className={styles.content}>
                                                  <span className={styles.title}>
                                                       Lorem ipsum dolor sit.
                                                  </span>
                                                  <p className={styles.desc}>
                                                       Lorem ipsum dolor sit amet, hi there how able are you to donaitee
                                                  </p>
                                                  <h6>
                                                       Created by: Nitin Kumar
                                                  </h6>
                                                  <div className="row">
                                                       <div className="col-md-3" style={{ padding: '0px 12px' }}>
                                                            <CircularProgress size='70px' thickness='15px' value={Math.abs(Math.floor((Number(800) / Number(1000)) * 100))} color='green'>
                                                                 <CircularProgressLabel style={{ top: '60%', left: '50%' }}>{Math.abs(Math.floor((Number(800) / Number(1000)) * 100)) > 100 ? 100 : Math.abs(Math.floor((Number(800) / Number(1000)) * 100))}%</CircularProgressLabel>
                                                            </CircularProgress>
                                                       </div>
                                                       <div className="col-md-9" style={{ padding: '15px 0px 0px 20px' }}>
                                                            <br />
                                                            <p>
                                                                 Amount Raised: ₹800
                                                                 Target Amount: ₹1000
                                                            </p>
                                                       </div>
                                                  </div>
                                                  <div>
                                                       <NavLink className={styles.action} data-bs-toggle="modal" data-bs-target="#myModal3" >
                                                            <span aria-hidden="true">
                                                                 <i class="fa-solid fa-pen-to-square fa-lg" style={{ color: "#271f51" }}></i>
                                                            </span>
                                                            Edit
                                                       </NavLink>&nbsp;
                                                       <NavLink className={styles.action} data-bs-toggle="modal" data-bs-target="#myModal4" >
                                                            <span aria-hidden="true">
                                                                 <i class="fa-solid fa-trash fa-lg" style={{ color: "#9e0000" }}></i>
                                                            </span>
                                                            Delete
                                                       </NavLink>&nbsp;
                                                       <NavLink className={styles.action} to="/details_campaign">
                                                            View more
                                                            <span aria-hidden="true">
                                                                 →
                                                            </span>
                                                       </NavLink>
                                                  </div>
                                             </div>
                                        </div>
                                   </div>
                              </div>
                         </div>
                    </div>
               </div>
               <div class="modal" id="myModal4" tabindex="-1" aria-labelledby="exampleModalLabel4" aria-hidden="true">
                    <div class="modal-dialog">
                         <div class="modal-content">
                              <div class="modal-header">
                                   <h5 class="modal-title" id="exampleModalLabel">Delete Campaign</h5>
                                   <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                              </div>
                              <div class="modal-body">
                                   Are you sure want to delete this campaign!
                              </div>
                              <div class="modal-footer">
                                   <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                   <button type="button" class="btn btn-primary">Delete</button>
                              </div>
                         </div>
                    </div>
               </div>
               <div class="modal" id="myModal3" tabindex="-1" aria-labelledby="exampleModalLabel3" aria-hidden="true">
                    <div class="modal-dialog">
                         <div class="modal-content">
                              <div class="modal-header">
                                   <h5 class="modal-title" id="exampleModalLabel">Edit Campaign</h5>
                                   <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                              </div>
                              <div class="modal-body">
                                   <form>
                                        <div class="mb-3">
                                             <label for="campaignName" class="form-label">Campaign Name</label>
                                             <input className="form-control"
                                                  type="text"
                                                  id="campaignName"
                                             // value={formData.campaignName}
                                             // onChange={(e) =>
                                             //      setFormData({ ...formData, campaignName: e.target.value })
                                             // }
                                             />
                                        </div>
                                        <div class="mb-3">
                                             <label for="ShortDesc" class="form-label">Short Description ( in 10-15 words)</label>
                                             <input type="text" class="form-control" id="ShortDesc" />
                                        </div>
                                        <div class="mb-3">
                                             <label for="description" class="form-label">Description</label>
                                             <textarea
                                                  className="form-control"
                                                  id="description"
                                             // value={formData.description}
                                             // onChange={(e) =>
                                             //      setFormData({ ...formData, description: e.target.value })
                                             // }
                                             />
                                        </div>
                                        <div class="mb-3">
                                             <label for="targetAmount" class="form-label">Target Amount (in Rupees)</label>
                                             {/* <input type="text"  id="targetAmount" /> */}
                                             <input
                                                  class="form-control"
                                                  type="number"
                                                  id="targetAmount"
                                                  min='0'
                                             // value={formData.targetAmount}
                                             // onChange={(e) =>
                                             //      setFormData({ ...formData, targetAmount: e.target.value })
                                             // }
                                             />
                                        </div>
                                        <div className="row">

                                             <div class="col-md-6 mb-3">
                                                  <label htmlFor="category" className="form-label">Category</label>
                                                  <select
                                                       className="form-control"
                                                       id="category"
                                                  // value={formData.category}
                                                  // onChange={(e) =>
                                                  //      setFormData({ ...formData, category: e.target.value })
                                                  // }
                                                  >
                                                       <option value="Education">Education</option>
                                                       <option value="Medical">Medical</option>
                                                       <option value="Womenandgirl">Women & Girls</option>
                                                       <option value="Animals">Animals</option>
                                                       <option value="Creative">Creative</option>
                                                       <option value="Foodandhunger">Food & Hunger</option>
                                                       <option value="Environment">Environment</option>
                                                       <option value="Children">Children</option>
                                                       <option value="Memorial">Memorial</option>
                                                       <option value="CommunityDevelopment">Community Development</option>
                                                       <option value="Others">Others</option>
                                                  </select>
                                             </div>
                                             <div class="col-md-6 mb-3">
                                                  <label htmlFor="deadline" className="form-label">Deadline</label>
                                                  <input
                                                       className="form-control"
                                                       type="date"
                                                       id="deadline"
                                                  // value={formData.deadline}
                                                  // onChange={(e) =>
                                                  //      setFormData({ ...formData, deadline: e.target.value })
                                                  // }
                                                  />
                                             </div>
                                        </div>
                                        <div class="mb-3">
                                             <label htmlFor="images_videos" className="form-label">Images/Videos</label>
                                             <input
                                                  className="form-control"
                                                  type="file"
                                                  id="images_videos"
                                                  multiple
                                             // onChange={handleImageChange}
                                             />
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

export default YourCampaign