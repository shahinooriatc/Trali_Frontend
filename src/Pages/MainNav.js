import React from "react";
import { Nav, Navbar } from "rsuite";
import "../Styles/MainNav.css";
import logo from "../assets/images/logo.png";
import { FaRegUserCircle, FaRegHeart, FaBalanceScale } from "react-icons/fa";
import { BsCart3 } from "react-icons/bs";

import "../Main.css";
const MainNav = () => {
  return (
    <React.Fragment>
      <div className="container">
        <Navbar className="navbar_main">
          <Navbar.Brand href="#">
            <img src={logo} alt="Trali WereStore" />
          </Navbar.Brand>
          <Nav className="nav_menu">
            <Nav.Item>HOME</Nav.Item>
            <Nav.Item>PAGES</Nav.Item>
            <Nav.Item>BLOG</Nav.Item>
            <Nav.Item>CONTACTS</Nav.Item>
          </Nav>
          <Nav pullRight>
            <div className="nav_icon">
              <FaRegUserCircle className="icons" />
              <FaRegHeart className="icons" />
              <FaBalanceScale className="icons" />
              <span className="cart_icon">
                <BsCart3 className="icons" />
                <span className="cart_item" >15</span>
              </span>
            </div>
          </Nav>
        </Navbar>
      </div>
    </React.Fragment>
  );
};

export default MainNav;
