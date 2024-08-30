import React, { useState, useEffect } from "react";
import stateData from "../data/state.json"; // Import the state.json file
import "./dropdown.css";

const Dropdown = () => {
  const [states, setStates] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [selectedState, setSelectedState] = useState("");
  const [selectedDistrict, setSelectedDistrict] = useState("");
  const [caseNumber, setCaseNumber] = useState("");

  useEffect(() => {
    setStates(stateData.states);
  }, []);

  const handleStateChange = (e) => {
    const stateName = e.target.value;
    setSelectedState(stateName);
    const stateObj = states.find((state) => state.state === stateName);
    if (stateObj) {
      setDistricts(stateObj.districts);
      setSelectedDistrict("");
    } else {
      setDistricts([]);
    }
  };

  const handleDistrictChange = (e) => {
    setSelectedDistrict(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      `State: ${selectedState}, District: ${selectedDistrict}, Case Number: ${caseNumber}`
    );
  };

  return (
    <div className="form-container">
      <h2>Case Selection Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="select-container">
          <div className="input-group">
            <label htmlFor="state">State:</label>
            <select
              id="state"
              value={selectedState}
              onChange={handleStateChange}
              required
            >
              <option value="" disabled>
                Select State
              </option>
              {states.map((state) => (
                <option key={state.state} value={state.state}>
                  {state.state}
                </option>
              ))}
            </select>
          </div>
          <div className="input-group">
            <label htmlFor="district">District:</label>
            <select
              id="district"
              value={selectedDistrict}
              onChange={handleDistrictChange}
              required
              disabled={!selectedState} // Disable if no state selected
            >
              <option value="" disabled>
                Select District
              </option>
              {districts.map((district) => (
                <option key={district} value={district}>
                  {district}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="input-group">
          <label htmlFor="caseNumber">Case Number:</label>
          <input
            type="text"
            id="caseNumber"
            value={caseNumber}
            onChange={(e) => setCaseNumber(e.target.value)}
            required
            placeholder="Enter Case Number"
          />
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Dropdown;
