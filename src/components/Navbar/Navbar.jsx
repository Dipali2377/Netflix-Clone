import "../Navbar/Navbar.css";
import logo from "../../assets/Logo.jpeg";
import profile from "../../assets/profile.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faBell,
  faCaretDown,
} from "@fortawesome/free-solid-svg-icons";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

export const Navbar = () => {
  const navRef = useRef();

  const navigate = useNavigate();

  const dropdownRef = useRef(null);

  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsDropdownVisible(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY >= 80) {
        navRef.current.classList.add("navbar-dark");
      } else {
        navRef.current.classList.remove("navbar-dark");
      }
    });
  }, []);

  function handleSignOut() {
    localStorage.removeItem("isAuthenticated");
    navigate("/login");
  }

  return (
    <>
      <div className="navbar" ref={navRef}>
        <div className="navbar-left">
          <img
            src={logo}
            alt="Logo"
            style={{ width: "92px", height: "30px" }}
          />
          <ul>
            <li>Home</li>
            <li>TV Shows</li>
            <li>Movies</li>
            <li>New & Popular</li>
            <li>My List</li>
            <li>Browse by Languages</li>
          </ul>
        </div>
        <div className="navbar-right">
          <FontAwesomeIcon
            icon={faSearch}
            className="icons"
            style={{ width: 24, height: 24 }}
          />
          <p>Childern</p>

          <FontAwesomeIcon
            icon={faBell}
            className="icons"
            style={{ width: 24, height: 24 }}
          />

          <div
            className="navbar-profile"
            ref={dropdownRef}
            onClick={() => setIsDropdownVisible((prevVisible) => !prevVisible)}
          >
            <img
              src={profile}
              alt="profile-icon"
              className="profile-icon"
              style={{ width: 32, height: 32 }}
            />

            <FontAwesomeIcon
              icon={faCaretDown}
              style={{ width: "15px", height: "15px" }}
            />
            {isDropdownVisible && (
              <div
                className={`sign-out ${isDropdownVisible ? "visible" : ""}`}
                onClick={handleSignOut}
              >
                <p>sign out of Netflix</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
