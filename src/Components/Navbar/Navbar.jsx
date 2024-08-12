import React from "react";
import "./navbar.css";
import { MdModeOfTravel } from "react-icons/md";
import { IoClose } from "react-icons/io5";
import { TiThMenu } from "react-icons/ti";

const Navbar = () => {
  return (
    <section className="navBar">
      <header className="header flex">
        <div className="logoDiv">
          <a href="#" className="logo flex">
            <h1>
              <MdModeOfTravel className="icon" />
              Safiri.
            </h1>
          </a>
        </div>

        <div className="navBar">
          <ul className="navList flex">
            <li className="navItem">
              <a href="#" className="navLink">
                Home
              </a>
            </li>
            <li className="navItem">
              <a href="#" className="navLink">
                Packages
              </a>
            </li>
            <li className="navItem">
              <a href="#" className="navLink">
                Shop
              </a>
            </li>
            <li className="navItem">
              <a href="#" className="navLink">
                About
              </a>
            </li>
            <li className="navItem">
              <a href="#" className="navLink">
                Contact
              </a>
            </li>
            <button className="btn">
              <a href="#">BOOK NOW</a>
            </button>
          </ul>

          <div className="closeNavbar">
            <IoClose className="icon" />
          </div>
        </div>

        <div className="toggleNavbar">
          <TiThMenu className="icon" />
        </div>
      </header>
    </section>
  );
};

export default Navbar;
