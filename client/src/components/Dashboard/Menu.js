import React  from "react";
import "./Menu.css";
// import Logo from "favicon.png";
import {FaSistrix,FaCalendarWeek,FaComments,FaCog,FaSignOutAlt} from "react-icons/fa";
// FaRocketchat,FaTelegramPlane,FaWhatsappSquare

function menu() {
    // useEffect(() => {
    //     const mainMenuLi = document
    //       .getElementById("mainMenu")
    //       .querySelectorAll("li");
    
    //     function changeActive() {
    //       mainMenuLi.forEach((n) => n.classList.remove("active"));
    //       this.classList.add("active");
    //     }
    
    //     mainMenuLi.forEach((n) => n.addEventListener("click", changeActive));
    //   }, []);
    
  return (
  <menu>
        <a href="/"> <img src="favicon.png" alt=""/></a>;
        
        <ul id="mainMenu">
            <Icon icon={<FaSistrix/>} />
            {/* <Icon icon={<FaRocketchat/>} />
            <Icon icon={<FaTelegramPlane/>} />
            <Icon icon={<FaWhatsappSquare/>} /> */}
            <Icon icon={<FaCalendarWeek/>} />
            <Icon icon={<FaComments/>} />
        </ul>
        <ul className="lastMenu">
        <Icon icon={<FaCog/>} />
        <Icon icon={<FaSignOutAlt/>} />

        </ul>
    </menu>
  );

  
}
const Icon = ({icon}) => (
    <li>
        <a href="#">{icon}</a>
    </li>
);

export default menu;