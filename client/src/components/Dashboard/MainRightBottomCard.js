import React from "react";
//import TopSeller from "./TopSeller";

function MainRightBottomCard() {
  return (
    <div className="bottom_card">
      <div className="bottomCard_name">
        <h2>Your History</h2>
        <a href="#">View </a>
      </div>

      {/* {TopSeller &&
        TopSeller.map((seller) => (
          <div className="topSeller" key={seller.id}>
            <div className="topSellerImg">
              <img src={seller?.imgSrc} alt="" />
            </div>
            <div className="topSellerName">
              <p>
                {seller?.seller_name} <span>{seller?.username}</span>
              </p>
            </div>
            <a href="#" className="button">
              Follow
            </a>
          </div>
        ))} */}
    </div>
  );
}

export default MainRightBottomCard;