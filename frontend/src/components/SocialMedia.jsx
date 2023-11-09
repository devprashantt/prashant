/* eslint-disable quotes */

import React from "react";
import { BsTwitter, BsGithub } from "react-icons/bs";
import { FaLinkedin, FaDribbble } from "react-icons/fa";
import images from "../constants/images";

const SocialMedia = () => (
  <div className="app__social">
    <a href="https://peerlist.io/prashantkumar">
      <div>
        <img
          src={images.peerlist}
          alt="peerlist"
          style={{
            width: "20px",
            height: "20px",
          }}
        />
      </div>
    </a>
    <a href="https://twitter.com/devprashantt">
      <div>
        <BsTwitter />
      </div>
    </a>
    <a href="https://www.linkedin.com/in/devprashantt/">
      <div>
        <FaLinkedin />
      </div>
    </a>
    <a href="https://github.com/devprashantt">
      <div>
        <BsGithub />
      </div>
    </a>
    <a href="https://dribbble.com/prashantdesigns">
      <div>
        <FaDribbble />
      </div>
    </a>
  </div>
);

export default SocialMedia;
