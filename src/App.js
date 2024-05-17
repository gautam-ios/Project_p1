
// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Sidebar from './components/Sidebar';
// import Header from './components/Header';
// import Dashboard from './components/Dashboard/Dashboard';
// import Payment from './components/Payment/Payment';
// import Settings from './components/Settings/Settings';
// import ReceiptPage from './components/Receipt/ReceiptPage'; // Import the ReceiptPage component

// const App = () => {
//   return (
//     <Router>
//       <div>
//         <Header />
//         <div className="flex">
//           <Sidebar />
//           <Routes>
//             <Route path="/" element={<Dashboard />} />
//             <Route path="/payments" element={<Payment />} />
//             <Route path="/settings" element={<Settings />} />
//             <Route path="/receipt" element={<ReceiptPage />} /> {/* Added route for ReceiptPage */}
//           </Routes>
//         </div>
//       </div>
//     </Router>
//   );
// };

// export default App;
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import LoginPage from './components/Auth/LoginPage'; // Import the LoginPage component
import RegisterPage from './components/Auth/RegisterPage'; // Import the RegisterPage component
import Dashboard from './components/Dashboard/Dashboard';
import Payment from './components/Payment/Payment';
import Settings from './components/Settings/Settings';
import ReceiptPage from './components/Receipt/ReceiptPage';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    // Your login logic here
    setIsLoggedIn(true);
  };

  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              isLoggedIn ? (
                <div className="flex">
                  <Sidebar />
                  <Dashboard />
                </div>
              ) : (
                <LoginPage onLogin={handleLogin} />
              )
            }
          />
          <Route path="/login" element={<LoginPage onLogin={handleLogin} />} />
          <Route path="/register" element={<RegisterPage />} />
          {isLoggedIn && (
            <>
              <Route
                path="/dashboard"
                element={
                  <div className="flex">
                    <Sidebar />
                    <Dashboard />
                  </div>
                }
              />
              <Route
                path="/payments"
                element={
                  <div className="flex">
                    <Sidebar />
                    <Payment />
                  </div>
                }
              />
              <Route
                path="/settings"
                element={
                  <div className="flex">
                    <Sidebar />
                    <Settings />
                  </div>
                }
              />
              <Route
                path="/receipt"
                element={
                  <div className="flex">
                    <Sidebar />
                    <ReceiptPage />
                  </div>
                }
              />
            </>
          )}
        </Routes>
      </div>
    </Router>
  );
};

export default App;

