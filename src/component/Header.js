import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const HeaderContainer = styled.div`
  width: 100%;
  height: 60px;
  background-color: darkslateblue;
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
`;

const Logo = styled.div`
  font-size: 1.5em;
  font-weight: bold;
`;

const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin: 12px;
`;

const StyledNavLink = styled(NavLink)`
  color: white;
  margin-left: 20px;
  text-decoration: none;
  font-size: 1em;

  &.active {
    color: #61dafb;
  }

  &:hover {
    color: #61dafb;
  }
`;

const Header = () => {
  return (
    <HeaderContainer>
      <Logo>JusAssist</Logo>
      <div style={{ marginRight: "28px" }}>
        <NavMenu>
          <StyledNavLink to="/" end>
            Home
          </StyledNavLink>
          <StyledNavLink to="/case-search" activeClassName="active">
            Case Search
          </StyledNavLink>
          <StyledNavLink to="/judges" activeClassName="active">
            Judges
          </StyledNavLink>
          <StyledNavLink to="/court-rules" activeClassName="active">
            Court Rules
          </StyledNavLink>
          <StyledNavLink to="/resources" activeClassName="active">
            Resources
          </StyledNavLink>
          <StyledNavLink to="/contact-us" activeClassName="active">
            Contact Us
          </StyledNavLink>
        </NavMenu>
      </div>
    </HeaderContainer>
  );
};

export default Header;
