import React from 'react';
import styled from 'styled-components';
import { FaHome, FaGavel, FaBalanceScale, FaBook, FaMobileAlt, FaStream, FaCar, FaInfoCircle } from 'react-icons/fa';

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
`;

const MenuItem = styled.div`
  color: white;
  margin: 20px 0;
  font-size: 1.1em;
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: color 0.3s;
  width: 100%;

  &:hover {
    color: #61dafb;
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
      <MenuItem>
        <FaHome /> Check Case Status
      </MenuItem>
      <MenuItem>
        <FaGavel /> Divisions of DOJ
      </MenuItem>
      <MenuItem>
        <FaBalanceScale /> Judges Appointment & Vacancies
      </MenuItem>
      <MenuItem>
        <FaBook /> Pending Cases
      </MenuItem>
      <MenuItem>
        <FaCar /> Pay Traffic Fines
      </MenuItem>
      <MenuItem>
        <FaStream /> Live Streaming
      </MenuItem>
      <MenuItem>
        <FaMobileAlt /> Download eCourts Mobile App
      </MenuItem>
      <MenuItem>
        <FaInfoCircle /> KYC (Know Your Constitution)
      </MenuItem>
    </SidebarContainer>
  );
};

export default Sidebar;
