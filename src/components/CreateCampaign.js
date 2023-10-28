import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import UserNavbar from './UserNavbar'
import Styles from './CreateCampaign.module.css'

const CreateCampaign = ({ addDataToCampaign }) => {
     const [formData, setFormData] = useState({
          campaignName: "",
          description: "",
          targetAmount: "",
          category: "self",
          deadline: "",
          images: [],
          videos: [],
     });
     const navigate = useNavigate();

     const handleFormSubmit = () => {
          console.log(formData);
          addDataToCampaign(formData);
          navigate("/campaignpage");
     };

     const handleImageChange = (e) => {
          const imageFiles = Array.from(e.target.files);
          setFormData({ ...formData, images: imageFiles });
     };

     const handleVideoChange = (e) => {
          const videoFiles = Array.from(e.target.files);
          setFormData({ ...formData, videos: videoFiles });
     };
     return (
          <>
               <div>
                    <UserNavbar />
               </div>
               <div style={{ paddingBottom: '50px' }}>
                    <div className="container p-4 mt-5" style={{ width: '700px', boxShadow: " 0px 0px 10px 2px rgb(101 78 138)", borderRadius: '10px' }}>
                         <h2 style={{ textAlign: 'center' }}>Create Campaign Form</h2><hr />
                         <form>
                              <div class="mb-3">
                                   <label for="campaignName" class="form-label">Campaign Name</label>
                                   <input className="form-control"
                                        type="text"
                                        id="campaignName"
                                        value={formData.campaignName}
                                        onChange={(e) =>
                                             setFormData({ ...formData, campaignName: e.target.value })
                                        }
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
                                        value={formData.description}
                                        onChange={(e) =>
                                             setFormData({ ...formData, description: e.target.value })
                                        }
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
                                        value={formData.targetAmount}
                                        onChange={(e) =>
                                             setFormData({ ...formData, targetAmount: e.target.value })
                                        }
                                   />
                              </div>
                              <div className="row">

                                   <div class="col-md-6 mb-3">
                                        <label htmlFor="category" className="form-label">Category</label>
                                        <select
                                             className="form-control"
                                             id="category"
                                             value={formData.category}
                                             onChange={(e) =>
                                                  setFormData({ ...formData, category: e.target.value })
                                             }
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
                                             value={formData.deadline}
                                             onChange={(e) =>
                                                  setFormData({ ...formData, deadline: e.target.value })
                                             }
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
                                        onChange={handleImageChange}
                                   />
                              </div>
                              <div class="mb-3" style={{ textAlign: 'end' }}>
                                   <button className="btn btn-primary" onClick={handleFormSubmit}>Submit</button>
                              </div>
                         </form>
                    </div>
               </div>
          </>
     )
}

export default CreateCampaign