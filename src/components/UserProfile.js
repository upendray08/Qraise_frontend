import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import UserNavbar from "./UserNavbar";

const UserProfile = () => {
  const [newdata, setData] = useState({});
  const [username, setUsername] = useState("");
  const [phone, setPhone] = useState("");
  const navigate = useNavigate();
  const [donations, setDonations] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/get_profile", {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data["user_id"]);
        setUsername(data["name"]);
        setPhone(data["phone"]);
        setData(data);
      })
      .catch((error) => {
        console.error("Error fetching session data:", error);
      });
    fetch("http://localhost:5000/get-payment-data")
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Network response was not ok.");
      })
      .then((data) => {
        setDonations(data.reverse()); // Set the donations data to state
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  }, []); // Empty dependency array

  useEffect(() => {}, [newdata, username, phone]);
  const [errorMessages, setErrorMessages] = useState({});

  const validateForm = () => {
    const errors = {};

    // Validation for Full Name (shouldn't be numeric and can contain a mixture of alphabet, number, and special characters)
    if (username.trim() === "") {
      errors.username = "Name is required";
    } else {
      const nameRegex = /^[A-Za-z\s]+$/;
      if (!nameRegex.test(username)) {
        errors.username = "Name can only contain alphabets.";
      }
    }

    // Validation for Phone Number (should be 10 digits)
    if (phone.trim() === "") {
      errors.phone = "Phone number is required";
    } else {
      const phoneRegex = /^\d{10}$/;
      if (!phoneRegex.test(phone)) {
        errors.phone = "Please enter a valid 10-digit phone number.";
      }
    }

    setErrorMessages(errors);
    return Object.keys(errors).length === 0; // Return true if there are no errors
  };

  const updateProfile = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return; // Don't proceed if validation fails
    }

    const res = await fetch("http://localhost:5000/updated_profile", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user_id: newdata["user_id"],
        username,
        phone,
        email: newdata["email"],
      }),
    });
    const data = await res.json();
    console.log(data);
    alert("user profile updated");
    navigate(0);
  };

  return (
    <>
      <div>
        <UserNavbar />
      </div>
      <br />
      <div className="container mt-2" style={{ width: "70%" }}>
        <ul class="nav nav-tabs" id="myTabs" role="tablist">
          <li class="nav-item" role="presentation">
            <a
              class="nav-link active "
              id="tab1-tab"
              data-bs-toggle="tab"
              href="#tab1"
              role="tab"
              aria-controls="tab1"
              aria-selected="true"
            >
              Profile
            </a>
          </li>
          <li class="nav-item" role="presentation">
            <a
              class="nav-link"
              id="tab2-tab"
              data-bs-toggle="tab"
              href="#tab2"
              role="tab"
              aria-controls="tab2"
              aria-selected="false"
            >
              Donation History
            </a>
          </li>
        </ul>
      </div>
      <br />
      <div class="container mt-2">
        <div class="tab-content" id="myTabContent">
          <div
            class="tab-pane fade show active"
            id="tab1"
            role="tabpanel"
            aria-labelledby="tab1-tab"
          >
            <div
              className="card mb-3"
              style={{ width: "90%", margin: "auto", padding: "50px 30px" }}
            >
              <div className="row" style={{ width: "95%", margin: "auto" }}>
                <div
                  className="card col-sm-8 mb-3"
                  style={{
                    width: "75%",
                    boxShadow: "0px 0px 10px 1px rgba(0,0,0,0.5)",
                  }}
                >
                  <div className="card-body">
                    <div className="row">
                      <div className="col-sm-3">
                        <h6 className="mb-0" style={{ fontSize: "15px" }}>
                          Full Name
                        </h6>
                      </div>
                      <div className="col-sm-9 text-secondary">
                        {newdata["name"]}
                      </div>
                    </div>
                    <hr />
                    <div className="row">
                      <div className="col-sm-3">
                        <h6 className="mb-0" style={{ fontSize: "15px" }}>
                          Email
                        </h6>
                      </div>
                      <div className="col-sm-9 text-secondary">
                        <a href="#/">{newdata["email"]}</a>
                        {/* <a href='#/'>{email}</a> */}
                      </div>
                    </div>
                    <hr />
                    <div className="row">
                      <div className="col-sm-3">
                        <h6 className="mb-0" style={{ fontSize: "15px" }}>
                          Phone
                        </h6>
                      </div>
                      <div className="col-sm-9 text-secondary">
                        {newdata["phone"]}
                        {/* {phone} */}
                      </div>
                    </div>
                    <hr />
                  </div>
                </div>
                <div className="col-sm-1 mb-3" style={{ width: "2%" }}>
                  <div className="card-body"></div>
                </div>
                <div
                  className="card col-sm-3 mb-3"
                  style={{
                    width: "22%",
                    padding: "5px",
                    boxShadow: "0px 0px 10px 1px rgba(0,0,0,0.5)",
                  }}
                >
                  <div className="card-body" style={{ padding: "10px" }}>
                    <img
                      style={{ width: "100%", height: "197px" }}
                      src="https://t3.ftcdn.net/jpg/02/22/36/14/360_F_222361406_FRccMrRh1v67wwzcGM8LyeALADwc5JwB.jpg"
                      alt="profile=pic"
                    ></img>
                    {/* <img style={{ width: "100%", height: "177px" }} src={userData.image} alt='profile=pic'></img> */}
                  </div>
                </div>
              </div>
              <br />
              <div
                style={{
                  margin: "auto",
                  width: "95%",
                  display: "flex",
                  justifyContent: "flex-end",
                  gap: "10px",
                }}
              >
                <NavLink
                  className="btn btn-primary"
                  data-bs-toggle="modal"
                  data-bs-target="#myModal"
                >
                  Update Profile
                </NavLink>
                {/* <NavLink style={{ padding: "5px 12px", textDecoration: "none", boxShadow: "0px 0px 10px 1px rgba(0,0,0,0.75)", borderRadius: "5px", color: "white", backgroundColor: "#b005ff" }} type='button' to="/admin-faculty-update-profile" state={{ email: email }} >Update Profile</NavLink> */}
              </div>
            </div>
          </div>
          <div
            class="tab-pane fade"
            id="tab2"
            role="tabpanel"
            aria-labelledby="tab2-tab"
          >
            {/* <div
              className="card mb-3"
              style={{ width: "90%", margin: "auto", padding: "50px 30px" }}
            >
              <table class="table table-hover align-middle mb-0 bg-white">
                <thead class="bg-light">
                  <tr>
                    <th>Date</th>
                    <th>Campaign</th>
                    <th>Amount Donated</th>
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
            </div> */}
            <div
              className="card mb-3"
              style={{ width: "90%", margin: "auto", padding: "50px 30px" }}
            >
              <table className="table table-hover align-middle mb-0 bg-white">
                <thead className="bg-light">
                  <tr>
                    <th>Date</th>
                    <th>Campaign</th>
                    <th>Amount Donated</th>
                  </tr>
                </thead>
                <tbody>
                  {donations.map((donation, index) => (
                    <tr key={index}>
                      <td>{donation.date}</td>
                      <td>{donation.campaign}</td>
                      <td>&#8377;{donation.amount}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              {donations.length === 0 && <div>No donations found.</div>}
            </div>
          </div>
        </div>
      </div>
      <div
        class="modal"
        id="myModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                Update Profile
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <form>
                <div class="mb-3">
                  <label for="name" class="form-label">
                    Full Name
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="name"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                  {errorMessages.username && (
                    <div className="text-danger">{errorMessages.username}</div>
                  )}
                </div>
                <div class="mb-3">
                  <label for="email" class="form-label">
                    Email address
                  </label>
                  <input
                    type="email"
                    class="form-control"
                    id="email"
                    aria-describedby="emailHelp"
                    value={newdata["email"]}
                    disabled
                  />
                </div>
                <div class="mb-3">
                  <label for="phone" class="form-label">
                    Phone
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                  {errorMessages.phone && (
                    <div className="text-danger">{errorMessages.phone}</div>
                  )}
                </div>
              </form>
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
                onClick={updateProfile}
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

export default UserProfile;
// const UserPro = () => {
//   const [donations, setDonations] = useState([]);

//   useEffect(() => {
//     // Fetch the donations data from your API
//     fetch("http://localhost:5000/get-payment-data")
//       .then((response) => {
//         if (response.ok) {
//           return response.json();
//         }
//         throw new Error("Network response was not ok.");
//       })
//       .then((data) => {
//         setDonations(data); // Set the donations data to state
//       })
//       .catch((error) => {
//         console.error("Error fetching data: ", error);
//       });
//   }, []); // The empty array ensures this effect runs once on mount

//   return (
//     <>
//       <UserNavbar />
//       {/* Other components and markup */}

//       {/* ... */}

//       {/* Donations History Table */}
//       <div className="container mt-2">
//         <div className="tab-content" id="myTabContent">
//           <div
//             className="tab-pane fade show active"
//             id="tab2"
//             role="tabpanel"
//             aria-labelledby="tab2-tab"
//           >
//             <div
//               className="card mb-3"
//               style={{ width: "90%", margin: "auto", padding: "50px 30px" }}
//             >
//               <table className="table table-hover align-middle mb-0 bg-white">
//                 <thead className="bg-light">
//                   <tr>
//                     <th>Date</th>
//                     <th>Campaign</th>
//                     <th>Amount Donated</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {donations.map((donation, index) => (
//                     <tr key={index}>
//                       <td>{donation.date}</td>
//                       <td>{donation.campaign}</td>
//                       <td>&#8377;{donation.amount}</td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//               {donations.length === 0 && <div>No donations found.</div>}
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Modals for updating profile, etc. */}

//       {/* ... */}
//     </>
//   );
// };
// export default UserPro;
