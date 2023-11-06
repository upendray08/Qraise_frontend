import React, { useEffect, useState } from "react";
import UserNavbar from "./UserNavbar";
import styles from "./ViewCampaign.module.css";
import { CircularProgress, CircularProgressLabel } from "@chakra-ui/react";
import { NavLink, useNavigate } from "react-router-dom";

const YourCampaign = () => {
  const [campaigns, setCampaigns] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [campaignIdToDelete, setCampaignIdToDelete] = useState(null); // Add campaignId state
  const [campaignIdToEdit, setCampaignIdToEdit] = useState("");
  const [camp_Name, setcamp_Name] = useState("");
  const [camp_shortdesc, setcamp_shortdesc] = useState("");
  const [camp_Desc, setcamp_Desc] = useState("");
  const [camp_amt, setcamp_amt] = useState("");
  const [camp_deadline, setcamp_deadline] = useState("");
  const navigate = useNavigate();
  const [categorydata, setCategoryData] = useState([]);

  //category code
  const [categorys, usecategorys] = useState("All");
  const filterItems = () => {
    if (categorys === "All") {
      return campaigns; // No filter, return all items
    } else {
      return campaigns.filter((campaign) => campaign.category_id === categorys);
    }
  };

  const filteredItems = filterItems();
  // ... rest of your component code
  const handleEditCampaign = (campaign) => {
    // console.log(campaign.description);
    setCampaignIdToEdit(campaign.id);
    setcamp_Name(campaign.campaign_name);
    setcamp_shortdesc(campaign.short_desc);
    setcamp_Desc(campaign.description);
    setcamp_amt(campaign.target_amt);
    setcamp_deadline(campaign.deadline);
  };
  const handleDeleteClick = (campaignId) => {
    // When "Delete" is clicked, set the campaignIdToDelete state
    console.log(campaignId);
    setCampaignIdToDelete(campaignId);
  };

  const handleEditClick = async () => {
    if (validateEditForm()) {
      try {
        const res = await fetch("http://localhost:5000/editcampaign", {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            campaignIdToEdit,
            camp_Name,
            camp_Desc,
            camp_amt,
            camp_shortdesc,
            camp_deadline,
          }),
        });
        const data = await res.json();
        console.log(data);
        navigate(0);
      } catch (error) {
        console.log("Error Editing campaign: ", error);
      }
    } else {
      console.error("Invalid edit form data");
    }
  };

  const validateEditForm = () => {
    if (!camp_Name || camp_Name.trim() === "") {
      alert("Campaign name is required.");
      return false;
    }

    if (!camp_shortdesc || camp_shortdesc.trim().split(" ").length < 2) {
      alert("Short description should have at least two words.");
      return false;
    }

    if (!camp_Desc || camp_Desc.trim().split(" ").length < 3) {
      alert("Description should have at least three words.");
      return false;
    }

    if (isNaN(camp_amt) || camp_amt <= 0) {
      alert("Target Amount should be a positive number.");
      return false;
    }

    if (!camp_deadline) {
      alert("Please select a valid deadline date.");
      return false;
    }

    // Check if the selected deadline date is in the past
    const currentDate = new Date();
    const selectedDate = new Date(camp_deadline);
    if (selectedDate <= currentDate) {
      alert("Deadline date should be in the future.");
      return false;
    }

    return true;
  };

  const handleDeleteCampaign = () => {
    if (campaignIdToDelete !== null) {
      fetch(`http://localhost:5000/delete_campaign/${campaignIdToDelete}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => response.json())
        .then((data) => {
          // Handle the response from the API as needed
          console.log(data);
          console.log("data deleted");
          navigate(0);
        })
        .catch((error) => {
          console.error("Error deleting campaign: ", error);
        });
    }
  };

  useEffect(() => {
    // Fetch campaign data from your Flask backend
    fetch("http://localhost:5000/get_yourcampaign") // Update the URL if your Flask app is running on a different port or domain
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setCampaigns(data);
        const categoriesSet = new Set();
        data.forEach((campaign) => {
          categoriesSet.add(campaign.category_id);
        });
        // Convert the set to an array for rendering
        const categoriesArray = Array.from(categoriesSet);
        setCategoryData(categoriesArray);
        // console.log(categorydata);
      })
      .catch((error) => {
        console.error("Error fetching campaign data: ", error);
      });
  }, []);

  const handleCategory = (categoryselected) => {
    console.log(categoryselected);
    if (categoryselected === "Women & Girls") {
      usecategorys("Womenandgirl");
    } else if (categoryselected === "Food & Hunger") {
      usecategorys("Foodandhunger");
    } else {
      usecategorys(categoryselected);
    }
  };

  const filteredCampaigns = filteredItems.filter((campaign) => {
    return campaign.campaign_name
      .toLowerCase()
      .includes(searchInput.toLowerCase());
  });

  const handleSearchInputChange = (e) => {
    setSearchInput(e.target.value);
  };

  return (
    <>
      <div>
        <UserNavbar />
      </div>
      <div style={{ backgroundColor: "grey", paddingBottom: "100px" }}>
        <div class="container">
          <div class="row">
            <div
              class="col-md-2"
              style={{
                backgroundColor: "#f2f2f2",
                marginTop: "30px",
                borderRadius: "5px",
                height: "720px",
              }}
            >
              {/* <div style={{ margin: "30px 10px" }}>
                <h4>Categories</h4>
                <hr />
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    padding: "20px 10px",
                  }}
                >
                  <h6>All Categories</h6>
                  <br />
                  <a style={{ textDecoration: "none", color: "black" }} href="">
                    Education
                  </a>
                  <br />
                  <a style={{ textDecoration: "none", color: "black" }} href="">
                    Medical
                  </a>
                  <br />
                  <a style={{ textDecoration: "none", color: "black" }} href="">
                    Women & Girls
                  </a>
                  <br />
                  <a style={{ textDecoration: "none", color: "black" }} href="">
                    Animals
                  </a>
                  <br />
                  <a style={{ textDecoration: "none", color: "black" }} href="">
                    Creative
                  </a>
                  <br />
                  <a style={{ textDecoration: "none", color: "black" }} href="">
                    Food & Hunger
                  </a>
                  <br />
                  <a style={{ textDecoration: "none", color: "black" }} href="">
                    Environment
                  </a>
                  <br />
                  <a style={{ textDecoration: "none", color: "black" }} href="">
                    Children
                  </a>
                  <br />
                  <a style={{ textDecoration: "none", color: "black" }} href="">
                    Memorial
                  </a>
                  <br />
                  <a style={{ textDecoration: "none", color: "black" }} href="">
                    Community Development
                  </a>
                  <br />
                  <a style={{ textDecoration: "none", color: "black" }} href="">
                    Others
                  </a>
                  <br />
                </div>
              </div> */}
              <div style={{ margin: "30px 10px" }}>
                <h4>Categories</h4>
                <hr />
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    padding: "20px 10px",
                  }}
                >
                  <NavLink
                    style={{ textDecoration: "none", color: "black" }}
                    href=""
                    onClick={() => handleCategory("All")}
                  >
                    <h6>All Categories</h6>
                  </NavLink>
                  <br />
                  {categorydata.map((category) => (
                    <>
                      <NavLink
                        key={category}
                        style={{ textDecoration: "none", color: "black" }}
                        href=""
                        onClick={() => handleCategory(category)}
                      >
                        {category}
                      </NavLink>
                      <br />
                    </>
                  ))}
                </div>
              </div>
            </div>
            <div class="col-md-10">
              <br />
              <div style={{ textAlign: "center" }}>
                <input
                  placeholder="Search campaign..."
                  type="text"
                  name="text"
                  value={searchInput}
                  onChange={handleSearchInputChange}
                  class={styles.search_input}
                />
              </div>
              <div className={styles.flexcard}>
                {Array.isArray(filteredCampaigns) &&
                  filteredCampaigns.map((campaign) => (
                    <div className={styles.card}>
                      <div key={campaign.id} className={styles.card}>
                        <div className={styles.image}></div>
                        <div className={styles.content}>
                          <span className={styles.title}>
                            {campaign.campaign_name}
                          </span>
                          <p className={styles.desc}>{campaign.short_desc}</p>
                          <h6>Category: {campaign.category_id}</h6>
                          <div className="row">
                            <div
                              className="col-md-3"
                              style={{ padding: "0px 12px" }}
                            >
                              <CircularProgress
                                size="70px"
                                thickness="15px"
                                value={Math.abs(
                                  Math.floor(
                                    (Number(campaign.raised_amt) /
                                      Number(campaign.target_amt)) *
                                      100
                                  )
                                )}
                                color="green"
                              >
                                <CircularProgressLabel
                                  style={{ top: "60%", left: "50%" }}
                                >
                                  {Math.abs(
                                    Math.floor(
                                      (Number(campaign.raised_amt) /
                                        Number(campaign.target_amt)) *
                                        100
                                    )
                                  ) > 100
                                    ? 100
                                    : Math.abs(
                                        Math.floor(
                                          (Number(campaign.raised_amt) /
                                            Number(campaign.target_amt)) *
                                            100
                                        )
                                      )}
                                  %
                                </CircularProgressLabel>
                              </CircularProgress>
                            </div>
                            <div
                              className="col-md-9"
                              style={{ padding: "15px 0px 0px 20px" }}
                            >
                              <br />
                              <p>
                                Amount Raised: ₹{campaign.raised_amt} <br />{" "}
                                Target Amount: ₹{campaign.target_amt}
                              </p>
                            </div>
                          </div>
                          <div>
                            <NavLink
                              className={styles.action}
                              data-bs-toggle="modal"
                              data-bs-target="#myModal3"
                              onClick={() => handleEditCampaign(campaign)}
                            >
                              <span aria-hidden="true">
                                <i
                                  class="fa-solid fa-pen-to-square fa-lg"
                                  style={{ color: "#271f51" }}
                                ></i>
                              </span>
                              Edit
                            </NavLink>
                            &nbsp;
                            <NavLink
                              className={styles.action}
                              data-bs-toggle="modal"
                              data-bs-target="#myModal4"
                              onClick={() => handleDeleteClick(campaign.id)}
                            >
                              <span aria-hidden="true">
                                <i
                                  class="fa-solid fa-trash fa-lg"
                                  style={{ color: "#9e0000" }}
                                ></i>
                              </span>
                              Delete
                            </NavLink>
                            &nbsp;
                            <NavLink
                              className={styles.action}
                              to={`/details_campaign?campaignId=${campaign.id}`}
                            >
                              View More
                              <span aria-hidden="true">→</span>
                            </NavLink>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}

                {/* <div className={styles.card}>
                  <div className={styles.image}></div>
                  <div className={styles.content}>
                    <span className={styles.title}>Lorem ipsum dolor sit.</span>
                    <p className={styles.desc}>
                      Lorem ipsum dolor sit amet, hi there how able are you to
                      donaitee
                    </p>
                    <h6>Created by: Nitin Kumar</h6>
                    <div className="row">
                      <div className="col-md-3" style={{ padding: "0px 12px" }}>
                        <CircularProgress
                          size="70px"
                          thickness="15px"
                          value={Math.abs(
                            Math.floor((Number(800) / Number(1000)) * 100)
                          )}
                          color="green"
                        >
                          <CircularProgressLabel
                            style={{ top: "60%", left: "50%" }}
                          >
                            {Math.abs(
                              Math.floor((Number(800) / Number(1000)) * 100)
                            ) > 100
                              ? 100
                              : Math.abs(
                                  Math.floor((Number(800) / Number(1000)) * 100)
                                )}
                            %
                          </CircularProgressLabel>
                        </CircularProgress>
                      </div>
                      <div
                        className="col-md-9"
                        style={{ padding: "15px 0px 0px 20px" }}
                      >
                        <br />
                        <p>Amount Raised: ₹800 Target Amount: ₹1000</p>
                      </div>
                    </div>
                    <div>
                      <NavLink
                        className={styles.action}
                        data-bs-toggle="modal"
                        data-bs-target="#myModal3"
                      >
                        <span aria-hidden="true">
                          <i
                            class="fa-solid fa-pen-to-square fa-lg"
                            style={{ color: "#271f51" }}
                          ></i>
                        </span>
                        Edit
                      </NavLink>
                      &nbsp;
                      <NavLink
                        className={styles.action}
                        data-bs-toggle="modal"
                        data-bs-target="#myModal4"
                      >
                        <span aria-hidden="true">
                          <i
                            class="fa-solid fa-trash fa-lg"
                            style={{ color: "#9e0000" }}
                          ></i>
                        </span>
                        Delete
                      </NavLink>
                      &nbsp;
                      <NavLink className={styles.action} to="/details_campaign">
                        View more
                        <span aria-hidden="true">→</span>
                      </NavLink>
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        class="modal"
        id="myModal4"
        tabindex="-1"
        aria-labelledby="exampleModalLabel4"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                Delete Campaign
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              Are you sure want to delete this campaign!
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                class="btn btn-primary"
                onClick={() => handleDeleteCampaign()}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        class="modal"
        id="myModal3"
        tabindex="-1"
        aria-labelledby="exampleModalLabel3"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                Edit Campaign
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <div>
                <div class="mb-3">
                  <label for="campaignName" class="form-label">
                    Campaign Name
                  </label>
                  <input
                    className="form-control"
                    type="text"
                    id="campaignName"
                    value={camp_Name}
                    onChange={(e) => setcamp_Name(e.target.value)}
                    required
                  />
                </div>
                <div class="mb-3">
                  <label for="ShortDesc" class="form-label">
                    Short Description ( in 10-15 words)
                  </label>
                  <input
                    type="text"
                    value={camp_shortdesc}
                    onChange={(e) => setcamp_shortdesc(e.target.value)}
                    class="form-control"
                    id="ShortDesc"
                    required
                  />
                </div>
                <div class="mb-3">
                  <label for="description" class="form-label">
                    Description
                  </label>
                  <textarea
                    className="form-control"
                    id="description"
                    value={camp_Desc}
                    onChange={(e) => setcamp_Desc(e.target.value)}
                    required
                  />
                </div>
                <div class="mb-3">
                  <label for="targetAmount" class="form-label">
                    Target Amount (in Rupees)
                  </label>
                  {/* <input type="text"  id="targetAmount" /> */}
                  <input
                    class="form-control"
                    type="number"
                    id="targetAmount"
                    min={0}
                    value={camp_amt}
                    onChange={(e) => setcamp_amt(e.target.value)}
                    required
                  />
                </div>
                <div className="row">
                  <div class="col-md-6 mb-3">
                    <label htmlFor="category" className="form-label">
                      Category
                    </label>
                    <select
                      className="form-control"
                      id="category"
                      disabled
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
                      <option value="CommunityDevelopment">
                        Community Development
                      </option>
                      <option value="Others">Others</option>
                    </select>
                  </div>
                  <div class="col-md-6 mb-3">
                    <label htmlFor="deadline" className="form-label">
                      Deadline
                    </label>
                    <input
                      className="form-control"
                      type="date"
                      id="deadline"
                      value={camp_deadline}
                      onChange={(e) => setcamp_deadline(e.target.value)}
                      required
                    />
                  </div>
                </div>
              </div>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                class="btn btn-primary"
                onClick={() => handleEditClick()}
              >
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default YourCampaign;
