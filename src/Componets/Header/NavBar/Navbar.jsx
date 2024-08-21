import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faBars,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const Nav = styled.nav`
    .navbar {
      display: flex;
      justify-content: center;
      padding: 5rem;
      position: relative;
    }

    .navbar-lists {
      display: flex;
      gap: 4.8rem;
      align-items: center;
      list-style: none;
      padding: 0;
      margin: 0;
      transition: max-height 0.3s ease;
    }

    .navbar-link {
      text-decoration: none;
      font-size: 24px;
    }

    .menu-toggle {
      display: none;
      font-size: 24px;
      cursor: pointer;
    }

    @media (max-width: 768px) {
      .navbar-lists {
        flex-direction: column;
        align-items: flex-start;
        gap: 1.5rem;
        max-height: ${isOpen ? "500px" : "0"};
        overflow: hidden;
      }

      .menu-toggle {
        display: block;
      }

      .navbar-link {
        font-size: 20px;
        margin-left:20px;
    }

    @media (max-width: 576px) {
      .navbar-lists {
        gap: 1rem;
      }

      .navbar-link {
        font-size: 18px;
      }
    }

    .cart-icon {
      font-size: 24px;
    }

    .close-menu {
      display: ${isOpen ? "block" : "none"};
      font-size: 24px;
      cursor: pointer;
      position: absolute;
      top: 1rem;
      right: 1rem;
    }
  `;

  return (
    <Nav>
      <div className="navbar">
        <div className="menu-toggle" onClick={() => setIsOpen(!isOpen)}>
          <FontAwesomeIcon icon={isOpen ? faTimes : faBars} />
        </div>
        <ul className="navbar-lists">
          <li>
            <NavLink
              to={"/"}
              className="navbar-link"
              onClick={() => setIsOpen(false)}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/about"}
              className="navbar-link"
              onClick={() => setIsOpen(false)}
            >
              About Us
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/products"}
              className="navbar-link"
              onClick={() => setIsOpen(false)}
            >
              Products
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/contact"}
              className="navbar-link"
              onClick={() => setIsOpen(false)}
            >
              Contact Us
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/cart"}
              className="navbar-link"
              onClick={() => setIsOpen(false)}
            >
              <FontAwesomeIcon icon={faCartShopping} className="cart-icon" />
            </NavLink>
          </li>
        </ul>
      </div>
    </Nav>
  );
};

export default Navbar;
