import React from "react";
import { useNavigate } from "react-router-dom";
import CartPage from "./cart";

const CampaignPage = ({ data }) => {
  const navigate = useNavigate();

  const handleCreateCampaignClick = () => {
    navigate("/campaignform");
  };

  return (
    <div className="campaign-page">
      <div className="header">
        <h1 className="title">Campaign Page</h1>
        <button className="create-button" onClick={handleCreateCampaignClick}>
          Create a Campaign
        </button>
      </div>
      <div className="cart-container-wrapper">
        <CartPage data={data} />
      </div>
    </div>
  );
};

export default CampaignPage;
