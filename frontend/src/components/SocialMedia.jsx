/* eslint-disable quotes */

import React from "react";
import { BsTwitter, BsGithub } from "react-icons/bs";
import { FaLinkedin, FaBehance } from "react-icons/fa";

const SocialMedia = () => (
  <div className="app__social">
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
    <a href="https://www.behance.net/prashantworks">
      <div>
        <FaBehance />
      </div>
    </a>
  </div>
);

export default SocialMedia;
