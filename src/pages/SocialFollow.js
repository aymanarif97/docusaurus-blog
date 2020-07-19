import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {

  faMedium,  
  faTwitter,
  faInstagram,
  faLinkedin,
  faGithub,
  faGitlab,
} from "@fortawesome/free-brands-svg-icons";

export default function SocialFollow() {
  return (
    <div className="social-container">
      <h3>Follow me here: </h3>

      <div className="social-leaf">
      <a
        href="https://github.com/AymanArif"
        className="github social"
      >
        <FontAwesomeIcon icon={faGithub} size="2x" />
      </a>
      <a
  href="https://www.linkedin.com/in/ayman-arif-patel-300683127/"
  className="linkedin social"
>
  <FontAwesomeIcon icon={faLinkedin} size="2x" />
</a>
<a href="https://www.twitter.com/aymanace97" className="twitter social">
  <FontAwesomeIcon icon={faTwitter} size="2x" />
</a>
<a
  href="https://medium.com/@aymanarif"
  className="github social"
>
  <FontAwesomeIcon icon={faMedium} size="2x" />
</a>
<a
  href="https://gitlab.com/AymanArif"
  className="gitlab social"
>
  <FontAwesomeIcon icon={faGitlab} size="2x" />
</a>
</div>
    </div>

  );
}
