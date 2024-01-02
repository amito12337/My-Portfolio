import React from "react";
import { Link } from "react-router-dom";
import {arrow} from "../assets/icons"

const renderContent = {
  1: (
    <h1 className="sm:text-sm sm:leading-sung text-center neo-brutalism-blue py-4 px-8 text-white mx-5">
      Hi,I am <span className="font-semibold">Abdessamad Amaitit </span> 👋
      <br />
      A Full Stack Developer
      <br />
      From Casablanca,Morocco
    </h1>
  ),
  2: (
    <div className="sm:text-sm sm:leading-sung text-center neo-brutalism-blue py-4 px-8 text-white mx-5">
      <p className="font-medium sm:text-xl text-center my-3">
        Worked with many companies and picked up many skills along the way
      </p>
      <Link to={"/about"} className="neo-brutalism-white neo-btn">
        learn more
        <img src={arrow} className="w-4 h-4 object-contain" />
      </Link>
    </div>
  ),
  3: (
    <div className="sm:text-sm sm:leading-sung text-center neo-brutalism-blue py-4 px-8 text-white mx-5">
      <p className="font-medium sm:text-xl text-center my-3">
        led multiple projects to access the years. Curious about the impact?
      </p>
      <Link to={"/projects"} className="neo-brutalism-white neo-btn">
        See My Projects
        <img src={arrow} className="w-4 h-4 object-contain" />
      </Link>
    </div>
  ),
  4: (
    <div className="sm:text-sm sm:leading-sung text-center neo-brutalism-blue py-4 px-8 text-white mx-5">
      <p className="font-medium sm:text-xl text-center my-3">
        Nedd a Project done or looking for a dev? I'm just a few keystores away
      </p>
      <Link to={"/contact"} className="neo-brutalism-white neo-btn">
        Let's talk
        <img src={arrow} className="w-4 h-4 object-contain" />
      </Link>
    </div>
  ),
};

// const InfoBox = ({ text, link, btnText }) => {
//     return (
//       <div>
//         {text}
//         <Link to={link}>{btnText}</Link>
//       </div>
//     );
// };
// use This for reausability
function HomeInfo({ currentStage }) {
  return renderContent[currentStage] || null;
}

export default HomeInfo;
