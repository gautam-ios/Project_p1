// // // // // // // // // // import React from 'react';
// // // // // // // // // // import { Link } from 'react-router-dom'; // Assuming you're using React Router for navigation


// // // // // // // // // // const Settings = () => {
// // // // // // // // // //     const [showAddCounterForm, setShowAddCounterForm] = useState(false);
  
// // // // // // // // // //     const handleAddCounter = () => {
// // // // // // // // // //       setShowAddCounterForm(true);
// // // // // // // // // //     };
  
// // // // // // // // // //     const handleCancelAddCounter = () => {
// // // // // // // // // //       setShowAddCounterForm(false);
// // // // // // // // // //     };
  
// // // // // // // // // //     const handleSaveCounter = (counterName) => {
// // // // // // // // // //       // Handle saving the counter name here
// // // // // // // // // //       console.log('Counter Name:', counterName);
// // // // // // // // // //       setShowAddCounterForm(false);
// // // // // // // // // //     };


// // // // // // // // // //   return (
// // // // // // // // // //     <div className="p-4">
// // // // // // // // // //       <h2 className="text-2xl font-bold mb-4">Settings</h2>
// // // // // // // // // //       <div className="grid grid-cols-2 gap-4">
// // // // // // // // // //         {/* First Box: Counter Name */}
// // // // // // // // // //         <div className="bg-blue-200 p-6 rounded-lg shadow-md relative">
// // // // // // // // // //           <h3 className="text-lg font-semibold mb-4">Counter Name (For Receipts)</h3>
// // // // // // // // // //           <button className="absolute top-0 right-0 p-2">
// // // // // // // // // //             <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
// // // // // // // // // //               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"/>
// // // // // // // // // //             </svg>
// // // // // // // // // //           </button>
// // // // // // // // // //         </div>

// // // // // // // // // //         {/* Second Box: Denominations */}
// // // // // // // // // //         <div className="bg-yellow-200 p-6 rounded-lg shadow-md relative">
// // // // // // // // // //           <h3 className="text-lg font-semibold mb-4">Denominations</h3>
// // // // // // // // // //           <button className="absolute top-0 right-0 p-2">
// // // // // // // // // //             <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
// // // // // // // // // //               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"/>
// // // // // // // // // //             </svg>
// // // // // // // // // //           </button>
// // // // // // // // // //         </div>

// // // // // // // // // //         {/* Third Box: Vendor Details */}
// // // // // // // // // //         <div className="bg-green-200 p-6 rounded-lg shadow-md relative">
// // // // // // // // // //           <h3 className="text-lg font-semibold mb-4">Vendor Details</h3>
// // // // // // // // // //           <button className="absolute top-0 right-0 p-2">
// // // // // // // // // //             <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
// // // // // // // // // //               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"/>
// // // // // // // // // //             </svg>
// // // // // // // // // //           </button>
// // // // // // // // // //         </div>

// // // // // // // // // //         {/* Fourth Box: Bank/Cheque Details */}
// // // // // // // // // //         <div className="bg-gray-200 p-6 rounded-lg shadow-md relative">
// // // // // // // // // //           <h3 className="text-lg font-semibold mb-4">Bank/Cheque Details</h3>
// // // // // // // // // //           <button className="absolute top-0 right-0 p-2">
// // // // // // // // // //             <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
// // // // // // // // // //               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"/>
// // // // // // // // // //             </svg>
// // // // // // // // // //           </button>
// // // // // // // // // //         </div>
// // // // // // // // // //       </div>
// // // // // // // // // //     </div>
// // // // // // // // // //   );
// // // // // // // // // // };

// // // // // // // // // // export default SettingsPage;
// // // // // // // // // import React, { useState } from 'react';

// // // // // // // // // const Settings = () => {
// // // // // // // // //     const [showAddCounterForm, setShowAddCounterForm] = useState(false);
// // // // // // // // //     const [counterName, setCounterName] = useState('');

// // // // // // // // //     const handleAddCounter = () => {
// // // // // // // // //         setShowAddCounterForm(true);
// // // // // // // // //     };

// // // // // // // // //     const handleCancelAddCounter = () => {
// // // // // // // // //         setShowAddCounterForm(false);
// // // // // // // // //         setCounterName('');
// // // // // // // // //     };

// // // // // // // // //     const handleSaveCounter = () => {
// // // // // // // // //         // Handle saving the counter name here
// // // // // // // // //         console.log('Counter Name:', counterName);
// // // // // // // // //         setShowAddCounterForm(false);
// // // // // // // // //         setCounterName('');
// // // // // // // // //     };

// // // // // // // // //     return (
// // // // // // // // //         <div className="p-4">
// // // // // // // // //             <h2 className="text-2xl font-bold mb-4">Settings</h2>
// // // // // // // // //             <div className="grid grid-cols-2 gap-4">
// // // // // // // // //                 {/* First Box: Counter Name (For Receipts) */}
// // // // // // // // //                 <div className="bg-blue-200 p-6 rounded-lg shadow-md relative">
// // // // // // // // //                     <h3 className="text-lg font-semibold mb-4">Counter Name (For Receipts)</h3>
// // // // // // // // //                     <button className="absolute top-0 right-0 p-2" onClick={handleAddCounter}>
// // // // // // // // //                         <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24"
// // // // // // // // //                             stroke="currentColor">
// // // // // // // // //                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
// // // // // // // // //                                 d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
// // // // // // // // //                         </svg>
// // // // // // // // //                     </button>
// // // // // // // // //                     {showAddCounterForm && (
// // // // // // // // //                         <form className="mt-4">
// // // // // // // // //                             <input
// // // // // // // // //                                 type="text"
// // // // // // // // //                                 value={counterName}
// // // // // // // // //                                 onChange={(e) => setCounterName(e.target.value)}
// // // // // // // // //                                 placeholder="Enter counter name"
// // // // // // // // //                                 className="border p-2 rounded-md w-full"
// // // // // // // // //                             />
// // // // // // // // //                             <div className="mt-2 flex justify-end">
// // // // // // // // //                                 <button type="button" className="bg-blue-500 text-white px-4 py-2 rounded-md mr-2"
// // // // // // // // //                                     onClick={handleSaveCounter}>Save</button>
// // // // // // // // //                                 <button type="button" className="bg-gray-500 text-white px-4 py-2 rounded-md"
// // // // // // // // //                                     onClick={handleCancelAddCounter}>Cancel</button>
// // // // // // // // //                             </div>
// // // // // // // // //                         </form>
// // // // // // // // //                     )}
// // // // // // // // //                 </div>

// // // // // // // // //                 {/* Second Box: Denominations */}
// // // // // // // // //                 <div className="bg-yellow-200 p-6 rounded-lg shadow-md relative">
// // // // // // // // //                     <h3 className="text-lg font-semibold mb-4">Denominations</h3>
// // // // // // // // //                     <button className="absolute top-0 right-0 p-2">
// // // // // // // // //                         <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24"
// // // // // // // // //                             stroke="currentColor">
// // // // // // // // //                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
// // // // // // // // //                                 d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
// // // // // // // // //                         </svg>
// // // // // // // // //                     </button>
// // // // // // // // //                 </div>

// // // // // // // // //                 {/* Third Box: Vendor Details */}
// // // // // // // // //                 <div className="bg-green-200 p-6 rounded-lg shadow-md relative">
// // // // // // // // //                     <h3 className="text-lg font-semibold mb-4">Vendor Details</h3>
// // // // // // // // //                     <button className="absolute top-0 right-0 p-2">
// // // // // // // // //                         <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24"
// // // // // // // // //                             stroke="currentColor">
// // // // // // // // //                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
// // // // // // // // //                                 d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
// // // // // // // // //                         </svg>
// // // // // // // // //                     </button>
// // // // // // // // //                 </div>

// // // // // // // // //                 {/* Fourth Box: Bank/Cheque Details */}
// // // // // // // // //                 <div className="bg-gray-200 p-6 rounded-lg shadow-md relative">
// // // // // // // // //                     <h3 className="text-lg font-semibold mb-4">Bank/Cheque Details</h3>
// // // // // // // // //                     <button className="absolute top-0 right-0 p-2">
// // // // // // // // //                         <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24"
// // // // // // // // //                             stroke="currentColor">
// // // // // // // // //                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
// // // // // // // // //                                 d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
// // // // // // // // //                         </svg>
// // // // // // // // //                     </button>
// // // // // // // // //                 </div>
// // // // // // // // //             </div>
// // // // // // // // //         </div>
// // // // // // // // //     );
// // // // // // // // // };

// // // // // // // // // export default Settings;
// // // // // // // // import React, { useState, useEffect } from 'react';
// // // // // // // // import axios from 'axios';

// // // // // // // // const Settings = () => {
// // // // // // // //     const [showAddCounterForm, setShowAddCounterForm] = useState(false);
// // // // // // // //     const [counterName, setCounterName] = useState('');
// // // // // // // //     const [counterNames, setCounterNames] = useState([]);

// // // // // // // //     // Function to save counter name to the backend
// // // // // // // //     const saveCounterName = async (counterName) => {
// // // // // // // //         try {
// // // // // // // //             const response = await axios.post('http://localhost:5000/api/counter', { counterName });
// // // // // // // //             console.log('Counter saved:', response.data);
// // // // // // // //             // Fetch the updated counter names after saving
// // // // // // // //             fetchCounterNames();
// // // // // // // //         } catch (error) {
// // // // // // // //             console.error('Error saving counter name:', error);
// // // // // // // //         }
// // // // // // // //     };

// // // // // // // //     // Function to fetch counter names from the backend
// // // // // // // //     const fetchCounterNames = async () => {
// // // // // // // //         try {
// // // // // // // //             const response = await axios.get('http://localhost:5000/api/counter');
// // // // // // // //             setCounterNames(response.data);
// // // // // // // //         } catch (error) {
// // // // // // // //             console.error('Error fetching counter names:', error);
// // // // // // // //         }
// // // // // // // //     };

// // // // // // // //     // Function to handle adding a new counter
// // // // // // // //     const handleAddCounter = () => {
// // // // // // // //         setShowAddCounterForm(true);
// // // // // // // //     };

// // // // // // // //     // Function to handle saving a counter
// // // // // // // //     const handleSaveCounter = () => {
// // // // // // // //         saveCounterName(counterName);
// // // // // // // //         setShowAddCounterForm(false);
// // // // // // // //         setCounterName('');
// // // // // // // //     };

// // // // // // // //     // Function to handle cancelling adding a counter
// // // // // // // //     const handleCancelAddCounter = () => {
// // // // // // // //         setShowAddCounterForm(false);
// // // // // // // //         setCounterName('');
// // // // // // // //     };

// // // // // // // //     // Fetch counter names on component mount
// // // // // // // //     useEffect(() => {
// // // // // // // //         fetchCounterNames();
// // // // // // // //     }, []);

// // // // // // // //     return (
// // // // // // // //         <div className="p-4">
// // // // // // // //             <h2 className="text-2xl font-bold mb-4">Settings</h2>
// // // // // // // //             <div className="grid grid-cols-2 gap-4">
// // // // // // // //                 {/* First Box: Counter Name (For Receipts) */}
// // // // // // // //                 <div className="bg-blue-200 p-6 rounded-lg shadow-md relative">
// // // // // // // //                     <h3 className="text-lg font-semibold mb-4">Counter Name (For Receipts)</h3>
// // // // // // // //                     <button className="absolute top-0 right-0 p-2" onClick={handleAddCounter}>
// // // // // // // //                         <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
// // // // // // // //                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
// // // // // // // //                         </svg>
// // // // // // // //                     </button>
// // // // // // // //                     {showAddCounterForm && (
// // // // // // // //                         <div className="mt-4">
// // // // // // // //                             <input
// // // // // // // //                                 type="text"
// // // // // // // //                                 value={counterName}
// // // // // // // //                                 onChange={(e) => setCounterName(e.target.value)}
// // // // // // // //                                 placeholder="Enter counter name"
// // // // // // // //                                 className="border p-2 rounded-md w-full"
// // // // // // // //                             />
// // // // // // // //                             <div className="mt-2 flex justify-end">
// // // // // // // //                                 <button type="button" className="bg-blue-500 text-white px-4 py-2 rounded-md mr-2" onClick={handleSaveCounter}>Save</button>
// // // // // // // //                                 <button type="button" className="bg-gray-500 text-white px-4 py-2 rounded-md" onClick={handleCancelAddCounter}>Cancel</button>
// // // // // // // //                             </div>
// // // // // // // //                         </div>
// // // // // // // //                     )}
// // // // // // // //                     <ul>
// // // // // // // //                         {counterNames.map((name, index) => (
// // // // // // // //                             <li key={index}>{name}</li>
// // // // // // // //                         ))}
// // // // // // // //                     </ul>
// // // // // // // //                 </div>

// // // // // // // //                 {/* Second Box: Denominations */}
// // // // // // // //                 <div className="bg-yellow-200 p-6 rounded-lg shadow-md relative">
// // // // // // // //                     <h3 className="text-lg font-semibold mb-4">Denominations</h3>
// // // // // // // //                     {/* Button and content */}
// // // // // // // //                 </div>

// // // // // // // //                 {/* Third Box: Vendor Details */}
// // // // // // // //                 <div className="bg-green-200 p-6 rounded-lg shadow-md relative">
// // // // // // // //                     <h3 className="text-lg font-semibold mb-4">Vendor Details</h3>
// // // // // // // //                     {/* Button and content */}
// // // // // // // //                 </div>

// // // // // // // //                 {/* Fourth Box: Bank/Cheque Details */}
// // // // // // // //                 <div className="bg-gray-200 p-6 rounded-lg shadow-md relative">
// // // // // // // //                     <h3 className="text-lg font-semibold mb-4">Bank/Cheque Details</h3>
// // // // // // // //                     {/* Button and content */}
// // // // // // // //                 </div>
// // // // // // // //             </div>
// // // // // // // //         </div>
// // // // // // // //     );
// // // // // // // // };

// // // // // // // // export default Settings;
// // // // // // // import React, { useState, useEffect } from 'react';
// // // // // // // import axios from 'axios';

// // // // // // // const Settings = () => {
// // // // // // //     const [showAddCounterForm, setShowAddCounterForm] = useState(false);
// // // // // // //     const [counterName, setCounterName] = useState('');
// // // // // // //     const [counterNames, setCounterNames] = useState([]);
// // // // // // //     const [showAddDenominationForm, setShowAddDenominationForm] = useState(false);
// // // // // // //     const [denomination, setDenomination] = useState('');
// // // // // // //     const [denominations, setDenominations] = useState([]);

// // // // // // //     // Function to save counter name to the backend
// // // // // // //     const saveCounterName = async (counterName) => {
// // // // // // //         try {
// // // // // // //             const response = await axios.post('http://localhost:5000/api/counter', { counterName });
// // // // // // //             console.log('Counter saved:', response.data);
// // // // // // //             // Fetch the updated counter names after saving
// // // // // // //             fetchCounterNames();
// // // // // // //         } catch (error) {
// // // // // // //             console.error('Error saving counter name:', error);
// // // // // // //         }
// // // // // // //     };

// // // // // // //     // Function to fetch counter names from the backend
// // // // // // //     const fetchCounterNames = async () => {
// // // // // // //         try {
// // // // // // //             const response = await axios.get('http://localhost:5000/api/counter');
// // // // // // //             setCounterNames(response.data);
// // // // // // //         } catch (error) {
// // // // // // //             console.error('Error fetching counter names:', error);
// // // // // // //         }
// // // // // // //     };

// // // // // // //     // Function to save denomination to the backend
// // // // // // //     const saveDenomination = async (denominationName) => {
// // // // // // //         try {
// // // // // // //             const response = await axios.post('http://localhost:5000/api/denomination', { name: denominationName });
// // // // // // //             console.log('Denomination saved:', response.data);
// // // // // // //             // Fetch the updated denominations after saving
// // // // // // //             fetchDenominations();
// // // // // // //         } catch (error) {
// // // // // // //             console.error('Error saving denomination:', error);
// // // // // // //         }
// // // // // // //     };


// // // // // // //     // Function to fetch denominations from the backend
// // // // // // //     const fetchDenominations = async () => {
// // // // // // //         try {
// // // // // // //             const response = await axios.get('http://localhost:5000/api/denomination');
// // // // // // //             setDenominations(response.data);
// // // // // // //         } catch (error) {
// // // // // // //             console.error('Error fetching denominations:', error);
// // // // // // //         }
// // // // // // //     };

// // // // // // //     // Function to handle adding a new counter
// // // // // // //     const handleAddCounter = () => {
// // // // // // //         setShowAddCounterForm(true);
// // // // // // //     };

// // // // // // //     // Function to handle saving a counter
// // // // // // //     const handleSaveCounter = () => {
// // // // // // //         saveCounterName(counterName);
// // // // // // //         setShowAddCounterForm(false);
// // // // // // //         setCounterName('');
// // // // // // //     };

// // // // // // //     // Function to handle cancelling adding a counter
// // // // // // //     const handleCancelAddCounter = () => {
// // // // // // //         setShowAddCounterForm(false);
// // // // // // //         setCounterName('');
// // // // // // //     };



// // // // // // //     // Function to handle adding a new denomination
// // // // // // //     const handleAddDenomination = () => {
// // // // // // //         setShowAddDenominationForm(true);
// // // // // // //     };

// // // // // // //     // Function to handle saving a denomination
// // // // // // //     const handleSaveDenomination = () => {
// // // // // // //         saveDenomination(denomination);
// // // // // // //         setShowAddDenominationForm(false);
// // // // // // //         setDenomination('');
// // // // // // //     };

// // // // // // //     // Function to handle cancelling adding a denomination
// // // // // // //     const handleCancelAddDenomination = () => {
// // // // // // //         setShowAddDenominationForm(false);
// // // // // // //         setDenomination('');
// // // // // // //     };

// // // // // // //     // Fetch counter names on component mount
// // // // // // //     useEffect(() => {
// // // // // // //         fetchCounterNames();
// // // // // // //         fetchDenominations();
// // // // // // //     }, []);



// // // // // // //     return (
// // // // // // //         <div className="p-4">
// // // // // // //             <h2 className="text-2xl font-bold mb-4">Settings</h2>
// // // // // // //             <div className="grid grid-cols-2 gap-4">
// // // // // // //                 {/* First Box: Counter Name (For Receipts) */}
// // // // // // //                 <div className="bg-blue-200 p-6 rounded-lg shadow-md relative">
// // // // // // //                     <h3 className="text-lg font-semibold mb-4">Counter Name (For Receipts)</h3>
// // // // // // //                     <button className="absolute top-0 right-0 p-2" onClick={handleAddCounter}>
// // // // // // //                         <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
// // // // // // //                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
// // // // // // //                         </svg>
// // // // // // //                     </button>
// // // // // // //                     {showAddCounterForm && (
// // // // // // //                         <div className="mt-4">
// // // // // // //                             <input
// // // // // // //                                 type="text"
// // // // // // //                                 value={counterName}
// // // // // // //                                 onChange={(e) => setCounterName(e.target.value)}
// // // // // // //                                 placeholder="Enter counter name"
// // // // // // //                                 className="border p-2 rounded-md w-full"
// // // // // // //                             />
// // // // // // //                             <div className="mt-2 flex justify-end">
// // // // // // //                                 <button type="button" className="bg-blue-500 text-white px-4 py-2 rounded-md mr-2" onClick={handleSaveCounter}>Save</button>
// // // // // // //                                 <button type="button" className="bg-gray-500 text-white px-4 py-2 rounded-md" onClick={handleCancelAddCounter}>Cancel</button>
// // // // // // //                             </div>
// // // // // // //                         </div>
// // // // // // //                     )}
// // // // // // //                     <ul>
// // // // // // //                         {counterNames.map((name, index) => (
// // // // // // //                             <li key={index}>{name}</li>
// // // // // // //                         ))}
// // // // // // //                     </ul>
// // // // // // //                 </div>

// // // // // // //                 {/* Second Box: Denominations */}
// // // // // // //                 <div className="bg-yellow-200 p-6 rounded-lg shadow-md relative">
// // // // // // //                     <h3 className="text-lg font-semibold mb-4">Denominations</h3>
// // // // // // //                     <button className="absolute top-0 right-0 p-2" onClick={handleAddDenomination}>
// // // // // // //                         <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
// // // // // // //                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
// // // // // // //                         </svg>
// // // // // // //                     </button>
// // // // // // //                     {showAddDenominationForm && (
// // // // // // //                         <div className="mt-4">
// // // // // // //                             <input
// // // // // // //                                 type="text"
// // // // // // //                                 value={denomination}
// // // // // // //                                 onChange={(e) => setDenomination(e.target.value)}
// // // // // // //                                 placeholder="Enter denomination details"
// // // // // // //                                 className="border p-2 rounded-md w-full"
// // // // // // //                             />
// // // // // // //                             <div className="mt-2 flex justify-end">
// // // // // // //                                 <button type="button" className="bg-blue-500 text-white px-4 py-2 rounded-md mr-2" onClick={handleSaveDenomination}>Save</button>
// // // // // // //                                 <button type="button" className="bg-gray-500 text-white px-4 py-2 rounded-md" onClick={handleCancelAddDenomination}>Cancel</button>
// // // // // // //                             </div>
// // // // // // //                         </div>
// // // // // // //                     )}
// // // // // // //                     <ul>
// // // // // // //                         {denominations.map((denomination, index) => (
// // // // // // //                             <li key={index}>{denomination}</li>
// // // // // // //                         ))}
// // // // // // //                     </ul>
// // // // // // //                 </div>

// // // // // // //                 {/* Third Box: Vendor Details */}
// // // // // // //                 <div className="bg-green-200 p-6 rounded-lg shadow-md relative">
// // // // // // //                     <h3 className="text-lg font-semibold mb-4">Vendor Details</h3>
// // // // // // //                     {/* Button and content */}
// // // // // // //                 </div>

// // // // // // //                 {/* Fourth Box: Bank/Cheque Details */}
// // // // // // //                 <div className="bg-gray-200 p-6 rounded-lg shadow-md relative">
// // // // // // //                     <h3 className="text-lg font-semibold mb-4">Bank/Cheque Details</h3>
// // // // // // //                     {/* Button and content */}
// // // // // // //                 </div>
// // // // // // //             </div>
// // // // // // //         </div>
// // // // // // //     );
// // // // // // // };

// // // // // // // export default Settings;



// // // // // // import React, { useState, useEffect } from 'react';
// // // // // // import axios from 'axios';

// // // // // // const Settings = () => {
// // // // // //     const [showAddCounterForm, setShowAddCounterForm] = useState(false);
// // // // // //     const [counterName, setCounterName] = useState('');
// // // // // //     const [counterNames, setCounterNames] = useState([]);
// // // // // //     const [showAddDenominationForm, setShowAddDenominationForm] = useState(false);
// // // // // //     const [denomination, setDenomination] = useState('');
// // // // // //     const [denominations, setDenominations] = useState([]);
// // // // // //     const [showAddBankChequeForm, setShowAddBankChequeForm] = useState(false);
// // // // // //     const [bankCheque, setBankCheque] = useState({
// // // // // //         type: 'bank',
// // // // // //         bankName: '',
// // // // // //         accountNumber: '',
// // // // // //         ifscCode: '',
// // // // // //         branchName: '',
// // // // // //         chequeNumber: ''
// // // // // //     });
// // // // // //     const [bankChequeDetails, setBankChequeDetails] = useState([]);
// // // // // //     const [showAddVendorForm, setShowAddVendorForm] = useState(false);
// // // // // //     const [vendor, setVendor] = useState({
// // // // // //         vendorName: '',
// // // // // //         businessName: '',
// // // // // //         phone: '',
// // // // // //         email: '',
// // // // // //         address: '',
// // // // // //         panNo: '',
// // // // // //         gstNo: ''
// // // // // //     });
// // // // // //     const [vendorDetails, setVendorDetails] = useState([]);

// // // // // //     // Function to save counter name to the backend
// // // // // //     const saveCounterName = async (counterName) => {
// // // // // //         try {
// // // // // //             const response = await axios.post('http://localhost:5000/api/counter', { counterName });
// // // // // //             console.log('Counter saved:', response.data);
// // // // // //             // Fetch the updated counter names after saving
// // // // // //             fetchCounterNames();
// // // // // //         } catch (error) {
// // // // // //             console.error('Error saving counter name:', error);
// // // // // //         }
// // // // // //     };

// // // // // //     // Function to fetch counter names from the backend
// // // // // //     const fetchCounterNames = async () => {
// // // // // //         try {
// // // // // //             const response = await axios.get('http://localhost:5000/api/counter');
// // // // // //             setCounterNames(response.data);
// // // // // //         } catch (error) {
// // // // // //             console.error('Error fetching counter names:', error);
// // // // // //         }
// // // // // //     };

// // // // // //     // Function to save denomination to the backend
// // // // // //     const saveDenomination = async (denominationName) => {
// // // // // //         try {
// // // // // //             const response = await axios.post('http://localhost:5000/api/denomination', { name: denominationName });
// // // // // //             console.log('Denomination saved:', response.data);
// // // // // //             // Fetch the updated denominations after saving
// // // // // //             fetchDenominations();
// // // // // //         } catch (error) {
// // // // // //             console.error('Error saving denomination:', error);
// // // // // //         }
// // // // // //     };

// // // // // //     // Function to fetch denominations from the backend
// // // // // //     const fetchDenominations = async () => {
// // // // // //         try {
// // // // // //             const response = await axios.get('http://localhost:5000/api/denomination');
// // // // // //             setDenominations(response.data);
// // // // // //         } catch (error) {
// // // // // //             console.error('Error fetching denominations:', error);
// // // // // //         }
// // // // // //     };

// // // // // //     // Function to save bank/cheque details to the backend
// // // // // //     const saveBankChequeDetails = async () => {
// // // // // //         try {
// // // // // //             const response = await axios.post('http://localhost:5000/api/bankcheque', bankCheque);
// // // // // //             console.log('Bank/Cheque details saved:', response.data);
// // // // // //             // Fetch the updated bank/cheque details after saving
// // // // // //             fetchBankChequeDetails();
// // // // // //         } catch (error) {
// // // // // //             console.error('Error saving bank/cheque details:', error);
// // // // // //         }
// // // // // //     };

// // // // // //     // Function to fetch bank/cheque details from the backend
// // // // // //     const fetchBankChequeDetails = async () => {
// // // // // //         try {
// // // // // //             const response = await axios.get('http://localhost:5000/api/bankcheque');
// // // // // //             setBankChequeDetails(response.data);
// // // // // //         } catch (error) {
// // // // // //             console.error('Error fetching bank/cheque details:', error);
// // // // // //         }
// // // // // //     };

// // // // // //     // Function to save vendor details to the backend
// // // // // //     const saveVendorDetails = async () => {
// // // // // //         try {
// // // // // //             const response = await axios.post('http://localhost:5000/api/vendor', vendor);
// // // // // //             console.log('Vendor details saved:', response.data);
// // // // // //             // Fetch the updated vendor details after saving
// // // // // //             fetchVendorDetails();
// // // // // //         } catch (error) {
// // // // // //             console.error('Error saving vendor details:', error);
// // // // // //         }
// // // // // //     };

// // // // // //     // Function to fetch vendor details from the backend
// // // // // //     const fetchVendorDetails = async () => {
// // // // // //         try {
// // // // // //             const response = await axios.get('http://localhost:5000/api/vendor');
// // // // // //             setVendorDetails(response.data);
// // // // // //         } catch (error) {
// // // // // //             console.error('Error fetching vendor details:', error);
// // // // // //         }
// // // // // //     };

// // // // // //     // Function to handle adding a new counter
// // // // // //     const handleAddCounter = () => {
// // // // // //         setShowAddCounterForm(true);
// // // // // //     };

// // // // // //     // Function to handle saving a counter
// // // // // //     const handleSaveCounter = () => {
// // // // // //         saveCounterName(counterName);
// // // // // //         setShowAddCounterForm(false);
// // // // // //         setCounterName('');
// // // // // //     };

// // // // // //     // Function to handle cancelling adding a counter
// // // // // //     const handleCancelAddCounter = () => {
// // // // // //         setShowAddCounterForm(false);
// // // // // //         setCounterName('');
// // // // // //     };

// // // // // //     // Function to handle adding a new denomination
// // // // // //     const handleAddDenomination = () => {
// // // // // //         setShowAddDenominationForm(true);
// // // // // //     };

// // // // // //     // Function to handle saving a denomination
// // // // // //     const handleSaveDenomination = () => {
// // // // // //         saveDenomination(denomination);
// // // // // //         setShowAddDenominationForm(false);
// // // // // //         setDenomination('');
// // // // // //     };

// // // // // //     // Function to handle cancelling adding a denomination
// // // // // //     const handleCancelAddDenomination = () => {
// // // // // //         setShowAddDenominationForm(false);
// // // // // //         setDenomination('');
// // // // // //     };

// // // // // //     // Function to handle adding a new bank/cheque detail
// // // // // //     const handleAddBankCheque = () => {
// // // // // //         setShowAddBankChequeForm(true);
// // // // // //     };

// // // // // //     // Function to handle saving a bank/cheque detail
// // // // // //     const handleSaveBankCheque = () => {
// // // // // //         saveBankChequeDetails();
// // // // // //         setShowAddBankChequeForm(false);
// // // // // //         setBankCheque({
// // // // // //             type: 'bank',
// // // // // //             bankName: '',
// // // // // //             accountNumber: '',
// // // // // //             ifscCode: '',
// // // // // //             branchName: '',
// // // // // //             chequeNumber: ''
// // // // // //         });
// // // // // //     };

// // // // // //     // Function to handle cancelling adding a bank/cheque detail
// // // // // //     const handleCancelAddBankCheque = () => {
// // // // // //         setShowAddBankChequeForm(false);
// // // // // //         setBankCheque({
// // // // // //             type: 'bank',
// // // // // //             bankName: '',
// // // // // //             accountNumber: '',
// // // // // //             ifscCode: '',
// // // // // //             branchName: '',
// // // // // //             chequeNumber: ''
// // // // // //         });
// // // // // //     };

// // // // // //     // Function to handle adding a new vendor detail
// // // // // //     const handleAddVendor = () => {
// // // // // //         setShowAddVendorForm(true);
// // // // // //     };

// // // // // //     // Function to handle saving a vendor detail
// // // // // //     const handleSaveVendor = () => {
// // // // // //         saveVendorDetails();
// // // // // //         setShowAddVendorForm(false);
// // // // // //         setVendor({
// // // // // //             vendorName: '',
// // // // // //             businessName: '',
// // // // // //             phone: '',
// // // // // //             email: '',
// // // // // //             address: '',
// // // // // //             panNo: '',
// // // // // //             gstNo: ''
// // // // // //         });
// // // // // //     };

// // // // // //     // Function to handle cancelling adding a vendor detail
// // // // // //     const handleCancelAddVendor = () => {
// // // // // //         setShowAddVendorForm(false);
// // // // // //         setVendor({
// // // // // //             vendorName: '',
// // // // // //             businessName: '',
// // // // // //             phone: '',
// // // // // //             email: '',
// // // // // //             address: '',
// // // // // //             panNo: '',
// // // // // //             gstNo: ''
// // // // // //         });
// // // // // //     };

// // // // // //     // Fetch counter names on component mount
// // // // // //     useEffect(() => {
// // // // // //         fetchCounterNames();
// // // // // //         fetchDenominations();
// // // // // //         fetchBankChequeDetails();
// // // // // //         fetchVendorDetails();
// // // // // //     }, []);

// // // // // //     return (
// // // // // //         <div className="p-4">
// // // // // //             <h2 className="text-2xl font-bold mb-4">Settings</h2>
// // // // // //             <div className="grid grid-cols-2 gap-4">
// // // // // //                 {/* First Box: Counter Name (For Receipts) */}
// // // // // //                 <div className="bg-blue-200 p-6 rounded-lg shadow-md relative">
// // // // // //                     <h3 className="text-lg font-semibold mb-4">Counter Name (For Receipts)</h3>
// // // // // //                     <button className="absolute top-0 right-0 p-2" onClick={handleAddCounter}>
// // // // // //                         <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
// // // // // //                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
// // // // // //                         </svg>
// // // // // //                     </button>
// // // // // //                     {showAddCounterForm && (
// // // // // //                         <div className="mt-4">
// // // // // //                             <input
// // // // // //                                 type="text"
// // // // // //                                 value={counterName}
// // // // // //                                 onChange={(e) => setCounterName(e.target.value)}
// // // // // //                                 placeholder="Enter counter name"
// // // // // //                                 className="border p-2 rounded-md w-full"
// // // // // //                             />
// // // // // //                             <div className="mt-2 flex justify-end">
// // // // // //                                 <button type="button" className="bg-blue-500 text-white px-4 py-2 rounded-md mr-2" onClick={handleSaveCounter}>Save</button>
// // // // // //                                 <button type="button" className="bg-gray-500 text-white px-4 py-2 rounded-md" onClick={handleCancelAddCounter}>Cancel</button>
// // // // // //                             </div>
// // // // // //                         </div>
// // // // // //                     )}
// // // // // //                     <ul>
// // // // // //                         {counterNames.map((name, index) => (
// // // // // //                             <li key={index}>{name}</li>
// // // // // //                         ))}
// // // // // //                     </ul>
// // // // // //                 </div>

// // // // // //                 {/* Second Box: Denominations */}
// // // // // //                 <div className="bg-yellow-200 p-6 rounded-lg shadow-md relative">
// // // // // //                     <h3 className="text-lg font-semibold mb-4">Denominations</h3>
// // // // // //                     <button className="absolute top-0 right-0 p-2" onClick={handleAddDenomination}>
// // // // // //                         <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
// // // // // //                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
// // // // // //                         </svg>
// // // // // //                     </button>
// // // // // //                     {showAddDenominationForm && (
// // // // // //                         <div className="mt-4">
// // // // // //                             <input
// // // // // //                                 type="text"
// // // // // //                                 value={denomination}
// // // // // //                                 onChange={(e) => setDenomination(e.target.value)}
// // // // // //                                 placeholder="Enter denomination details"
// // // // // //                                 className="border p-2 rounded-md w-full"
// // // // // //                             />
// // // // // //                             <div className="mt-2 flex justify-end">
// // // // // //                                 <button type="button" className="bg-blue-500 text-white px-4 py-2 rounded-md mr-2" onClick={handleSaveDenomination}>Save</button>
// // // // // //                                 <button type="button" className="bg-gray-500 text-white px-4 py-2 rounded-md" onClick={handleCancelAddDenomination}>Cancel</button>
// // // // // //                             </div>
// // // // // //                         </div>
// // // // // //                     )}
// // // // // //                     <ul>
// // // // // //                         {denominations.map((denomination, index) => (
// // // // // //                             <li key={index}>{denomination}</li>
// // // // // //                         ))}
// // // // // //                     </ul>
// // // // // //                 </div>

// // // // // //                 {/* Third Box: Vendor Details */}
// // // // // //                 <div className="bg-green-200 p-6 rounded-lg shadow-md relative">
// // // // // //                     <h3 className="text-lg font-semibold mb-4">Vendor Details</h3>
// // // // // //                     <button className="absolute top-0 right-0 p-2" onClick={handleAddVendor}>
// // // // // //                         <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
// // // // // //                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
// // // // // //                         </svg>
// // // // // //                     </button>
// // // // // //                     {showAddVendorForm && (
// // // // // //                         <div className="mt-4">
// // // // // //                             <input
// // // // // //                                 type="text"
// // // // // //                                 value={vendor.vendorName}
// // // // // //                                 onChange={(e) => setVendor({ ...vendor, vendorName: e.target.value })}
// // // // // //                                 placeholder="Enter vendor name"
// // // // // //                                 className="border p-2 rounded-md mb-2 w-full"
// // // // // //                             />
// // // // // //                             <input
// // // // // //                                 type="text"
// // // // // //                                 value={vendor.businessName}
// // // // // //                                 onChange={(e) => setVendor({ ...vendor, businessName: e.target.value })}
// // // // // //                                 placeholder="Enter business name"
// // // // // //                                 className="border p-2 rounded-md mb-2 w-full"
// // // // // //                             />
// // // // // //                             <input
// // // // // //                                 type="tel"
// // // // // //                                 value={vendor.phone}
// // // // // //                                 onChange={(e) => setVendor({ ...vendor, phone: e.target.value })}
// // // // // //                                 placeholder="Enter phone"
// // // // // //                                 className="border p-2 rounded-md mb-2 w-full"
// // // // // //                             />
// // // // // //                             <input
// // // // // //                                 type="email"
// // // // // //                                 value={vendor.email}
// // // // // //                                 onChange={(e) => setVendor({ ...vendor, email: e.target.value })}
// // // // // //                                 placeholder="Enter email"
// // // // // //                                 className="border p-2 rounded-md mb-2 w-full"
// // // // // //                             />
// // // // // //                             <input
// // // // // //                                 type="text"
// // // // // //                                 value={vendor.address}
// // // // // //                                 onChange={(e) => setVendor({ ...vendor, address: e.target.value })}
// // // // // //                                 placeholder="Enter address"
// // // // // //                                 className="border p-2 rounded-md mb-2 w-full"
// // // // // //                             />
// // // // // //                             <input
// // // // // //                                 type="text"
// // // // // //                                 value={vendor.panNo}
// // // // // //                                 onChange={(e) => setVendor({ ...vendor, panNo: e.target.value })}
// // // // // //                                 placeholder="Enter PAN number"
// // // // // //                                 className="border p-2 rounded-md mb-2 w-full"
// // // // // //                             />
// // // // // //                             <input
// // // // // //                                 type="text"
// // // // // //                                 value={vendor.gstNo}
// // // // // //                                 onChange={(e) => setVendor({ ...vendor, gstNo: e.target.value })}
// // // // // //                                 placeholder="Enter GST number"
// // // // // //                                 className="border p-2 rounded-md mb-2 w-full"
// // // // // //                             />
// // // // // //                             <div className="mt-2 flex justify-end">
// // // // // //                                 <button type="button" className="bg-blue-500 text-white px-4 py-2 rounded-md mr-2" onClick={handleSaveVendor}>Save</button>
// // // // // //                                 <button type="button" className="bg-gray-500 text-white px-4 py-2 rounded-md" onClick={handleCancelAddVendor}>Cancel</button>
// // // // // //                             </div>
// // // // // //                         </div>
// // // // // //                     )}
// // // // // //                     <ul>
// // // // // //                         {vendorDetails.map((vendor, index) => (
// // // // // //                             <li key={index}>{vendor.vendorName} - {vendor.phone}</li>
// // // // // //                         ))}
// // // // // //                     </ul>
// // // // // //                 </div>

// // // // // //                 {/* Fourth Box: Bank/Cheque Details */}
// // // // // //                 <div className="bg-gray-200 p-6 rounded-lg shadow-md relative">
// // // // // //                     <h3 className="text-lg font-semibold mb-4">Bank/Cheque Details</h3>
// // // // // //                     <button className="absolute top-0 right-0 p-2" onClick={handleAddBankCheque}>
// // // // // //                         <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
// // // // // //                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
// // // // // //                         </svg>
// // // // // //                     </button>
// // // // // //                     {showAddBankChequeForm && (
// // // // // //                         <div className="mt-4">
// // // // // //                             <input
// // // // // //                                 type="text"
// // // // // //                                 value={bankCheque.bankName}
// // // // // //                                 onChange={(e) => setBankCheque({ ...bankCheque, bankName: e.target.value })}
// // // // // //                                 placeholder="Enter bank name"
// // // // // //                                 className="border p-2 rounded-md mb-2 w-full"
// // // // // //                             />
// // // // // //                             <input
// // // // // //                                 type="text"
// // // // // //                                 value={bankCheque.accountNumber}
// // // // // //                                 onChange={(e) => setBankCheque({ ...bankCheque, accountNumber: e.target.value })}
// // // // // //                                 placeholder="Enter account number"
// // // // // //                                 className="border p-2 rounded-md mb-2 w-full"
// // // // // //                             />
// // // // // //                             <input
// // // // // //                                 type="text"
// // // // // //                                 value={bankCheque.ifscCode}
// // // // // //                                 onChange={(e) => setBankCheque({ ...bankCheque, ifscCode: e.target.value })}
// // // // // //                                 placeholder="Enter IFSC code"
// // // // // //                                 className="border p-2 rounded-md mb-2 w-full"
// // // // // //                             />
// // // // // //                             <input
// // // // // //                                 type="text"
// // // // // //                                 value={bankCheque.branchName}
// // // // // //                                 onChange={(e) => setBankCheque({ ...bankCheque, branchName: e.target.value })}
// // // // // //                                 placeholder="Enter branch name"
// // // // // //                                 className="border p-2 rounded-md mb-2 w-full"
// // // // // //                             />
// // // // // //                             <input
// // // // // //                                 type="text"
// // // // // //                                 value={bankCheque.chequeNumber}
// // // // // //                                 onChange={(e) => setBankCheque({ ...bankCheque, chequeNumber: e.target.value })}
// // // // // //                                 placeholder="Enter cheque number"
// // // // // //                                 className="border p-2 rounded-md mb-2 w-full"
// // // // // //                             />
// // // // // //                             <div className="mt-2 flex justify-end">
// // // // // //                                 <button type="button" className="bg-blue-500 text-white px-4 py-2 rounded-md mr-2" onClick={handleSaveBankCheque}>Save</button>
// // // // // //                                 <button type="button" className="bg-gray-500 text-white px-4 py-2 rounded-md" onClick={handleCancelAddBankCheque}>Cancel</button>
// // // // // //                             </div>
// // // // // //                         </div>
// // // // // //                     )}
// // // // // //                     <ul>
// // // // // //                         {bankChequeDetails.map((bankCheque, index) => (
// // // // // //                             <li key={index}>{bankCheque.bankName} - {bankCheque.accountNumber}</li>
// // // // // //                         ))}
// // // // // //                     </ul>
// // // // // //                 </div>
// // // // // //             </div>
// // // // // //         </div>
// // // // // //     );
// // // // // // };

// // // // // // export default Settings;
// // // // // import React, { useState, useEffect } from 'react';
// // // // // import axios from 'axios';

// // // // // const Settings = () => {
// // // // //     const [showAddCounterForm, setShowAddCounterForm] = useState(false);
// // // // //     const [counterName, setCounterName] = useState('');
// // // // //     const [counterNames, setCounterNames] = useState([]);
// // // // //     const [showAddDenominationForm, setShowAddDenominationForm] = useState(false);
// // // // //     const [denomination, setDenomination] = useState('');
// // // // //     const [denominations, setDenominations] = useState([]);
// // // // //     const [showAddBankChequeForm, setShowAddBankChequeForm] = useState(false);
// // // // //     const [bankCheque, setBankCheque] = useState({
// // // // //         type: 'bank',
// // // // //         bankName: '',
// // // // //         accountNumber: '',
// // // // //         ifscCode: '',
// // // // //         branchName: '',
// // // // //         chequeNumber: ''
// // // // //     });
// // // // //     const [bankChequeDetails, setBankChequeDetails] = useState([]);
// // // // //     const [showAddVendorForm, setShowAddVendorForm] = useState(false);
// // // // //     const [vendor, setVendor] = useState({
// // // // //         vendorName: '',
// // // // //         businessName: '',
// // // // //         phone: '',
// // // // //         email: '',
// // // // //         address: '',
// // // // //         panNo: '',
// // // // //         gstNo: ''
// // // // //     });
// // // // //     const [vendorDetails, setVendorDetails] = useState([]);

// // // // //     // Function to save counter name to the backend
// // // // //     const saveCounterName = async (counterName) => {
// // // // //         try {
// // // // //             const response = await axios.post('http://localhost:5000/api/counter', { counterName });
// // // // //             console.log('Counter saved:', response.data);
// // // // //             // Fetch the updated counter names after saving
// // // // //             fetchCounterNames();
// // // // //         } catch (error) {
// // // // //             console.error('Error saving counter name:', error);
// // // // //         }
// // // // //     };

// // // // //     // Function to fetch counter names from the backend
// // // // //     const fetchCounterNames = async () => {
// // // // //         try {
// // // // //             const response = await axios.get('http://localhost:5000/api/counter');
// // // // //             setCounterNames(response.data);
// // // // //         } catch (error) {
// // // // //             console.error('Error fetching counter names:', error);
// // // // //         }
// // // // //     };

// // // // //     // Function to save denomination to the backend
// // // // //     const saveDenomination = async (denominationName) => {
// // // // //         try {
// // // // //             const response = await axios.post('http://localhost:5000/api/denomination', { name: denominationName });
// // // // //             console.log('Denomination saved:', response.data);
// // // // //             // Fetch the updated denominations after saving
// // // // //             fetchDenominations();
// // // // //         } catch (error) {
// // // // //             console.error('Error saving denomination:', error);
// // // // //         }
// // // // //     };

// // // // //     // Function to fetch denominations from the backend
// // // // //     const fetchDenominations = async () => {
// // // // //         try {
// // // // //             const response = await axios.get('http://localhost:5000/api/denomination');
// // // // //             setDenominations(response.data);
// // // // //         } catch (error) {
// // // // //             console.error('Error fetching denominations:', error);
// // // // //         }
// // // // //     };

// // // // //     // Function to save bank/cheque details to the backend
// // // // //     const saveBankChequeDetails = async () => {
// // // // //         try {
// // // // //             const response = await axios.post('http://localhost:5000/api/bankcheque', bankCheque);
// // // // //             console.log('Bank/Cheque details saved:', response.data);
// // // // //             // Fetch the updated bank/cheque details after saving
// // // // //             fetchBankChequeDetails();
// // // // //         } catch (error) {
// // // // //             console.error('Error saving bank/cheque details:', error);
// // // // //         }
// // // // //     };

// // // // //     // Function to fetch bank/cheque details from the backend
// // // // //     const fetchBankChequeDetails = async () => {
// // // // //         try {
// // // // //             const response = await axios.get('http://localhost:5000/api/bankcheque');
// // // // //             setBankChequeDetails(response.data);
// // // // //         } catch (error) {
// // // // //             console.error('Error fetching bank/cheque details:', error);
// // // // //         }
// // // // //     };

// // // // //     // Function to save vendor details to the backend
// // // // //     const saveVendorDetails = async () => {
// // // // //         try {
// // // // //             const response = await axios.post('http://localhost:5000/api/vendor', vendor);
// // // // //             console.log('Vendor details saved:', response.data);
// // // // //             // Fetch the updated vendor details after saving
// // // // //             fetchVendorDetails();
// // // // //         } catch (error) {
// // // // //             console.error('Error saving vendor details:', error);
// // // // //         }
// // // // //     };

// // // // //     // Function to fetch vendor details from the backend
// // // // //     const fetchVendorDetails = async () => {
// // // // //         try {
// // // // //             const response = await axios.get('http://localhost:5000/api/vendor');
// // // // //             setVendorDetails(response.data);
// // // // //         } catch (error) {
// // // // //             console.error('Error fetching vendor details:', error);
// // // // //         }
// // // // //     };

// // // // //     // Function to handle adding a new counter
// // // // //     const handleAddCounter = () => {
// // // // //         setShowAddCounterForm(true);
// // // // //     };

// // // // //     // Function to handle saving a counter
// // // // //     const handleSaveCounter = () => {
// // // // //         saveCounterName(counterName);
// // // // //         setShowAddCounterForm(false);
// // // // //         setCounterName('');
// // // // //     };

// // // // //     // Function to handle cancelling adding a counter
// // // // //     const handleCancelAddCounter = () => {
// // // // //         setShowAddCounterForm(false);
// // // // //         setCounterName('');
// // // // //     };

// // // // //     // Function to handle adding a new denomination
// // // // //     const handleAddDenomination = () => {
// // // // //         setShowAddDenominationForm(true);
// // // // //     };

// // // // //     // Function to handle saving a denomination
// // // // //     const handleSaveDenomination = () => {
// // // // //         saveDenomination(denomination);
// // // // //         setShowAddDenominationForm(false);
// // // // //         setDenomination('');
// // // // //     };

// // // // //     // Function to handle cancelling adding a denomination
// // // // //     const handleCancelAddDenomination = () => {
// // // // //         setShowAddDenominationForm(false);
// // // // //         setDenomination('');
// // // // //     };

// // // // //     // Function to handle adding a new bank/cheque detail
// // // // //     const handleAddBankCheque = () => {
// // // // //         setShowAddBankChequeForm(true);
// // // // //     };

// // // // //     // Function to handle saving a bank/cheque detail
// // // // //     const handleSaveBankCheque = () => {
// // // // //         saveBankChequeDetails();
// // // // //         setShowAddBankChequeForm(false);
// // // // //         setBankCheque({
// // // // //             type: 'bank',
// // // // //             bankName: '',
// // // // //             accountNumber: '',
// // // // //             ifscCode: '',
// // // // //             branchName: '',
// // // // //             chequeNumber: ''
// // // // //         });
// // // // //     };

// // // // //     // Function to handle cancelling adding a bank/cheque detail
// // // // //     const handleCancelAddBankCheque = () => {
// // // // //         setShowAddBankChequeForm(false);
// // // // //         setBankCheque({
// // // // //             type: 'bank',
// // // // //             bankName: '',
// // // // //             accountNumber: '',
// // // // //             ifscCode: '',
// // // // //             branchName: '',
// // // // //             chequeNumber: ''
// // // // //         });
// // // // //     };

// // // // //     // Function to handle adding a new vendor detail
// // // // //     const handleAddVendor = () => {
// // // // //         setShowAddVendorForm(true);
// // // // //     };

// // // // //     // Function to handle saving a vendor detail
// // // // //     const handleSaveVendor = () => {
// // // // //         saveVendorDetails();
// // // // //         setShowAddVendorForm(false);
// // // // //         setVendor({
// // // // //             vendorName: '',
// // // // //             businessName: '',
// // // // //             phone: '',
// // // // //             email: '',
// // // // //             address: '',
// // // // //             panNo: '',
// // // // //             gstNo: ''
// // // // //         });
// // // // //     };

// // // // //     // Function to handle cancelling adding a vendor detail
// // // // //     const handleCancelAddVendor = () => {
// // // // //         setShowAddVendorForm(false);
// // // // //         setVendor({
// // // // //             vendorName: '',
// // // // //             businessName: '',
// // // // //             phone: '',
// // // // //             email: '',
// // // // //             address: '',
// // // // //             panNo: '',
// // // // //             gstNo: ''
// // // // //         });
// // // // //     };

// // // // //     // Fetch counter names on component mount
// // // // //     useEffect(() => {
// // // // //         fetchCounterNames();
// // // // //         fetchDenominations();
// // // // //         fetchBankChequeDetails();
// // // // //         fetchVendorDetails();
// // // // //     }, []);

// // // // //     return (
// // // // //         <div className="p-4">
// // // // //             <h2 className="text-2xl font-bold mb-4">Settings</h2>
// // // // //             <div className="grid grid-cols-2 gap-4">
// // // // //                 {/* First Box: Counter Name (For Receipts) */}
// // // // //                 <div className="bg-blue-200 p-6 rounded-lg shadow-md relative">
// // // // //                     <h3 className="text-lg font-semibold mb-4">Counter Name (For Receipts)</h3>
// // // // //                     <button className="absolute top-0 right-0 p-2" onClick={handleAddCounter}>
// // // // //                         <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
// // // // //                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
// // // // //                         </svg>
// // // // //                     </button>
// // // // //                     {showAddCounterForm && (
// // // // //                         <div className="mt-4">
// // // // //                             <input
// // // // //                                 type="text"
// // // // //                                 value={counterName}
// // // // //                                 onChange={(e) => setCounterName(e.target.value)}
// // // // //                                 placeholder="Enter counter name"
// // // // //                                 className="border p-2 rounded-md w-full"
// // // // //                             />
// // // // //                             <div className="mt-2 flex justify-end">
// // // // //                                 <button type="button" className="bg-blue-500 text-white px-4 py-2 rounded-md mr-2" onClick={handleSaveCounter}>Save</button>
// // // // //                                 <button type="button" className="bg-gray-500 text-white px-4 py-2 rounded-md" onClick={handleCancelAddCounter}>Cancel</button>
// // // // //                             </div>
// // // // //                         </div>
// // // // //                     )}
// // // // //                     <ul>
// // // // //                         {counterNames.map((name, index) => (
// // // // //                             <li key={index}>{name}</li>
// // // // //                         ))}
// // // // //                     </ul>
// // // // //                 </div>

// // // // //                 {/* Second Box: Denominations */}
// // // // //                 <div className="bg-yellow-200 p-6 rounded-lg shadow-md relative">
// // // // //                     <h3 className="text-lg font-semibold mb-4">Denominations</h3>
// // // // //                     <button className="absolute top-0 right-0 p-2" onClick={handleAddDenomination}>
// // // // //                         <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
// // // // //                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
// // // // //                         </svg>
// // // // //                     </button>
// // // // //                     {showAddDenominationForm && (
// // // // //                         <div className="mt-4">
// // // // //                             <input
// // // // //                                 type="text"
// // // // //                                 value={denomination}
// // // // //                                 onChange={(e) => setDenomination(e.target.value)}
// // // // //                                 placeholder="Enter denomination details"
// // // // //                                 className="border p-2 rounded-md w-full"
// // // // //                             />
// // // // //                             <div className="mt-2 flex justify-end">
// // // // //                                 <button type="button" className="bg-blue-500 text-white px-4 py-2 rounded-md mr-2" onClick={handleSaveDenomination}>Save</button>
// // // // //                                 <button type="button" className="bg-gray-500 text-white px-4 py-2 rounded-md" onClick={handleCancelAddDenomination}>Cancel</button>
// // // // //                             </div>
// // // // //                         </div>
// // // // //                     )}
// // // // //                     <ul>
// // // // //                         {denominations.map((denomination, index) => (
// // // // //                             <li key={index}>{denomination}</li>
// // // // //                         ))}
// // // // //                     </ul>
// // // // //                 </div>

// // // // //                 {/* Third Box: Vendor Details */}
// // // // //                 <div className="bg-green-200 p-6 rounded-lg shadow-md relative">
// // // // //                     <h3 className="text-lg font-semibold mb-4">Vendor Details</h3>
// // // // //                     <button className="absolute top-0 right-0 p-2" onClick={handleAddVendor}>
// // // // //                         <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
// // // // //                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
// // // // //                         </svg>
// // // // //                     </button>
// // // // //                     {showAddVendorForm && (
// // // // //                         <div className="mt-4">
// // // // //                             <input
// // // // //                                 type="text"
// // // // //                                 value={vendor.vendorName}
// // // // //                                 onChange={(e) => setVendor({ ...vendor, vendorName: e.target.value })}
// // // // //                                 placeholder="Enter vendor name"
// // // // //                                 className="border p-2 rounded-md mb-2 w-full"
// // // // //                             />
// // // // //                             <input
// // // // //                                 type="text"
// // // // //                                 value={vendor.businessName}
// // // // //                                 onChange={(e) => setVendor({ ...vendor, businessName: e.target.value })}
// // // // //                                 placeholder="Enter business name"
// // // // //                                 className="border p-2 rounded-md mb-2 w-full"
// // // // //                             />
// // // // //                             <input
// // // // //                                 type="tel"
// // // // //                                 value={vendor.phone}
// // // // //                                 onChange={(e) => setVendor({ ...vendor, phone: e.target.value })}
// // // // //                                 placeholder="Enter phone"
// // // // //                                 className="border p-2 rounded-md mb-2 w-full"
// // // // //                             />
// // // // //                             <input
// // // // //                                 type="email"
// // // // //                                 value={vendor.email}
// // // // //                                 onChange={(e) => setVendor({ ...vendor, email: e.target.value })}
// // // // //                                 placeholder="Enter email"
// // // // //                                 className="border p-2 rounded-md mb-2 w-full"
// // // // //                             />
// // // // //                             <input
// // // // //                                 type="text"
// // // // //                                 value={vendor.address}
// // // // //                                 onChange={(e) => setVendor({ ...vendor, address: e.target.value })}
// // // // //                                 placeholder="Enter address"
// // // // //                                 className="border p-2 rounded-md mb-2 w-full"
// // // // //                             />
// // // // //                             <input
// // // // //                                 type="text"
// // // // //                                 value={vendor.panNo}
// // // // //                                 onChange={(e) => setVendor({ ...vendor, panNo: e.target.value })}
// // // // //                                 placeholder="Enter PAN number"
// // // // //                                 className="border p-2 rounded-md mb-2 w-full"
// // // // //                             />
// // // // //                             <input
// // // // //                                 type="text"
// // // // //                                 value={vendor.gstNo}
// // // // //                                 onChange={(e) => setVendor({ ...vendor, gstNo: e.target.value })}
// // // // //                                 placeholder="Enter GST number"
// // // // //                                 className="border p-2 rounded-md mb-2 w-full"
// // // // //                             />
// // // // //                             <div className="mt-2 flex justify-end">
// // // // //                                 <button type="button" className="bg-blue-500 text-white px-4 py-2 rounded-md mr-2" onClick={handleSaveVendor}>Save</button>
// // // // //                                 <button type="button" className="bg-gray-500 text-white px-4 py-2 rounded-md" onClick={handleCancelAddVendor}>Cancel</button>
// // // // //                             </div>
// // // // //                         </div>
// // // // //                     )}
// // // // //                     <ul>
// // // // //                         {vendorDetails.map((vendor, index) => (
// // // // //                             <li key={index}>{vendor.vendorName} - {vendor.phone}</li>
// // // // //                         ))}
// // // // //                     </ul>
// // // // //                 </div>

// // // // //                 {/* Fourth Box: Bank/Cheque Details */}
// // // // //                 <div className="bg-gray-200 p-6 rounded-lg shadow-md relative">
// // // // //                     <h3 className="text-lg font-semibold mb-4">Bank/Cheque Details</h3>
// // // // //                     <button className="absolute top-0 right-0 p-2" onClick={handleAddBankCheque}>
// // // // //                         <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
// // // // //                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
// // // // //                         </svg>
// // // // //                     </button>
// // // // //                     {showAddBankChequeForm && (
// // // // //                         <div className="mt-4">
// // // // //                             <div className="mb-2">
// // // // //                                 <label className="mr-4">
// // // // //                                     <input
// // // // //                                         type="radio"
// // // // //                                         name="type"
// // // // //                                         value="bank"
// // // // //                                         checked={bankCheque.type === 'bank'}
// // // // //                                         onChange={(e) => setBankCheque({ ...bankCheque, type: e.target.value })}
// // // // //                                     />
// // // // //                                     Bank
// // // // //                                 </label>
// // // // //                                 <label>
// // // // //                                     <input
// // // // //                                         type="radio"
// // // // //                                         name="type"
// // // // //                                         value="cheque"
// // // // //                                         checked={bankCheque.type === 'cheque'}
// // // // //                                         onChange={(e) => setBankCheque({ ...bankCheque, type: e.target.value })}
// // // // //                                     />
// // // // //                                     Cheque
// // // // //                                 </label>
// // // // //                             </div>
// // // // //                             <input
// // // // //                                 type="text"
// // // // //                                 value={bankCheque.bankName}
// // // // //                                 onChange={(e) => setBankCheque({ ...bankCheque, bankName: e.target.value })}
// // // // //                                 placeholder="Enter bank name"
// // // // //                                 className="border p-2 rounded-md mb-2 w-full"
// // // // //                             />
// // // // //                             <input
// // // // //                                 type="text"
// // // // //                                 value={bankCheque.accountNumber}
// // // // //                                 onChange={(e) => setBankCheque({ ...bankCheque, accountNumber: e.target.value })}
// // // // //                                 placeholder="Enter account number"
// // // // //                                 className="border p-2 rounded-md mb-2 w-full"
// // // // //                             />
// // // // //                             <input
// // // // //                                 type="text"
// // // // //                                 value={bankCheque.ifscCode}
// // // // //                                 onChange={(e) => setBankCheque({ ...bankCheque, ifscCode: e.target.value })}
// // // // //                                 placeholder="Enter IFSC code"
// // // // //                                 className="border p-2 rounded-md mb-2 w-full"
// // // // //                             />
// // // // //                             <input
// // // // //                                 type="text"
// // // // //                                 value={bankCheque.branchName}
// // // // //                                 onChange={(e) => setBankCheque({ ...bankCheque, branchName: e.target.value })}
// // // // //                                 placeholder="Enter branch name"
// // // // //                                 className="border p-2 rounded-md mb-2 w-full"
// // // // //                             />
// // // // //                             {bankCheque.type === 'cheque' && (
// // // // //                                 <input
// // // // //                                     type="text"
// // // // //                                     value={bankCheque.chequeNumber}
// // // // //                                     onChange={(e) => setBankCheque({ ...bankCheque, chequeNumber: e.target.value })}
// // // // //                                     placeholder="Enter cheque number"
// // // // //                                     className="border p-2 rounded-md mb-2 w-full"
// // // // //                                 />
// // // // //                             )}
// // // // //                             <div className="mt-2 flex justify-end">
// // // // //                                 <button type="button" className="bg-blue-500 text-white px-4 py-2 rounded-md mr-2" onClick={handleSaveBankCheque}>Save</button>
// // // // //                                 <button type="button" className="bg-gray-500 text-white px-4 py-2 rounded-md" onClick={handleCancelAddBankCheque}>Cancel</button>
// // // // //                             </div>
// // // // //                         </div>
// // // // //                     )}
// // // // //                     <ul>
// // // // //                         {bankChequeDetails.map((bankCheque, index) => (
// // // // //                             <li key={index}>{bankCheque.bankName} - {bankCheque.accountNumber}</li>
// // // // //                         ))}
// // // // //                     </ul>
// // // // //                 </div>
// // // // //             </div>
// // // // //         </div>
// // // // //     );
// // // // // };

// // // // // export default Settings;
// // // // import React, { useState, useEffect } from 'react';
// // // // import axios from 'axios';

// // // // const Settings = () => {
// // // //     const [showAddCounterForm, setShowAddCounterForm] = useState(false);
// // // //     const [counterName, setCounterName] = useState('');
// // // //     const [counterNames, setCounterNames] = useState([]);
// // // //     const [showAddDenominationForm, setShowAddDenominationForm] = useState(false);
// // // //     const [denomination, setDenomination] = useState('');
// // // //     const [denominations, setDenominations] = useState([]);
// // // //     const [showAddBankChequeForm, setShowAddBankChequeForm] = useState(false);
// // // //     const [bankCheque, setBankCheque] = useState({
// // // //         type: 'bank',
// // // //         bankName: '',
// // // //         accountNumber: '',
// // // //         ifscCode: '',
// // // //         branchName: '',
// // // //         chequeNumber: ''
// // // //     });
// // // //     const [bankChequeDetails, setBankChequeDetails] = useState([]);
// // // //     const [showAddVendorForm, setShowAddVendorForm] = useState(false);
// // // //     const [vendor, setVendor] = useState({
// // // //         vendorName: '',
// // // //         businessName: '',
// // // //         phone: '',
// // // //         email: '',
// // // //         address: '',
// // // //         panNo: '',
// // // //         gstNo: ''
// // // //     });
// // // //     const [vendorDetails, setVendorDetails] = useState([]);

// // // //     // Function to save counter name to the backend
// // // //     const saveCounterName = async (counterName) => {
// // // //         try {
// // // //             const response = await axios.post('http://localhost:5000/api/counter', { counterName });
// // // //             console.log('Counter saved:', response.data);
// // // //             // Fetch the updated counter names after saving
// // // //             fetchCounterNames();
// // // //         } catch (error) {
// // // //             console.error('Error saving counter name:', error);
// // // //         }
// // // //     };

// // // //     // Function to fetch counter names from the backend
// // // //     const fetchCounterNames = async () => {
// // // //         try {
// // // //             const response = await axios.get('http://localhost:5000/api/counter');
// // // //             setCounterNames(response.data);
// // // //         } catch (error) {
// // // //             console.error('Error fetching counter names:', error);
// // // //         }
// // // //     };

// // // //     // Function to save denomination to the backend
// // // //     const saveDenomination = async (denominationName) => {
// // // //         try {
// // // //             const response = await axios.post('http://localhost:5000/api/denomination', { name: denominationName });
// // // //             console.log('Denomination saved:', response.data);
// // // //             // Fetch the updated denominations after saving
// // // //             fetchDenominations();
// // // //         } catch (error) {
// // // //             console.error('Error saving denomination:', error);
// // // //         }
// // // //     };

// // // //     // Function to fetch denominations from the backend
// // // //     const fetchDenominations = async () => {
// // // //         try {
// // // //             const response = await axios.get('http://localhost:5000/api/denomination');
// // // //             setDenominations(response.data);
// // // //         } catch (error) {
// // // //             console.error('Error fetching denominations:', error);
// // // //         }
// // // //     };

// // // //     // Function to save bank/cheque details to the backend
// // // //     const saveBankChequeDetails = async () => {
// // // //         try {
// // // //             const response = await axios.post('http://localhost:5000/api/bankcheque', bankCheque);
// // // //             console.log('Bank/Cheque details saved:', response.data);
// // // //             // Fetch the updated bank/cheque details after saving
// // // //             fetchBankChequeDetails();
// // // //         } catch (error) {
// // // //             console.error('Error saving bank/cheque details:', error);
// // // //         }
// // // //     };

// // // //     // Function to fetch bank/cheque details from the backend
// // // //     const fetchBankChequeDetails = async () => {
// // // //         try {
// // // //             const response = await axios.get('http://localhost:5000/api/bankcheque');
// // // //             setBankChequeDetails(response.data);
// // // //         } catch (error) {
// // // //             console.error('Error fetching bank/cheque details:', error);
// // // //         }
// // // //     };

// // // //     // Function to save vendor details to the backend
// // // //     const saveVendorDetails = async () => {
// // // //         try {
// // // //             const response = await axios.post('http://localhost:5000/api/vendor', vendor);
// // // //             console.log('Vendor details saved:', response.data);
// // // //             // Fetch the updated vendor details after saving
// // // //             fetchVendorDetails();
// // // //         } catch (error) {
// // // //             console.error('Error saving vendor details:', error);
// // // //         }
// // // //     };

// // // //     // Function to fetch vendor details from the backend
// // // //     const fetchVendorDetails = async () => {
// // // //         try {
// // // //             const response = await axios.get('http://localhost:5000/api/vendor');
// // // //             setVendorDetails(response.data);
// // // //         } catch (error) {
// // // //             console.error('Error fetching vendor details:', error);
// // // //         }
// // // //     };

// // // //     // Function to handle adding a new counter
// // // //     const handleAddCounter = () => {
// // // //         setShowAddCounterForm(true);
// // // //     };

// // // //     // Function to handle saving a counter
// // // //     const handleSaveCounter = () => {
// // // //         saveCounterName(counterName);
// // // //         setShowAddCounterForm(false);
// // // //         setCounterName('');
// // // //     };

// // // //     // Function to handle cancelling adding a counter
// // // //     const handleCancelAddCounter = () => {
// // // //         setShowAddCounterForm(false);
// // // //         setCounterName('');
// // // //     };

// // // //     // Function to handle adding a new denomination
// // // //     const handleAddDenomination = () => {
// // // //         setShowAddDenominationForm(true);
// // // //     };

// // // //     // Function to handle saving a denomination
// // // //     const handleSaveDenomination = () => {
// // // //         saveDenomination(denomination);
// // // //         setShowAddDenominationForm(false);
// // // //         setDenomination('');
// // // //     };

// // // //     // Function to handle cancelling adding a denomination
// // // //     const handleCancelAddDenomination = () => {
// // // //         setShowAddDenominationForm(false);
// // // //         setDenomination('');
// // // //     };

// // // //     // Function to handle adding a new bank/cheque detail
// // // //     const handleAddBankCheque = () => {
// // // //         setShowAddBankChequeForm(true);
// // // //     };

// // // //     // Function to handle saving a bank/cheque detail
// // // //     const handleSaveBankCheque = () => {
// // // //         saveBankChequeDetails();
// // // //         setShowAddBankChequeForm(false);
// // // //         setBankCheque({
// // // //             type: 'bank',
// // // //             bankName: '',
// // // //             accountNumber: '',
// // // //             ifscCode: '',
// // // //             branchName: '',
// // // //             chequeNumber: ''
// // // //         });
// // // //     };

// // // //     // Function to handle cancelling adding a bank/cheque detail
// // // //     const handleCancelAddBankCheque = () => {
// // // //         setShowAddBankChequeForm(false);
// // // //         setBankCheque({
// // // //             type: 'bank',
// // // //             bankName: '',
// // // //             accountNumber: '',
// // // //             ifscCode: '',
// // // //             branchName: '',
// // // //             chequeNumber: ''
// // // //         });
// // // //     };

// // // //     // Function to handle adding a new vendor detail
// // // //     const handleAddVendor = () => {
// // // //         setShowAddVendorForm(true);
// // // //     };

// // // //     // Function to handle saving a vendor detail
// // // //     const handleSaveVendor = () => {
// // // //         saveVendorDetails();
// // // //         setShowAddVendorForm(false);
// // // //         setVendor({
// // // //             vendorName: '',
// // // //             businessName: '',
// // // //             phone: '',
// // // //             email: '',
// // // //             address: '',
// // // //             panNo: '',
// // // //             gstNo: ''
// // // //         });
// // // //     };

// // // //     // Function to handle cancelling adding a vendor detail
// // // //     const handleCancelAddVendor = () => {
// // // //         setShowAddVendorForm(false);
// // // //         setVendor({
// // // //             vendorName: '',
// // // //             businessName: '',
// // // //             phone: '',
// // // //             email: '',
// // // //             address: '',
// // // //             panNo: '',
// // // //             gstNo: ''
// // // //         });
// // // //     };

// // // //     // Fetch counter names on component mount
// // // //     useEffect(() => {
// // // //         fetchCounterNames();
// // // //         fetchDenominations();
// // // //         fetchBankChequeDetails();
// // // //         fetchVendorDetails();
// // // //     }, []);

// // // //     return (
// // // //         <div className="p-4">
// // // //             <h2 className="text-2xl font-bold mb-4">Settings</h2>
// // // //             <div className="grid grid-cols-2 gap-4">
// // // //                 {/* First Box: Counter Name (For Receipts) */}
// // // //                 <div className="bg-blue-200 p-6 rounded-lg shadow-md relative">
// // // //                     <h3 className="text-lg font-semibold mb-4">Counter Name (For Receipts)</h3>
// // // //                     <button className="absolute top-0 right-0 p-2" onClick={handleAddCounter}>
// // // //                         <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
// // // //                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
// // // //                         </svg>
// // // //                     </button>
// // // //                     {showAddCounterForm && (
// // // //                         <div className="mt-4">
// // // //                             <input
// // // //                                 type="text"
// // // //                                 value={counterName}
// // // //                                 onChange={(e) => setCounterName(e.target.value)}
// // // //                                 placeholder="Enter counter name"
// // // //                                 className="border p-2 rounded-md w-full"
// // // //                             />
// // // //                             <div className="mt-2 flex justify-end">
// // // //                                 <button type="button" className="bg-blue-500 text-white px-4 py-2 rounded-md mr-2" onClick={handleSaveCounter}>Save</button>
// // // //                                 <button type="button" className="bg-gray-500 text-white px-4 py-2 rounded-md" onClick={handleCancelAddCounter}>Cancel</button>
// // // //                             </div>
// // // //                         </div>
// // // //                     )}
// // // //                     <ul>
// // // //                         {counterNames.map((name, index) => (
// // // //                             <li key={index}>{name}</li>
// // // //                         ))}
// // // //                     </ul>
// // // //                 </div>

// // // //                 {/* Second Box: Denominations */}
// // // //                 <div className="bg-yellow-200 p-6 rounded-lg shadow-md relative">
// // // //                     <h3 className="text-lg font-semibold mb-4">Denominations</h3>
// // // //                     <button className="absolute top-0 right-0 p-2" onClick={handleAddDenomination}>
// // // //                         <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
// // // //                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
// // // //                         </svg>
// // // //                     </button>
// // // //                     {showAddDenominationForm && (
// // // //                         <div className="mt-4">
// // // //                             <input
// // // //                                 type="text"
// // // //                                 value={denomination}
// // // //                                 onChange={(e) => setDenomination(e.target.value)}
// // // //                                 placeholder="Enter denomination details"
// // // //                                 className="border p-2 rounded-md w-full"
// // // //                             />
// // // //                             <div className="mt-2 flex justify-end">
// // // //                                 <button type="button" className="bg-blue-500 text-white px-4 py-2 rounded-md mr-2" onClick={handleSaveDenomination}>Save</button>
// // // //                                 <button type="button" className="bg-gray-500 text-white px-4 py-2 rounded-md" onClick={handleCancelAddDenomination}>Cancel</button>
// // // //                             </div>
// // // //                         </div>
// // // //                     )}
// // // //                     <ul>
// // // //                         {denominations.map((denomination, index) => (
// // // //                             <li key={index}>{denomination}</li>
// // // //                         ))}
// // // //                     </ul>
// // // //                 </div>

// // // //                 {/* Third Box: Vendor Details */}
// // // //                 <div className="bg-green-200 p-6 rounded-lg shadow-md relative">
// // // //                     <h3 className="text-lg font-semibold mb-4">Vendor Details</h3>
// // // //                     <button className="absolute top-0 right-0 p-2" onClick={handleAddVendor}>
// // // //                         <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
// // // //                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
// // // //                         </svg>
// // // //                     </button>
// // // //                     {showAddVendorForm && (
// // // //                         <div className="mt-4">
// // // //                             <input
// // // //                                 type="text"
// // // //                                 value={vendor.vendorName}
// // // //                                 onChange={(e) => setVendor({ ...vendor, vendorName: e.target.value })}
// // // //                                 placeholder="Enter vendor name"
// // // //                                 className="border p-2 rounded-md mb-2 w-full"
// // // //                             />
// // // //                             <input
// // // //                                 type="text"
// // // //                                 value={vendor.businessName}
// // // //                                 onChange={(e) => setVendor({ ...vendor, businessName: e.target.value })}
// // // //                                 placeholder="Enter business name"
// // // //                                 className="border p-2 rounded-md mb-2 w-full"
// // // //                             />
// // // //                             <input
// // // //                                 type="tel"
// // // //                                 value={vendor.phone}
// // // //                                 onChange={(e) => setVendor({ ...vendor, phone: e.target.value })}
// // // //                                 placeholder="Enter phone"
// // // //                                 className="border p-2 rounded-md mb-2 w-full"
// // // //                             />
// // // //                             <input
// // // //                                 type="email"
// // // //                                 value={vendor.email}
// // // //                                 onChange={(e) => setVendor({ ...vendor, email: e.target.value })}
// // // //                                 placeholder="Enter email"
// // // //                                 className="border p-2 rounded-md mb-2 w-full"
// // // //                             />
// // // //                             <input
// // // //                                 type="text"
// // // //                                 value={vendor.address}
// // // //                                 onChange={(e) => setVendor({ ...vendor, address: e.target.value })}
// // // //                                 placeholder="Enter address"
// // // //                                 className="border p-2 rounded-md mb-2 w-full"
// // // //                             />
// // // //                             <input
// // // //                                 type="text"
// // // //                                 value={vendor.panNo}
// // // //                                 onChange={(e) => setVendor({ ...vendor, panNo: e.target.value })}
// // // //                                 placeholder="Enter PAN number"
// // // //                                 className="border p-2 rounded-md mb-2 w-full"
// // // //                             />
// // // //                             <input
// // // //                                 type="text"
// // // //                                 value={vendor.gstNo}
// // // //                                 onChange={(e) => setVendor({ ...vendor, gstNo: e.target.value })}
// // // //                                 placeholder="Enter GST number"
// // // //                                 className="border p-2 rounded-md mb-2 w-full"
// // // //                             />
// // // //                             <div className="mt-2 flex justify-end">
// // // //                                 <button type="button" className="bg-blue-500 text-white px-4 py-2 rounded-md mr-2" onClick={handleSaveVendor}>Save</button>
// // // //                                 <button type="button" className="bg-gray-500 text-white px-4 py-2 rounded-md" onClick={handleCancelAddVendor}>Cancel</button>
// // // //                             </div>
// // // //                         </div>
// // // //                     )}
// // // //                     <ul>
// // // //                         {vendorDetails.map((vendor, index) => (
// // // //                             <li key={index}>
// // // //                                 <p>{vendor.vendorName}</p>
// // // //                                 <p>{vendor.businessName}</p>
// // // //                                 <p>{vendor.phone}</p>
// // // //                                 <p>{vendor.email}</p>
// // // //                                 <p>{vendor.address}</p>
// // // //                                 <p>{vendor.panNo}</p>
// // // //                                 <p>{vendor.gstNo}</p>
// // // //                             </li>
// // // //                         ))}
// // // //                     </ul>
// // // //                 </div>

// // // //                 {/* Fourth Box: Bank/Cheque Details */}
// // // //                 <div className="bg-red-200 p-6 rounded-lg shadow-md relative">
// // // //                     <h3 className="text-lg font-semibold mb-4">Bank/Cheque Details</h3>
// // // //                     <button className="absolute top-0 right-0 p-2" onClick={handleAddBankCheque}>
// // // //                         <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
// // // //                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
// // // //                         </svg>
// // // //                     </button>
// // // //                     {showAddBankChequeForm && (
// // // //                         <div className="mt-4">
// // // //                             <select
// // // //                                 value={bankCheque.type}
// // // //                                 onChange={(e) => setBankCheque({ ...bankCheque, type: e.target.value })}
// // // //                                 className="border p-2 rounded-md mb-2 w-full"
// // // //                             >
// // // //                                 <option value="bank">Bank</option>
// // // //                                 <option value="cheque">Cheque</option>
// // // //                             </select>
// // // //                             <input
// // // //                                 type="text"
// // // //                                 value={bankCheque.bankName}
// // // //                                 onChange={(e) => setBankCheque({ ...bankCheque, bankName: e.target.value })}
// // // //                                 placeholder="Enter bank name"
// // // //                                 className="border p-2 rounded-md mb-2 w-full"
// // // //                             />
// // // //                             <input
// // // //                                 type="text"
// // // //                                 value={bankCheque.accountNumber}
// // // //                                 onChange={(e) => setBankCheque({ ...bankCheque, accountNumber: e.target.value })}
// // // //                                 placeholder="Enter account number"
// // // //                                 className="border p-2 rounded-md mb-2 w-full"
// // // //                             />
// // // //                             <input
// // // //                                 type="text"
// // // //                                 value={bankCheque.ifscCode}
// // // //                                 onChange={(e) => setBankCheque({ ...bankCheque, ifscCode: e.target.value })}
// // // //                                 placeholder="Enter IFSC code"
// // // //                                 className="border p-2 rounded-md mb-2 w-full"
// // // //                             />
// // // //                             <input
// // // //                                 type="text"
// // // //                                 value={bankCheque.branchName}
// // // //                                 onChange={(e) => setBankCheque({ ...bankCheque, branchName: e.target.value })}
// // // //                                 placeholder="Enter branch name"
// // // //                                 className="border p-2 rounded-md mb-2 w-full"
// // // //                             />
// // // //                             {bankCheque.type === 'cheque' && (
// // // //                                 <input
// // // //                                     type="text"
// // // //                                     value={bankCheque.chequeNumber}
// // // //                                     onChange={(e) => setBankCheque({ ...bankCheque, chequeNumber: e.target.value })}
// // // //                                     placeholder="Enter cheque number"
// // // //                                     className="border p-2 rounded-md mb-2 w-full"
// // // //                                 />
// // // //                             )}
// // // //                             <div className="mt-2 flex justify-end">
// // // //                                 <button type="button" className="bg-blue-500 text-white px-4 py-2 rounded-md mr-2" onClick={handleSaveBankCheque}>Save</button>
// // // //                                 <button type="button" className="bg-gray-500 text-white px-4 py-2 rounded-md" onClick={handleCancelAddBankCheque}>Cancel</button>
// // // //                             </div>
// // // //                         </div>
// // // //                     )}
// // // //                     <ul>
// // // //                         {bankChequeDetails.map((detail, index) => (
// // // //                             <li key={index}>
// // // //                                 <p>Type: {detail.type}</p>
// // // //                                 <p>Bank Name: {detail.bankName}</p>
// // // //                                 <p>Account Number: {detail.accountNumber}</p>
// // // //                                 <p>IFSC Code: {detail.ifscCode}</p>
// // // //                                 <p>Branch Name: {detail.branchName}</p>
// // // //                                 {detail.type === 'cheque' && <p>Cheque Number: {detail.chequeNumber}</p>}
// // // //                             </li>
// // // //                         ))}
// // // //                     </ul>
// // // //                 </div>
// // // //             </div>
// // // //         </div>
// // // //     );
// // // // };

// // // // export default Settings;
// // // import React, { useState, useEffect } from 'react';
// // // import axios from 'axios';

// // // const Settings = () => {
// // //     const [showAddCounterForm, setShowAddCounterForm] = useState(false);
// // //     const [counterName, setCounterName] = useState('');
// // //     const [counterNames, setCounterNames] = useState([]);
// // //     const [showAddDenominationForm, setShowAddDenominationForm] = useState(false);
// // //     const [denomination, setDenomination] = useState('');
// // //     const [denominations, setDenominations] = useState([]);
// // //     const [showAddBankChequeForm, setShowAddBankChequeForm] = useState(false);
// // //     const [bankCheque, setBankCheque] = useState({
// // //         type: 'bank',
// // //         bankName: '',
// // //         accountNumber: '',
// // //         ifscCode: '',
// // //         branchName: '',
// // //         chequeNumber: ''
// // //     });
// // //     const [bankChequeDetails, setBankChequeDetails] = useState([]);
// // //     const [showAddVendorForm, setShowAddVendorForm] = useState(false);
// // //     const [vendor, setVendor] = useState({
// // //         vendorName: '',
// // //         businessName: '',
// // //         phone: '',
// // //         email: '',
// // //         address: '',
// // //         panNo: '',
// // //         gstNo: ''
// // //     });
// // //     const [vendorDetails, setVendorDetails] = useState([]);

// // //     // Function to save counter name to the backend
// // //     const saveCounterName = async (counterName) => {
// // //         try {
// // //             const response = await axios.post('http://localhost:5000/api/counter', { counterName });
// // //             console.log('Counter saved:', response.data);
// // //             // Fetch the updated counter names after saving
// // //             fetchCounterNames();
// // //         } catch (error) {
// // //             console.error('Error saving counter name:', error);
// // //         }
// // //     };

// // //     // Function to fetch counter names from the backend
// // //     const fetchCounterNames = async () => {
// // //         try {
// // //             const response = await axios.get('http://localhost:5000/api/counter');
// // //             setCounterNames(response.data);
// // //         } catch (error) {
// // //             console.error('Error fetching counter names:', error);
// // //         }
// // //     };

// // //     // Function to save denomination to the backend
// // //     const saveDenomination = async (denominationName) => {
// // //         try {
// // //             const response = await axios.post('http://localhost:5000/api/denomination', { name: denominationName });
// // //             console.log('Denomination saved:', response.data);
// // //             // Fetch the updated denominations after saving
// // //             fetchDenominations();
// // //         } catch (error) {
// // //             console.error('Error saving denomination:', error);
// // //         }
// // //     };

// // //     // Function to fetch denominations from the backend
// // //     const fetchDenominations = async () => {
// // //         try {
// // //             const response = await axios.get('http://localhost:5000/api/denomination');
// // //             setDenominations(response.data);
// // //         } catch (error) {
// // //             console.error('Error fetching denominations:', error);
// // //         }
// // //     };

// // //     // Function to save bank/cheque details to the backend
// // //     const saveBankChequeDetails = async () => {
// // //         try {
// // //             const response = await axios.post('http://localhost:5000/api/bankcheque', bankCheque);
// // //             console.log('Bank/Cheque details saved:', response.data);
// // //             // Fetch the updated bank/cheque details after saving
// // //             fetchBankChequeDetails();
// // //         } catch (error) {
// // //             console.error('Error saving bank/cheque details:', error);
// // //         }
// // //     };

// // //     // Function to fetch bank/cheque details from the backend
// // //     const fetchBankChequeDetails = async () => {
// // //         try {
// // //             const response = await axios.get('http://localhost:5000/api/bankcheque');
// // //             setBankChequeDetails(response.data);
// // //         } catch (error) {
// // //             console.error('Error fetching bank/cheque details:', error);
// // //         }
// // //     };

// // //     // Function to save vendor details to the backend
// // //     const saveVendorDetails = async () => {
// // //         try {
// // //             const response = await axios.post('http://localhost:5000/api/vendor', vendor);
// // //             console.log('Vendor details saved:', response.data);
// // //             // Fetch the updated vendor details after saving
// // //             fetchVendorDetails();
// // //         } catch (error) {
// // //             console.error('Error saving vendor details:', error);
// // //         }
// // //     };

// // //     // Function to fetch vendor details from the backend
// // //     const fetchVendorDetails = async () => {
// // //         try {
// // //             const response = await axios.get('http://localhost:5000/api/vendor');
// // //             setVendorDetails(response.data);
// // //         } catch (error) {
// // //             console.error('Error fetching vendor details:', error);
// // //         }
// // //     };

// // //     // Function to handle adding a new counter
// // //     const handleAddCounter = () => {
// // //         setShowAddCounterForm(true);
// // //     };

// // //     // Function to handle saving a counter
// // //     const handleSaveCounter = () => {
// // //         saveCounterName(counterName);
// // //         setShowAddCounterForm(false);
// // //         setCounterName('');
// // //     };

// // //     // Function to handle cancelling adding a counter
// // //     const handleCancelAddCounter = () => {
// // //         setShowAddCounterForm(false);
// // //         setCounterName('');
// // //     };

// // //     // Function to handle adding a new denomination
// // //     const handleAddDenomination = () => {
// // //         setShowAddDenominationForm(true);
// // //     };

// // //     // Function to handle saving a denomination
// // //     const handleSaveDenomination = () => {
// // //         saveDenomination(denomination);
// // //         setShowAddDenominationForm(false);
// // //         setDenomination('');
// // //     };

// // //     // Function to handle cancelling adding a denomination
// // //     const handleCancelAddDenomination = () => {
// // //         setShowAddDenominationForm(false);
// // //         setDenomination('');
// // //     };

// // //     // Function to handle adding a new bank/cheque detail
// // //     const handleAddBankCheque = () => {
// // //         setShowAddBankChequeForm(true);
// // //     };

// // //     // Function to handle saving a bank/cheque detail
// // //     const handleSaveBankCheque = () => {
// // //         saveBankChequeDetails();
// // //         setShowAddBankChequeForm(false);
// // //         setBankCheque({
// // //             type: 'bank',
// // //             bankName: '',
// // //             accountNumber: '',
// // //             ifscCode: '',
// // //             branchName: '',
// // //             chequeNumber: ''
// // //         });
// // //     };

// // //     // Function to handle cancelling adding a bank/cheque detail
// // //     const handleCancelAddBankCheque = () => {
// // //         setShowAddBankChequeForm(false);
// // //         setBankCheque({
// // //             type: 'bank',
// // //             bankName: '',
// // //             accountNumber: '',
// // //             ifscCode: '',
// // //             branchName: '',
// // //             chequeNumber: ''
// // //         });
// // //     };

// // //     // Function to handle adding a new vendor detail
// // //     const handleAddVendor = () => {
// // //         setShowAddVendorForm(true);
// // //     };

// // //     // Function to handle saving a vendor detail
// // //     const handleSaveVendor = () => {
// // //         saveVendorDetails();
// // //         setShowAddVendorForm(false);
// // //         setVendor({
// // //             vendorName: '',
// // //             businessName: '',
// // //             phone: '',
// // //             email: '',
// // //             address: '',
// // //             panNo: '',
// // //             gstNo: ''
// // //         });
// // //     };

// // //     // Function to handle cancelling adding a vendor detail
// // //     const handleCancelAddVendor = () => {
// // //         setShowAddVendorForm(false);
// // //         setVendor({
// // //             vendorName: '',
// // //             businessName: '',
// // //             phone: '',
// // //             email: '',
// // //             address: '',
// // //             panNo: '',
// // //             gstNo: ''
// // //         });
// // //     };

// // //     // Fetch counter names on component mount
// // //     useEffect(() => {
// // //         fetchCounterNames();
// // //         fetchDenominations();
// // //         fetchBankChequeDetails();
// // //         fetchVendorDetails();
// // //     }, []);

// // //     return (
// // //         <div className="p-4">
// // //             <h2 className="text-2xl font-bold mb-4">Settings</h2>
// // //             <div className="grid grid-cols-2 gap-4">
// // //                 {/* First Box: Counter Name (For Receipts) */}
// // //                 <div className="bg-blue-200 p-6 rounded-lg shadow-md relative">
// // //                     <h3 className="text-lg font-semibold mb-4">Counter Name (For Receipts)</h3>
// // //                     <button className="absolute top-0 right-0 p-2" onClick={handleAddCounter}>
// // //                         <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
// // //                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
// // //                         </svg>
// // //                     </button>
// // //                     {showAddCounterForm && (
// // //                         <div className="mt-4">
// // //                             <input
// // //                                 type="text"
// // //                                 value={counterName}
// // //                                 onChange={(e) => setCounterName(e.target.value)}
// // //                                 placeholder="Enter counter name"
// // //                                 className="border p-2 rounded-md w-full"
// // //                             />
// // //                             <div className="mt-2 flex justify-end">
// // //                                 <button type="button" className="bg-blue-500 text-white px-4 py-2 rounded-md mr-2" onClick={handleSaveCounter}>Save</button>
// // //                                 <button type="button" className="bg-gray-500 text-white px-4 py-2 rounded-md" onClick={handleCancelAddCounter}>Cancel</button>
// // //                             </div>
// // //                         </div>
// // //                     )}
// // //                     <ul>
// // //                         {counterNames.map((name, index) => (
// // //                             <li key={index}>{name}</li>
// // //                         ))}
// // //                     </ul>
// // //                 </div>

// // //                 {/* Second Box: Denominations */}
// // //                 <div className="bg-yellow-200 p-6 rounded-lg shadow-md relative">
// // //                     <h3 className="text-lg font-semibold mb-4">Denominations</h3>
// // //                     <button className="absolute top-0 right-0 p-2" onClick={handleAddDenomination}>
// // //                         <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
// // //                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
// // //                         </svg>
// // //                     </button>
// // //                     {showAddDenominationForm && (
// // //                         <div className="mt-4">
// // //                             <input
// // //                                 type="text"
// // //                                 value={denomination}
// // //                                 onChange={(e) => setDenomination(e.target.value)}
// // //                                 placeholder="Enter denomination details"
// // //                                 className="border p-2 rounded-md w-full"
// // //                             />
// // //                             <div className="mt-2 flex justify-end">
// // //                                 <button type="button" className="bg-blue-500 text-white px-4 py-2 rounded-md mr-2" onClick={handleSaveDenomination}>Save</button>
// // //                                 <button type="button" className="bg-gray-500 text-white px-4 py-2 rounded-md" onClick={handleCancelAddDenomination}>Cancel</button>
// // //                             </div>
// // //                         </div>
// // //                     )}
// // //                     <ul>
// // //                         {denominations.map((denomination, index) => (
// // //                             <li key={index}>{denomination}</li>
// // //                         ))}
// // //                     </ul>
// // //                 </div>

// // //                 {/* Third Box: Vendor Details */}
// // //                 <div className="bg-green-200 p-6 rounded-lg shadow-md relative">
// // //                     <h3 className="text-lg font-semibold mb-4">Vendor Details</h3>
// // //                     <button className="absolute top-0 right-0 p-2" onClick={handleAddVendor}>
// // //                         <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
// // //                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
// // //                         </svg>
// // //                     </button>
// // //                     {showAddVendorForm && (
// // //                         <div className="mt-4">
// // //                             <input
// // //                                 type="text"
// // //                                 value={vendor.vendorName}
// // //                                 onChange={(e) => setVendor({ ...vendor, vendorName: e.target.value })}
// // //                                 placeholder="Enter vendor name"
// // //                                 className="border p-2 rounded-md mb-2 w-full"
// // //                             />
// // //                             <input
// // //                                 type="text"
// // //                                 value={vendor.businessName}
// // //                                 onChange={(e) => setVendor({ ...vendor, businessName: e.target.value })}
// // //                                 placeholder="Enter business name"
// // //                                 className="border p-2 rounded-md mb-2 w-full"
// // //                             />
// // //                             <input
// // //                                 type="tel"
// // //                                 value={vendor.phone}
// // //                                 onChange={(e) => setVendor({ ...vendor, phone: e.target.value })}
// // //                                 placeholder="Enter phone"
// // //                                 className="border p-2 rounded-md mb-2 w-full"
// // //                             />
// // //                             <input
// // //                                 type="email"
// // //                                 value={vendor.email}
// // //                                 onChange={(e) => setVendor({ ...vendor, email: e.target.value })}
// // //                                 placeholder="Enter email"
// // //                                 className="border p-2 rounded-md mb-2 w-full"
// // //                             />
// // //                             <input
// // //                                 type="text"
// // //                                 value={vendor.address}
// // //                                 onChange={(e) => setVendor({ ...vendor, address: e.target.value })}
// // //                                 placeholder="Enter address"
// // //                                 className="border p-2 rounded-md mb-2 w-full"
// // //                             />
// // //                             <input
// // //                                 type="text"
// // //                                 value={vendor.panNo}
// // //                                 onChange={(e) => setVendor({ ...vendor, panNo: e.target.value })}
// // //                                 placeholder="Enter PAN number"
// // //                                 className="border p-2 rounded-md mb-2 w-full"
// // //                             />
// // //                             <input
// // //                                 type="text"
// // //                                 value={vendor.gstNo}
// // //                                 onChange={(e) => setVendor({ ...vendor, gstNo: e.target.value })}
// // //                                 placeholder="Enter GST number"
// // //                                 className="border p-2 rounded-md mb-2 w-full"
// // //                             />
// // //                             <div className="mt-2 flex justify-end">
// // //                                 <button type="button" className="bg-blue-500 text-white px-4 py-2 rounded-md mr-2" onClick={handleSaveVendor}>Save</button>
// // //                                 <button type="button" className="bg-gray-500 text-white px-4 py-2 rounded-md" onClick={handleCancelAddVendor}>Cancel</button>
// // //                             </div>
// // //                         </div>
// // //                     )}
// // //                     <ul>
// // //                         {vendorDetails.map((vendor, index) => (
// // //                             <li key={index}>
// // //                                 <p>{vendor.vendorName}</p>
// // //                                 <p>{vendor.businessName}</p>
// // //                                 <p>{vendor.phone}</p>
// // //                                 <p>{vendor.email}</p>
// // //                                 <p>{vendor.address}</p>
// // //                                 <p>{vendor.panNo}</p>
// // //                                 <p>{vendor.gstNo}</p>
// // //                             </li>
// // //                         ))}
// // //                     </ul>
// // //                 </div>

// // //                 {/* Fourth Box: Bank/Cheque Details */}
// // //                 <div className="bg-red-200 p-6 rounded-lg shadow-md relative">
// // //                     <h3 className="text-lg font-semibold mb-4">Bank/Cheque Details</h3>
// // //                     <button className="absolute top-0 right-0 p-2" onClick={handleAddBankCheque}>
// // //                         <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
// // //                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
// // //                         </svg>
// // //                     </button>
// // //                     {showAddBankChequeForm && (
// // //                         <div className="mt-4">
// // //                             <select
// // //                                 value={bankCheque.type}
// // //                                 onChange={(e) => setBankCheque({ ...bankCheque, type: e.target.value })}
// // //                                 className="border p-2 rounded-md mb-2 w-full"
// // //                             >
// // //                                 <option value="bank">Bank</option>
// // //                                 <option value="cheque">Cheque</option>
// // //                             </select>
// // //                             <input
// // //                                 type="text"
// // //                                 value={bankCheque.bankName}
// // //                                 onChange={(e) => setBankCheque({ ...bankCheque, bankName: e.target.value })}
// // //                                 placeholder="Enter bank name"
// // //                                 className="border p-2 rounded-md mb-2 w-full"
// // //                             />
// // //                             <input
// // //                                 type="text"
// // //                                 value={bankCheque.accountNumber}
// // //                                 onChange={(e) => setBankCheque({ ...bankCheque, accountNumber: e.target.value })}
// // //                                 placeholder="Enter account number"
// // //                                 className="border p-2 rounded-md mb-2 w-full"
// // //                             />
// // //                             <input
// // //                                 type="text"
// // //                                 value={bankCheque.ifscCode}
// // //                                 onChange={(e) => setBankCheque({ ...bankCheque, ifscCode: e.target.value })}
// // //                                 placeholder="Enter IFSC code"
// // //                                 className="border p-2 rounded-md mb-2 w-full"
// // //                             />
// // //                             <input
// // //                                 type="text"
// // //                                 value={bankCheque.branchName}
// // //                                 onChange={(e) => setBankCheque({ ...bankCheque, branchName: e.target.value })}
// // //                                 placeholder="Enter branch name"
// // //                                 className="border p-2 rounded-md mb-2 w-full"
// // //                             />
// // //                             {bankCheque.type === 'cheque' && (
// // //                                 <input
// // //                                     type="text"
// // //                                     value={bankCheque.chequeNumber}
// // //                                     onChange={(e) => setBankCheque({ ...bankCheque, chequeNumber: e.target.value })}
// // //                                     placeholder="Enter cheque number"
// // //                                     className="border p-2 rounded-md mb-2 w-full"
// // //                                 />
// // //                             )}
// // //                             <div className="mt-2 flex justify-end">
// // //                                 <button type="button" className="bg-blue-500 text-white px-4 py-2 rounded-md mr-2" onClick={handleSaveBankCheque}>Save</button>
// // //                                 <button type="button" className="bg-gray-500 text-white px-4 py-2 rounded-md" onClick={handleCancelAddBankCheque}>Cancel</button>
// // //                             </div>
// // //                         </div>
// // //                     )}
// // //                     <ul>
// // //                         {bankChequeDetails.map((detail, index) => (
// // //                             <li key={index}>
// // //                                 <p>Bank Name: {detail.bankName}</p>
// // //                                 <p>Account Number: {detail.accountNumber}</p>
// // //                             </li>
// // //                         ))}
// // //                     </ul>
// // //                 </div>
// // //             </div>
// // //         </div>
// // //     );
// // // };

// // // export default Settings;
// // import React, { useState, useEffect } from 'react';
// // import axios from 'axios';

// // const Settings = () => {
// //     const [showAddCounterForm, setShowAddCounterForm] = useState(false);
// //     const [counterName, setCounterName] = useState('');
// //     const [counterNames, setCounterNames] = useState([]);
// //     const [showAddDenominationForm, setShowAddDenominationForm] = useState(false);
// //     const [denomination, setDenomination] = useState('');
// //     const [denominations, setDenominations] = useState([]);
// //     const [showAddBankChequeForm, setShowAddBankChequeForm] = useState(false);
// //     const [bankCheque, setBankCheque] = useState({
// //         type: 'bank',
// //         bankName: '',
// //         accountNumber: '',
// //         ifscCode: '',
// //         branchName: '',
// //         chequeNumber: ''
// //     });
// //     const [bankChequeDetails, setBankChequeDetails] = useState([]);
// //     const [showAddVendorForm, setShowAddVendorForm] = useState(false);
// //     const [vendor, setVendor] = useState({
// //         vendorName: '',
// //         businessName: '',
// //         phone: '',
// //         email: '',
// //         address: '',
// //         panNo: '',
// //         gstNo: ''
// //     });
// //     const [vendorDetails, setVendorDetails] = useState([]);

// //     // Function to save counter name to the backend
// //     const saveCounterName = async (counterName) => {
// //         try {
// //             const response = await axios.post('http://localhost:5000/api/counter', { counterName });
// //             console.log('Counter saved:', response.data);
// //             // Fetch the updated counter names after saving
// //             fetchCounterNames();
// //         } catch (error) {
// //             console.error('Error saving counter name:', error);
// //         }
// //     };

// //     // Function to fetch counter names from the backend
// //     const fetchCounterNames = async () => {
// //         try {
// //             const response = await axios.get('http://localhost:5000/api/counter');
// //             setCounterNames(response.data);
// //         } catch (error) {
// //             console.error('Error fetching counter names:', error);
// //         }
// //     };

// //     // Function to save denomination to the backend
// //     const saveDenomination = async (denominationName) => {
// //         try {
// //             const response = await axios.post('http://localhost:5000/api/denomination', { name: denominationName });
// //             console.log('Denomination saved:', response.data);
// //             // Fetch the updated denominations after saving
// //             fetchDenominations();
// //         } catch (error) {
// //             console.error('Error saving denomination:', error);
// //         }
// //     };

// //     // Function to fetch denominations from the backend
// //     const fetchDenominations = async () => {
// //         try {
// //             const response = await axios.get('http://localhost:5000/api/denomination');
// //             setDenominations(response.data);
// //         } catch (error) {
// //             console.error('Error fetching denominations:', error);
// //         }
// //     };

// //     // Function to save bank/cheque details to the backend
// //     const saveBankChequeDetails = async () => {
// //         try {
// //             const response = await axios.post('http://localhost:5000/api/bankcheque', bankCheque);
// //             console.log('Bank/Cheque details saved:', response.data);
// //             // Fetch the updated bank/cheque details after saving
// //             fetchBankChequeDetails();
// //         } catch (error) {
// //             console.error('Error saving bank/cheque details:', error);
// //         }
// //     };

// //     // Function to fetch bank/cheque details from the backend
// //     const fetchBankChequeDetails = async () => {
// //         try {
// //             const response = await axios.get('http://localhost:5000/api/bankcheque');
// //             setBankChequeDetails(response.data);
// //         } catch (error) {
// //             console.error('Error fetching bank/cheque details:', error);
// //         }
// //     };

// //     // Function to save vendor details to the backend
// //     const saveVendorDetails = async () => {
// //         try {
// //             const response = await axios.post('http://localhost:5000/api/vendor', vendor);
// //             console.log('Vendor details saved:', response.data);
// //             // Fetch the updated vendor details after saving
// //             fetchVendorDetails();
// //         } catch (error) {
// //             console.error('Error saving vendor details:', error);
// //         }
// //     };

// //     // Function to fetch vendor details from the backend
// //     const fetchVendorDetails = async () => {
// //         try {
// //             const response = await axios.get('http://localhost:5000/api/vendor');
// //             setVendorDetails(response.data);
// //         } catch (error) {
// //             console.error('Error fetching vendor details:', error);
// //         }
// //     };

// //     // Function to handle adding a new counter
// //     const handleAddCounter = () => {
// //         setShowAddCounterForm(true);
// //     };

// //     // Function to handle saving a counter
// //     const handleSaveCounter = () => {
// //         saveCounterName(counterName);
// //         setShowAddCounterForm(false);
// //         setCounterName('');
// //     };

// //     // Function to handle cancelling adding a counter
// //     const handleCancelAddCounter = () => {
// //         setShowAddCounterForm(false);
// //         setCounterName('');
// //     };

// //     // Function to handle adding a new denomination
// //     const handleAddDenomination = () => {
// //         setShowAddDenominationForm(true);
// //     };

// //     // Function to handle saving a denomination
// //     const handleSaveDenomination = () => {
// //         saveDenomination(denomination);
// //         setShowAddDenominationForm(false);
// //         setDenomination('');
// //     };

// //     // Function to handle cancelling adding a denomination
// //     const handleCancelAddDenomination = () => {
// //         setShowAddDenominationForm(false);
// //         setDenomination('');
// //     };

// //     // Function to handle adding a new bank/cheque detail
// //     const handleAddBankCheque = () => {
// //         setShowAddBankChequeForm(true);
// //     };

// //     // Function to handle saving a bank/cheque detail
// //     const handleSaveBankCheque = () => {
// //         saveBankChequeDetails();
// //         setShowAddBankChequeForm(false);
// //         setBankCheque({
// //             type: 'bank',
// //             bankName: '',
// //             accountNumber: '',
// //             ifscCode: '',
// //             branchName: '',
// //             chequeNumber: ''
// //         });
// //     };

// //     // Function to handle cancelling adding a bank/cheque detail
// //     const handleCancelAddBankCheque = () => {
// //         setShowAddBankChequeForm(false);
// //         setBankCheque({
// //             type: 'bank',
// //             bankName: '',
// //             accountNumber: '',
// //             ifscCode: '',
// //             branchName: '',
// //             chequeNumber: ''
// //         });
// //     };

// //     // Function to handle adding a new vendor detail
// //     const handleAddVendor = () => {
// //         setShowAddVendorForm(true);
// //     };

// //     // Function to handle saving a vendor detail
// //     const handleSaveVendor = () => {
// //         saveVendorDetails();
// //         setShowAddVendorForm(false);
// //         setVendor({
// //             vendorName: '',
// //             businessName: '',
// //             phone: '',
// //             email: '',
// //             address: '',
// //             panNo: '',
// //             gstNo: ''
// //         });
// //     };

// //     // Function to handle cancelling adding a vendor detail
// //     const handleCancelAddVendor = () => {
// //         setShowAddVendorForm(false);
// //         setVendor({
// //             vendorName: '',
// //             businessName: '',
// //             phone: '',
// //             email: '',
// //             address: '',
// //             panNo: '',
// //             gstNo: ''
// //         });
// //     };

// //     // Fetch counter names on component mount
// //     useEffect(() => {
// //         fetchCounterNames();
// //         fetchDenominations();
// //         fetchBankChequeDetails();
// //         fetchVendorDetails();
// //     }, []);

// //     return (
// //         <div className="p-4">
// //             <h2 className="text-2xl font-bold mb-4">Settings</h2>
// //             <div className="grid grid-cols-2 gap-4">
// //                 {/* First Box: Counter Name (For Receipts) */}
// //                 <div className="bg-blue-200 p-6 rounded-lg shadow-md relative">
// //                     <h3 className="text-lg font-semibold mb-4">Counter Name (For Receipts)</h3>
// //                     <button className="absolute top-0 right-0 p-2" onClick={handleAddCounter}>
// //                         <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
// //                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
// //                         </svg>
// //                     </button>
// //                     {showAddCounterForm && (
// //                         <div className="mt-4">
// //                             <input
// //                                 type="text"
// //                                 value={counterName}
// //                                 onChange={(e) => setCounterName(e.target.value)}
// //                                 placeholder="Enter counter name"
// //                                 className="border p-2 rounded-md w-full"
// //                             />
// //                             <div className="mt-2 flex justify-end">
// //                                 <button type="button" className="bg-blue-500 text-white px-4 py-2 rounded-md mr-2" onClick={handleSaveCounter}>Save</button>
// //                                 <button type="button" className="bg-gray-500 text-white px-4 py-2 rounded-md" onClick={handleCancelAddCounter}>Cancel</button>
// //                             </div>
// //                         </div>
// //                     )}
// //                     <ul>
// //                         {counterNames.map((name, index) => (
// //                             <li key={index}>{name}</li>
// //                         ))}
// //                     </ul>
// //                 </div>

// //                 {/* Second Box: Denominations */}
// //                 <div className="bg-yellow-200 p-6 rounded-lg shadow-md relative">
// //                     <h3 className="text-lg font-semibold mb-4">Denominations</h3>
// //                     <button className="absolute top-0 right-0 p-2" onClick={handleAddDenomination}>
// //                         <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
// //                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
// //                         </svg>
// //                     </button>
// //                     {showAddDenominationForm && (
// //                         <div className="mt-4">
// //                             <input
// //                                 type="text"
// //                                 value={denomination}
// //                                 onChange={(e) => setDenomination(e.target.value)}
// //                                 placeholder="Enter denomination details"
// //                                 className="border p-2 rounded-md w-full"
// //                             />
// //                             <div className="mt-2 flex justify-end">
// //                                 <button type="button" className="bg-blue-500 text-white px-4 py-2 rounded-md mr-2" onClick={handleSaveDenomination}>Save</button>
// //                                 <button type="button" className="bg-gray-500 text-white px-4 py-2 rounded-md" onClick={handleCancelAddDenomination}>Cancel</button>
// //                             </div>
// //                         </div>
// //                     )}
// //                     <ul>
// //                         {denominations.map((denomination, index) => (
// //                             <li key={index}>{denomination}</li>
// //                         ))}
// //                     </ul>
// //                 </div>

// //                 {/* Third Box: Vendor Details */}
// //                 <div className="bg-green-200 p-6 rounded-lg shadow-md relative">
// //                     <h3 className="text-lg font-semibold mb-4">Vendor Details</h3>
// //                     <button className="absolute top-0 right-0 p-2" onClick={handleAddVendor}>
// //                         <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
// //                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
// //                         </svg>
// //                     </button>
// //                     {showAddVendorForm && (
// //                         <div className="mt-4">
// //                             <input
// //                                 type="text"
// //                                 value={vendor.vendorName}
// //                                 onChange={(e) => setVendor({ ...vendor, vendorName: e.target.value })}
// //                                 placeholder="Enter vendor name"
// //                                 className="border p-2 rounded-md mb-2 w-full"
// //                             />
// //                             <input
// //                                 type="text"
// //                                 value={vendor.businessName}
// //                                 onChange={(e) => setVendor({ ...vendor, businessName: e.target.value })}
// //                                 placeholder="Enter business name"
// //                                 className="border p-2 rounded-md mb-2 w-full"
// //                             />
// //                             <input
// //                                 type="tel"
// //                                 value={vendor.phone}
// //                                 onChange={(e) => setVendor({ ...vendor, phone: e.target.value })}
// //                                 placeholder="Enter phone"
// //                                 className="border p-2 rounded-md mb-2 w-full"
// //                             />
// //                             <input
// //                                 type="email"
// //                                 value={vendor.email}
// //                                 onChange={(e) => setVendor({ ...vendor, email: e.target.value })}
// //                                 placeholder="Enter email"
// //                                 className="border p-2 rounded-md mb-2 w-full"
// //                             />
// //                             <input
// //                                 type="text"
// //                                 value={vendor.address}
// //                                 onChange={(e) => setVendor({ ...vendor, address: e.target.value })}
// //                                 placeholder="Enter address"
// //                                 className="border p-2 rounded-md mb-2 w-full"
// //                             />
// //                             <input
// //                                 type="text"
// //                                 value={vendor.panNo}
// //                                 onChange={(e) => setVendor({ ...vendor, panNo: e.target.value })}
// //                                 placeholder="Enter PAN number"
// //                                 className="border p-2 rounded-md mb-2 w-full"
// //                             />
// //                             <input
// //                                 type="text"
// //                                 value={vendor.gstNo}
// //                                 onChange={(e) => setVendor({ ...vendor, gstNo: e.target.value })}
// //                                 placeholder="Enter GST number"
// //                                 className="border p-2 rounded-md mb-2 w-full"
// //                             />
// //                             <div className="mt-2 flex justify-end">
// //                                 <button type="button" className="bg-blue-500 text-white px-4 py-2 rounded-md mr-2" onClick={handleSaveVendor}>Save</button>
// //                                 <button type="button" className="bg-gray-500 text-white px-4 py-2 rounded-md" onClick={handleCancelAddVendor}>Cancel</button>
// //                             </div>
// //                         </div>
// //                     )}
// //                     <ul>
// //                         {vendorDetails.map((vendor, index) => (
// //                             <li key={index}>
// //                                 <p>{vendor.vendorName}</p>
// //                                 <p>{vendor.businessName}</p>
// //                                 <p>{vendor.phone}</p>
// //                                 <p>{vendor.email}</p>
// //                                 <p>{vendor.address}</p>
// //                                 <p>{vendor.panNo}</p>
// //                                 <p>{vendor.gstNo}</p>
// //                             </li>
// //                         ))}
// //                     </ul>
// //                 </div>

// //                 {/* Fourth Box: Bank/Cheque Details */}
// //                 <div className="bg-red-200 p-6 rounded-lg shadow-md relative">
// //                     <h3 className="text-lg font-semibold mb-4">Bank/Cheque Details</h3>
// //                     <button className="absolute top-0 right-0 p-2" onClick={handleAddBankCheque}>
// //                         <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
// //                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
// //                         </svg>
// //                     </button>
// //                     {showAddBankChequeForm && (
// //                         <div className="mt-4">
// //                             <div className="mb-4">
// //                                 <input type="radio" id="bank" name="bankCheque" value="bank" checked={bankCheque.type === "bank"} onChange={(e) => setBankCheque({ ...bankCheque, type: e.target.value })}/>
// //                                 <label htmlFor="bank" className="ml-2">Bank</label>
// //                             </div>
// //                             <div className="mb-4">
// //                                 <input type="radio" id="cheque" name="bankCheque" value="cheque" checked={bankCheque.type === "cheque"} onChange={(e) => setBankCheque({ ...bankCheque, type: e.target.value })}/>
// //                                 <label htmlFor="cheque" className="ml-2">Cheque</label>
// //                             </div>
// //                             <input
// //                                 type="text"
// //                                 value={bankCheque.bankName}
// //                                 onChange={(e) => setBankCheque({ ...bankCheque, bankName: e.target.value })}
// //                                 placeholder="Enter bank name"
// //                                 className="border p-2 rounded-md mb-2 w-full"
// //                             />
// //                             <input
// //                                 type="text"
// //                                 value={bankCheque.accountNumber}
// //                                 onChange={(e) => setBankCheque({ ...bankCheque, accountNumber: e.target.value })}
// //                                 placeholder="Enter account number"
// //                                 className="border p-2 rounded-md mb-2 w-full"
// //                             />
// //                             <input
// //                                 type="text"
// //                                 value={bankCheque.ifscCode}
// //                                 onChange={(e) => setBankCheque({ ...bankCheque, ifscCode: e.target.value })}
// //                                 placeholder="Enter IFSC code"
// //                                 className="border p-2 rounded-md mb-2 w-full"
// //                             />
// //                             <input
// //                                 type="text"
// //                                 value={bankCheque.branchName}
// //                                 onChange={(e) => setBankCheque({ ...bankCheque, branchName: e.target.value })}
// //                                 placeholder="Enter branch name"
// //                                 className="border p-2 rounded-md mb-2 w-full"
// //                             />
// //                             {bankCheque.type === "cheque" && (
// //                                 <input
// //                                     type="text"
// //                                     value={bankCheque.chequeNumber}
// //                                     onChange={(e) => setBankCheque({ ...bankCheque, chequeNumber: e.target.value })}
// //                                     placeholder="Enter cheque number"
// //                                     className="border p-2 rounded-md mb-2 w-full"
// //                                 />
// //                             )}
// //                             <div className="mt-2 flex justify-end">
// //                                 <button type="button" className="bg-blue-500 text-white px-4 py-2 rounded-md mr-2" onClick={handleSaveBankCheque}>Save</button>
// //                                 <button type="button" className="bg-gray-500 text-white px-4 py-2 rounded-md" onClick={handleCancelAddBankCheque}>Cancel</button>
// //                             </div>
// //                         </div>
// //                     )}
// //                     <ul>
// //                         {bankChequeDetails.map((detail, index) => (
// //                             <li key={index}>
// //                                 <p>Type: {detail.type}</p>
// //                                 <p>Bank Name: {detail.bankName}</p>
// //                                 <p>Account Number: {detail.accountNumber}</p>
// //                                 <p>IFSC Code: {detail.ifscCode}</p>
// //                                 <p>Branch Name: {detail.branchName}</p>
// //                                 {detail.type === "cheque" && (
// //                                     <p>Cheque Number: {detail.chequeNumber}</p>
// //                                 )}
// //                             </li>
// //                         ))}
// //                     </ul>
// //                 </div>
// //             </div>
// //         </div>
// //     );
// // };

// // export default Settings;
// // // All perfect code 
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const Settings = () => {
//     const [showAddCounterForm, setShowAddCounterForm] = useState(false);
//     const [counterName, setCounterName] = useState('');
//     const [counterNames, setCounterNames] = useState([]);
//     const [showAddDenominationForm, setShowAddDenominationForm] = useState(false);
//     const [denomination, setDenomination] = useState('');
//     const [denominations, setDenominations] = useState([]);
//     const [showAddBankChequeForm, setShowAddBankChequeForm] = useState(false);
//     const [bankCheque, setBankCheque] = useState({
//         type: 'bank',
//         bankName: '',
//         accountNumber: '',
//         ifscCode: '',
//         branchName: '',
//         chequeNumber: ''
//     });
//     const [bankChequeDetails, setBankChequeDetails] = useState([]);
//     const [showAddVendorForm, setShowAddVendorForm] = useState(false);
//     const [vendor, setVendor] = useState({
//         vendorName: '',
//         businessName: '',
//         phone: '',
//         email: '',
//         address: '',
//         panNo: '',
//         gstNo: ''
//     });
//     const [vendorDetails, setVendorDetails] = useState([]);

//     // Function to save counter name to the backend
//     const saveCounterName = async (counterName) => {
//         try {
//             const response = await axios.post('http://localhost:5000/api/counter', { counterName });
//             console.log('Counter saved:', response.data);
//             // Fetch the updated counter names after saving
//             fetchCounterNames();
//         } catch (error) {
//             console.error('Error saving counter name:', error);
//         }
//     };

//     // Function to fetch counter names from the backend
//     const fetchCounterNames = async () => {
//         try {
//             const response = await axios.get('http://localhost:5000/api/counter');
//             setCounterNames(response.data);
//         } catch (error) {
//             console.error('Error fetching counter names:', error);
//         }
//     };

//     // Function to save denomination to the backend
//     const saveDenomination = async (denominationName) => {
//         try {
//             const response = await axios.post('http://localhost:5000/api/denomination', { name: denominationName });
//             console.log('Denomination saved:', response.data);
//             // Fetch the updated denominations after saving
//             fetchDenominations();
//         } catch (error) {
//             console.error('Error saving denomination:', error);
//         }
//     };

//     // Function to fetch denominations from the backend
//     const fetchDenominations = async () => {
//         try {
//             const response = await axios.get('http://localhost:5000/api/denomination');
//             setDenominations(response.data);
//         } catch (error) {
//             console.error('Error fetching denominations:', error);
//         }
//     };

//     // Function to save bank/cheque details to the backend
//     const saveBankChequeDetails = async () => {
//         try {
//             const response = await axios.post('http://localhost:5000/api/bankcheque', bankCheque);
//             console.log('Bank/Cheque details saved:', response.data);
//             // Fetch the updated bank/cheque details after saving
//             fetchBankChequeDetails();
//         } catch (error) {
//             console.error('Error saving bank/cheque details:', error);
//         }
//     };

//     // Function to fetch bank/cheque details from the backend
//     const fetchBankChequeDetails = async () => {
//         try {
//             const response = await axios.get('http://localhost:5000/api/bankcheque');
//             setBankChequeDetails(response.data);
//         } catch (error) {
//             console.error('Error fetching bank/cheque details:', error);
//         }
//     };

//     // Function to save vendor details to the backend
//     const saveVendorDetails = async () => {
//         try {
//             const response = await axios.post('http://localhost:5000/api/vendor', vendor);
//             console.log('Vendor details saved:', response.data);
//             // Fetch the updated vendor details after saving
//             fetchVendorDetails();
//         } catch (error) {
//             console.error('Error saving vendor details:', error);
//         }
//     };

//     // Function to fetch vendor details from the backend
//     const fetchVendorDetails = async () => {
//         try {
//             const response = await axios.get('http://localhost:5000/api/vendor');
//             setVendorDetails(response.data);
//         } catch (error) {
//             console.error('Error fetching vendor details:', error);
//         }
//     };

//     // Function to handle adding a new counter
//     const handleAddCounter = () => {
//         setShowAddCounterForm(true);
//     };

//     // Function to handle saving a counter
//     const handleSaveCounter = () => {
//         saveCounterName(counterName);
//         setShowAddCounterForm(false);
//         setCounterName('');
//     };

//     // Function to handle cancelling adding a counter
//     const handleCancelAddCounter = () => {
//         setShowAddCounterForm(false);
//         setCounterName('');
//     };

//     // Function to handle adding a new denomination
//     const handleAddDenomination = () => {
//         setShowAddDenominationForm(true);
//     };

//     // Function to handle saving a denomination
//     const handleSaveDenomination = () => {
//         saveDenomination(denomination);
//         setShowAddDenominationForm(false);
//         setDenomination('');
//     };

//     // Function to handle cancelling adding a denomination
//     const handleCancelAddDenomination = () => {
//         setShowAddDenominationForm(false);
//         setDenomination('');
//     };

//     // Function to handle adding a new bank/cheque detail
//     const handleAddBankCheque = () => {
//         setShowAddBankChequeForm(true);
//     };

//     // Function to handle saving a bank/cheque detail
//     const handleSaveBankCheque = () => {
//         saveBankChequeDetails();
//         setShowAddBankChequeForm(false);
//         setBankCheque({
//             type: 'bank',
//             bankName: '',
//             accountNumber: '',
//             ifscCode: '',
//             branchName: '',
//             chequeNumber: ''
//         });
//     };

//     // Function to handle cancelling adding a bank/cheque detail
//     const handleCancelAddBankCheque = () => {
//         setShowAddBankChequeForm(false);
//         setBankCheque({
//             type: 'bank',
//             bankName: '',
//             accountNumber: '',
//             ifscCode: '',
//             branchName: '',
//             chequeNumber: ''
//         });
//     };

//     // Function to handle adding a new vendor detail
//     const handleAddVendor = () => {
//         setShowAddVendorForm(true);
//     };

//     // Function to handle saving a vendor detail
//     const handleSaveVendor = () => {
//         saveVendorDetails();
//         setShowAddVendorForm(false);
//         setVendor({
//             vendorName: '',
//             businessName: '',
//             phone: '',
//             email: '',
//             address: '',
//             panNo: '',
//             gstNo: ''
//         });
//     };

//     // Function to handle cancelling adding a vendor detail
//     const handleCancelAddVendor = () => {
//         setShowAddVendorForm(false);
//         setVendor({
//             vendorName: '',
//             businessName: '',
//             phone: '',
//             email: '',
//             address: '',
//             panNo: '',
//             gstNo: ''
//         });
//     };

//     // Fetch counter names on component mount
//     useEffect(() => {
//         fetchCounterNames();
//         fetchDenominations();
//         fetchBankChequeDetails();
//         fetchVendorDetails();
//     }, []);

//     return (
//         <div className="p-4">
//             <h2 className="text-2xl font-bold mb-4">Settings</h2>
//             <div className="grid grid-cols-2 gap-4">
//                 {/* First Box: Counter Name (For Receipts) */}
//                 <div className="bg-blue-200 p-6 rounded-lg shadow-md relative">
//                     <h3 className="text-lg font-semibold mb-4">Counter Name (For Receipts)</h3>
//                     <button className="absolute top-0 right-0 p-2" onClick={handleAddCounter}>
//                         <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
//                         </svg>
//                     </button>
//                     {showAddCounterForm && (
//                         <div className="mt-4">
//                             <input
//                                 type="text"
//                                 value={counterName}
//                                 onChange={(e) => setCounterName(e.target.value)}
//                                 placeholder="Enter counter name"
//                                 className="border p-2 rounded-md w-full"
//                             />
//                             <div className="mt-2 flex justify-end">
//                                 <button type="button" className="bg-blue-500 text-white px-4 py-2 rounded-md mr-2" onClick={handleSaveCounter}>Save</button>
//                                 <button type="button" className="bg-gray-500 text-white px-4 py-2 rounded-md" onClick={handleCancelAddCounter}>Cancel</button>
//                             </div>
//                         </div>
//                     )}
//                     <ul>
//                         {counterNames.map((name, index) => (
//                             <li key={index}>{name}</li>
//                         ))}
//                     </ul>
//                 </div>

//                 {/* Second Box: Denominations */}
//                 <div className="bg-yellow-200 p-6 rounded-lg shadow-md relative">
//                     <h3 className="text-lg font-semibold mb-4">Denominations</h3>
//                     <button className="absolute top-0 right-0 p-2" onClick={handleAddDenomination}>
//                         <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
//                         </svg>
//                     </button>
//                     {showAddDenominationForm && (
//                         <div className="mt-4">
//                             <input
//                                 type="text"
//                                 value={denomination}
//                                 onChange={(e) => setDenomination(e.target.value)}
//                                 placeholder="Enter denomination details"
//                                 className="border p-2 rounded-md w-full"
//                             />
//                             <div className="mt-2 flex justify-end">
//                                 <button type="button" className="bg-blue-500 text-white px-4 py-2 rounded-md mr-2" onClick={handleSaveDenomination}>Save</button>
//                                 <button type="button" className="bg-gray-500 text-white px-4 py-2 rounded-md" onClick={handleCancelAddDenomination}>Cancel</button>
//                             </div>
//                         </div>
//                     )}
//                     <ul>
//                         {denominations.map((denomination, index) => (
//                             <li key={index}>{denomination}</li>
//                         ))}
//                     </ul>
//                 </div>

//                 {/* Third Box: Vendor Details */}
//                 <div className="bg-green-200 p-6 rounded-lg shadow-md relative">
//                     <h3 className="text-lg font-semibold mb-4">Vendor Details</h3>
//                     <button className="absolute top-0 right-0 p-2" onClick={handleAddVendor}>
//                         <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
//                         </svg>
//                     </button>
//                     {showAddVendorForm && (
//                         <div className="mt-4">
//                             <input
//                                 type="text"
//                                 value={vendor.vendorName}
//                                 onChange={(e) => setVendor({ ...vendor, vendorName: e.target.value })}
//                                 placeholder="Enter vendor name"
//                                 className="border p-2 rounded-md mb-2 w-full"
//                             />
//                             <input
//                                 type="text"
//                                 value={vendor.businessName}
//                                 onChange={(e) => setVendor({ ...vendor, businessName: e.target.value })}
//                                 placeholder="Enter business name"
//                                 className="border p-2 rounded-md mb-2 w-full"
//                             />
//                             <input
//                                 type="tel"
//                                 value={vendor.phone}
//                                 onChange={(e) => setVendor({ ...vendor, phone: e.target.value })}
//                                 placeholder="Enter phone"
//                                 className="border p-2 rounded-md mb-2 w-full"
//                             />
//                             <input
//                                 type="email"
//                                 value={vendor.email}
//                                 onChange={(e) => setVendor({ ...vendor, email: e.target.value })}
//                                 placeholder="Enter email"
//                                 className="border p-2 rounded-md mb-2 w-full"
//                             />
//                             <input
//                                 type="text"
//                                 value={vendor.address}
//                                 onChange={(e) => setVendor({ ...vendor, address: e.target.value })}
//                                 placeholder="Enter address"
//                                 className="border p-2 rounded-md mb-2 w-full"
//                             />
//                             <input
//                                 type="text"
//                                 value={vendor.panNo}
//                                 onChange={(e) => setVendor({ ...vendor, panNo: e.target.value })}
//                                 placeholder="Enter PAN number"
//                                 className="border p-2 rounded-md mb-2 w-full"
//                             />
//                             <input
//                                 type="text"
//                                 value={vendor.gstNo}
//                                 onChange={(e) => setVendor({ ...vendor, gstNo: e.target.value })}
//                                 placeholder="Enter GST number"
//                                 className="border p-2 rounded-md mb-2 w-full"
//                             />
//                             <div className="mt-2 flex justify-end">
//                                 <button type="button" className="bg-blue-500 text-white px-4 py-2 rounded-md mr-2" onClick={handleSaveVendor}>Save</button>
//                                 <button type="button" className="bg-gray-500 text-white px-4 py-2 rounded-md" onClick={handleCancelAddVendor}>Cancel</button>
//                             </div>
//                         </div>
//                     )}
//                     <ul>
//                         {vendorDetails.map((vendor, index) => (
//                             <li key={index} className="flex">
//                                 <p className="mr-4">{vendor.vendorName}</p>
//                                 <p>{vendor.businessName}</p>
//                                 <p>{vendor.phone}</p>
//                                 <p>{vendor.email}</p>
//                                 <p>{vendor.address}</p>
//                                 <p>{vendor.panNo}</p>
//                                 <p>{vendor.gstNo}</p>
//                             </li>
//                         ))}
//                     </ul>
//                 </div>

//                 {/* Fourth Box: Bank/Cheque Details */}
//                 <div className="bg-red-200 p-6 rounded-lg shadow-md relative">
//                     <h3 className="text-lg font-semibold mb-4">Bank/Cheque Details</h3>
//                     <button className="absolute top-0 right-0 p-2" onClick={handleAddBankCheque}>
//                         <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
//                         </svg>
//                     </button>
//                     {showAddBankChequeForm && (
//                         <div className="mt-4">
//                             <input
//                                 type="radio"
//                                 value="bank"
//                                 checked={bankCheque.type === 'bank'}
//                                 onChange={() => setBankCheque({ ...bankCheque, type: 'bank' })}
//                                 className="mr-2"
//                             />
//                             <label htmlFor="bank">Bank</label>
//                             <input
//                                 type="radio"
//                                 value="cheque"
//                                 checked={bankCheque.type === 'cheque'}
//                                 onChange={() => setBankCheque({ ...bankCheque, type: 'cheque' })}
//                                 className="ml-4 mr-2"
//                             />
//                             <label htmlFor="cheque">Cheque</label>
//                             <input
//                                 type="text"
//                                 value={bankCheque.bankName}
//                                 onChange={(e) => setBankCheque({ ...bankCheque, bankName: e.target.value })}
//                                 placeholder="Enter bank name"
//                                 className="border p-2 rounded-md mb-2 w-full"
//                             />
//                             <input
//                                 type="text"
//                                 value={bankCheque.accountNumber}
//                                 onChange={(e) => setBankCheque({ ...bankCheque, accountNumber: e.target.value })}
//                                 placeholder="Enter account number"
//                                 className="border p-2 rounded-md mb-2 w-full"
//                             />
//                             <input
//                                 type="text"
//                                 value={bankCheque.ifscCode}
//                                 onChange={(e) => setBankCheque({ ...bankCheque, ifscCode: e.target.value })}
//                                 placeholder="Enter IFSC code"
//                                 className="border p-2 rounded-md mb-2 w-full"
//                             />
//                             <input
//                                 type="text"
//                                 value={bankCheque.branchName}
//                                 onChange={(e) => setBankCheque({ ...bankCheque, branchName: e.target.value })}
//                                 placeholder="Enter branch name"
//                                 className="border p-2 rounded-md mb-2 w-full"
//                             />
//                             {bankCheque.type === 'cheque' && (
//                                 <input
//                                     type="text"
//                                     value={bankCheque.chequeNumber}
//                                     onChange={(e) => setBankCheque({ ...bankCheque, chequeNumber: e.target.value })}
//                                     placeholder="Enter cheque number"
//                                     className="border p-2 rounded-md mb-2 w-full"
//                                 />
//                             )}
//                             <div className="mt-2 flex justify-end">
//                                 <button type="button" className="bg-blue-500 text-white px-4 py-2 rounded-md mr-2" onClick={handleSaveBankCheque}>Save</button>
//                                 <button type="button" className="bg-gray-500 text-white px-4 py-2 rounded-md" onClick={handleCancelAddBankCheque}>Cancel</button>
//                             </div>
//                         </div>
//                     )}
//                     <ul>
//                         {bankChequeDetails.map((details, index) => (
//                             <li key={index} className="flex">
//                                 <p className="mr-4">{details.bankName}</p>
//                                 <p>{details.accountNumber}</p>
//                             </li>
//                         ))}
//                     </ul>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Settings;

// // this code is pop pop box code working clearly
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import AddVendorPopup from './AddVendorPopup'; // Import the new popup component

// const Settings = () => {
//     const [showAddCounterForm, setShowAddCounterForm] = useState(false);
//     const [counterName, setCounterName] = useState('');
//     const [counterNames, setCounterNames] = useState([]);
//     const [showAddDenominationForm, setShowAddDenominationForm] = useState(false);
//     const [denomination, setDenomination] = useState('');
//     const [denominations, setDenominations] = useState([]);
//     const [showAddBankChequeForm, setShowAddBankChequeForm] = useState(false);
//     const [bankCheque, setBankCheque] = useState({
//         type: 'bank',
//         bankName: '',
//         accountNumber: '',
//         ifscCode: '',
//         branchName: '',
//         chequeNumber: ''
//     });
//     const [bankChequeDetails, setBankChequeDetails] = useState([]);
//     const [showAddVendorPopup, setShowAddVendorPopup] = useState(false); // State to control vendor popup visibility
//     const [vendorDetails, setVendorDetails] = useState([]);

//     // Function to save counter name to the backend
//     const saveCounterName = async (counterName) => {
//         try {
//             const response = await axios.post('http://localhost:5000/api/counter', { counterName });
//             console.log('Counter saved:', response.data);
//             // Fetch the updated counter names after saving
//             fetchCounterNames();
//         } catch (error) {
//             console.error('Error saving counter name:', error);
//         }
//     };

//     // Function to fetch counter names from the backend
//     const fetchCounterNames = async () => {
//         try {
//             const response = await axios.get('http://localhost:5000/api/counter');
//             setCounterNames(response.data);
//         } catch (error) {
//             console.error('Error fetching counter names:', error);
//         }
//     };

//     // Function to save denomination to the backend
//     const saveDenomination = async (denominationName) => {
//         try {
//             const response = await axios.post('http://localhost:5000/api/denomination', { name: denominationName });
//             console.log('Denomination saved:', response.data);
//             // Fetch the updated denominations after saving
//             fetchDenominations();
//         } catch (error) {
//             console.error('Error saving denomination:', error);
//         }
//     };

//     // Function to fetch denominations from the backend
//     const fetchDenominations = async () => {
//         try {
//             const response = await axios.get('http://localhost:5000/api/denomination');
//             setDenominations(response.data);
//         } catch (error) {
//             console.error('Error fetching denominations:', error);
//         }
//     };

//     // Function to save bank/cheque details to the backend
//     const saveBankChequeDetails = async () => {
//         try {
//             const response = await axios.post('http://localhost:5000/api/bankcheque', bankCheque);
//             console.log('Bank/Cheque details saved:', response.data);
//             // Fetch the updated bank/cheque details after saving
//             fetchBankChequeDetails();
//         } catch (error) {
//             console.error('Error saving bank/cheque details:', error);
//         }
//     };

//     // Function to fetch bank/cheque details from the backend
//     const fetchBankChequeDetails = async () => {
//         try {
//             const response = await axios.get('http://localhost:5000/api/bankcheque');
//             setBankChequeDetails(response.data);
//         } catch (error) {
//             console.error('Error fetching bank/cheque details:', error);
//         }
//     };

//     // Function to save vendor details to the backend
//     const saveVendorDetails = async (vendor) => {
//         try {
//             const response = await axios.post('http://localhost:5000/api/vendor', vendor);
//             console.log('Vendor details saved:', response.data);
//             // Fetch the updated vendor details after saving
//             fetchVendorDetails();
//         } catch (error) {
//             console.error('Error saving vendor details:', error);
//         }
//     };

//     // Function to fetch vendor details from the backend
//     const fetchVendorDetails = async () => {
//         try {
//             const response = await axios.get('http://localhost:5000/api/vendor');
//             setVendorDetails(response.data);
//         } catch (error) {
//             console.error('Error fetching vendor details:', error);
//         }
//     };

//     // Function to handle adding a new counter
//     const handleAddCounter = () => {
//         setShowAddCounterForm(true);
//     };

//     // Function to handle saving a counter
//     const handleSaveCounter = () => {
//         saveCounterName(counterName);
//         setShowAddCounterForm(false);
//         setCounterName('');
//     };

//     // Function to handle cancelling adding a counter
//     const handleCancelAddCounter = () => {
//         setShowAddCounterForm(false);
//         setCounterName('');
//     };

//     // Function to handle adding a new denomination
//     const handleAddDenomination = () => {
//         setShowAddDenominationForm(true);
//     };

//     // Function to handle saving a denomination
//     const handleSaveDenomination = () => {
//         saveDenomination(denomination);
//         setShowAddDenominationForm(false);
//         setDenomination('');
//     };

//     // Function to handle cancelling adding a denomination
//     const handleCancelAddDenomination = () => {
//         setShowAddDenominationForm(false);
//         setDenomination('');
//     };

//     // Function to handle adding a new bank/cheque detail
//     const handleAddBankCheque = () => {
//         setShowAddBankChequeForm(true);
//     };

//     // Function to handle saving a bank/cheque detail
//     const handleSaveBankCheque = () => {
//         saveBankChequeDetails();
//         setShowAddBankChequeForm(false);
//         setBankCheque({
//             type: 'bank',
//             bankName: '',
//             accountNumber: '',
//             ifscCode: '',
//             branchName: '',
//             chequeNumber: ''
//         });
//     };

//     // Function to handle cancelling adding a bank/cheque detail
//     const handleCancelAddBankCheque = () => {
//         setShowAddBankChequeForm(false);
//         setBankCheque({
//             type: 'bank',
//             bankName: '',
//             accountNumber: '',
//             ifscCode: '',
//             branchName: '',
//             chequeNumber: ''
//         });
//     };

//     // Function to handle adding a new vendor detail
//     const handleAddVendor = () => {
//         setShowAddVendorPopup(true); // Show the vendor popup
//     };

//     // Function to handle closing the vendor popup
//     const handleCloseVendorPopup = () => {
//         setShowAddVendorPopup(false);
//     };

//     // Fetch counter names, denominations, bank/cheque details, and vendor details on component mount
//     useEffect(() => {
//         fetchCounterNames();
//         fetchDenominations();
//         fetchBankChequeDetails();
//         fetchVendorDetails();
//     }, []);

//     return (
//         <div className="p-4">
//             <h2 className="text-2xl font-bold mb-4">Settings</h2>
//             <div className="grid grid-cols-2 gap-4">
//                 {/* First Box: Counter Name (For Receipts) */}
//                 <div className="bg-blue-200 p-6 rounded-lg shadow-md relative">
//                     <h3 className="text-lg font-semibold mb-4">Counter Name (For Receipts)</h3>
//                     <button className="absolute top-0 right-0 p-2" onClick={handleAddCounter}>
//                         <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
//                         </svg>
//                     </button>
//                     {showAddCounterForm && (
//                         <div className="mt-4">
//                             <input
//                                 type="text"
//                                 value={counterName}
//                                 onChange={(e) => setCounterName(e.target.value)}
//                                 placeholder="Enter counter name"
//                                 className="border p-2 rounded-md w-full"
//                             />
//                             <div className="mt-2 flex justify-end">
//                                 <button type="button" className="bg-blue-500 text-white px-4 py-2 rounded-md mr-2" onClick={handleSaveCounter}>Save</button>
//                                 <button type="button" className="bg-gray-500 text-white px-4 py-2 rounded-md" onClick={handleCancelAddCounter}>Cancel</button>
//                             </div>
//                         </div>
//                     )}
//                     <ul>
//                         {counterNames.map((name, index) => (
//                             <li key={index}>{name}</li>
//                         ))}
//                     </ul>
//                 </div>

//                 {/* Second Box: Denominations */}
//                 <div className="bg-yellow-200 p-6 rounded-lg shadow-md relative">
//                     <h3 className="text-lg font-semibold mb-4">Denominations</h3>
//                     <button className="absolute top-0 right-0 p-2" onClick={handleAddDenomination}>
//                         <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
//                         </svg>
//                     </button>
//                     {showAddDenominationForm && (
//                         <div className="mt-4">
//                             <input
//                                 type="text"
//                                 value={denomination}
//                                 onChange={(e) => setDenomination(e.target.value)}
//                                 placeholder="Enter denomination details"
//                                 className="border p-2 rounded-md w-full"
//                             />
//                             <div className="mt-2 flex justify-end">
//                                 <button type="button" className="bg-blue-500 text-white px-4 py-2 rounded-md mr-2" onClick={handleSaveDenomination}>Save</button>
//                                 <button type="button" className="bg-gray-500 text-white px-4 py-2 rounded-md" onClick={handleCancelAddDenomination}>Cancel</button>
//                             </div>
//                         </div>
//                     )}
//                     <ul>
//                         {denominations.map((denomination, index) => (
//                             <li key={index}>{denomination}</li>
//                         ))}
//                     </ul>
//                 </div>

//                 {/* Third Box: Vendor Details */}
//                 <div className="bg-green-200 p-6 rounded-lg shadow-md relative">
//                     <h3 className="text-lg font-semibold mb-4">Vendor Details</h3>
//                     <button className="absolute top-0 right-0 p-2" onClick={handleAddVendor}>
//                         <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
//                         </svg>
//                     </button>
//                     {showAddVendorPopup && (
//                         <AddVendorPopup
//                             onSave={saveVendorDetails} // Pass saveVendorDetails function as prop
//                             onClose={handleCloseVendorPopup}
//                         />
//                     )}
//                     <ul>
//                         {vendorDetails.map((vendor, index) => (
//                             <li key={index} className="flex">
//                                 <p className="mr-4">{vendor.vendorName}</p>
//                                 <p>{vendor.businessName}</p>
//                                 <p>{vendor.phone}</p>
//                                 <p>{vendor.email}</p>
//                                 <p>{vendor.address}</p>
//                                 <p>{vendor.panNo}</p>
//                                 <p>{vendor.gstNo}</p>
//                             </li>
//                         ))}
//                     </ul>
//                 </div>

//                 {/* Fourth Box: Bank/Cheque Details */}
//                 <div className="bg-red-200 p-6 rounded-lg shadow-md relative">
//                     <h3 className="text-lg font-semibold mb-4">Bank/Cheque Details</h3>
//                     <button className="absolute top-0 right-0 p-2" onClick={handleAddBankCheque}>
//                         <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
//                         </svg>
//                     </button>
//                     {showAddBankChequeForm && (
//                         <div className="mt-4">
//                             <input
//                                 type="radio"
//                                 value="bank"
//                                 checked={bankCheque.type === 'bank'}
//                                 onChange={() => setBankCheque({ ...bankCheque, type: 'bank' })}
//                                 className="mr-2"
//                             />
//                             <label htmlFor="bank">Bank</label>
//                             <input
//                                 type="radio"
//                                 value="cheque"
//                                 checked={bankCheque.type === 'cheque'}
//                                 onChange={() => setBankCheque({ ...bankCheque, type: 'cheque' })}
//                                 className="ml-4 mr-2"
//                             />
//                             <label htmlFor="cheque">Cheque</label>
//                             <input
//                                 type="text"
//                                 value={bankCheque.bankName}
//                                 onChange={(e) => setBankCheque({ ...bankCheque, bankName: e.target.value })}
//                                 placeholder="Enter bank name"
//                                 className="border p-2 rounded-md mb-2 w-full"
//                             />
//                             <input
//                                 type="text"
//                                 value={bankCheque.accountNumber}
//                                 onChange={(e) => setBankCheque({ ...bankCheque, accountNumber: e.target.value })}
//                                 placeholder="Enter account number"
//                                 className="border p-2 rounded-md mb-2 w-full"
//                             />
//                             <input
//                                 type="text"
//                                 value={bankCheque.ifscCode}
//                                 onChange={(e) => setBankCheque({ ...bankCheque, ifscCode: e.target.value })}
//                                 placeholder="Enter IFSC code"
//                                 className="border p-2 rounded-md mb-2 w-full"
//                             />
//                             <input
//                                 type="text"
//                                 value={bankCheque.branchName}
//                                 onChange={(e) => setBankCheque({ ...bankCheque, branchName: e.target.value })}
//                                 placeholder="Enter branch name"
//                                 className="border p-2 rounded-md mb-2 w-full"
//                             />
//                             {bankCheque.type === 'cheque' && (
//                                 <input
//                                     type="text"
//                                     value={bankCheque.chequeNumber}
//                                     onChange={(e) => setBankCheque({ ...bankCheque, chequeNumber: e.target.value })}
//                                     placeholder="Enter cheque number"
//                                     className="border p-2 rounded-md mb-2 w-full"
//                                 />
//                             )}
//                             <div className="mt-2 flex justify-end">
//                                 <button type="button" className="bg-blue-500 text-white px-4 py-2 rounded-md mr-2" onClick={handleSaveBankCheque}>Save</button>
//                                 <button type="button" className="bg-gray-500 text-white px-4 py-2 rounded-md" onClick={handleCancelAddBankCheque}>Cancel</button>
//                             </div>
//                         </div>
//                     )}
//                     <ul>
//                         {bankChequeDetails.map((details, index) => (
//                             <li key={index} className="flex">
//                                 <p className="mr-4">{details.bankName}</p>
//                                 <p>{details.accountNumber}</p>
//                             </li>
//                         ))}
//                     </ul>
//                 </div>
//             </div>
//             {showAddVendorPopup && (
//                 <AddVendorPopup // Render the vendor popup component when showAddVendorPopup is true
//                     onSave={saveVendorDetails}
//                     onClose={handleCloseVendorPopup}
//                 />
//             )}
//         </div>
//     );
// };

// export default Settings;




// // ============================
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import AddVendorPopup from './AddVendorPopup'; // Import the new popup component
// import AddCounterPopup from './AddCounterPopup'; // Import the new popup component

// const Settings = () => {
//     const [showAddCounterPopup, setShowAddCounterPopup] = useState(false); // State to control counter popup visibility
//     const [counterName, setCounterName] = useState('');
//     const [counterNames, setCounterNames] = useState([]);
//     const [showAddDenominationForm, setShowAddDenominationForm] = useState(false);
//     const [denomination, setDenomination] = useState('');
//     const [denominations, setDenominations] = useState([]);
//     const [showAddBankChequeForm, setShowAddBankChequeForm] = useState(false);
//     const [bankCheque, setBankCheque] = useState({
//         type: 'bank',
//         bankName: '',
//         accountNumber: '',
//         ifscCode: '',
//         branchName: '',
//         chequeNumber: ''
//     });
//     const [bankChequeDetails, setBankChequeDetails] = useState([]);
//     const [showAddVendorPopup, setShowAddVendorPopup] = useState(false); // State to control vendor popup visibility
//     const [vendorDetails, setVendorDetails] = useState([]);

//     // Function to save counter name to the backend
//     const saveCounterName = async (counterName) => {
//         try {
//             const response = await axios.post('http://localhost:5000/api/counter', { counterName });
//             console.log('Counter saved:', response.data);
//             // Fetch the updated counter names after saving
//             fetchCounterNames();
//         } catch (error) {
//             console.error('Error saving counter name:', error);
//         }
//     };

//     // Function to fetch counter names from the backend
//     const fetchCounterNames = async () => {
//         try {
//             const response = await axios.get('http://localhost:5000/api/counter');
//             setCounterNames(response.data);
//         } catch (error) {
//             console.error('Error fetching counter names:', error);
//         }
//     };

//     // Function to save denomination to the backend
//     const saveDenomination = async (denominationName) => {
//         try {
//             const response = await axios.post('http://localhost:5000/api/denomination', { name: denominationName });
//             console.log('Denomination saved:', response.data);
//             // Fetch the updated denominations after saving
//             fetchDenominations();
//         } catch (error) {
//             console.error('Error saving denomination:', error);
//         }
//     };

//     // Function to fetch denominations from the backend
//     const fetchDenominations = async () => {
//         try {
//             const response = await axios.get('http://localhost:5000/api/denomination');
//             setDenominations(response.data);
//         } catch (error) {
//             console.error('Error fetching denominations:', error);
//         }
//     };

//     // Function to save bank/cheque details to the backend
//     const saveBankChequeDetails = async () => {
//         try {
//             const response = await axios.post('http://localhost:5000/api/bankcheque', bankCheque);
//             console.log('Bank/Cheque details saved:', response.data);
//             // Fetch the updated bank/cheque details after saving
//             fetchBankChequeDetails();
//         } catch (error) {
//             console.error('Error saving bank/cheque details:', error);
//         }
//     };

//     // Function to fetch bank/cheque details from the backend
//     const fetchBankChequeDetails = async () => {
//         try {
//             const response = await axios.get('http://localhost:5000/api/bankcheque');
//             setBankChequeDetails(response.data);
//         } catch (error) {
//             console.error('Error fetching bank/cheque details:', error);
//         }
//     };

//     // Function to save vendor details to the backend
//     const saveVendorDetails = async (vendor) => {
//         try {
//             const response = await axios.post('http://localhost:5000/api/vendor', vendor);
//             console.log('Vendor details saved:', response.data);
//             // Fetch the updated vendor details after saving
//             fetchVendorDetails();
//         } catch (error) {
//             console.error('Error saving vendor details:', error);
//         }
//     };

//     // Function to fetch vendor details from the backend
//     const fetchVendorDetails = async () => {
//         try {
//             const response = await axios.get('http://localhost:5000/api/vendor');
//             setVendorDetails(response.data);
//         } catch (error) {
//             console.error('Error fetching vendor details:', error);
//         }
//     };

//     // Function to handle adding a new counter
//     const handleAddCounter = () => {
//         setShowAddCounterPopup(true);
//     };

//     // Function to handle saving a counter
//     const handleSaveCounterName = () => {
//         saveCounterName(counterName);
//         setShowAddCounterPopup(false);
//         setCounterName('');
//     };

//     // Function to handle cancelling adding a counter
//     const handleCancelAddCounterPopup = () => {
//         setShowAddCounterPopup(false);
//         setCounterName('');
//     };

//     // Function to handle adding a new denomination
//     const handleAddDenomination = () => {
//         setShowAddDenominationForm(true);
//     };

//     // Function to handle saving a denomination
//     const handleSaveDenomination = () => {
//         saveDenomination(denomination);
//         setShowAddDenominationForm(false);
//         setDenomination('');
//     };

//     // Function to handle cancelling adding a denomination
//     const handleCancelAddDenomination = () => {
//         setShowAddDenominationForm(false);
//         setDenomination('');
//     };

//     // Function to handle adding a new bank/cheque detail
//     const handleAddBankCheque = () => {
//         setShowAddBankChequeForm(true);
//     };

//     // Function to handle saving a bank/cheque detail
//     const handleSaveBankCheque = () => {
//         saveBankChequeDetails();
//         setShowAddBankChequeForm(false);
//         setBankCheque({
//             type: 'bank',
//             bankName: '',
//             accountNumber: '',
//             ifscCode: '',
//             branchName: '',
//             chequeNumber: ''
//         });
//     };

//     // Function to handle cancelling adding a bank/cheque detail
//     const handleCancelAddBankCheque = () => {
//         setShowAddBankChequeForm(false);
//         setBankCheque({
//             type: 'bank',
//             bankName: '',
//             accountNumber: '',
//             ifscCode: '',
//             branchName: '',
//             chequeNumber: ''
//         });
//     };

//     // Function to handle adding a new vendor detail
//     const handleAddVendor = () => {
//         setShowAddVendorPopup(true); // Show the vendor popup
//     };

//     // Function to handle closing the vendor popup
//     const handleCloseVendorPopup = () => {
//         setShowAddVendorPopup(false);
//     };

//     // Fetch counter names, denominations, bank/cheque details, and vendor details on component mount
//     useEffect(() => {
//         fetchCounterNames();
//         fetchDenominations();
//         fetchBankChequeDetails();
//         fetchVendorDetails();
//     }, []);

//     return (
//         <div className="p-4">
//             <h2 className="text-2xl font-bold mb-4">Settings</h2>
//             <div className="grid grid-cols-2 gap-4">
//                 {/* First Box: Counter Name (For Receipts) */}
//                 <div className="bg-blue-200 p-6 rounded-lg shadow-md relative">
//                     <h3 className="text-lg font-semibold mb-4">Counter Name (For Receipts)</h3>
//                     <button className="absolute top-0 right-0 p-2" onClick={handleAddCounter}>
//                         <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
//                         </svg>
//                     </button>
//                     {showAddCounterPopup && (
//                         <AddCounterPopup
//                             onSave={handleSaveCounterName} // Pass saveCounterName function as prop
//                             onClose={handleCancelAddCounterPopup}
//                             counterName={counterName}
//                             setCounterName={setCounterName}
//                         />
//                     )}
//                     <ul>
//                         {counterNames.map((name, index) => (
//                             <li key={index}>{name}</li>
//                         ))}
//                     </ul>
//                 </div>

//                 {/* Second Box: Denominations */}
//                 <div className="bg-yellow-200 p-6 rounded-lg shadow-md relative">
//                     <h3 className="text-lg font-semibold mb-4">Denominations</h3>
//                     <button className="absolute top-0 right-0 p-2" onClick={handleAddDenomination}>
//                         <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
//                         </svg>
//                     </button>
//                     {showAddDenominationForm && (
//                         <div className="mt-4">
//                             <input
//                                 type="text"
//                                 value={denomination}
//                                 onChange={(e) => setDenomination(e.target.value)}
//                                 placeholder="Enter denomination details"
//                                 className="border p-2 rounded-md w-full"
//                             />
//                             <div className="mt-2 flex justify-end">
//                                 <button type="button" className="bg-blue-500 text-white px-4 py-2 rounded-md mr-2" onClick={handleSaveDenomination}>Save</button>
//                                 <button type="button" className="bg-gray-500 text-white px-4 py-2 rounded-md" onClick={handleCancelAddDenomination}>Cancel</button>
//                             </div>
//                         </div>
//                     )}
//                     <ul>
//                         {denominations.map((denomination, index) => (
//                             <li key={index}>{denomination}</li>
//                         ))}
//                     </ul>
//                 </div>

//                 {/* Third Box: Vendor Details */}
//                 <div className="bg-green-200 p-6 rounded-lg shadow-md relative">
//                     <h3 className="text-lg font-semibold mb-4">Vendor Details</h3>
//                     <button className="absolute top-0 right-0 p-2" onClick={handleAddVendor}>
//                         <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
//                         </svg>
//                     </button>
//                     {showAddVendorPopup && (
//                         <AddVendorPopup
//                             onSave={saveVendorDetails} // Pass saveVendorDetails function as prop
//                             onClose={handleCloseVendorPopup}
//                         />
//                     )}
//                     <ul>
//                         {vendorDetails.map((vendor, index) => (
//                             <li key={index} className="flex">
//                                 <p className="mr-4">{vendor.vendorName}</p>
//                                 <p>{vendor.businessName}</p>
//                                 <p>{vendor.phone}</p>
//                                 <p>{vendor.email}</p>
//                                 <p>{vendor.address}</p>
//                                 <p>{vendor.panNo}</p>
//                                 <p>{vendor.gstNo}</p>
//                             </li>
//                         ))}
//                     </ul>
//                 </div>

//                 {/* Fourth Box: Bank/Cheque Details */}
//                 <div className="bg-red-200 p-6 rounded-lg shadow-md relative">
//                     <h3 className="text-lg font-semibold mb-4">Bank/Cheque Details</h3>
//                     <button className="absolute top-0 right-0 p-2" onClick={handleAddBankCheque}>
//                         <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
//                         </svg>
//                     </button>
//                     {showAddBankChequeForm && (
//                         <div className="mt-4">
//                             <input
//                                 type="text"
//                                 value={bankCheque.bankName}
//                                 onChange={(e) => setBankCheque({ ...bankCheque, bankName: e.target.value })}
//                                 placeholder="Enter Bank Name"
//                                 className="border p-2 rounded-md w-full"
//                             />
//                             <input
//                                 type="text"
//                                 value={bankCheque.accountNumber}
//                                 onChange={(e) => setBankCheque({ ...bankCheque, accountNumber: e.target.value })}
//                                 placeholder="Enter Account Number"
//                                 className="border p-2 rounded-md w-full mt-2"
//                             />
//                             <input
//                                 type="text"
//                                 value={bankCheque.ifscCode}
//                                 onChange={(e) => setBankCheque({ ...bankCheque, ifscCode: e.target.value })}
//                                 placeholder="Enter IFSC Code"
//                                 className="border p-2 rounded-md w-full mt-2"
//                             />
//                             <input
//                                 type="text"
//                                 value={bankCheque.branchName}
//                                 onChange={(e) => setBankCheque({ ...bankCheque, branchName: e.target.value })}
//                                 placeholder="Enter Branch Name"
//                                 className="border p-2 rounded-md w-full mt-2"
//                             />
//                             <input
//                                 type="text"
//                                 value={bankCheque.chequeNumber}
//                                 onChange={(e) => setBankCheque({ ...bankCheque, chequeNumber: e.target.value })}
//                                 placeholder="Enter Cheque Number"
//                                 className="border p-2 rounded-md w-full mt-2"
//                             />
//                             <div className="mt-2 flex justify-end">
//                                 <button type="button" className="bg-blue-500 text-white px-4 py-2 rounded-md mr-2" onClick={handleSaveBankCheque}>Save</button>
//                                 <button type="button" className="bg-gray-500 text-white px-4 py-2 rounded-md" onClick={handleCancelAddBankCheque}>Cancel</button>
//                             </div>
//                         </div>
//                     )}
//                     <ul>
//                         {bankChequeDetails.map((detail, index) => (
//                             <li key={index} className="flex">
//                                 <p className="mr-4">{detail.bankName}</p>
//                                 <p>{detail.accountNumber}</p>
//                                 <p>{detail.ifscCode}</p>
//                                 <p>{detail.branchName}</p>
//                                 <p>{detail.chequeNumber}</p>
//                             </li>
//                         ))}
//                     </ul>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Settings;















// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import AddVendorPopup from './AddVendorPopup';
// import AddCounterPopup from './AddCounterPopup';
// import AddDenominationPopup from './AddDenominationPopup'; // Import the new popup component

// const Settings = () => {
//     const [showAddCounterPopup, setShowAddCounterPopup] = useState(false);
//     const [counterName, setCounterName] = useState('');
//     const [counterNames, setCounterNames] = useState([]);
//     const [showAddDenominationPopup, setShowAddDenominationPopup] = useState(false); // Changed state name
//     const [denomination, setDenomination] = useState('');
//     const [denominations, setDenominations] = useState([]);
//     const [showAddBankChequeForm, setShowAddBankChequeForm] = useState(false);
//     const [bankCheque, setBankCheque] = useState({
//         type: 'bank',
//         bankName: '',
//         accountNumber: '',
//         ifscCode: '',
//         branchName: '',
//         chequeNumber: ''
//     });
//     const [bankChequeDetails, setBankChequeDetails] = useState([]);
//     const [showAddVendorPopup, setShowAddVendorPopup] = useState(false);
//     const [vendorDetails, setVendorDetails] = useState([]);

//     const saveCounterName = async (counterName) => {
//         try {
//             const response = await axios.post('http://localhost:5000/api/counter', { counterName });
//             console.log('Counter saved:', response.data);
//             fetchCounterNames();
//         } catch (error) {
//             console.error('Error saving counter name:', error);
//         }
//     };

//     const fetchCounterNames = async () => {
//         try {
//             const response = await axios.get('http://localhost:5000/api/counter');
//             setCounterNames(response.data);
//         } catch (error) {
//             console.error('Error fetching counter names:', error);
//         }
//     };

//     const saveDenomination = async (denominationName) => {
//         try {
//             const response = await axios.post('http://localhost:5000/api/denomination', { name: denominationName });
//             console.log('Denomination saved:', response.data);
//             fetchDenominations();
//         } catch (error) {
//             console.error('Error saving denomination:', error);
//         }
//     };

//     const fetchDenominations = async () => {
//         try {
//             const response = await axios.get('http://localhost:5000/api/denomination');
//             setDenominations(response.data);
//         } catch (error) {
//             console.error('Error fetching denominations:', error);
//         }
//     };

//     const saveBankChequeDetails = async () => {
//         try {
//             const response = await axios.post('http://localhost:5000/api/bankcheque', bankCheque);
//             console.log('Bank/Cheque details saved:', response.data);
//             fetchBankChequeDetails();
//         } catch (error) {
//             console.error('Error saving bank/cheque details:', error);
//         }
//     };

//     const fetchBankChequeDetails = async () => {
//         try {
//             const response = await axios.get('http://localhost:5000/api/bankcheque');
//             setBankChequeDetails(response.data);
//         } catch (error) {
//             console.error('Error fetching bank/cheque details:', error);
//         }
//     };

//     const saveVendorDetails = async (vendor) => {
//         try {
//             const response = await axios.post('http://localhost:5000/api/vendor', vendor);
//             console.log('Vendor details saved:', response.data);
//             fetchVendorDetails();
//         } catch (error) {
//             console.error('Error saving vendor details:', error);
//         }
//     };

//     const fetchVendorDetails = async () => {
//         try {
//             const response = await axios.get('http://localhost:5000/api/vendor');
//             setVendorDetails(response.data);
//         } catch (error) {
//             console.error('Error fetching vendor details:', error);
//         }
//     };

//     const handleAddCounter = () => {
//         setShowAddCounterPopup(true);
//     };

//     const handleSaveCounterName = () => {
//         saveCounterName(counterName);
//         setShowAddCounterPopup(false);
//         setCounterName('');
//     };

//     const handleCancelAddCounterPopup = () => {
//         setShowAddCounterPopup(false);
//         setCounterName('');
//     };

//     const handleAddDenomination = () => {
//         setShowAddDenominationPopup(true); // Changed state name
//     };

//     const handleSaveDenomination = (denominationName) => {
//         saveDenomination(denominationName);
//         setShowAddDenominationPopup(false); // Changed state name
//         setDenomination('');
//     };

//     const handleCancelAddDenomination = () => {
//         setShowAddDenominationPopup(false); // Changed state name
//         setDenomination('');
//     };

//     const handleAddBankCheque = () => {
//         setShowAddBankChequeForm(true);
//     };

//     const handleSaveBankCheque = () => {
//         saveBankChequeDetails();
//         setShowAddBankChequeForm(false);
//         setBankCheque({
//             type: 'bank',
//             bankName: '',
//             accountNumber: '',
//             ifscCode: '',
//             branchName: '',
//             chequeNumber: ''
//         });
//     };

//     const handleCancelAddBankCheque = () => {
//         setShowAddBankChequeForm(false);
//         setBankCheque({
//             type: 'bank',
//             bankName: '',
//             accountNumber: '',
//             ifscCode: '',
//             branchName: '',
//             chequeNumber: ''
//         });
//     };

//     const handleAddVendor = () => {
//         setShowAddVendorPopup(true);
//     };

//     const handleCloseVendorPopup = () => {
//         setShowAddVendorPopup(false);
//     };

//     useEffect(() => {
//         fetchCounterNames();
//         fetchDenominations();
//         fetchBankChequeDetails();
//         fetchVendorDetails();
//     }, []);

//     return (
//         <div className="p-4">
//             <h2 className="text-2xl font-bold mb-4">Settings</h2>
//             <div className="grid grid-cols-2 gap-4">
//                 <div className="bg-blue-200 p-6 rounded-lg shadow-md relative">
//                     <h3 className="text-lg font-semibold mb-4">Counter Name (For Receipts)</h3>
//                     <button className="absolute top-0 right-0 p-2" onClick={handleAddCounter}>
//                         <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
//                         </svg>
//                     </button>
//                     {showAddCounterPopup && (
//                         <AddCounterPopup
//                             onSave={handleSaveCounterName}
//                             onClose={handleCancelAddCounterPopup}
//                             counterName={counterName}
//                             setCounterName={setCounterName}
//                         />
//                     )}
//                     <ul>
//                         {counterNames.map((name, index) => (
//                             <li key={index}>{name}</li>
//                         ))}
//                     </ul>
//                 </div>

//                 <div className="bg-yellow-200 p-6 rounded-lg shadow-md relative">
//                     <h3 className="text-lg font-semibold mb-4">Denominations</h3>
//                     <button className="absolute top-0 right-0 p-2" onClick={handleAddDenomination}>
//                         <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
//                         </svg>
//                     </button>
//                     {showAddDenominationPopup && ( // Changed state name
//                         <AddDenominationPopup
//                             onSave={handleSaveDenomination} // Changed prop name
//                             onClose={handleCancelAddDenomination} // Changed prop name
//                         />
//                     )}
//                     <ul>
//                         {denominations.map((denomination, index) => (
//                             <li key={index}>{denomination}</li>
//                         ))}
//                     </ul>
//                 </div>

//                 <div className="bg-green-200 p-6 rounded-lg shadow-md relative">
//                     <h3 className="text-lg font-semibold mb-4">Vendor Details</h3>
//                     <button className="absolute top-0 right-0 p-2" onClick={handleAddVendor}>
//                         <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
//                         </svg>
//                     </button>
//                     {showAddVendorPopup && (
//                         <AddVendorPopup
//                             onSave={saveVendorDetails}
//                             onClose={handleCloseVendorPopup}
//                         />
//                     )}
//                     <ul>
//                         {vendorDetails.map((vendor, index) => (
//                             <li key={index} className="flex">
//                                 <p className="mr-4">{vendor.vendorName}</p>
//                                 <p>{vendor.businessName}</p>
//                                 <p>{vendor.phone}</p>
//                                 <p>{vendor.email}</p>
//                                 <p>{vendor.address}</p>
//                                 <p>{vendor.panNo}</p>
//                                 <p>{vendor.gstNo}</p>
//                             </li>
//                         ))}
//                     </ul>
//                 </div>

//                 <div className="bg-red-200 p-6 rounded-lg shadow-md relative">
//                     <h3 className="text-lg font-semibold mb-4">Bank/Cheque Details</h3>
//                     <button className="absolute top-0 right-0 p-2" onClick={handleAddBankCheque}>
//                         <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
//                         </svg>
//                     </button>
//                     {showAddBankChequeForm && (
//                         <div className="mt-4">
//                             <input
//                                 type="text"
//                                 value={bankCheque.bankName}
//                                 onChange={(e) => setBankCheque({ ...bankCheque, bankName: e.target.value })}
//                                 placeholder="Enter Bank Name"
//                                 className="border p-2 rounded-md w-full"
//                             />
//                             <input
//                                 type="text"
//                                 value={bankCheque.accountNumber}
//                                 onChange={(e) => setBankCheque({ ...bankCheque, accountNumber: e.target.value })}
//                                 placeholder="Enter Account Number"
//                                 className="border p-2 rounded-md w-full mt-2"
//                             />
//                             <input
//                                 type="text"
//                                 value={bankCheque.ifscCode}
//                                 onChange={(e) => setBankCheque({ ...bankCheque, ifscCode: e.target.value })}
//                                 placeholder="Enter IFSC Code"
//                                 className="border p-2 rounded-md w-full mt-2"
//                             />
//                             <input
//                                 type="text"
//                                 value={bankCheque.branchName}
//                                 onChange={(e) => setBankCheque({ ...bankCheque, branchName: e.target.value })}
//                                 placeholder="Enter Branch Name"
//                                 className="border p-2 rounded-md w-full mt-2"
//                             />
//                             <input
//                                 type="text"
//                                 value={bankCheque.chequeNumber}
//                                 onChange={(e) => setBankCheque({ ...bankCheque, chequeNumber: e.target.value })}
//                                 placeholder="Enter Cheque Number"
//                                 className="border p-2 rounded-md w-full mt-2"
//                             />
//                             <div className="mt-2 flex justify-end">
//                                 <button type="button" className="bg-blue-500 text-white px-4 py-2 rounded-md mr-2" onClick={handleSaveBankCheque}>Save</button>
//                                 <button type="button" className="bg-gray-500 text-white px-4 py-2 rounded-md" onClick={handleCancelAddBankCheque}>Cancel</button>
//                             </div>
//                         </div>
//                     )}
//                     <ul>
//                         {bankChequeDetails.map((detail, index) => (
//                             <li key={index} className="flex">
//                                 <p className="mr-4">{detail.bankName}</p>
//                                 <p>{detail.accountNumber}</p>
//                                 <p>{detail.ifscCode}</p>
//                                 <p>{detail.branchName}</p>
//                                 <p>{detail.chequeNumber}</p>
//                             </li>
//                         ))}
//                     </ul>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Settings;










//================================
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AddVendorPopup from './AddVendorPopup';
import AddCounterPopup from './AddCounterPopup';
import AddDenominationPopup from './AddDenominationPopup';
import AddBankChequePopup from './AddBankChequePopup'; // Import the new popup component

const Settings = () => {
    const [showAddCounterPopup, setShowAddCounterPopup] = useState(false);
    const [counterName, setCounterName] = useState('');
    const [counterNames, setCounterNames] = useState([]);
    const [showAddDenominationPopup, setShowAddDenominationPopup] = useState(false);
    const [denomination, setDenomination] = useState('');
    const [denominations, setDenominations] = useState([]);
    const [showAddVendorPopup, setShowAddVendorPopup] = useState(false);
    const [vendorDetails, setVendorDetails] = useState([]);
    const [showAddBankChequePopup, setShowAddBankChequePopup] = useState(false);
    const [bankChequeDetails, setBankChequeDetails] = useState([]);

    const saveCounterName = async (counterName) => {
        try {
            const response = await axios.post('http://localhost:5000/api/counter', { counterName });
            console.log('Counter saved:', response.data);
            fetchCounterNames();
        } catch (error) {
            console.error('Error saving counter name:', error);
        }
    };

    const fetchCounterNames = async () => {
        try {
            const response = await axios.get('http://localhost:5000/api/counter');
            setCounterNames(response.data);
        } catch (error) {
            console.error('Error fetching counter names:', error);
        }
    };

    const saveDenomination = async (denominationName) => {
        try {
            const response = await axios.post('http://localhost:5000/api/denomination', { name: denominationName });
            console.log('Denomination saved:', response.data);
            fetchDenominations();
        } catch (error) {
            console.error('Error saving denomination:', error);
        }
    };

    const fetchDenominations = async () => {
        try {
            const response = await axios.get('http://localhost:5000/api/denomination');
            setDenominations(response.data);
        } catch (error) {
            console.error('Error fetching denominations:', error);
        }
    };

    const saveBankChequeDetails = async (bankCheque) => {
        try {
            const response = await axios.post('http://localhost:5000/api/bankcheque/bankcheque', bankCheque);
            console.log('Bank/Cheque details saved:', response.data);
            fetchBankChequeDetails();
        } catch (error) {
            console.error('Error saving bank/cheque details:', error);
        }
    };
    
    const fetchBankChequeDetails = async () => {
        try {
            const response = await axios.get('http://localhost:5000/api/bankcheque/bankcheque'); // Corrected endpoint
            setBankChequeDetails(response.data);
        } catch (error) {
            console.error('Error fetching bank/cheque details:', error);
        }
    };
    
    const saveVendorDetails = async (vendor) => {
        try {
            const response = await axios.post('http://localhost:5000/api/vendor', vendor);
            console.log('Vendor details saved:', response.data);
            fetchVendorDetails();
        } catch (error) {
            console.error('Error saving vendor details:', error);
        }
    };

    const fetchVendorDetails = async () => {
        try {
            const response = await axios.get('http://localhost:5000/api/vendor');
            setVendorDetails(response.data);
        } catch (error) {
            console.error('Error fetching vendor details:', error);
        }
    };

    const handleAddCounter = () => {
        setShowAddCounterPopup(true);
    };

    const handleSaveCounterName = () => {
        saveCounterName(counterName);
        setShowAddCounterPopup(false);
        setCounterName('');
    };

    const handleCancelAddCounterPopup = () => {
        setShowAddCounterPopup(false);
        setCounterName('');
    };

    const handleAddDenomination = () => {
        setShowAddDenominationPopup(true);
    };

    const handleSaveDenomination = (denominationName) => {
        saveDenomination(denominationName);
        setShowAddDenominationPopup(false);
        setDenomination('');
    };

    const handleCancelAddDenomination = () => {
        setShowAddDenominationPopup(false);
        setDenomination('');
    };

    const handleAddVendor = () => {
        setShowAddVendorPopup(true);
    };

    const handleCloseVendorPopup = () => {
        setShowAddVendorPopup(false);
    };

    const handleAddBankCheque = () => {
        setShowAddBankChequePopup(true);
    };

    const handleSaveBankCheque = (bankCheque) => {
        saveBankChequeDetails(bankCheque);
        setShowAddBankChequePopup(false);
    };

    const handleCloseBankChequePopup = () => {
        setShowAddBankChequePopup(false);
    };

    useEffect(() => {
        fetchCounterNames();
        fetchDenominations();
        fetchBankChequeDetails();
        fetchVendorDetails();
    }, []);

    return (
        <div className="p-4">
            <h2 className="text-2xl font-bold mb-4">Settings</h2>
            <div className="grid grid-cols-2 gap-4">
                <div className="bg-blue-200 p-6 rounded-lg shadow-md relative">
                    <h3 className="text-lg font-semibold mb-4">Counter Name (For Receipts)</h3>
                    <button className="absolute top-0 right-0 p-2 bg-blue-600 text-white rounded-full shadow-md" onClick={handleAddCounter}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                        </svg>
                    </button>
                    {showAddCounterPopup && (
                        <AddCounterPopup
                            onSave={handleSaveCounterName}
                            onClose={handleCancelAddCounterPopup}
                            counterName={counterName}
                            setCounterName={setCounterName}
                        />
                    )}
                    <ul>
                        {counterNames.map((name, index) => (
                            <li key={index}>{name}</li>
                        ))}
                    </ul>
                </div>

                <div className="bg-yellow-200 p-6 rounded-lg shadow-md relative">
                    <h3 className="text-lg font-semibold mb-4">Denominations</h3>
                    <button className="absolute top-0 right-0 p-2 bg-blue-600 text-white rounded-full shadow-md" onClick={handleAddDenomination}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                        </svg>
                    </button>
                    {showAddDenominationPopup && (
                        <AddDenominationPopup
                            onSave={handleSaveDenomination}
                            onClose={handleCancelAddDenomination}
                        />
                    )}
                    <ul>
                        {denominations.map((denomination, index) => (
                            <li key={index}>{denomination}</li>
                        ))}
                    </ul>
                </div>

                <div className="bg-green-200 p-6 rounded-lg shadow-md relative">
                    <h3 className="text-lg font-semibold mb-4">Vendor Details</h3>
                    <button className="absolute top-0 right-0 p-2 bg-blue-600 text-white rounded-full shadow-md" onClick={handleAddVendor}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                        </svg>
                    </button>
                    {showAddVendorPopup && (
                        <AddVendorPopup
                            onSave={saveVendorDetails}
                            onClose={handleCloseVendorPopup}
                        />
                    )}
                    <ul>
                        {vendorDetails.map((vendor, index) => (
                            <li key={index} className="flex">
                                <p className="mr-4">{vendor.vendorName}</p>
                                <p>{vendor.businessName}</p>
                                <p>{vendor.phone}</p>
                                <p>{vendor.email}</p>
                                <p>{vendor.address}</p>
                                <p>{vendor.panNo}</p>
                                <p>{vendor.gstNo}</p>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="bg-red-200 p-6 rounded-lg shadow-md relative">
                    <h3 className="text-lg font-semibold mb-4">Bank/Cheque Details</h3>
                    <button className="absolute top-0 right-0 p-2 bg-blue-600 text-white rounded-full shadow-md" onClick={handleAddBankCheque}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                        </svg>
                    </button>
                    {showAddBankChequePopup && (
                        <AddBankChequePopup
                            onSave={handleSaveBankCheque}
                            onClose={handleCloseBankChequePopup}
                        />
                    )}
                    <ul>
                        {bankChequeDetails.map((detail, index) => (
                            <li key={index} className="flex">
                                <p className="mr-4">{detail.bankName}</p>
                                <p>{detail.accountNumber}</p>
                                {/* <p>{detail.ifscCode}</p>
                                <p>{detail.branchName}</p>
                                <p>{detail.chequeNumber}</p> */}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Settings;


// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import AddVendorPopup from './AddVendorPopup';
// import AddCounterPopup from './AddCounterPopup';
// import AddDenominationPopup from './AddDenominationPopup';
// import AddBankChequePopup from './AddBankChequePopup'; // Import the new popup component

// const Settings = () => {
//     const [showAddCounterPopup, setShowAddCounterPopup] = useState(false);
//     const [counterName, setCounterName] = useState('');
//     const [counterNames, setCounterNames] = useState([]);
//     const [showAddDenominationPopup, setShowAddDenominationPopup] = useState(false);
//     const [denomination, setDenomination] = useState('');
//     const [denominations, setDenominations] = useState([]);
//     const [showAddVendorPopup, setShowAddVendorPopup] = useState(false);
//     const [vendorDetails, setVendorDetails] = useState([]);
//     const [showAddBankChequePopup, setShowAddBankChequePopup] = useState(false);
//     const [bankChequeDetails, setBankChequeDetails] = useState([]);

//     const saveCounterName = async (counterName) => {
//         try {
//             const response = await axios.post('http://localhost:5000/api/counter', { counterName });
//             console.log('Counter saved:', response.data);
//             fetchCounterNames();
//         } catch (error) {
//             console.error('Error saving counter name:', error);
//         }
//     };

//     const fetchCounterNames = async () => {
//         try {
//             const response = await axios.get('http://localhost:5000/api/counter');
//             setCounterNames(response.data);
//         } catch (error) {
//             console.error('Error fetching counter names:', error);
//         }
//     };

//     const saveDenomination = async (denominationName) => {
//         try {
//             const response = await axios.post('http://localhost:5000/api/denomination', { name: denominationName });
//             console.log('Denomination saved:', response.data);
//             fetchDenominations();
//         } catch (error) {
//             console.error('Error saving denomination:', error);
//         }
//     };

//     const fetchDenominations = async () => {
//         try {
//             const response = await axios.get('http://localhost:5000/api/denomination');
//             setDenominations(response.data);
//         } catch (error) {
//             console.error('Error fetching denominations:', error);
//         }
//     };

//     const saveBankChequeDetails = async (bankCheque) => {
//         try {
//             const response = await axios.post('http://localhost:5000/api/bankcheque/bankcheque', bankCheque);
//             console.log('Bank/Cheque details saved:', response.data);
//             fetchBankChequeDetails();
//         } catch (error) {
//             console.error('Error saving bank/cheque details:', error);
//         }
//     };
    
    
//     const fetchBankChequeDetails = async () => {
//         try {
//             const response = await axios.get('http://localhost:5000/api/bankcheque/bankcheque'); // Corrected endpoint
//             setBankChequeDetails(response.data);
//         } catch (error) {
//             console.error('Error fetching bank/cheque details:', error);
//         }
//     };
    


//     const saveVendorDetails = async (vendor) => {
//         try {
//             const response = await axios.post('http://localhost:5000/api/vendor', vendor);
//             console.log('Vendor details saved:', response.data);
//             fetchVendorDetails();
//         } catch (error) {
//             console.error('Error saving vendor details:', error);
//         }
//     };

//     const fetchVendorDetails = async () => {
//         try {
//             const response = await axios.get('http://localhost:5000/api/vendor');
//             setVendorDetails(response.data);
//         } catch (error) {
//             console.error('Error fetching vendor details:', error);
//         }
//     };

//     const handleAddCounter = () => {
//         setShowAddCounterPopup(true);
//     };

//     const handleSaveCounterName = () => {
//         saveCounterName(counterName);
//         setShowAddCounterPopup(false);
//         setCounterName('');
//     };

//     const handleCancelAddCounterPopup = () => {
//         setShowAddCounterPopup(false);
//         setCounterName('');
//     };

//     const handleAddDenomination = () => {
//         setShowAddDenominationPopup(true);
//     };

//     const handleSaveDenomination = (denominationName) => {
//         saveDenomination(denominationName);
//         setShowAddDenominationPopup(false);
//         setDenomination('');
//     };

//     const handleCancelAddDenomination = () => {
//         setShowAddDenominationPopup(false);
//         setDenomination('');
//     };

//     const handleAddVendor = () => {
//         setShowAddVendorPopup(true);
//     };

//     const handleCloseVendorPopup = () => {
//         setShowAddVendorPopup(false);
//     };

//     const handleAddBankCheque = () => {
//         setShowAddBankChequePopup(true);
//     };

//     const handleSaveBankCheque = (bankCheque) => {
//         saveBankChequeDetails(bankCheque);
//         setShowAddBankChequePopup(false);
//     };

//     const handleCloseBankChequePopup = () => {
//         setShowAddBankChequePopup(false);
//     };

//     useEffect(() => {
//         fetchCounterNames();
//         fetchDenominations();
//         fetchBankChequeDetails();
//         fetchVendorDetails();
//     }, []);

//     return (
//         <div className="p-4">
//             <h2 className="text-2xl font-bold mb-4">Settings</h2>
//             <div className="grid grid-cols-2 gap-4">
//                 <div className="bg-blue-200 p-6 rounded-lg shadow-md relative">
//                     <h3 className="text-lg font-semibold mb-4">Counter Name (For Receipts)</h3>
//                     <button className="absolute top-0 right-0 p-2" onClick={handleAddCounter}>
//                         <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
//                         </svg>
//                     </button>
//                     {showAddCounterPopup && (
//                         <AddCounterPopup
//                             onSave={handleSaveCounterName}
//                             onClose={handleCancelAddCounterPopup}
//                             counterName={counterName}
//                             setCounterName={setCounterName}
//                         />
//                     )}
//                     <ul>
//                         {counterNames.map((name, index) => (
//                             <li key={index}>{name}</li>
//                         ))}
//                     </ul>
//                 </div>

//                 <div className="bg-yellow-200 p-6 rounded-lg shadow-md relative">
//                     <h3 className="text-lg font-semibold mb-4">Denominations</h3>
//                     <button className="absolute top-0 right-0 p-2" onClick={handleAddDenomination}>
//                         <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
//                         </svg>
//                     </button>
//                     {showAddDenominationPopup && (
//                         <AddDenominationPopup
//                             onSave={handleSaveDenomination}
//                             onClose={handleCancelAddDenomination}
//                         />
//                     )}
//                     <ul>
//                         {denominations.map((denomination, index) => (
//                             <li key={index}>{denomination}</li>
//                         ))}
//                     </ul>
//                 </div>

//                 <div className="bg-green-200 p-6 rounded-lg shadow-md relative">
//                     <h3 className="text-lg font-semibold mb-4">Vendor Details</h3>
//                     <button className="absolute top-0 right-0 p-2" onClick={handleAddVendor}>
//                         <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
//                         </svg>
//                     </button>
//                     {showAddVendorPopup && (
//                         <AddVendorPopup
//                             onSave={saveVendorDetails}
//                             onClose={handleCloseVendorPopup}
//                         />
//                     )}
//                     <ul>
//                         {vendorDetails.map((vendor, index) => (
//                             <li key={index} className="flex">
//                                 <p className="mr-4">{vendor.vendorName}</p>
//                                 <p>{vendor.businessName}</p>
//                                 <p>{vendor.phone}</p>
//                                 <p>{vendor.email}</p>
//                                 <p>{vendor.address}</p>
//                                 <p>{vendor.panNo}</p>
//                                 <p>{vendor.gstNo}</p>
//                             </li>
//                         ))}
//                     </ul>
//                 </div>

//                 <div className="bg-red-200 p-6 rounded-lg shadow-md relative">
//                     <h3 className="text-lg font-semibold mb-4">Bank/Cheque Details</h3>
//                     <button className="absolute top-0 right-0 p-2" onClick={handleAddBankCheque}>
//                         <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
//                         </svg>
//                     </button>
//                     {showAddBankChequePopup && (
//                         <AddBankChequePopup
//                             onSave={handleSaveBankCheque}
//                             onClose={handleCloseBankChequePopup}
//                         />
//                     )}
//                     <ul>
//                         {bankChequeDetails.map((detail, index) => (
//                             <li key={index} className="flex">
//                                 <p className="mr-4">{detail.bankName}</p>
//                                 <p>{detail.accountNumber}</p>
//                                 {/* <p>{detail.ifscCode}</p>
//                                 <p>{detail.branchName}</p>
//                                 <p>{detail.chequeNumber}</p> */}
//                             </li>
//                         ))}
//                     </ul>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Settings;




















































// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import VendorFormPopup from './VendorFormPopup';
// const Settings = () => {
//     const [showVendorFormPopup, setShowVendorFormPopup] = useState(false);
//     const [vendorDetails, setVendorDetails] = useState([]);
//     const [showAddCounterForm, setShowAddCounterForm] = useState(false);
//     const [counterName, setCounterName] = useState('');
//     const [counterNames, setCounterNames] = useState([]);
//     const [showAddDenominationForm, setShowAddDenominationForm] = useState(false);
//     const [denomination, setDenomination] = useState('');
//     const [denominations, setDenominations] = useState([]);
//     const [showAddBankChequeForm, setShowAddBankChequeForm] = useState(false);
//     const [bankCheque, setBankCheque] = useState({
//         type: 'bank',
//         bankName: '',
//         accountNumber: '',
//         ifscCode: '',
//         branchName: '',
//         chequeNumber: ''
//     });
//     const [bankChequeDetails, setBankChequeDetails] = useState([]);
//     const [showAddVendorForm, setShowAddVendorForm] = useState(false);
//     const [vendor, setVendor] = useState({
//         vendorName: '',
//         businessName: '',
//         phone: '',
//         email: '',
//         address: '',
//         panNo: '',
//         gstNo: ''
//     });
//     const handleAddVendor = () => {
//         setShowVendorFormPopup(true);
//     };

//     const handleCancelAddVendor = () => {
//         setShowVendorFormPopup(false);
//     };

//     const handleCloseVendorFormPopup = () => {
//         setShowVendorFormPopup(false);
//     };

//     const saveVendorDetails = async (vendor) => {
//         try {
//             const response = await axios.post('http://localhost:5000/api/vendor', vendor);
//             console.log('Vendor details saved:', response.data);
//             fetchVendorDetails(); // Fetch updated vendor details
//             setShowVendorFormPopup(false); // Close the pop-up after saving
//         } catch (error) {
//             console.error('Error saving vendor details:', error);
//         }
//     };

//     const fetchVendorDetails = async () => {
//         try {
//             const response = await axios.get('http://localhost:5000/api/vendor');
//             setVendorDetails(response.data);
//         } catch (error) {
//             console.error('Error fetching vendor details:', error);
//         }
//     };

//     useEffect(() => {
//         fetchVendorDetails();
//     }, []);




//     // Function to save counter name to the backend
//     const saveCounterName = async (counterName) => {
//         try {
//             const response = await axios.post('http://localhost:5000/api/counter', { counterName });
//             console.log('Counter saved:', response.data);
//             // Fetch the updated counter names after saving
//             fetchCounterNames();
//         } catch (error) {
//             console.error('Error saving counter name:', error);
//         }
//     };

//     // Function to fetch counter names from the backend
//     const fetchCounterNames = async () => {
//         try {
//             const response = await axios.get('http://localhost:5000/api/counter');
//             setCounterNames(response.data);
//         } catch (error) {
//             console.error('Error fetching counter names:', error);
//         }
//     };

//     // Function to save denomination to the backend
//     const saveDenomination = async (denominationName) => {
//         try {
//             const response = await axios.post('http://localhost:5000/api/denomination', { name: denominationName });
//             console.log('Denomination saved:', response.data);
//             // Fetch the updated denominations after saving
//             fetchDenominations();
//         } catch (error) {
//             console.error('Error saving denomination:', error);
//         }
//     };

//     // Function to fetch denominations from the backend
//     const fetchDenominations = async () => {
//         try {
//             const response = await axios.get('http://localhost:5000/api/denomination');
//             setDenominations(response.data);
//         } catch (error) {
//             console.error('Error fetching denominations:', error);
//         }
//     };

//     // Function to save bank/cheque details to the backend
//     const saveBankChequeDetails = async () => {
//         try {
//             const response = await axios.post('http://localhost:5000/api/bankcheque', bankCheque);
//             console.log('Bank/Cheque details saved:', response.data);
//             // Fetch the updated bank/cheque details after saving
//             fetchBankChequeDetails();
//         } catch (error) {
//             console.error('Error saving bank/cheque details:', error);
//         }
//     };

//     // Function to fetch bank/cheque details from the backend
//     const fetchBankChequeDetails = async () => {
//         try {
//             const response = await axios.get('http://localhost:5000/api/bankcheque');
//             setBankChequeDetails(response.data);
//         } catch (error) {
//             console.error('Error fetching bank/cheque details:', error);
//         }
//     };

//     // Function to save vendor details to the backend
   

//     // Function to fetch vendor details from the backend
   
//     // Function to handle adding a new counter
//     const handleAddCounter = () => {
//         setShowAddCounterForm(true);
//     };

//     // Function to handle saving a counter
//     const handleSaveCounter = () => {
//         saveCounterName(counterName);
//         setShowAddCounterForm(false);
//         setCounterName('');
//     };

//     // Function to handle cancelling adding a counter
//     const handleCancelAddCounter = () => {
//         setShowAddCounterForm(false);
//         setCounterName('');
//     };

//     // Function to handle adding a new denomination
//     const handleAddDenomination = () => {
//         setShowAddDenominationForm(true);
//     };

//     // Function to handle saving a denomination
//     const handleSaveDenomination = () => {
//         saveDenomination(denomination);
//         setShowAddDenominationForm(false);
//         setDenomination('');
//     };

//     // Function to handle cancelling adding a denomination
//     const handleCancelAddDenomination = () => {
//         setShowAddDenominationForm(false);
//         setDenomination('');
//     };

//     // Function to handle adding a new bank/cheque detail
//     const handleAddBankCheque = () => {
//         setShowAddBankChequeForm(true);
//     };

//     // Function to handle saving a bank/cheque detail
//     const handleSaveBankCheque = () => {
//         saveBankChequeDetails();
//         setShowAddBankChequeForm(false);
//         setBankCheque({
//             type: 'bank',
//             bankName: '',
//             accountNumber: '',
//             ifscCode: '',
//             branchName: '',
//             chequeNumber: ''
//         });
//     };

//     // Function to handle cancelling adding a bank/cheque detail
//     const handleCancelAddBankCheque = () => {
//         setShowAddBankChequeForm(false);
//         setBankCheque({
//             type: 'bank',
//             bankName: '',
//             accountNumber: '',
//             ifscCode: '',
//             branchName: '',
//             chequeNumber: ''
//         });
//     };

//     // Function to handle adding a new vendor detail
    

//     // Function to handle saving a vendor detail
//     const handleSaveVendor = () => {
//         saveVendorDetails(vendor); // Pass the vendor object as an argument
//         setShowAddVendorForm(false);
//         setVendor({
//             vendorName: '',
//             businessName: '',
//             phone: '',
//             email: '',
//             address: '',
//             panNo: '',
//             gstNo: ''
//         });
//     };

//     // Function to handle cancelling adding a vendor detail
  

//     // Fetch counter names on component mount
//     useEffect(() => {
//         fetchCounterNames();
//         fetchDenominations();
//         fetchBankChequeDetails();
//         fetchVendorDetails();
//     }, []);

//     return (
//         <div className="p-4">
//             <h2 className="text-2xl font-bold mb-4">Settings</h2>
//             <div className="grid grid-cols-2 gap-4">
//                 {/* First Box: Counter Name (For Receipts) */}
//                 <div className="bg-blue-200 p-6 rounded-lg shadow-md relative">
//                     <h3 className="text-lg font-semibold mb-4">Counter Name (For Receipts)</h3>
//                     <button className="absolute top-0 right-0 p-2" onClick={handleAddCounter}>
//                         <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
//                         </svg>
//                     </button>
//                     {showAddCounterForm && (
//                         <div className="mt-4">
//                             <input
//                                 type="text"
//                                 value={counterName}
//                                 onChange={(e) => setCounterName(e.target.value)}
//                                 placeholder="Enter counter name"
//                                 className="border p-2 rounded-md w-full"
//                             />
//                             <div className="mt-2 flex justify-end">
//                                 <button type="button" className="bg-blue-500 text-white px-4 py-2 rounded-md mr-2" onClick={handleSaveCounter}>Save</button>
//                                 <button type="button" className="bg-gray-500 text-white px-4 py-2 rounded-md" onClick={handleCancelAddCounter}>Cancel</button>
//                             </div>
//                         </div>
//                     )}
//                     <ul>
//                         {counterNames.map((name, index) => (
//                             <li key={index}>{name}</li>
//                         ))}
//                     </ul>
//                 </div>

//                 {/* Second Box: Denominations */}
//                 <div className="bg-yellow-200 p-6 rounded-lg shadow-md relative">
//                     <h3 className="text-lg font-semibold mb-4">Denominations</h3>
//                     <button className="absolute top-0 right-0 p-2" onClick={handleAddDenomination}>
//                         <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
//                         </svg>
//                     </button>
//                     {showAddDenominationForm && (
//                         <div className="mt-4">
//                             <input
//                                 type="text"
//                                 value={denomination}
//                                 onChange={(e) => setDenomination(e.target.value)}
//                                 placeholder="Enter denomination details"
//                                 className="border p-2 rounded-md w-full"
//                             />
//                             <div className="mt-2 flex justify-end">
//                                 <button type="button" className="bg-blue-500 text-white px-4 py-2 rounded-md mr-2" onClick={handleSaveDenomination}>Save</button>
//                                 <button type="button" className="bg-gray-500 text-white px-4 py-2 rounded-md" onClick={handleCancelAddDenomination}>Cancel</button>
//                             </div>
//                         </div>
//                     )}
//                     <ul>
//                         {denominations.map((denomination, index) => (
//                             <li key={index}>{denomination}</li>
//                         ))}
//                     </ul>
//                 </div>

//                 {/* Third Box: Vendor Details */}
//                 <div className="bg-green-200 p-6 rounded-lg shadow-md relative">
//                     <h3 className="text-lg font-semibold mb-4">Vendor Details</h3>
//                     <button className="absolute top-0 right-0 p-2" onClick={handleAddVendor}>
//                         <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
//                         </svg>
//                     </button>
//                     {showVendorFormPopup && (
//                         <VendorFormPopup
//                         onSaveVendor={saveVendorDetails}
//                         onCancelAddVendor={handleCancelAddVendor}
//                         onClose={handleCloseVendorFormPopup}
//                     />
//                     )}
//                     <ul>
//                         {vendorDetails.map((vendor, index) => (
//                             <li key={index} className="flex">
//                                 <p className="mr-4">{vendor.vendorName}</p>
//                                 <p>{vendor.businessName}</p>
//                                 {/* Display other vendor details */}
//                             </li>
//                         ))}
//                     </ul>
//                 </div>

//                 {/* Fourth Box: Bank/Cheque Details */}
//                 <div className="bg-red-200 p-6 rounded-lg shadow-md relative">
//                     <h3 className="text-lg font-semibold mb-4">Bank/Cheque Details</h3>
//                     <button className="absolute top-0 right-0 p-2" onClick={handleAddBankCheque}>
//                         <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
//                         </svg>
//                     </button>
//                     {showAddBankChequeForm && (
//                         <div className="mt-4">
//                             <input
//                                 type="radio"
//                                 value="bank"
//                                 checked={bankCheque.type === 'bank'}
//                                 onChange={() => setBankCheque({ ...bankCheque, type: 'bank' })}
//                                 className="mr-2"
//                             />
//                             <label htmlFor="bank">Bank</label>
//                             <input
//                                 type="radio"
//                                 value="cheque"
//                                 checked={bankCheque.type === 'cheque'}
//                                 onChange={() => setBankCheque({ ...bankCheque, type: 'cheque' })}
//                                 className="ml-4 mr-2"
//                             />
//                             <label htmlFor="cheque">Cheque</label>
//                             <input
//                                 type="text"
//                                 value={bankCheque.bankName}
//                                 onChange={(e) => setBankCheque({ ...bankCheque, bankName: e.target.value })}
//                                 placeholder="Enter bank name"
//                                 className="border p-2 rounded-md mb-2 w-full"
//                             />
//                             <input
//                                 type="text"
//                                 value={bankCheque.accountNumber}
//                                 onChange={(e) => setBankCheque({ ...bankCheque, accountNumber: e.target.value })}
//                                 placeholder="Enter account number"
//                                 className="border p-2 rounded-md mb-2 w-full"
//                             />
//                             <input
//                                 type="text"
//                                 value={bankCheque.ifscCode}
//                                 onChange={(e) => setBankCheque({ ...bankCheque, ifscCode: e.target.value })}
//                                 placeholder="Enter IFSC code"
//                                 className="border p-2 rounded-md mb-2 w-full"
//                             />
//                             <input
//                                 type="text"
//                                 value={bankCheque.branchName}
//                                 onChange={(e) => setBankCheque({ ...bankCheque, branchName: e.target.value })}
//                                 placeholder="Enter branch name"
//                                 className="border p-2 rounded-md mb-2 w-full"
//                             />
//                             {bankCheque.type === 'cheque' && (
//                                 <input
//                                     type="text"
//                                     value={bankCheque.chequeNumber}
//                                     onChange={(e) => setBankCheque({ ...bankCheque, chequeNumber: e.target.value })}
//                                     placeholder="Enter cheque number"
//                                     className="border p-2 rounded-md mb-2 w-full"
//                                 />
//                             )}
//                             <div className="mt-2 flex justify-end">
//                                 <button type="button" className="bg-blue-500 text-white px-4 py-2 rounded-md mr-2" onClick={handleSaveBankCheque}>Save</button>
//                                 <button type="button" className="bg-gray-500 text-white px-4 py-2 rounded-md" onClick={handleCancelAddBankCheque}>Cancel</button>
//                             </div>
//                         </div>
//                     )}
//                     <ul>
//                         {bankChequeDetails.map((details, index) => (
//                             <li key={index} className="flex">
//                                 <p className="mr-4">{details.bankName}</p>
//                                 <p>{details.accountNumber}</p>
//                             </li>
//                         ))}
//                     </ul>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Settings;
