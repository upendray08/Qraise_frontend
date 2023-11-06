import React, { useEffect, useState } from "react";
import UserNavbar from "./UserNavbar";
import styles from "./ViewCampaign.module.css";
import { CircularProgress, CircularProgressLabel } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

const ViewCampaign = () => {
  const [campaigns, setCampaigns] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [categorys, usecategorys] = useState("All");
  const [categorydata, setCategoryData] = useState([]);

  const filterItems = () => {
    if (categorys === "All") {
      return campaigns; // No filter, return all items
    } else {
      return campaigns.filter((campaign) => campaign.category_id === categorys);
    }
  };

  const filteredItems = filterItems();

  useEffect(() => {
    // Fetch campaign data from your Flask backend
    fetch("http://localhost:5000/get_campaigns") // Update the URL if your Flask app is running on a different port or domain
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
                  <br />
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
                    <div key={campaign.id} className={styles.card}>
                      <div className={styles.image}></div>
                      <div className={styles.content}>
                        <span className={styles.title}>
                          {campaign.campaign_name}
                        </span>
                        <p className={styles.desc}>{campaign.short_desc}</p>
                        <h6>Category: {campaign.category_id}</h6>{" "}
                        {/* Add the correct field from your data */}
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
                              Amount Raised: ₹{Number(campaign.raised_amt)}
                              <br />
                              Target Amount: ₹{campaign.target_amt}
                            </p>
                          </div>
                        </div>
                        <NavLink
                          className={styles.action}
                          to={`/details_campaign?campaignId=${campaign.id}`}
                        >
                          View in details
                          <span aria-hidden="true">→</span>
                        </NavLink>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ViewCampaign;
// function CampaignDonations() {
//   const [donations, setDonations] = useState([]);
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     // Helper async function to fetch donation data
//     const fetchDonationData = async () => {
//       setIsLoading(true);
//       setError(null);
//       try {
//         const response = await fetch("http://localhost:5000/total"); // Adjust the URL to match your Flask API endpoint
//         if (!response.ok) {
//           throw new Error(`HTTP error! status: ${response.status}`);
//         }
//         const data = await response.json();
//         setDonations(data);
//       } catch (error) {
//         setError("Failed to load campaign donations: " + error.message);
//       } finally {
//         setIsLoading(false);
//       }
//     };

//     fetchDonationData();
//   }, []);

//   if (isLoading) return <p>Loading campaigns...</p>;
//   if (error) return <p>{error}</p>;

//   return (
//     <div>
//       <h1>Campaign Donations</h1>
//       <ul>
//         {donations.map((donation, index) => (
//           <li key={index}>
//             Campaign: {donation.campaign}, Total Donations: Rs{donation.amount}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default CampaignDonations;
