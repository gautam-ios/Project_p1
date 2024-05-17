// // // // // // // Sidebar.js
// // // // // // import React, { useState } from 'react';
// // // // // // import { FiHome, FiCreditCard, FiUserPlus, FiSettings, FiClipboard } from 'react-icons/fi'; // Import icons from react-icons library

// // // // // // const Sidebar = () => {
// // // // // //   const [activeSection, setActiveSection] = useState('Dashboard'); // State to track active section

// // // // // //   const handleSectionClick = (sectionName) => {
// // // // // //     setActiveSection(sectionName); // Update active section when a link is clicked
// // // // // //   };

// // // // // //   return (
// // // // // //     <div className="bg-blue-600 text-white h-screen w-64 flex flex-col justify-between">
// // // // // //       <div>
// // // // // //         <div className="text-xl font-bold p-4">Admin Panel</div>
// // // // // //         <ul>
// // // // // //           <li className={`p-4 cursor-pointer ${activeSection === 'Dashboard' ? 'bg-blue-500' : ''}`} onClick={() => handleSectionClick('Dashboard')}>
// // // // // //             <FiHome className="inline mr-2" /> Dashboard
// // // // // //           </li>
// // // // // //           <li className={`p-4 cursor-pointer ${activeSection === 'Payments' ? 'bg-blue-500' : ''}`} onClick={() => handleSectionClick('Payments')}>
// // // // // //             <FiCreditCard className="inline mr-2" /> Payments
// // // // // //           </li>
// // // // // //           <li className={`p-4 cursor-pointer ${activeSection === 'Add User' ? 'bg-blue-500' : ''}`} onClick={() => handleSectionClick('Add User')}>
// // // // // //             <FiUserPlus className="inline mr-2" /> Add User
// // // // // //           </li>
// // // // // //           <li className={`p-4 cursor-pointer ${activeSection === 'Settings' ? 'bg-blue-500' : ''}`} onClick={() => handleSectionClick('Settings')}>
// // // // // //             <FiSettings className="inline mr-2" /> Settings
// // // // // //           </li>
// // // // // //           <li className={`p-4 cursor-pointer ${activeSection === 'Receipt' ? 'bg-blue-500' : ''}`} onClick={() => handleSectionClick('Receipt')}>
// // // // // //             <FiClipboard className="inline mr-2" /> Receipt
// // // // // //           </li>
// // // // // //         </ul>
// // // // // //       </div>
// // // // // //       <div className="p-4">© 2024 Your Company</div>
// // // // // //     </div>
// // // // // //   );
// // // // // // };

// // // // // // export default Sidebar;
// // // // // // Sidebar.js
// // // // // // Sidebar.js
// // // // // import React from 'react';
// // // // // import { useNavigate } from 'react-router-dom';

// // // // // const Sidebar = () => {
// // // // //   const navigate = useNavigate();

// // // // //   const handleSectionClick = (sectionName) => {
// // // // //     if (sectionName === 'Dashboard') {
// // // // //       navigate('/');
// // // // //     } else if (sectionName === 'Payments') {
// // // // //       navigate('/payments');
// // // // //     }
// // // // //     // Add similar conditions for other sections as needed
// // // // //   };

// // // // //   return (
// // // // //     <div className="bg-blue-600 text-white h-screen w-64 flex flex-col justify-between">
// // // // //       <div>
// // // // //         <div className="text-xl font-bold p-4">Admin Panel</div>
// // // // //         <ul>
// // // // //           <li className="p-4 cursor-pointer" onClick={() => handleSectionClick('Dashboard')}>
// // // // //             Dashboard
// // // // //           </li>
// // // // //           <li className="p-4 cursor-pointer" onClick={() => handleSectionClick('Payments')}>
// // // // //             Payments
// // // // //           </li>
// // // // //           {/* Add similar list items for other sections */}
// // // // //         </ul>
// // // // //       </div>
// // // // //       <div className="p-4">© 2024 Your Company</div>
// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // export default Sidebar;

// // // // // Sidebar.js

// // // // import React from 'react';
// // // // import { useNavigate } from 'react-router-dom';

// // // // const Sidebar = () => {
// // // //   const navigate = useNavigate();

// // // //   const handleSectionClick = (sectionName) => {
// // // //     if (sectionName === 'Dashboard') {
// // // //       navigate('/');
// // // //     } else if (sectionName === 'Payments') {
// // // //       navigate('/payments');
// // // //     } else if (sectionName === 'Receipt') {
// // // //       navigate('/receipt'); // Navigate to the Receipt page
// // // //     } else if (sectionName === 'Settings') {
// // // //       navigate('/settings'); // Navigate to the Settings page
// // // //     }
// // // //     // Add similar conditions for other sections as needed
// // // //   };

// // // //   return (
// // // //     <div className="bg-blue-600 text-white h-screen w-64 flex flex-col justify-between">
// // // //       <div>
// // // //         <div className="text-xl font-bold p-4">Admin Panel</div>
// // // //         <ul>
// // // //           <li className="p-4 cursor-pointer" onClick={() => handleSectionClick('Dashboard')}>
// // // //             Dashboard
// // // //           </li>
// // // //           <li className="p-4 cursor-pointer" onClick={() => handleSectionClick('Payments')}>
// // // //             Payments
// // // //           </li>
// // // //           <li className="p-4 cursor-pointer" onClick={() => handleSectionClick('Receipt')}>
// // // //             Receipt {/* New option */}
// // // //           </li>
// // // //           <li className="p-4 cursor-pointer" onClick={() => handleSectionClick('Settings')}>
// // // //             Settings {/* New option */}
// // // //           </li>
// // // //           {/* Add similar list items for other sections */}
// // // //         </ul>
// // // //       </div>
// // // //       <div className="p-4">© 2024 Your Company</div>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default Sidebar;
// // // // Sidebar.js

// // // import React from 'react';
// // // import { useNavigate } from 'react-router-dom';
// // // import DashboardIcon from '@material-ui/icons/Dashboard';
// // // import PaymentIcon from '@material-ui/icons/Payment';
// // // import ReceiptIcon from '@material-ui/icons/Receipt';
// // // import SettingsIcon from '@material-ui/icons/Settings';

// // // const Sidebar = () => {
// // //   const navigate = useNavigate();

// // //   const handleSectionClick = (sectionName) => {
// // //     if (sectionName === 'Dashboard') {
// // //       navigate('/');
// // //     } else if (sectionName === 'Payments') {
// // //       navigate('/payments');
// // //     } else if (sectionName === 'Receipt') {
// // //       navigate('/receipt'); // Navigate to the Receipt page
// // //     } else if (sectionName === 'Settings') {
// // //       navigate('/settings'); // Navigate to the Settings page
// // //     }
// // //     // Add similar conditions for other sections as needed
// // //   };

// // //   return (
// // //     <div className="bg-yellow-900 hover:bg-yellow-300 text-white h-screen w-64 flex flex-col justify-between">
// // //       <div>
// // //         <div className="text-xl font-bold p-4">Admin Panel</div>
// // //         <ul>
// // //           <li className="p-4 cursor-pointer flex items-center" onClick={() => handleSectionClick('Dashboard')}>
// // //             <DashboardIcon /> {/* Dashboard Icon */}
// // //             <span className="ml-2">Dashboard</span>
// // //           </li>
// // //           <li className="p-4 cursor-pointer flex items-center" onClick={() => handleSectionClick('Payments')}>
// // //             <PaymentIcon /> {/* Payment Icon */}
// // //             <span className="ml-2">Payments</span>
// // //           </li>
// // //           <li className="p-4 cursor-pointer flex items-center" onClick={() => handleSectionClick('Receipt')}>
// // //             <ReceiptIcon /> {/* Receipt Icon */}
// // //             <span className="ml-2">Receipt</span>
// // //           </li>
// // //           <li className="p-4 cursor-pointer flex items-center" onClick={() => handleSectionClick('Settings')}>
// // //             <SettingsIcon /> {/* Settings Icon */}
// // //             <span className="ml-2">Settings</span>
// // //           </li>
// // //           {/* Add similar list items for other sections */}
// // //         </ul>
// // //       </div>  
// // //       <div className="p-4">© 2024 Your Company</div>
// // //     </div>
// // //   );
// // // };

// // // export default Sidebar;

// // import React from 'react';
// // import { useNavigate } from 'react-router-dom';
// // import DashboardIcon from '@material-ui/icons/Dashboard';
// // import PaymentIcon from '@material-ui/icons/Payment';
// // import ReceiptIcon from '@material-ui/icons/Receipt';
// // import SettingsIcon from '@material-ui/icons/Settings';

// // const Sidebar = () => {
// //   const navigate = useNavigate();

// //   const handleSectionClick = (sectionName) => {
// //     if (sectionName === 'Dashboard') {
// //       navigate('/');
// //     } else if (sectionName === 'Payments') {
// //       navigate('/payments');
// //     } else if (sectionName === 'Receipt') {
// //       navigate('/receipt');
// //     } else if (sectionName === 'Settings') {
// //       navigate('/settings');
// //     }
// //     // Add similar conditions for other sections as needed
// //   };

// //   return (
// //     <div className="bg-yellow-400 text-white h-screen w-64 flex flex-col justify-between">
// //       <div>
// //         <div className="text-xl font-bold p-4">Admin Panel</div>
// //         <ul>
// //           <li className="p-4 cursor-pointer flex items-center" onClick={() => handleSectionClick('Dashboard')}>
// //             <DashboardIcon /> {/* Dashboard Icon */}
// //             <span className="ml-2">Dashboard</span>
// //           </li>
// //           <li className="p-4 cursor-pointer flex items-center" onClick={() => handleSectionClick('Payments')}>
// //             <PaymentIcon /> {/* Payment Icon */}
// //             <span className="ml-2">Payments</span>
// //           </li>
// //           <li className="p-4 cursor-pointer flex items-center" onClick={() => handleSectionClick('Receipt')}>
// //             <ReceiptIcon /> {/* Receipt Icon */}
// //             <span className="ml-2">Receipt</span>
// //           </li>
// //           <li className="p-4 cursor-pointer flex items-center" onClick={() => handleSectionClick('Settings')}>
// //             <SettingsIcon /> {/* Settings Icon */}
// //             <span className="ml-2">Settings</span>
// //           </li>
// //           {/* Add similar list items for other sections */}
// //         </ul>
// //       </div>
// //       <div className="p-4">© 2024 Your Company</div>
// //     </div>
// //   );
// // };

// // export default Sidebar;
// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import DashboardIcon from '@material-ui/icons/Dashboard';
// import PaymentIcon from '@material-ui/icons/Payment';
// import ReceiptIcon from '@material-ui/icons/Receipt';
// import SettingsIcon from '@material-ui/icons/Settings';

// const Sidebar = () => {
//   const navigate = useNavigate();
//   const [activeTab, setActiveTab] = useState('');

//   const handleSectionClick = (sectionName) => {
//     setActiveTab(sectionName);
//     if (sectionName === 'Dashboard') {
//       navigate('/');
//     } else if (sectionName === 'Payments') {
//       navigate('/payments');
//     } else if (sectionName === 'Receipt') {
//       navigate('/receipt');
//     } else if (sectionName === 'Settings') {
//       navigate('/settings');
//     }
//     // Add similar conditions for other sections as needed
//   };

//   return (
//     <div className="bg-blue-400 text-white h-screen w-64 flex flex-col justify-between">
//       <div>
//         <div className="text-xl font-bold p-4">Admin Panel</div>
//         <ul>
//           <li
//             className={`p-4 cursor-pointer flex items-center ${activeTab === 'Dashboard' ? 'bg-blue-600' : ''}`}
//             onClick={() => handleSectionClick('Dashboard')}
//           >
//             <DashboardIcon /> {/* Dashboard Icon */}
//             <span className="ml-2">Dashboard</span>
//           </li>
//           <li
//             className={`p-4 cursor-pointer flex items-center ${activeTab === 'Payments' ? 'bg-blue-600' : ''}`}
//             onClick={() => handleSectionClick('Payments')}
//           >
//             <PaymentIcon /> {/* Payment Icon */}
//             <span className="ml-2">Payments</span>
//           </li>
//           <li
//             className={`p-4 cursor-pointer flex items-center ${activeTab === 'Receipt' ? 'bg-blue-600' : ''}`}
//             onClick={() => handleSectionClick('Receipt')}
//           >
//             <ReceiptIcon /> {/* Receipt Icon */}
//             <span className="ml-2">Receipt</span>
//           </li>
//           <li
//             className={`p-4 cursor-pointer flex items-center ${activeTab === 'Settings' ? 'bg-blue-600' : ''}`}
//             onClick={() => handleSectionClick('Settings')}
//           >
//             <SettingsIcon /> {/* Settings Icon */}
//             <span className="ml-2">Settings</span>
//           </li>
//           {/* Add similar list items for other sections */}
//         </ul>
//       </div>
//       <div className="p-4">© 2024 Your Company</div>
//     </div>
//   );
// };

// export default Sidebar;

import React from 'react';
import { useNavigate } from 'react-router-dom';
import DashboardIcon from '@material-ui/icons/Dashboard';
import PaymentIcon from '@material-ui/icons/Payment';
import ReceiptIcon from '@material-ui/icons/Receipt';
import SettingsIcon from '@material-ui/icons/Settings';

const Sidebar = () => {
  const navigate = useNavigate();

  const handleSectionClick = (sectionName) => {
    if (sectionName === 'Dashboard') {
      navigate('/');
    } else if (sectionName === 'Payments') {
      navigate('/payments');
    } else if (sectionName === 'Receipt') {
      navigate('/receipt');
    } else if (sectionName === 'Settings') {
      navigate('/settings');
    }
  };

  return (
    <div className="bg-blue-600 text-white h-screen w-64 flex flex-col justify-between">
      <div>
        <div className="text-xl font-bold p-4">Admin Panel</div>
        <ul>
          <li className="p-4 cursor-pointer flex items-center hover:bg-blue-700" onClick={() => handleSectionClick('Dashboard')}>
            <DashboardIcon />
            <span className="ml-2">Dashboard</span>
          </li>
          <li className="p-4 cursor-pointer flex items-center hover:bg-blue-700" onClick={() => handleSectionClick('Payments')}>
            <PaymentIcon />
            <span className="ml-2">Payments</span>
          </li>
          <li className="p-4 cursor-pointer flex items-center hover:bg-blue-700" onClick={() => handleSectionClick('Receipt')}>
            <ReceiptIcon />
            <span className="ml-2">Receipt</span>
          </li>
          <li className="p-4 cursor-pointer flex items-center hover:bg-blue-700" onClick={() => handleSectionClick('Settings')}>
            <SettingsIcon />
            <span className="ml-2">Settings</span>
          </li>
        </ul>
      </div>
      <div className="p-4">© 2024 Your Company</div>
    </div>
  );
};

export default Sidebar;
