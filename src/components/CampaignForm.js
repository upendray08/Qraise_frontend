import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const FormPage = ({ addDataToCampaign }) => {
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
    <div className="form-container">
      <h1>Campaign Form Page</h1>
      <form>
        <div>
          <label htmlFor="campaignName">Campaign Name:</label>
          <input
            type="text"
            id="campaignName"
            value={formData.campaignName}
            onChange={(e) =>
              setFormData({ ...formData, campaignName: e.target.value })
            }
          />
        </div>
        <div>
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            value={formData.description}
            onChange={(e) =>
              setFormData({ ...formData, description: e.target.value })
            }
          />
        </div>
        <div>
          <label htmlFor="targetAmount">Target Amount:</label>
          <input
            type="number"
            id="targetAmount"
            value={formData.targetAmount}
            onChange={(e) =>
              setFormData({ ...formData, targetAmount: e.target.value })
            }
          />
        </div>
        <div>
          <label htmlFor="category">Category:</label>
          <select
            id="category"
            value={formData.category}
            onChange={(e) =>
              setFormData({ ...formData, category: e.target.value })
            }
          >
            <option value="self">Self</option>
            <option value="medical">Medical</option>
            <option value="school">School</option>
            <option value="ngo">NGO's</option>
          </select>
        </div>
        <div>
          <label htmlFor="deadline">Deadline:</label>
          <input
            type="date"
            id="deadline"
            value={formData.deadline}
            onChange={(e) =>
              setFormData({ ...formData, deadline: e.target.value })
            }
          />
        </div>
        <div>
          <label htmlFor="images">Images:</label>
          <input
            type="file"
            id="images"
            multiple
            onChange={handleImageChange}
          />
        </div>
        <div>
          <label htmlFor="videos">Videos:</label>
          <input
            type="file"
            id="videos"
            multiple
            onChange={handleVideoChange}
          />
        </div>
      </form>
      <button className="submit-button" onClick={handleFormSubmit}>
        Submit
      </button>
    </div>
  );
};

export default FormPage;
