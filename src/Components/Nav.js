import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <StyledNav>
      <ul>
        <li>
          <Link className="link" to={"/"}>
            <h3>Home</h3>
          </Link>
        </li>
        <li>
          <Link className="link" to={"/about"}>
            <h3>About me</h3>
          </Link>
        </li>
        <li>
          <Link className="link" to={"/git"}>
            <h3>Latest on Github</h3>
          </Link>
        </li>
        <li>
          <Link className="link" to={"/contact"}>
            <h3>Contact me</h3>
          </Link>
        </li>
      </ul>
    </StyledNav>
  );
}

export default Nav;

const StyledNav = styled.nav`
  position: fixed;
  z-index: 10;
  width: 100%;
  a {
    color: darkblue;
  }
  background: #c2cce9d2;
  ul {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    list-style: none;
  }
  li {
    margin: 1rem;
  }
`;
