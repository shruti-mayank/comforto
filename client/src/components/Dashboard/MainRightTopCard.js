import React from "react";

function MainRightTopCard() {
  return (
    <div className="topCard">
      <div className="topCard_name">
        <h2>Book a Session</h2>
        <a>Viewers</a>
      </div>

      <div className="earning">
        <p>
          Meditation <span>187</span>
        </p>

        <p>
          Yoga <span>5</span>
        </p>

        <p>
          Music Therapy<span>25</span>
        </p>

        <p>
          Group Therapy<span>200</span>
        </p>

        {/* <p>
          Total Earning <span>262 ETH</span>
        </p> */}
      </div>
    </div>
  );
}

export default MainRightTopCard;