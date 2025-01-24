import "../Footer/Footer.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faFacebookF,
  faInstagram,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
export const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="footer-icons">
          <FontAwesomeIcon
            icon={faFacebookF}
            className="icons"
            style={{ width: 36, height: 27.63 }}
          />
          <FontAwesomeIcon
            icon={faInstagram}
            className="icons"
            style={{ width: 36, height: 27.63 }}
          />
          <FontAwesomeIcon
            icon={faTwitter}
            className="icons"
            style={{ width: 36, height: 27.63 }}
          />
          <FontAwesomeIcon
            icon={faYoutube}
            className="icons"
            style={{ width: 36, height: 27.63 }}
          />
        </div>
        <ul>
          <li>Audio Description</li>
          <li>Investor Relations</li>
          <li>Legal Notices</li>
          <li>Help Center</li>
          <li>Jobs</li>
          <li>Cookie Preferences</li>
          <li>Gift Cards</li>
          <li>Terms of Use </li>
          <li>Corporate Information</li>
          <li>Media Center </li>
          <li>Privacy</li>
          <li>Contact Us</li>
        </ul>
        <button className="service-btn">Service Code</button>
        <p className="copyright">&copy; 1997-2023 Netflix, Inc.</p>
      </div>
    </>
  );
};
