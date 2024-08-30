import React from "react";
import styled from "styled-components";
import {
  FaHome,
  FaGavel,
  FaBalanceScale,
  FaBook,
  FaMobileAlt,
  FaStream,
  FaCar,
  FaInfoCircle,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";

const SidebarContainer = styled.div`
  width: 250px;
  height: 100vh;
  background-color: indigo;
  color: lavender;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 20px;
  box-shadow: 2px 0 10px rgba(0, 0, 0, 0.3);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
`;

const MenuItem = styled(NavLink)`
  color: white;
  margin: 20px 0;
  font-size: 1.1em;
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: color 0.3s;
  width: 100%;
  text-decoration: none;

  &:hover {
    color: #61dafb;
  }

  &.active {
    color: #61dafb; /* Color change to indicate active route */
  }

  & > svg {
    margin-right: 15px;
  }
`;

const Logo = styled.div`
  font-size: 1.5em;
  font-weight: bold;
  margin-bottom: 40px;
  width: 100%;
  text-align: center;
`;

const Sidebar = () => {
  return (
    <SidebarContainer>
      <Logo>Legal Services</Logo>
      <MenuItem to="/case-status" exact>
        <FaHome /> Check Case Status
      </MenuItem>
      <MenuItem to="/divisions">
        <FaGavel /> Divisions of DOJ
      </MenuItem>
      <MenuItem to="/judges-appointment">
        <FaBalanceScale /> Judges Appointment & Vacancies
      </MenuItem>
      <MenuItem to="/pending-cases">
        <FaBook /> Pending Cases
      </MenuItem>
      <MenuItem to="/pay-traffic-fines">
        <FaCar /> Pay Traffic Fines
      </MenuItem>
      <MenuItem to="/live-streaming">
        <FaStream /> Live Streaming
      </MenuItem>
      <MenuItem to="/download-ecourts-app">
        <FaMobileAlt /> Download eCourts Mobile App
      </MenuItem>
      <MenuItem to="/kyc">
        <FaInfoCircle /> KYC (Know Your Constitution)
      </MenuItem>
    </SidebarContainer>
  );
};

export default Sidebar;
