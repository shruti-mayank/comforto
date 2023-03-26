import React from "react";
import "./MainContainer.css";
import Banner from "imag1";
import CardMain from "./CardMain";
import Card1 from "card1";
import Card2 from "card1";
import Card3 from "card1";
import Card4 from "card1";
import Card5 from "card1";
import Card6 from "card1";
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
              <a href="#" className="button2">
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
            <CardMain imgSrc={Card1} title={"Cubic Thunder"} hearts={"65"} />
            <CardMain imgSrc={Card2} title={"Pokemon Ball"} hearts={"65"} />
            <CardMain imgSrc={Card3} title={"Pyramid God"} hearts={"65"} />
            <CardMain imgSrc={Card4} title={"Stunning Cube"} hearts={"65"} />
            <CardMain imgSrc={Card5} title={"Start Crystal"} hearts={"65"} />
            <CardMain imgSrc={Card6} title={"Crystal Bird"} hearts={"65"} />
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