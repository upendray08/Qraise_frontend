import React from "react";

const CartPage = ({ data }) => {
  return (
    <div className="cart-page">
      {data.map((campaign, index) => (
        <div key={index} className="campaign-item">
          <div className="campaign-details">
            <div className="campaign-category" id={`category-${index}`}>
              {campaign.category}
            </div>
            <img
              src={campaign.images[0]}
              alt="Campaign"
              className="campaign-image"
              id={`image-${index}`}
            />
            <div className="campaign-description" id={`description-${index}`}>
              {campaign.description}
            </div>
            <div className="campaign-footer">
              <button className="donate-button" id={`donate-button-${index}`}>
                Donate
              </button>
              <div
                className="supporters-count"
                id={`supporters-count-${index}`}
              >
                100 Supporters
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CartPage;
