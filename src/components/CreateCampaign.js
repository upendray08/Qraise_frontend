import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import UserNavbar from "./UserNavbar";

const CreateCampaign = () => {
  const [formData, setFormData] = useState({
    campaign_name: "",
    short_desc: "",
    description: "",
    target_amt: "",
    category_id: "Education",
    deadline: "",
    media_path: "",
    raised_amt: "0",
  });
  const navigate = useNavigate();

  const handleFormSubmit = async () => {
    if (formData.media_path !== "") {
      if (validateForm()) {
        try {
          const response = await fetch("/submit_campaign", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
          });

          if (response.status === 200) {
            const data = await response.json();
            console.log(data);
            navigate("/create_campaign");
          } else {
            console.error("Campaign submission failed");
          }
        } catch (error) {
          console.error("Error submitting campaign:", error);
        }
      } else {
        console.error("Invalid form data");
      }
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const { campaign_name, short_desc, description } = formData;

    if (!campaign_name || campaign_name.trim() === "") {
      alert("Campaign name is required.");
      return false;
    }

    if (!short_desc || short_desc.trim().split(" ").length < 2) {
      alert("Short description should have at least two words.");
      return false;
    }

    if (!description || description.trim().split(" ").length < 3) {
      alert("Description should have at least three words.");
      return false;
    }

    return true;
  };

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
          <h2 style={{ textAlign: "center" }}>Create Campaign Form</h2>
          <hr />
          <form>
            <div className="mb-3">
              <label htmlFor="campaign_name" className="form-label">
                Campaign Name
              </label>
              <input
                className="form-control"
                type="text"
                id="campaign_name"
                name="campaign_name"
                value={formData.campaign_name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="short_desc" className="form-label">
                Short Description (atleast 2 words)
              </label>
              <input
                className="form-control"
                type="text"
                id="short_desc"
                name="short_desc"
                value={formData.short_desc}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="description" className="form-label">
                Description (atleast 3 words)
              </label>
              <textarea
                className="form-control"
                id="description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="target_amt" className="form-label">
                Target Amount (in Rupees)
              </label>
              <input
                className="form-control"
                type="number"
                id="target_amt"
                name="target_amt"
                min="0"
                value={formData.target_amt}
                onChange={handleChange}
                required
              />
            </div>
            <div className="row">
              <div className="col-md-6 mb-3">
                <label htmlFor="category_id" className="form-label">
                  Category
                </label>
                <select
                  className="form-control"
                  id="category_id"
                  name="category_id"
                  value={formData.category_id}
                  onChange={handleChange}
                  required
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
              <div className="col-md-6 mb-3">
                <label htmlFor="deadline" className="form-label">
                  Deadline
                </label>
                <input
                  className="form-control"
                  type="date"
                  id="deadline"
                  name="deadline"
                  value={formData.deadline}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="media_path" className="form-label">
                Media (File Upload)
              </label>
              <input
                className="form-control"
                type="file"
                id="media_path"
                name="media_path"
                onChange={(e) =>
                  setFormData({ ...formData, media_path: e.target.files[0] })
                }
                required
              />
            </div>
            <div className="mb-3" style={{ textAlign: "end" }}>
              <button className="btn btn-primary" onClick={handleFormSubmit}>
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default CreateCampaign;
