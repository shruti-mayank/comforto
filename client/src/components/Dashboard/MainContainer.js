import React from "react";
import "./MainContainer.css";
import Banner from "./imag1.jpg";
import CardMain from "./CardMain";
import Card1 from "./card1.jpg";
import MainRightTopCard from "./MainRightTopCard";
import MainRightBottomCard from "./MainRightBottomCard";

function MainContainer() {
  return (
    <div className="maincontainer">
      <div className="left">
        <div
          className="banner"
          style={{
            background: `url(${Banner})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="textContainer">
            <h1 >Whats up?</h1>
           
            
          </div>
        </div>

        <div className="cards">
          <div className="filters">
            <div className="popular">
              <h2>Upcoming Sessions</h2>
              <a href="#" className="button2">
                Popular
              </a>
            </div>
            <div className="filter_buttons">
              <a href="#" className="button">
                All
              </a>
              <a href="/blog" className="button2">
                Blogs
              </a>
              {/* <a href="#" className="button2">
                Art
              </a>
              <a href="#" className="button2">
                Games
              </a> */}
            </div>
          </div>

          <main>
            <CardMain imgSrc={Card1} title={"Person 1"} hearts={"65"} />
            <CardMain imgSrc={Card1} title={"Person 2"} hearts={"65"} />
            <CardMain imgSrc={Card1} title={"Person 3"} hearts={"65"} />
            <CardMain imgSrc={Card1} title={"Person 4"} hearts={"65"} />
            <CardMain imgSrc={Card1} title={"Person 5"} hearts={"65"} />
            <CardMain imgSrc={Card1} title={"Person 6"} hearts={"65"} />
          </main>
        </div>
      </div>
      <div className="right">
        <MainRightTopCard />
        <MainRightBottomCard />
      </div>
    </div>
  );
}

export default MainContainer;