import React, { useEffect, useState } from "react";
import UserNavbar from "./UserNavbar";
import { useLocation } from "react-router-dom";
import { CircularProgress, CircularProgressLabel } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

const DetailsCampaign = () => {
  const [data, setData] = useState({});
  const location = useLocation();
  const campaignId = new URLSearchParams(location.search).get("campaignId");
  console.log(campaignId);
  const campaignReg = async () => {
    //     e.preventDefault();
    const res = await fetch("http://localhost:5000/campaignDetails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        campaignId,
      }),
    });
    const data = await res.json();
    setData(data);
    console.log(data);
  };
  useEffect(() => {
    campaignReg();
  }, []);

  return (
    <>
      <div>
        <UserNavbar />
      </div>
      <div style={{ paddingBottom: "50px" }}>
        <div
          className="container p-4 mt-5"
          style={{
            width: "700px",
            boxShadow: " 0px 0px 10px 2px rgb(101 78 138)",
            borderRadius: "10px",
          }}
        >
          <h2 style={{ textAlign: "center" }}>View Campaign</h2>
          <hr />
          <div
            id="carouselExampleAutoplaying"
            class="carousel slide"
            data-bs-ride="carousel"
          >
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img
                  style={{ height: "300px" }}
                  src="https://upload.wikimedia.org/wikipedia/commons/b/b6/Image_created_with_a_mobile_phone.png"
                  class="d-block w-100"
                  alt="..."
                />
              </div>
              <div class="carousel-item">
                <img
                  style={{ height: "300px" }}
                  src="https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_image_Processing.jpg"
                  class="d-block w-100"
                  alt="..."
                />
              </div>
              <div class="carousel-item">
                <img
                  style={{ height: "300px" }}
                  src="https://dfstudio-d420.kxcdn.com/wordpress/wp-content/uploads/2019/06/digital_camera_photo-1080x675.jpg"
                  class="d-block w-100"
                  alt="..."
                />
              </div>
            </div>
            <button
              class="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleAutoplaying"
              data-bs-slide="prev"
            >
              <span
                class="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button
              class="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleAutoplaying"
              data-bs-slide="next"
            >
              <span
                class="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
          <br />
          <h5>About</h5>
          <hr />
          <div>
            <h5>
              <strong>Campaign Name:</strong>
              {data.campaign_name}
            </h5>
            <p>
              <strong>Short Description:</strong>
              {data.short_desc}
            </p>
            <hr />
            <p>
              <strong>Description:</strong> <br />
              {data.description}
            </p>
            <h6>Category: {data.category_id}</h6>
            <div className="row">
              <div
                className="col-md-3"
                style={{ padding: "0px 20px 0px 40px" }}
              >
                <CircularProgress
                  size="70px"
                  thickness="15px"
                  value={Math.abs(
                    Math.floor(
                      (Number(data.raised_amt) / Number(data.target_amt)) * 100
                    )
                  )}
                  color="green"
                >
                  <CircularProgressLabel style={{ top: "60%", left: "50%" }}>
                    {Math.abs(
                      Math.floor(
                        (Number(data.raised_amt) / Number(data.target_amt)) *
                          100
                      )
                    ) > 100
                      ? 100
                      : Math.abs(
                          Math.floor(
                            (Number(data.raised_amt) /
                              Number(data.target_amt)) *
                              100
                          )
                        )}
                    %
                  </CircularProgressLabel>
                </CircularProgress>
              </div>
              <div className="col-md-4">
                <br />
                <p>Amount Raised: ₹{parseInt(data.raised_amt)}</p>
                <p>Target Amount: ₹{parseInt(data.target_amt)}</p>
              </div>
              <div
                className="col-md-5"
                style={{ padding: "0px 20px 0px 40px" }}
              >
                <br />
                <br />
                <NavLink
                  to="/pay"
                  style={{ marginRight: "5px" }}
                  className="btn btn-primary"
                >
                  Donate
                </NavLink>
                <NavLink to="/view_campaign" className="btn btn-primary">
                  Cancel
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailsCampaign;
