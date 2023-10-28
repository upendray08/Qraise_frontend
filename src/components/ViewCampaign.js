import React from 'react'
import UserNavbar from './UserNavbar'
import styles from './ViewCampaign.module.css'
import { CircularProgress, CircularProgressLabel } from '@chakra-ui/react'



const ViewCampaign = () => {
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
                                                  <a className={styles.action} href="/details_campaign">
                                                       View in details
                                                       <span aria-hidden="true">
                                                            →
                                                       </span>
                                                  </a>
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
                                                  <a className={styles.action} href="/details_campaign">
                                                       View in details
                                                       <span aria-hidden="true">
                                                            →
                                                       </span>
                                                  </a>
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
                                                  <a className={styles.action} href="/details_campaign">
                                                       View in details
                                                       <span aria-hidden="true">
                                                            →
                                                       </span>
                                                  </a>
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
                                                  <a className={styles.action} href="/details_campaign">
                                                       View in details
                                                       <span aria-hidden="true">
                                                            →
                                                       </span>
                                                  </a>
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
                                                  <a className={styles.action} href="/details_campaign">
                                                       View in details
                                                       <span aria-hidden="true">
                                                            →
                                                       </span>
                                                  </a>
                                             </div>
                                        </div>
                                   </div>
                              </div>
                         </div>
                    </div>
               </div>
          </>
     )
}

export default ViewCampaign