import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Logo from "../../Assets/logo.png";
import Navbar from "./NavBar/Navbar";

const Header = () => {
  return (
    <MainHeader>
      <NavLink to="/">
        <img src={Logo} alt="my logo img" className="logo" />
      </NavLink>
      <Navbar />
    </MainHeader>
  );
};

const MainHeader = styled.header`
  padding: 0 1.6rem;
  height: 12rem;
  background-color: ${({ theme }) => theme.colors.bg};
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  .logo {
    height: 10rem;
    width: auto;
    border-radius: 50%;
  }

  @media (max-width: 1200px) {
    padding: 0 1.4rem;
    height: 9rem;

    .logo {
      height: 9rem;
    }
  }

  @media (max-width: 992px) {
    padding: 0 1.2rem;
    height: 8rem;

    .logo {
      height: 8rem;
    }
  }

  @media (max-width: 768px) {
    padding: 0 1rem;
    height: 10rem;
    flex-direction: column;
    align-items: flex-start;

    .logo {
      height: 7rem;
    }
  }

  @media (max-width: 576px) {
    padding: 0 0.8rem;
    height: 6rem;

    .logo {
      height: 6rem;
    }
  }
`;

export default Header;
