import React, { useState } from 'react';
import './dropdown.css';

const CaseSelectionForm = () => {
    const [state, setState] = useState('');
    const [district, setDistrict] = useState('');
    const [caseNumber, setCaseNumber] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`State: ${state}, District: ${district}, Case Number: ${caseNumber}`);
    };

    return (
        <div className="form-container">
            <h2>Case Selection Form</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="state">State:</label>
                <select
                    id="state"
                    value={state}
                    onChange={(e) => setState(e.target.value)}
                    required
                >
                    <option value="" disabled>Select State</option>
                    <option value="state1">State 1</option>
                    <option value="state2">State 2</option>
                    <option value="state3">State 3</option>
                </select>

                <label htmlFor="district">District:</label>
                <select
                    id="district"
                    value={district}
                    onChange={(e) => setDistrict(e.target.value)}
                    required
                >
                    <option value="" disabled>Select District</option>
                    <option value="district1">District 1</option>
                    <option value="district2">District 2</option>
                    <option value="district3">District 3</option>
                </select>

                <label htmlFor="caseNumber">Case Number:</label>
                <select
                    id="caseNumber"
                    value={caseNumber}
                    onChange={(e) => setCaseNumber(e.target.value)}
                    required
                >
                    <option value="" disabled>Select Case Number</option>
                    <option value="case1">Case 1</option>
                    <option value="case2">Case 2</option>
                    <option value="case3">Case 3</option>
                </select>

                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default CaseSelectionForm;
