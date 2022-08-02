import React from "react";

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
    <section id="welcome" className="useBorderBox">
      <h4>Hi, my name is ...</h4>
      <h1>Anjaney C Mahajan</h1>

    </section>

  );
};

export default Home;
