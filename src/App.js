import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./Sidebar";
import Home from "./component/Home"; // Importing Home component
import PendingCases from "./component/PendingCases"; // Importing Pending Cases component
import styled from "styled-components";
import Header from "./component/Header";
import CaseSearch from "./component/CaseSearch";
import Judges from "./component/Judges";
import CourtRules from "./component/CourtRules";
import Resources from "./component/Resources";
import ContactUs from "./component/ContactUs";
import LiveStreaming from "./component/LiveStreaming";
import Kyc from "./component/Kyc";
import Download from "./component/Download";
import TrafficFine from "./component/TrafficFine";
import JudgeAppointment from "./component/JudgeAppointment";
import Division from "./component/Division";
import CaseStatus from "./component/CaseStatus";

const ContentWrapper = styled.div`
  margin-top: 80px; /* Height of the header */
  margin-left: 240px; /* Width of the sidebar */
  padding: 20px;
  background-color: #f5f5f5;
  min-height: 100vh; /* Ensures content area covers the full viewport height */
`;

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Sidebar />
        <ContentWrapper>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/case-search" element={<CaseSearch />} />
            <Route path="/judges" element={<Judges />} />
            <Route path="/court-rules" element={<CourtRules />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/live-streaming" element={<LiveStreaming />} />
            <Route path="/case-status" element={<CaseStatus />} />
            <Route path="/divisions" element={<Division />} />
            <Route path="/judges-appointment" element={<JudgeAppointment />} />
            <Route path="/pay-traffic-fines" element={<TrafficFine />} />
            <Route path="/download-ecourts-app" element={<Download />} />
            <Route path="/kyc" element={<Kyc />} />
            <Route path="/pending-cases" element={<PendingCases />} />
          </Routes>
        </ContentWrapper>
      </div>
    </Router>
  );
}

export default App;
