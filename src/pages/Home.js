import React from "react";

import AOS from "aos";
import "aos/dist/aos.css";
import "../css/pages/Home.css";
import "../css/pages/Light.css";
import "../css/pages/Dark.css";

import SocialIcon from "../Components/socialLinks";
import { FaDiscord } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { AiFillLinkedin } from 'react-icons/ai';
import { AiOutlineGithub } from 'react-icons/ai';
import { BsInstagram } from 'react-icons/bs';

const Home = () => {
  return (
    <main className="useBorderBox">
      <h3>Hi, my name is ...</h3>
      <h1>Anjaney C Mahajan</h1>
      <div className="typewriter">
          <h2></h2>
      </div>
      <p>[insert description]</p>
      <div id="socials">
        <SocialIcon Icon={<MdEmail />} value={"acmahaja@gmail.com"}  hoverBackgroundColor={"white"} hoverColor={"black"}/>
        <SocialIcon Icon={<AiFillLinkedin />} value={"ln/acmahaja"}  hoverBackgroundColor={"#0A66C2"} hoverColor={"white"}/>
        <SocialIcon Icon={<AiOutlineGithub />} value={"@acmahaja"}  hoverBackgroundColor={"white"} hoverColor={"black"} />
        <SocialIcon Icon={<BsInstagram />} value={"@acmahaja"}  hoverBackgroundColor={"radial-gradient(51.8% 49.8% at 36.25% 96.55%, #FFD600 0%, #FF6930 48.44%, #FE3B36 73.44%, rgba(254, 59, 54, 0) 100%), radial-gradient(182.65% 122.8% at 84.5% 113.5%, #FF1B90 24.39%, #F80261 43.67%, #ED00C0 68.85%, #C500E9 77.68%, #7017FF 89.32%)"} hoverColor={"white"}/>
        <SocialIcon Icon={<FaDiscord />} value={"acmahaja#0052"}  hoverBackgroundColor={"#6E7ECB"} hoverColor={"white"}  />
      </div>
      <hr />
    </main>
  );
};

export default Home;
