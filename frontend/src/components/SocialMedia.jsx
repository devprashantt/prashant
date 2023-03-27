import React from 'react';
import { BsTwitter, BsInstagram, BsGithub } from 'react-icons/bs';
import { FaLinkedin } from 'react-icons/fa';

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
    <a href="https://www.instagram.com/prashantkumarsinghh/">
      <div>
        <BsInstagram />
      </div>
    </a>
    <a href="https://github.com/devprashantt">
      <div>
        <BsGithub />
      </div>
    </a>
  </div>
);

export default SocialMedia;
