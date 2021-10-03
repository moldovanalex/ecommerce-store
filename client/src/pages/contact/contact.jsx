import React from "react";

import "./contact.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faFacebook,
  faTwitter,
  faYoutube,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

library.add(faYoutube, faInstagram, faFacebook, faTwitter);

const ContactPage = () => (
  <div className="contact-page">
    <div className="contact">Contact</div>
    <div className="container">
      <div>Feel free to direct any inquiries here:</div>
      <div>Email: alexmdv1999@gmail.com</div>
      <div>Phone number: +40 732 847 575</div>
      <div className="links">
        You can also contact me on either of these social links:{" "}
      </div>
    </div>
    <div className="socials">
      <div className="social-link">
        <FontAwesomeIcon
          icon={faFacebook}
          size="4x"
          style={{ color: "grey" }}
        />
        <a href="https://www.facebook.com/legendarybless1/">
          <h2 className="link">FACEBOOK</h2>
        </a>
      </div>
      <div className="social-link">
        <FontAwesomeIcon
          icon={faInstagram}
          size="4x"
          style={{ color: "grey" }}
        />
        <a href="https://www.instagram.com">
          <h2 className="link">INSTAGRAM</h2>
        </a>
      </div>
      <div className="social-link">
        <FontAwesomeIcon
          icon={faYoutube}
          size="4x"
          style={{ color: "#808080" }}
        />
        <a href="https://www.youtube.com">
          <h2 className="link">YOUTUBE</h2>
        </a>
      </div>
      <div className="social-link">
        <FontAwesomeIcon icon={faTwitter} size="4x" style={{ color: "grey" }} />
        <a href="https://www.twitter.com">
          <h2 className="link">TWITTER</h2>
        </a>
      </div>
    </div>
  </div>
);

export default ContactPage;
