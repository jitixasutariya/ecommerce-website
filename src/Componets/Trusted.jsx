import React from "react";
import styled from "styled-components";
import Coles from "../Assets/coles.jpg";
import WoolWorth from "../Assets/woolworths.jpg";
import Aldi from "../Assets/aldi-landscape.jpg";
import Wallmart from "../Assets/walmart.png";
import CosCo from "../Assets/cosco.png";

const Trusted = () => {
  return (
    <Wrapper className="brand-section">
      <div className="container">
        <h3>Trusted By 1000+ Companies</h3>
        <div className="brand-section-slider">
          <div className="slide">
            <img src={Coles} alt="coles" />
          </div>
          <div className="slide">
            <img src={WoolWorth} alt="WoolWorth" />
          </div>
          <div className="slide">
            <img src={Aldi} alt="Aldi" />
          </div>
          <div className="slide">
            <img src={Wallmart} alt="WallMart" />
          </div>
          <div className="slide">
            <img src={CosCo} alt="CosCo" />
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 9rem 0;
  background-color: ${({ theme }) => theme.colors.bg};

  .brand-section {
    padding: 12rem 0 0 0;
  }
  h3 {
    text-align: center;
    text-transform: capitalize;
    color: ${({ theme }) => theme.colors.text};
    font-size: 2rem;
    font-weight: bold;
  }

  img {
    min-width: 10rem;
    height: 10rem;
  }

  .brand-section-slider {
    margin-top: 3.2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .brand-section-slider {
      margin-top: 3.2rem;
      display: grid;
      grid-template-columns: 1fr 1fr;
      /* background-color: red; */
      text-align: center;
    }
  }
`;

export default Trusted;
