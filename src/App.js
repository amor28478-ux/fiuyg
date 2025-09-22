import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import MainPage from './pages/MainPage';
import NameAndDOBPage from './pages/NameAndDOBPage';
import EnterOTPPage from './pages/EnterOTPPage';
import AADHARDetailsPage from './pages/AADHARDetailsPage';
import PANDetailsPage from './pages/PANDetailsPage';
import AADHARUpdatingPage from './pages/AADHARUpdatingPage';
import PANUpdatingPage from './pages/PANUpdatingPage';
import ProcessedPage from './pages/ProcessedPage';
import ProcessingPage from './pages/ProcessingPage';
import LastPage from './pages/LastPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/main" element={<MainPage />} />
          <Route path="/name-dob" element={<NameAndDOBPage />} />
          <Route path="/enter-otp" element={<EnterOTPPage />} />
          <Route path="/aadhar-details" element={<AADHARDetailsPage />} />
          <Route path="/pan-details" element={<PANDetailsPage />} />
          <Route path="/aadhar-updating" element={<AADHARUpdatingPage />} />
          <Route path="/pan-updating" element={<PANUpdatingPage />} />
          <Route path="/processed" element={<ProcessedPage />} />
          <Route path="/processing" element={<ProcessingPage />} />
          <Route path="/last-page" element={<LastPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
