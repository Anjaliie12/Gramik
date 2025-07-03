
import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSeedling,
  faBook,
  faComments,
  faStore,
  faShoppingCart,
  faMapMarkerAlt,
  faChevronDown
} from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <div className="logo">
          <img src="footer-logo.png" alt="" />
        </div>

        <div className="nav-links">
          <div className="nav-item">
            <FontAwesomeIcon icon={faSeedling} />
            <span>सर्व पिके</span>
          </div>
          <div className="nav-item">
            <FontAwesomeIcon icon={faBook} />
            <span>कृषी ज्ञान</span>
          </div>
          <div className="nav-item">
            <FontAwesomeIcon icon={faComments} />
            <span>कृषी चर्चा</span>
          </div>
          <div className="nav-item">
            <FontAwesomeIcon icon={faStore} />
            <span>एग्री दुकान</span>
          </div>
        </div>

        <div className="search-container">
          <input type="text" placeholder="शोधा 2000+ प्रोडक्ट..." />
        </div>

        <div className="icons">
          <FontAwesomeIcon icon={faShoppingCart} />

          <div className="location-select">
            <div className="location-btn" tabIndex={0}>
              <FontAwesomeIcon icon={faMapMarkerAlt} />
              <span>Maharashtra</span>
              <FontAwesomeIcon
                icon={faChevronDown}
                style={{ fontSize: "10px", marginLeft: "4px" }}
              />
            </div>
            <div className="location-dropdown">
              <div>Maharashtra</div>
              <div>Gujarat</div>
              <div>Madhya Pradesh</div>
              <div>Rajasthan</div>
              <div>Karnataka</div>
            </div>
          </div>
        </div>
      </div>

     
    </>
  );
};

export default Navbar;
