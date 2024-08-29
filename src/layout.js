import React, { useState } from 'react';
import styled from 'styled-components';
// import TopBar from './TopBar';
// import Sidebar from './Sidebar';
import MenuBar from './menubar';
import CaseSelectionForm from "./component/dropdown"

const MainContent = styled.div`
  margin-left: 250px;
  padding: 20px;
  margin-top: 60px;
  transition: margin-left 0.3s ease-in-out;

  @media (max-width: 768px) {
    margin-left: 0;
  }
`;

const Layout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <>
      <MenuBar/>
      {/* <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} /> */}
      {/* <MainContent> */}
        <CaseSelectionForm/>
      {/* </MainContent> */}
    </>
  );
};

export default Layout;
