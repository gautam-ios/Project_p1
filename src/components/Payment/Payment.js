// // // // // // // // // // // Payment.js
// // // // // // // // // // import React, { useState } from 'react';

// // // // // // // // // // const Payment = () => {
// // // // // // // // // //   const [paymentType, setPaymentType] = useState('cash'); // State for payment type
// // // // // // // // // //   const [paymentDate, setPaymentDate] = useState('');
// // // // // // // // // //   const [paymentNumber, setPaymentNumber] = useState('');
// // // // // // // // // //   const [paymentTo, setPaymentTo] = useState('');
// // // // // // // // // //   const [paymentAmount, setPaymentAmount] = useState('');
// // // // // // // // // //   const [paymentRemark, setPaymentRemark] = useState('');

// // // // // // // // // //   // Function to handle payment type change
// // // // // // // // // //   const handlePaymentTypeChange = (event) => {
// // // // // // // // // //     setPaymentType(event.target.value);
// // // // // // // // // //   };

// // // // // // // // // //   // Function to handle form submission
// // // // // // // // // //   const handleSubmit = (event) => {
// // // // // // // // // //     event.preventDefault();
// // // // // // // // // //     // Handle form submission logic here (save payment data)
// // // // // // // // // //   };

// // // // // // // // // //   return (
// // // // // // // // // //     <div className="p-4">
// // // // // // // // // //       <h2 className="text-2xl font-bold mb-4">Make Payment</h2>
// // // // // // // // // //       <form onSubmit={handleSubmit}>
// // // // // // // // // //         <div className="flex items-center mb-4">
// // // // // // // // // //           <label className="mr-2">Payment Type:</label>
// // // // // // // // // //           <input type="radio" id="cash" value="cash" checked={paymentType === 'cash'} onChange={handlePaymentTypeChange} />
// // // // // // // // // //           <label htmlFor="cash" className="mr-2 ml-1">Cash</label>
// // // // // // // // // //           <input type="radio" id="check" value="check" checked={paymentType === 'check'} onChange={handlePaymentTypeChange} />
// // // // // // // // // //           <label htmlFor="check" className="mr-2 ml-1">Check</label>
// // // // // // // // // //         </div>
// // // // // // // // // //         {/* Add other form fields (Payment Date, Payment Number, etc.) here */}
// // // // // // // // // //         <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 mr-2">Save</button>
// // // // // // // // // //         <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 mr-2">Save & Print</button>
// // // // // // // // // //         <button type="button" className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2">Cancel</button>
// // // // // // // // // //       </form>
// // // // // // // // // //       {/* Payment history table */}
// // // // // // // // // //       <h2 className="text-2xl font-bold mt-8 mb-4">Payment History</h2>
// // // // // // // // // //       {/* Add payment history table here */}
// // // // // // // // // //     </div>
// // // // // // // // // //   );
// // // // // // // // // // };

// // // // // // // // // // export default Payment;



// // // // // // // // // import React, { useState } from 'react';

// // // // // // // // // const Payment = () => {
// // // // // // // // //   const [paymentType, setPaymentType] = useState('cash');
// // // // // // // // //   const [paymentDate, setPaymentDate] = useState('');
// // // // // // // // //   const [paymentNumber, setPaymentNumber] = useState('');
// // // // // // // // //   const [paymentTo, setPaymentTo] = useState('');
// // // // // // // // //   const [paymentAmount, setPaymentAmount] = useState('');
// // // // // // // // //   const [paymentRemark, setPaymentRemark] = useState('');
// // // // // // // // //   const [paymentHistory, setPaymentHistory] = useState([]);

// // // // // // // // //   const handlePaymentTypeChange = (event) => {
// // // // // // // // //     setPaymentType(event.target.value);
// // // // // // // // //   };

// // // // // // // // //   const handleSubmit = (event) => {
// // // // // // // // //     event.preventDefault();
// // // // // // // // //     const newPayment = {
// // // // // // // // //       paymentType,
// // // // // // // // //       paymentDate,
// // // // // // // // //       paymentNumber,
// // // // // // // // //       paymentTo,
// // // // // // // // //       paymentAmount,
// // // // // // // // //       paymentRemark,
// // // // // // // // //     };
// // // // // // // // //     setPaymentHistory([...paymentHistory, newPayment]);
// // // // // // // // //     // Clear form fields after submission
// // // // // // // // //     setPaymentDate('');
// // // // // // // // //     setPaymentNumber('');
// // // // // // // // //     setPaymentTo('');
// // // // // // // // //     setPaymentAmount('');
// // // // // // // // //     setPaymentRemark('');
// // // // // // // // //   };

// // // // // // // // //   return (
// // // // // // // // //     <div className="p-4">
// // // // // // // // //       <h2 className="text-2xl font-bold mb-4">Make Payment</h2>
// // // // // // // // //       <form onSubmit={handleSubmit}>
// // // // // // // // //         <div className="flex items-center mb-4">
// // // // // // // // //           <label className="mr-2">Payment Type:</label>
// // // // // // // // //           <input type="radio" id="cash" value="cash" checked={paymentType === 'cash'} onChange={handlePaymentTypeChange} />
// // // // // // // // //           <label htmlFor="cash" className="mr-2 ml-1">Cash</label>
// // // // // // // // //           <input type="radio" id="check" value="check" checked={paymentType === 'check'} onChange={handlePaymentTypeChange} />
// // // // // // // // //           <label htmlFor="check" className="mr-2 ml-1">Check</label>
// // // // // // // // //         </div>
// // // // // // // // //         <div className="flex items-center mb-4">
// // // // // // // // //           <label className="mr-2">Payment Date:</label>
// // // // // // // // //           <input type="date" value={paymentDate} onChange={(e) => setPaymentDate(e.target.value)} />
// // // // // // // // //         </div>
// // // // // // // // //         <div className="flex items-center mb-4">
// // // // // // // // //           <label className="mr-2">Payment Number:</label>
// // // // // // // // //           <input type="text" value={paymentNumber} onChange={(e) => setPaymentNumber(e.target.value)} />
// // // // // // // // //         </div>
// // // // // // // // //         <div className="flex items-center mb-4">
// // // // // // // // //           <label className="mr-2">Payment To:</label>
// // // // // // // // //           <input type="text" value={paymentTo} onChange={(e) => setPaymentTo(e.target.value)} />
// // // // // // // // //         </div>
// // // // // // // // //         <div className="flex items-center mb-4">
// // // // // // // // //           <label className="mr-2">Payment Amount:</label>
// // // // // // // // //           <input type="number" value={paymentAmount} onChange={(e) => setPaymentAmount(e.target.value)} />
// // // // // // // // //         </div>
// // // // // // // // //         <div className="flex items-center mb-4">
// // // // // // // // //           <label className="mr-2">Remarks:</label>
// // // // // // // // //           <input type="text" value={paymentRemark} onChange={(e) => setPaymentRemark(e.target.value)} />
// // // // // // // // //         </div>
// // // // // // // // //         <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 mr-2">Save</button>
// // // // // // // // //         <button type="button" className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2">Cancel</button>
// // // // // // // // //       </form>
// // // // // // // // //       <div>
// // // // // // // // //         <h2 className="text-2xl font-bold mt-8 mb-4">Payment History</h2>
// // // // // // // // //         <table className="table-auto">
// // // // // // // // //           <thead>
// // // // // // // // //             <tr>
// // // // // // // // //               <th className="px-4 py-2">Date</th>
// // // // // // // // //               <th className="px-4 py-2">Payment Number</th>
// // // // // // // // //               <th className="px-4 py-2">Payment To</th>
// // // // // // // // //               <th className="px-4 py-2">Amount</th>
// // // // // // // // //             </tr>
// // // // // // // // //           </thead>
// // // // // // // // //           <tbody>
// // // // // // // // //             {paymentHistory
// // // // // // // // //               .sort((a, b) => new Date(b.paymentDate) - new Date(a.paymentDate)) // Sort by date
// // // // // // // // //               .map((payment, index) => (
// // // // // // // // //                 <tr key={index}>
// // // // // // // // //                   <td className="border px-4 py-2">{payment.paymentDate}</td>
// // // // // // // // //                   <td className="border px-4 py-2">{payment.paymentNumber}</td>
// // // // // // // // //                   <td className="border px-4 py-2">{payment.paymentTo}</td>
// // // // // // // // //                   <td className="border px-4 py-2">{payment.paymentAmount}</td>
// // // // // // // // //                 </tr>
// // // // // // // // //               ))}
// // // // // // // // //           </tbody>
// // // // // // // // //         </table>
// // // // // // // // //       </div>
// // // // // // // // //     </div>
// // // // // // // // //   );
// // // // // // // // // };

// // // // // // // // // export default Payment;





// // // // // // // import React, { useState } from 'react';

// // // // // // // const Payment = () => {
// // // // // // //   const [paymentType, setPaymentType] = useState('cash');
// // // // // // //   const [paymentDate, setPaymentDate] = useState('');
// // // // // // //   const [paymentNumber, setPaymentNumber] = useState('');
// // // // // // //   const [paymentTo, setPaymentTo] = useState('');
// // // // // // //   const [paymentAmount, setPaymentAmount] = useState('');
// // // // // // //   const [paymentRemark, setPaymentRemark] = useState('');
// // // // // // //   const [paymentHistory, setPaymentHistory] = useState([]);
// // // // // // //   const [filteredPaymentHistory, setFilteredPaymentHistory] = useState([]);

// // // // // // //   const handlePaymentTypeChange = (event) => {
// // // // // // //     setPaymentType(event.target.value);
// // // // // // //   };

// // // // // // //   const handleSubmit = (event) => {
// // // // // // //     event.preventDefault();
// // // // // // //     const newPayment = {
// // // // // // //       paymentType,
// // // // // // //       paymentDate,
// // // // // // //       paymentNumber,
// // // // // // //       paymentTo,
// // // // // // //       paymentAmount,
// // // // // // //       paymentRemark,
// // // // // // //     };
// // // // // // //     setPaymentHistory([...paymentHistory, newPayment]);
// // // // // // //     setFilteredPaymentHistory([...paymentHistory, newPayment]); // Update filtered payment history as well
// // // // // // //     // Clear form fields after submission
// // // // // // //     setPaymentDate('');
// // // // // // //     setPaymentNumber('');
// // // // // // //     setPaymentTo('');
// // // // // // //     setPaymentAmount('');
// // // // // // //     setPaymentRemark('');
// // // // // // //   };

// // // // // // //   const handleDateFilter = (event) => {
// // // // // // //     const selectedDate = event.target.value;
// // // // // // //     if (selectedDate) {
// // // // // // //       const filteredData = paymentHistory.filter(payment => payment.paymentDate === selectedDate);
// // // // // // //       setFilteredPaymentHistory(filteredData);
// // // // // // //     } else {
// // // // // // //       setFilteredPaymentHistory(paymentHistory); // If no date is selected, show all data
// // // // // // //     }
// // // // // // //   };

// // // // // // //   return (
// // // // // // //     <div className="p-4">
// // // // // // //       <h2 className="text-2xl font-bold mb-4">Make Payment</h2>
// // // // // // //       <form onSubmit={handleSubmit}>
// // // // // // //       <div className="flex items-center mb-4">
// // // // // // //           <label className="mr-2">Payment Type:</label>
// // // // // // //           <input type="radio" id="cash" value="cash" checked={paymentType === 'cash'} onChange={handlePaymentTypeChange} />
// // // // // // //           <label htmlFor="cash" className="mr-2 ml-1">Cash</label>
// // // // // // //           <input type="radio" id="check" value="check" checked={paymentType === 'check'} onChange={handlePaymentTypeChange} />
// // // // // // //           <label htmlFor="check" className="mr-2 ml-1">Check</label>
// // // // // // //         </div>
// // // // // // //         <div className="flex items-center mb-4">
// // // // // // //           <label className="mr-2">Payment Date:</label>
// // // // // // //           <input type="date" value={paymentDate} onChange={(e) => setPaymentDate(e.target.value)} />
// // // // // // //         </div>
// // // // // // //         <div className="flex items-center mb-4">
// // // // // // //           <label className="mr-2">Payment Number:</label>
// // // // // // //           <input type="text" value={paymentNumber} onChange={(e) => setPaymentNumber(e.target.value)} />
// // // // // // //         </div>
// // // // // // //         <div className="flex items-center mb-4">
// // // // // // //           <label className="mr-2">Payment To:</label>
// // // // // // //           <input type="text" value={paymentTo} onChange={(e) => setPaymentTo(e.target.value)} />
// // // // // // //         </div>
// // // // // // //         <div className="flex items-center mb-4">
// // // // // // //           <label className="mr-2">Payment Amount:</label>
// // // // // // //           <input type="number" value={paymentAmount} onChange={(e) => setPaymentAmount(e.target.value)} />
// // // // // // //         </div>
// // // // // // //         <div className="flex items-center mb-4">
// // // // // // //           <label className="mr-2">Remarks:</label>
// // // // // // //           <input type="text" value={paymentRemark} onChange={(e) => setPaymentRemark(e.target.value)} />
// // // // // // //         </div>
// // // // // // //         <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 mr-2">Save</button>
// // // // // // //         <button type="button" className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2">Cancel</button>
// // // // // // //       </form>
// // // // // // //       <div>
// // // // // // //         <h2 className="text-2xl font-bold mt-8 mb-4">Payment History</h2>
// // // // // // //         <div className="mb-4">
// // // // // // //           <label htmlFor="dateFilter" className="mr-2">Filter by Date:</label>
// // // // // // //           <input type="date" id="dateFilter" onChange={handleDateFilter} />
// // // // // // //         </div>
// // // // // // //         <table className="table-auto">
// // // // // // //           <thead>
// // // // // // //             <tr>
// // // // // // //               <th className="px-4 py-2">Date</th>
// // // // // // //               <th className="px-4 py-2">Payment Number</th>
// // // // // // //               <th className="px-4 py-2">Payment To</th>
// // // // // // //               <th className="px-4 py-2">Amount</th>
// // // // // // //             </tr>
// // // // // // //           </thead>
// // // // // // //           <tbody>
// // // // // // //             {filteredPaymentHistory.map((payment, index) => (
// // // // // // //               <tr key={index}>
// // // // // // //                 <td className="border px-4 py-2">{payment.paymentDate}</td>
// // // // // // //                 <td className="border px-4 py-2">{payment.paymentNumber}</td>
// // // // // // //                 <td className="border px-4 py-2">{payment.paymentTo}</td>
// // // // // // //                 <td className="border px-4 py-2">{payment.paymentAmount}</td>
// // // // // // //               </tr>
// // // // // // //             ))}
// // // // // // //           </tbody>
// // // // // // //         </table>
// // // // // // //       </div>
// // // // // // //     </div>
// // // // // // //   );
// // // // // // // };

// // // // // // // export default Payment;

// // // // // // import React, { useState } from 'react';

// // // // // // const Payment = () => {
// // // // // //   const [paymentType, setPaymentType] = useState('cash');
// // // // // //   const [paymentDate, setPaymentDate] = useState('');
// // // // // //   const [paymentNumber, setPaymentNumber] = useState('');
// // // // // //   const [paymentTo, setPaymentTo] = useState('');
// // // // // //   const [paymentAmount, setPaymentAmount] = useState('');
// // // // // //   const [paymentRemark, setPaymentRemark] = useState('');
// // // // // //   const [paymentHistory, setPaymentHistory] = useState([]);
// // // // // //   const [filteredPaymentHistory, setFilteredPaymentHistory] = useState([]);

// // // // // //   const handlePaymentTypeChange = (event) => {
// // // // // //     setPaymentType(event.target.value);
// // // // // //   };

// // // // // //   const handleSubmit = (event) => {
// // // // // //     event.preventDefault();
// // // // // //     const newPayment = {
// // // // // //       paymentType,
// // // // // //       paymentDate,
// // // // // //       paymentNumber,
// // // // // //       paymentTo,
// // // // // //       paymentAmount,
// // // // // //       paymentRemark,
// // // // // //     };
// // // // // //     setPaymentHistory([...paymentHistory, newPayment]);
// // // // // //     setFilteredPaymentHistory([...paymentHistory, newPayment]); // Update filtered payment history as well
// // // // // //     // Clear form fields after submission
// // // // // //     setPaymentDate('');
// // // // // //     setPaymentNumber('');
// // // // // //     setPaymentTo('');
// // // // // //     setPaymentAmount('');
// // // // // //     setPaymentRemark('');
// // // // // //   };

// // // // // //   const handleDateFilter = (event) => {
// // // // // //     const selectedDate = event.target.value;
// // // // // //     if (selectedDate) {
// // // // // //       const filteredData = paymentHistory.filter(payment => payment.paymentDate === selectedDate);
// // // // // //       setFilteredPaymentHistory(filteredData);
// // // // // //     } else {
// // // // // //       setFilteredPaymentHistory(paymentHistory); // If no date is selected, show all data
// // // // // //     }
// // // // // //   };

// // // // // //   return (
// // // // // //     <div className="p-4">
// // // // // //       <h2 className="text-2xl font-bold mb-4">Make Payment</h2>
// // // // // //       <form onSubmit={handleSubmit}>
// // // // // //         <div className="flex items-center mb-4">
// // // // // //           <label className="mr-2">Payment Type:</label>
// // // // // //           <input type="radio" id="cash" value="cash" checked={paymentType === 'cash'} onChange={handlePaymentTypeChange} />
// // // // // //           <label htmlFor="cash" className="mr-2 ml-1">Cash</label>
// // // // // //           <input type="radio" id="check" value="check" checked={paymentType === 'check'} onChange={handlePaymentTypeChange} />
// // // // // //           <label htmlFor="check" className="mr-2 ml-1">Check</label>
// // // // // //         </div>
// // // // // //         <div className="flex items-center mb-4">
// // // // // //           <label className="mr-2">Payment Date:</label>
// // // // // //           <input type="date" value={paymentDate} onChange={(e) => setPaymentDate(e.target.value)} />
// // // // // //         </div>
// // // // // //         <div className="flex items-center mb-4">
// // // // // //           <label className="mr-2">Payment Number:</label>
// // // // // //           <input type="text" value={paymentNumber} onChange={(e) => setPaymentNumber(e.target.value)} />
// // // // // //         </div>
// // // // // //         <div className="flex items-center mb-4">
// // // // // //           <label className="mr-2">Payment To:</label>
// // // // // //           <input type="text" value={paymentTo} onChange={(e) => setPaymentTo(e.target.value)} />
// // // // // //         </div>
// // // // // //         <div className="flex items-center mb-4">
// // // // // //           <label className="mr-2">Payment Amount:</label>
// // // // // //           <input type="number" value={paymentAmount} onChange={(e) => setPaymentAmount(e.target.value)} />
// // // // // //         </div>
// // // // // //         <div className="flex items-center mb-4">
// // // // // //           <label className="mr-2">Remarks:</label>
// // // // // //           <input type="text" value={paymentRemark} onChange={(e) => setPaymentRemark(e.target.value)} />
// // // // // //         </div>
// // // // // //         <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 mr-2">Save</button>
// // // // // //         <button type="button" className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2">Cancel</button>
// // // // // //       </form>
// // // // // //       <div className="mt-8">
// // // // // //         <h2 className="text-2xl font-bold mb-4">Payment History</h2>
// // // // // //         <div className="mb-4">
// // // // // //           <label htmlFor="dateFilter" className="mr-2">Filter by Date:</label>
// // // // // //           <input type="date" id="dateFilter" onChange={handleDateFilter} />
// // // // // //         </div>
// // // // // //         <div className="overflow-hidden border rounded-lg shadow-md">
// // // // // //           <table className="w-full table-fixed">
// // // // // //             <thead>
// // // // // //               <tr>
// // // // // //                 <th className="px-4 py-2">Date</th>
// // // // // //                 <th className="px-4 py-2">Payment Number</th>
// // // // // //                 <th className="px-4 py-2">Payment To</th>
// // // // // //                 <th className="px-4 py-2">Amount</th>
// // // // // //               </tr>
// // // // // //             </thead>
// // // // // //             <tbody>
// // // // // //               {filteredPaymentHistory.map((payment, index) => (
// // // // // //                 <tr key={index}>
// // // // // //                   <td className="border px-4 py-2">{payment.paymentDate}</td>
// // // // // //                   <td className="border px-4 py-2">{payment.paymentNumber}</td>
// // // // // //                   <td className="border px-4 py-2">{payment.paymentTo}</td>
// // // // // //                   <td className="border px-4 py-2">{payment.paymentAmount}</td>
// // // // // //                 </tr>
// // // // // //               ))}
// // // // // //             </tbody>
// // // // // //           </table>
// // // // // //         </div>
// // // // // //       </div>
// // // // // //     </div>
// // // // // //   );
// // // // // // };

// // // // // // export default Payment;

// // // // // //=========================================================
// // // // // //''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''

// // // // // // import React, { useState } from 'react';

// // // // // // const Payment = () => {
// // // // // //   const [paymentType, setPaymentType] = useState('cash');
// // // // // //   const [paymentDate, setPaymentDate] = useState('');
// // // // // //   const [paymentNumber, setPaymentNumber] = useState('');
// // // // // //   const [paymentTo, setPaymentTo] = useState('');
// // // // // //   const [paymentAmount, setPaymentAmount] = useState('');
// // // // // //   const [paymentRemark, setPaymentRemark] = useState('');
// // // // // //   const [paymentHistory, setPaymentHistory] = useState([]);
// // // // // //   const [filteredPaymentHistory, setFilteredPaymentHistory] = useState([]);

// // // // // //   const handlePaymentTypeChange = (event) => {
// // // // // //     setPaymentType(event.target.value);
// // // // // //   };

// // // // // //   const handleSubmit = (event) => {
// // // // // //     event.preventDefault();
// // // // // //     const newPayment = {
// // // // // //       paymentType,
// // // // // //       paymentDate,
// // // // // //       paymentNumber,
// // // // // //       paymentTo,
// // // // // //       paymentAmount,
// // // // // //       paymentRemark,
// // // // // //     };
// // // // // //     setPaymentHistory([...paymentHistory, newPayment]);
// // // // // //     setFilteredPaymentHistory([...paymentHistory, newPayment]); // Update filtered payment history as well
// // // // // //     // Clear form fields after submission
// // // // // //     setPaymentDate('');
// // // // // //     setPaymentNumber('');
// // // // // //     setPaymentTo('');
// // // // // //     setPaymentAmount('');
// // // // // //     setPaymentRemark('');
// // // // // //   };

// // // // // //   const handleDateFilter = (event) => {
// // // // // //     const selectedDate = event.target.value;
// // // // // //     if (selectedDate) {
// // // // // //       const filteredData = paymentHistory.filter(payment => payment.paymentDate === selectedDate);
// // // // // //       setFilteredPaymentHistory(filteredData);
// // // // // //     } else {
// // // // // //       setFilteredPaymentHistory(paymentHistory); // If no date is selected, show all data
// // // // // //     }
// // // // // //   };
// // // // // // import React, { useState, useEffect } from 'react';
// // // // // // import axios from 'axios';

// // // // // // const Payment = () => {
// // // // // //   const [paymentType, setPaymentType] = useState('cash');
// // // // // //   const [paymentDate, setPaymentDate] = useState('');
// // // // // //   const [paymentNumber, setPaymentNumber] = useState('');
// // // // // //   const [paymentTo, setPaymentTo] = useState('');
// // // // // //   const [paymentAmount, setPaymentAmount] = useState('');
// // // // // //   const [paymentRemark, setPaymentRemark] = useState('');
// // // // // //   const [paymentHistory, setPaymentHistory] = useState([]);
// // // // // //   const [filteredPaymentHistory, setFilteredPaymentHistory] = useState([]);

// // // // // //   useEffect(() => {
// // // // // //     // Fetch payment history from the backend when the component mounts
// // // // // //     fetchPaymentHistory();
// // // // // //   }, []);

// // // // // //   const fetchPaymentHistory = async () => {
// // // // // //     try {
// // // // // //       const response = await axios.get('/api/payments');
// // // // // //       setPaymentHistory(response.data);
// // // // // //       setFilteredPaymentHistory(response.data);
// // // // // //     } catch (error) {
// // // // // //       console.error('Error fetching payment history:', error);
// // // // // //     }
// // // // // //   };

// // // // // //   const handlePaymentTypeChange = (event) => {
// // // // // //     setPaymentType(event.target.value);
// // // // // //   };

// // // // // //   const handleSubmit = async (event) => {
// // // // // //     event.preventDefault();
// // // // // //     const newPayment = {
// // // // // //       paymentType,
// // // // // //       paymentDate,
// // // // // //       paymentNumber,
// // // // // //       paymentTo,
// // // // // //       paymentAmount,
// // // // // //       paymentRemark,
// // // // // //     };
// // // // // //     try {
// // // // // //       // Send new payment data to the backend to be stored in the database
// // // // // //       await axios.post('/api/payments', newPayment);
// // // // // //       // After successful submission, fetch updated payment history
// // // // // //       fetchPaymentHistory();
// // // // // //       // Clear form fields after submission
// // // // // //       setPaymentDate('');
// // // // // //       setPaymentNumber('');
// // // // // //       setPaymentTo('');
// // // // // //       setPaymentAmount('');
// // // // // //       setPaymentRemark('');
// // // // // //     } catch (error) {
// // // // // //       console.error('Error saving payment:', error);
// // // // // //     }
// // // // // //   };

// // // // // //   const handleDateFilter = (event) => {
// // // // // //     const selectedDate = event.target.value;
// // // // // //     if (selectedDate) {
// // // // // //       const filteredData = paymentHistory.filter(payment => payment.paymentDate === selectedDate);
// // // // // //       setFilteredPaymentHistory(filteredData);
// // // // // //     } else {
// // // // // //       setFilteredPaymentHistory(paymentHistory); // If no date is selected, show all data
// // // // // //     }
// // // // // //   };
// // // // // //   return (
// // // // // //     <div className="p-4">
// // // // // //       <h2 className="text-2xl font-bold mb-4">Make Payment</h2>
// // // // // //       <form onSubmit={handleSubmit}>
// // // // // //         <div className="flex items-center mb-4">
// // // // // //           <label className="mr-2">Payment Type:</label>
// // // // // //           <input type="radio" id="cash" value="cash" checked={paymentType === 'cash'} onChange={handlePaymentTypeChange} />
// // // // // //           <label htmlFor="cash" className="mr-2 ml-1">Cash</label>
// // // // // //           <input type="radio" id="check" value="check" checked={paymentType === 'check'} onChange={handlePaymentTypeChange} />
// // // // // //           <label htmlFor="check" className="mr-2 ml-1">Check</label>
// // // // // //         </div>
// // // // // //         <div className="flex items-center mb-4">
// // // // // //           <label className="mr-2">Payment Date:</label>
// // // // // //           <input type="date" value={paymentDate} onChange={(e) => setPaymentDate(e.target.value)} />
// // // // // //         </div>
// // // // // //         <div className="flex items-center mb-4">
// // // // // //           <label className="mr-2">Payment Number:</label>
// // // // // //           <input type="text" value={paymentNumber} onChange={(e) => setPaymentNumber(e.target.value)} />
// // // // // //         </div>
// // // // // //         <div className="flex items-center mb-4">
// // // // // //           <label className="mr-2">Payment To:</label>
// // // // // //           <input type="text" value={paymentTo} onChange={(e) => setPaymentTo(e.target.value)} />
// // // // // //         </div>
// // // // // //         <div className="flex items-center mb-4">
// // // // // //           <label className="mr-2">Payment Amount:</label>
// // // // // //           <input type="number" value={paymentAmount} onChange={(e) => setPaymentAmount(e.target.value)} />
// // // // // //         </div>
// // // // // //         <div className="flex items-center mb-4">
// // // // // //           <label className="mr-2">Remarks:</label>
// // // // // //           <input type="text" value={paymentRemark} onChange={(e) => setPaymentRemark(e.target.value)} />
// // // // // //         </div>
// // // // // //         <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 mr-2">Save</button>
// // // // // //         <button type="button" className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2">Cancel</button>
// // // // // //       </form>
// // // // // //       <div className="mt-8">
// // // // // //         <h2 className="text-2xl font-bold mb-4">Payment History</h2>
// // // // // //         <div className="mb-4">
// // // // // //           <label htmlFor="dateFilter" className="mr-2">Filter by Date:</label>
// // // // // //           <input type="date" id="dateFilter" onChange={handleDateFilter} />
// // // // // //         </div>
// // // // // //         <div className="overflow-hidden border rounded-lg shadow-md">
// // // // // //         <div class="flex justify-between">
// // // // // //           <table class="mx-auto w-one-quarters table-fixed">
// // // // // //             <thead className="bg-gray-800 text-white">
// // // // // //               <tr>
// // // // // //                 <th className="px-2 py-2 w-1/4">Date</th>
// // // // // //                 <th className="px-2 py-2 w-1/4">Payment Number</th>
// // // // // //                 <th className="px-2 py-2 w-1/4">Payment To</th>
// // // // // //                 <th className="px-2 py-2 w-1/4">Amount</th>
// // // // // //               </tr>
// // // // // //             </thead>
// // // // // //             <tbody>
// // // // // //               {filteredPaymentHistory.map((payment, index) => (
// // // // // //                 <tr key={index} className={index % 2 === 0 ? "bg-gray-100" : ""}>
// // // // // //                   <td className="border px-2 py-2">{payment.paymentDate}</td>
// // // // // //                   <td className="border px-2 py-2">{payment.paymentNumber}</td>
// // // // // //                   <td className="border px-2 py-2">{payment.paymentTo}</td>
// // // // // //                   <td className="border px-2 py-2">{payment.paymentAmount}</td>
// // // // // //                 </tr>
// // // // // //               ))}
// // // // // //             </tbody>
// // // // // //           </table>
// // // // // //           </div>
// // // // // //         </div>
// // // // // //       </div>
// // // // // //     </div>
// // // // // //   );
// // // // // // };

// // // // // // export default Payment;




// // // // // //]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]
// // // // // // import React, { useState, useEffect } from 'react';
// // // // // // import axios from 'axios';

// // // // // // const Payment = () => {
// // // // // //   const [paymentType, setPaymentType] = useState('cash');
// // // // // //   const [paymentDate, setPaymentDate] = useState('');
// // // // // //   const [paymentNumber, setPaymentNumber] = useState('');
// // // // // //   const [paymentTo, setPaymentTo] = useState('');
// // // // // //   const [paymentAmount, setPaymentAmount] = useState('');
// // // // // //   const [paymentRemark, setPaymentRemark] = useState('');
// // // // // //   const [paymentHistory, setPaymentHistory] = useState([]);
// // // // // //   const [filteredPaymentHistory, setFilteredPaymentHistory] = useState([]);

// // // // // //   useEffect(() => {
// // // // // //     // Fetch payment history from the backend when the component mounts
// // // // // //     fetchPaymentHistory();
// // // // // //   }, []);

// // // // // //   const fetchPaymentHistory = async () => {
// // // // // //     try {
// // // // // //       const response = await axios.get('/api/payments');
// // // // // //       setPaymentHistory(response.data);
// // // // // //       setFilteredPaymentHistory(response.data);
// // // // // //     } catch (error) {
// // // // // //       console.error('Error fetching payment history:', error);
// // // // // //     }
// // // // // //   };

// // // // // //   const handlePaymentTypeChange = (event) => {
// // // // // //     setPaymentType(event.target.value);
// // // // // //   };

// // // // // //   const handleSubmit = async (event) => {
// // // // // //     event.preventDefault();
// // // // // //     const newPayment = {
// // // // // //       paymentType,
// // // // // //       paymentDate,
// // // // // //       paymentNumber,
// // // // // //       paymentTo,
// // // // // //       paymentAmount,
// // // // // //       paymentRemark,
// // // // // //     };
// // // // // //     try {
// // // // // //       // Send new payment data to the backend to be stored in the database
// // // // // //       await axios.post('/api/payments', newPayment);
// // // // // //       // After successful submission, fetch updated payment history
// // // // // //       fetchPaymentHistory();
// // // // // //       // Clear form fields after submission
// // // // // //       setPaymentDate('');
// // // // // //       setPaymentNumber('');
// // // // // //       setPaymentTo('');
// // // // // //       setPaymentAmount('');
// // // // // //       setPaymentRemark('');
// // // // // //     } catch (error) {
// // // // // //       console.error('Error saving payment:', error);
// // // // // //     }
// // // // // //   };

// // // // // //   const handleDateFilter = (event) => {
// // // // // //     const selectedDate = event.target.value;
// // // // // //     if (selectedDate) {
// // // // // //       const filteredData = paymentHistory.filter(payment => payment.paymentDate === selectedDate);
// // // // // //       setFilteredPaymentHistory(filteredData);
// // // // // //     } else {
// // // // // //       setFilteredPaymentHistory(paymentHistory); // If no date is selected, show all data
// // // // // //     }
// // // // // //   };

// // // // // //   return (
// // // // // //     <div className="p-4">
// // // // // //       <h2 className="text-2xl font-bold mb-4">Make Payment</h2>
// // // // // //       <form onSubmit={handleSubmit}>
// // // // // //         <div className="flex items-center mb-4">
// // // // // //           <label className="mr-2">Payment Type:</label>
// // // // // //           <input type="radio" id="cash" value="cash" checked={paymentType === 'cash'} onChange={handlePaymentTypeChange} />
// // // // // //           <label htmlFor="cash" className="mr-2 ml-1">Cash</label>
// // // // // //           <input type="radio" id="check" value="check" checked={paymentType === 'check'} onChange={handlePaymentTypeChange} />
// // // // // //           <label htmlFor="check" className="mr-2 ml-1">Check</label>
// // // // // //         </div>
// // // // // //         <div className="flex items-center mb-4">
// // // // // //           <label className="mr-2">Payment Date:</label>
// // // // // //           <input type="date" value={paymentDate} onChange={(e) => setPaymentDate(e.target.value)} />
// // // // // //         </div>
// // // // // //         <div className="flex items-center mb-4">
// // // // // //           <label className="mr-2">Payment Number:</label>
// // // // // //           <input type="text" value={paymentNumber} onChange={(e) => setPaymentNumber(e.target.value)} />
// // // // // //         </div>
// // // // // //         <div className="flex items-center mb-4">
// // // // // //           <label className="mr-2">Payment To:</label>
// // // // // //           <input type="text" value={paymentTo} onChange={(e) => setPaymentTo(e.target.value)} />
// // // // // //         </div>
// // // // // //         <div className="flex items-center mb-4">
// // // // // //           <label className="mr-2">Payment Amount:</label>
// // // // // //           <input type="number" value={paymentAmount} onChange={(e) => setPaymentAmount(e.target.value)} />
// // // // // //         </div>
// // // // // //         <div className="flex items-center mb-4">
// // // // // //           <label className="mr-2">Remarks:</label>
// // // // // //           <input type="text" value={paymentRemark} onChange={(e) => setPaymentRemark(e.target.value)} />
// // // // // //         </div>
// // // // // //         <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 mr-2">Save</button>
// // // // // //         <button type="button" className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2">Cancel</button>
// // // // // //       </form>
// // // // // //       <div className="mt-8">
// // // // // //         <h2 className="text-2xl font-bold mb-4">Payment History</h2>
// // // // // //         <div className="mb-4">
// // // // // //           <label htmlFor="dateFilter" className="mr-2">Filter by Date:</label>
// // // // // //           <input type="date" id="dateFilter" onChange={handleDateFilter} />
// // // // // //         </div>
// // // // // //         <div className="overflow-hidden border rounded-lg shadow-md">
// // // // // //           <table className="mx-auto w-one-quarters table-fixed">
// // // // // //             <thead className="bg-gray-800 text-white">
// // // // // //               <tr>
// // // // // //                 <th className="px-2 py-2 w-1/4">Date</th>
// // // // // //                 <th className="px-2 py-2 w-1/4">Payment Number</th>
// // // // // //                 <th className="px-2 py-2 w-1/4">Payment To</th>
// // // // // //                 <th className="px-2 py-2 w-1/4">Amount</th>
// // // // // //               </tr>
// // // // // //             </thead>
// // // // // //             <tbody>
// // // // // //               {filteredPaymentHistory.map((payment, index) => (
// // // // // //                 <tr key={index} className={index % 2 === 0 ? "bg-gray-100" : ""}>
// // // // // //                   <td className="border px-2 py-2">{payment.paymentDate}</td>
// // // // // //                   <td className="border px-2 py-2">{payment.paymentNumber}</td>
// // // // // //                   <td className="border px-2 py-2">{payment.paymentTo}</td>
// // // // // //                   <td className="border px-2 py-2">{payment.paymentAmount}</td>
// // // // // //                 </tr>
// // // // // //               ))}
// // // // // //             </tbody>
// // // // // //           </table>
// // // // // //         </div>
// // // // // //       </div>
// // // // // //     </div>
// // // // // //   );
// // // // // // };

// // // // // // export default Payment;


// // // // // // import React, { useState } from 'react';
// // // // // // import axios from 'axios';

// // // // // // const Payment = () => {
// // // // // //   const [paymentType, setPaymentType] = useState('cash');
// // // // // //   const [paymentDate, setPaymentDate] = useState('');
// // // // // //   const [paymentNumber, setPaymentNumber] = useState('');
// // // // // //   const [paymentTo, setPaymentTo] = useState('');
// // // // // //   const [paymentAmount, setPaymentAmount] = useState('');
// // // // // //   const [paymentRemark, setPaymentRemark] = useState('');

// // // // // //   const handleSubmit = async (event) => {
// // // // // //     event.preventDefault();
// // // // // //     const newPayment = {
// // // // // //       paymentType,
// // // // // //       paymentDate,
// // // // // //       paymentNumber,
// // // // // //       paymentTo,
// // // // // //       paymentAmount,
// // // // // //       paymentRemark,
// // // // // //     };
// // // // // //     try {
// // // // // //       await axios.post('http://localhost:5000/api/payments', newPayment);
// // // // // //       setPaymentDate('');
// // // // // //       setPaymentNumber('');
// // // // // //       setPaymentTo('');
// // // // // //       setPaymentAmount('');
// // // // // //       setPaymentRemark('');
// // // // // //       alert('Payment data stored successfully!');
// // // // // //     } catch (error) {
// // // // // //       console.error('Error saving payment:', error);
// // // // // //     }
// // // // // //   };

// // // // // //   return (
// // // // // //     <div className="p-4">
// // // // // //       <h2 className="text-2xl font-bold mb-4">Make Payment</h2>
// // // // // //       <form onSubmit={handleSubmit} className="bg-gray-100 p-6 rounded-lg shadow-md">
// // // // // //         <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
// // // // // //           <div>
// // // // // //             <label htmlFor="paymentType" className="block mb-1">Payment Type:</label>
// // // // // //             <select
// // // // // //               id="paymentType"
// // // // // //               className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:border-blue-500"
// // // // // //               value={paymentType}
// // // // // //               onChange={(e) => setPaymentType(e.target.value)}
// // // // // //             >
// // // // // //               <option value="cash">Cash</option>
// // // // // //               <option value="check">Check</option>
// // // // // //             </select>
// // // // // //           </div>
// // // // // //           <div>
// // // // // //             <label htmlFor="paymentDate" className="block mb-1">Payment Date:</label>
// // // // // //             <input
// // // // // //               type="date"
// // // // // //               id="paymentDate"
// // // // // //               className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:border-blue-500"
// // // // // //               value={paymentDate}
// // // // // //               onChange={(e) => setPaymentDate(e.target.value)}
// // // // // //             />
// // // // // //           </div>
// // // // // //           <div>
// // // // // //             <label htmlFor="paymentNumber" className="block mb-1">Payment Number:</label>
// // // // // //             <input
// // // // // //               type="text"
// // // // // //               id="paymentNumber"
// // // // // //               className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:border-blue-500"
// // // // // //               value={paymentNumber}
// // // // // //               onChange={(e) => setPaymentNumber(e.target.value)}
// // // // // //             />
// // // // // //           </div>
// // // // // //           <div>
// // // // // //             <label htmlFor="paymentTo" className="block mb-1">Payment To:</label>
// // // // // //             <input
// // // // // //               type="text"
// // // // // //               id="paymentTo"
// // // // // //               className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:border-blue-500"
// // // // // //               value={paymentTo}
// // // // // //               onChange={(e) => setPaymentTo(e.target.value)}
// // // // // //             />
// // // // // //           </div>
// // // // // //           <div>
// // // // // //             <label htmlFor="paymentAmount" className="block mb-1">Payment Amount:</label>
// // // // // //             <input
// // // // // //               type="number"
// // // // // //               id="paymentAmount"
// // // // // //               className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:border-blue-500"
// // // // // //               value={paymentAmount}
// // // // // //               onChange={(e) => setPaymentAmount(e.target.value)}
// // // // // //             />
// // // // // //           </div>
// // // // // //           <div>
// // // // // //             <label htmlFor="paymentRemark" className="block mb-1">Remarks:</label>
// // // // // //             <input
// // // // // //               type="text"
// // // // // //               id="paymentRemark"
// // // // // //               className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:border-blue-500"
// // // // // //               value={paymentRemark}
// // // // // //               onChange={(e) => setPaymentRemark(e.target.value)}
// // // // // //             />
// // // // // //           </div>
// // // // // //         </div>
// // // // // //         <div className="mt-4">
// // // // // //           <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 mr-2 rounded-md">Save</button>
// // // // // //           <button type="button" className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded-md">Cancel</button>
// // // // // //           <button type="button" className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md">Save & Print</button>
// // // // // //         </div>
// // // // // //       </form>
// // // // // //     </div>
// // // // // //   );
// // // // // // };

// // // // // // export default Payment;




// // // // // import React, { useState } from 'react';
// // // // // import axios from 'axios';

// // // // // const Payment = () => {
// // // // //   const [paymentType, setPaymentType] = useState('cash');
// // // // //   const [paymentDate, setPaymentDate] = useState('');
// // // // //   const [paymentNumber, setPaymentNumber] = useState('');
// // // // //   const [paymentTo, setPaymentTo] = useState('');
// // // // //   const [paymentAmount, setPaymentAmount] = useState('');
// // // // //   const [paymentRemark, setPaymentRemark] = useState('');
// // // // //   const [isSaved, setIsSaved] = useState(false);

// // // // //   const handlePaymentTypeChange = (event) => {
// // // // //     setPaymentType(event.target.value);
// // // // //   };

// // // // //   const handleSubmit = async (event) => {
// // // // //     event.preventDefault();
// // // // //     const newPayment = {
// // // // //       paymentType,
// // // // //       paymentDate,
// // // // //       paymentNumber,
// // // // //       paymentTo,
// // // // //       paymentAmount,
// // // // //       paymentRemark,
// // // // //     };
// // // // //     try {
// // // // //       await axios.post('http://localhost:5000/api/payments', newPayment);
// // // // //       setPaymentDate('');
// // // // //       setPaymentNumber('');
// // // // //       setPaymentTo('');
// // // // //       setPaymentAmount('');
// // // // //       setPaymentRemark('');
// // // // //       setIsSaved(true);
// // // // //       setTimeout(() => {
// // // // //         setIsSaved(false);
// // // // //       }, 3000);
// // // // //     } catch (error) {
// // // // //       console.error('Error saving payment:', error);
// // // // //     }
// // // // //   };


// // // // //   return (
// // // // //     <div className="p-4">
// // // // //       <h2 className="text-2xl font-bold mb-4">Make Payment</h2>
// // // // //       <form onSubmit={handleSubmit} className="bg-gray-100 p-6 rounded-lg shadow-md">
// // // // //         <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
// // // // //           <div className="flex items-center">
// // // // //             <label className="mr-2">Payment Type:</label>
// // // // //             <div>
// // // // //               <input type="radio" id="cash" value="cash" checked={paymentType === 'cash'} onChange={handlePaymentTypeChange} />
// // // // //               <label htmlFor="cash" className="mr-2 ml-1">Cash</label>
// // // // //             </div>
// // // // //             <div>
// // // // //               <input type="radio" id="check" value="check" checked={paymentType === 'check'} onChange={handlePaymentTypeChange} />
// // // // //               <label htmlFor="check" className="mr-2 ml-1">Check</label>
// // // // //             </div>
// // // // //           </div>
// // // // //           <div className="flex items-center">
// // // // //             <label className="mr-2">Payment Date:</label>
// // // // //             <input type="date" value={paymentDate} onChange={(e) => setPaymentDate(e.target.value)} />
// // // // //           </div>
// // // // //           <div className="flex items-center">
// // // // //             <label className="mr-2">Payment Number:</label>
// // // // //             <input type="text" value={paymentNumber} onChange={(e) => setPaymentNumber(e.target.value)} />
// // // // //           </div>
// // // // //           <div className="flex items-center">
// // // // //             <label className="mr-2">Payment To:</label>
// // // // //             <input type="text" value={paymentTo} onChange={(e) => setPaymentTo(e.target.value)} />
// // // // //           </div>
// // // // //           <div className="flex items-center">
// // // // //             <label className="mr-2">Payment Amount:</label>
// // // // //             <input type="number" value={paymentAmount} onChange={(e) => setPaymentAmount(e.target.value)} />
// // // // //           </div>
// // // // //           <div className="flex items-center">
// // // // //             <label className="mr-2">Remarks:</label>
// // // // //             <input type="text" value={paymentRemark} onChange={(e) => setPaymentRemark(e.target.value)} />
// // // // //           </div>
// // // // //         </div>
// // // // //         <div className="mt-4">
// // // // //           <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 mr-2 rounded-md">Save</button>
// // // // //           <button type="button" className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 mr-2 rounded-md">Cancel</button>
// // // // //           <button type="button" className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md">Save & Print</button>
// // // // //         </div>
// // // // //         {isSaved && <div className="mt-4 text-green-600">Data saved successfully!</div>}
// // // // //       </form>
// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // export default Payment;
// // // // import React, { useState } from 'react';
// // // // import axios from 'axios';

// // // // const Payment = () => {
// // // //   const [paymentType, setPaymentType] = useState('cash');
// // // //   const [paymentDate, setPaymentDate] = useState('');
// // // //   const [paymentNumber, setPaymentNumber] = useState('');
// // // //   const [paymentTo, setPaymentTo] = useState('');
// // // //   const [paymentAmount, setPaymentAmount] = useState('');
// // // //   const [paymentRemark, setPaymentRemark] = useState('');
// // // //   const [isSaved, setIsSaved] = useState(false);
// // // //   const [formErrors, setFormErrors] = useState({});

// // // //   const handlePaymentTypeChange = (event) => {
// // // //     setPaymentType(event.target.value);
// // // //   };

// // // //   const handleSubmit = async (event) => {
// // // //     event.preventDefault();

// // // //     const errors = validateForm();
// // // //     if (Object.keys(errors).length !== 0) {
// // // //       setFormErrors(errors);
// // // //       return;
// // // //     }

// // // //     const newPayment = {
// // // //       paymentType,
// // // //       paymentDate,
// // // //       paymentNumber,
// // // //       paymentTo,
// // // //       paymentAmount,
// // // //       paymentRemark,
// // // //     };

// // // //     try {
// // // //       await axios.post('http://localhost:5000/api/payments', newPayment);
// // // //       setPaymentDate('');
// // // //       setPaymentNumber('');
// // // //       setPaymentTo('');
// // // //       setPaymentAmount('');
// // // //       setPaymentRemark('');
// // // //       setIsSaved(true);
// // // //       setTimeout(() => {
// // // //         setIsSaved(false);
// // // //       }, 3000);
// // // //     } catch (error) {
// // // //       console.error('Error saving payment:', error);
// // // //     }
// // // //   };

// // // //   const validateForm = () => {
// // // //     const errors = {};

// // // //     if (!paymentDate) {
// // // //       errors.paymentDate = 'Payment date is required';
// // // //     }

// // // //     if (!paymentNumber) {
// // // //       errors.paymentNumber = 'Payment number is required';
// // // //     }

// // // //     if (!paymentTo) {
// // // //       errors.paymentTo = 'Payment to is required';
// // // //     }

// // // //     if (!paymentAmount) {
// // // //       errors.paymentAmount = 'Payment amount is required';
// // // //     }

// // // //     return errors;
// // // //   };

// // // //   return (
// // // //     <div className="p-4">
// // // //       <h2 className="text-2xl font-bold mb-4">Make Payment</h2>
// // // //       <form onSubmit={handleSubmit} className="bg-gray-100 p-6 rounded-lg shadow-md">
// // // //       <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
// // // //           <div className="flex items-center">
// // // //             <label className="mr-2">Payment Type:</label>
// // // //             <div>
// // // //               <input type="radio" id="cash" value="cash" checked={paymentType === 'cash'} onChange={handlePaymentTypeChange} />
// // // //               <label htmlFor="cash" className="mr-2 ml-1">Cash</label>
// // // //             </div>
// // // //             <div>
// // // //               <input type="radio" id="check" value="check" checked={paymentType === 'check'} onChange={handlePaymentTypeChange} />
// // // //               <label htmlFor="check" className="mr-2 ml-1">Check</label>
// // // //             </div>
// // // //           </div>
// // // //           <div className="flex items-center">
// // // //             <label className="mr-2">Payment Date:</label>
// // // //             <input type="date" value={paymentDate} onChange={(e) => setPaymentDate(e.target.value)} />
// // // //           </div>
// // // //           <div className="flex items-center">
// // // //             <label className="mr-2">Payment Number:</label>
// // // //             <input type="text" value={paymentNumber} onChange={(e) => setPaymentNumber(e.target.value)} />
// // // //           </div>
// // // //           <div className="flex items-center">
// // // //             <label className="mr-2">Payment To:</label>
// // // //             <input type="text" value={paymentTo} onChange={(e) => setPaymentTo(e.target.value)} />
// // // //           </div>
// // // //           <div className="flex items-center">
// // // //             <label className="mr-2">Payment Amount:</label>
// // // //             <input type="number" value={paymentAmount} onChange={(e) => setPaymentAmount(e.target.value)} />
// // // //           </div>
// // // //           <div className="flex items-center">
// // // //             <label className="mr-2">Remarks:</label>
// // // //             <input type="text" value={paymentRemark} onChange={(e) => setPaymentRemark(e.target.value)} />
// // // //           </div>
// // // //         </div>  
// // // //         <div className="mt-4">
// // // //           <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 mr-2 rounded-md">Save</button>
// // // //           <button type="button" className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 mr-2 rounded-md">Cancel</button>
// // // //           <button type="button" className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md">Save & Print</button>
// // // //         </div>
// // // //         {isSaved && <div className="mt-4 text-green-600">Data saved successfully!</div>}
// // // //         {formErrors.paymentDate && <div className="mt-2 text-red-600">{formErrors.paymentDate}</div>}
// // // //         {formErrors.paymentNumber && <div className="mt-2 text-red-600">{formErrors.paymentNumber}</div>}
// // // //         {formErrors.paymentTo && <div className="mt-2 text-red-600">{formErrors.paymentTo}</div>}
// // // //         {formErrors.paymentAmount && <div className="mt-2 text-red-600">{formErrors.paymentAmount}</div>}
// // // //       </form>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default Payment;
// // // // hello hyyy


// // //ba_T-O
// // // import React, { useState, useEffect } from 'react';
// // // import axios from 'axios';

// // // const Payment = () => {
// // //   const [paymentType, setPaymentType] = useState('cash');
// // //   const [paymentDate, setPaymentDate] = useState('');
// // //   const [paymentNumber, setPaymentNumber] = useState('');
// // //   const [paymentTo, setPaymentTo] = useState('');
// // //   const [paymentAmount, setPaymentAmount] = useState('');
// // //   const [paymentRemark, setPaymentRemark] = useState('');
// // //   const [isSaved, setIsSaved] = useState(false);
// // //   const [formErrors, setFormErrors] = useState({});
// // //   const [paymentHistory, setPaymentHistory] = useState([]);
// // //   const [filteredPaymentHistory, setFilteredPaymentHistory] = useState([]);
// // //   const [selectedDate, setSelectedDate] = useState('');

// // //   useEffect(() => {
// // //     fetchPaymentHistory();
// // //   }, []);

// // //   const fetchPaymentHistory = async () => {
// // //     try {
// // //       const response = await axios.get('http://localhost:5000/api/payments');
// // //       setPaymentHistory(response.data);
// // //       setFilteredPaymentHistory(response.data);
// // //     } catch (error) {
// // //       console.error('Error fetching payment history:', error);
// // //     }
// // //   };

// // //   const handlePaymentTypeChange = (event) => {
// // //     setPaymentType(event.target.value);
// // //   };

// // //   const handleSubmit = async (event) => {
// // //     event.preventDefault();
  
// // //     console.log('paymentDate:', paymentDate);
// // //     console.log('paymentHistory:', paymentHistory);
  
// // //     const errors = validateForm();
// // //     if (Object.keys(errors).length !== 0) {
// // //       setFormErrors(errors);
// // //       return;
// // //     }
  
// // //     // Ensure paymentDate is not null before proceeding
// // //     if (!paymentDate) {
// // //       console.error('Payment date is null');
// // //       return;
// // //     }
  
// // //     // Generate payment number based on selected payment date
// // //     const formattedDate = new Date(paymentDate).toLocaleDateString('en-GB').split('/').reverse().join('');
    
// // //     // Check if paymentHistory is available and not empty
// // //     if (!paymentHistory || paymentHistory.length === 0) {
// // //       // If payment history is not available or empty, set payment counter to 1
// // //       const paymentCounter = 1;
// // //       const generatedPaymentNumber = `cp_${formattedDate}_${paymentCounter.toString().padStart(3, '0')}`;
// // //       setPaymentNumber(generatedPaymentNumber);
// // //     } else {
// // //       // Filter payment history for payments with the same date
// // //       const latestPayment = paymentHistory.filter(payment => payment.paymentDate && payment.paymentDate.startsWith(formattedDate));
// // //       const paymentCounter = latestPayment.length + 1;
// // //       const generatedPaymentNumber = `cp_${formattedDate}_${paymentCounter.toString().padStart(3, '0')}`;
// // //       setPaymentNumber(generatedPaymentNumber);
// // //     }
  
// // //     const newPayment = {
// // //       paymentType,
// // //       paymentDate,
// // //       paymentNumber,
// // //       paymentTo,
// // //       paymentAmount,
// // //       paymentRemark,
// // //     };
  
// // //     try {
// // //       await axios.post('http://localhost:5000/api/payments', newPayment);
// // //       setPaymentDate('');
// // //       setPaymentTo('');
// // //       setPaymentAmount('');
// // //       setPaymentRemark('');
// // //       setIsSaved(true);
// // //       setTimeout(() => {
// // //         setIsSaved(false);
// // //       }, 3000);
// // //       fetchPaymentHistory();
// // //     } catch (error) {
// // //       console.error('Error saving payment:', error);
// // //     }
// // //   };
  

// // //   const validateForm = () => {
// // //     const errors = {};

// // //     if (!paymentDate) {
// // //       errors.paymentDate = 'Payment date is required';
// // //     }

// // //     if (!paymentTo) {
// // //       errors.paymentTo = 'Payment to is required';
// // //     }

// // //     if (!paymentAmount) {
// // //       errors.paymentAmount = 'Payment amount is required';
// // //     }

// // //     return errors;
// // //   };

// // //   const handleDateFilter = (event) => {
// // //     const selectedDate = event.target.value;
// // //     setSelectedDate(selectedDate);
// // //     if (selectedDate) {
// // //       const formattedDate = new Date(selectedDate).toISOString(); // Convert to ISODate format
// // //       const filteredData = paymentHistory.filter(payment => payment.paymentDate && payment.paymentDate.startsWith(formattedDate));
// // //       setFilteredPaymentHistory(filteredData);
// // //     } else {
// // //       setFilteredPaymentHistory(paymentHistory); // If no date is selected, show all data
// // //     }
// // //   };

// // //   return (
// // //     <div className="p-4">
// // //       <h2 className="text-2xl font-bold mb-4">Make Payment</h2>
// // //       <form onSubmit={handleSubmit} className="bg-gray-100 p-6 rounded-lg shadow-md">
// // //         <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
// // //           <div className="flex items-center">
// // //             <label className="mr-2">Payment Type:</label>
// // //             <div>
// // //               <input type="radio" id="cash" value="cash" checked={paymentType === 'cash'} onChange={handlePaymentTypeChange} />
// // //               <label htmlFor="cash" className="mr-2 ml-1">Cash</label>
// // //             </div>
// // //             <div>
// // //               <input type="radio" id="check" value="check" checked={paymentType === 'check'} onChange={handlePaymentTypeChange} />
// // //               <label htmlFor="check" className="mr-2 ml-1">Check</label>
// // //             </div>
// // //           </div>
// // //           <div className="flex items-center">
// // //             <label className="mr-2">Payment Date:</label>
// // //             <input type="date" value={paymentDate} onChange={(e) => setPaymentDate(e.target.value)} />
// // //             {paymentDate && <p>Selected Date: {paymentDate}</p>}
            
// // //           </div>
// // //           <div className="flex items-center">
// // //             <label className="mr-2">Payment Number:</label>
// // //             <input type="text" value={paymentNumber} readOnly />
// // //           </div>
// // //           <div className="flex items-center">
// // //             <label className="mr-2">Payment To:</label>
// // //             <input type="text" value={paymentTo} onChange={(e) => setPaymentTo(e.target.value)} />
// // //           </div>
// // //           <div className="flex items-center">
// // //             <label className="mr-2">Payment Amount:</label>
// // //             <input type="number" value={paymentAmount} onChange={(e) => setPaymentAmount(e.target.value)} />
// // //           </div>
// // //           <div className="flex items-center">
// // //             <label className="mr-2">Remarks:</label>
// // //             <input type="text" value={paymentRemark} onChange={(e) => setPaymentRemark(e.target.value)} />
// // //           </div>
// // //         </div>  
// // //         <div className="mt-4">
// // //           <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 mr-2 rounded-md">Save</button>
// // //           <button type="button" className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 mr-2 rounded-md">Cancel</button>
// // //           <button type="button" className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md">Save & Print</button>
// // //         </div>
// // //       </form>
// // //       {isSaved && <div className="mt-4 text-green-600">Data saved successfully!</div>}
// // //       {formErrors.paymentDate && <div className="mt-2 text-red-600">{formErrors.paymentDate}</div>}
// // //       {formErrors.paymentTo && <div className="mt-2 text-red-600">{formErrors.paymentTo}</div>}
// // //       {formErrors.paymentAmount && <div className="mt-2 text-red-600">{formErrors.paymentAmount}</div>}

// // //       <div className="mt-8">
// // //         <h2 className="text-2xl font-bold mb-4">Payment History</h2>
// // //         <div className="mb-4">
// // //           <label htmlFor="dateFilter" className="mr-2">Filter by Date:</label>
// // //           <input type="date" id="dateFilter" value={selectedDate} onChange={handleDateFilter} />
// // //         </div>
// // //         <div className="overflow-hidden border rounded-lg shadow-md">
// // //           <table className="mx-auto w-one-quarters table-fixed">
// // //             <thead className="bg-gray-800 text-white">
// // //               <tr>
// // //                 <th className="px-2 py-2 w-1/4">Date</th>
// // //                 <th className="px-2 py-2 w-1/4">Payment Number</th>
// // //                 <th className="px-2 py-2 w-1/4">Payment To</th>
// // //                 <th className="px-2 py-2 w-1/4">Amount</th>
// // //               </tr>
// // //             </thead>
// // //             <tbody>
// // //               {filteredPaymentHistory.map((payment, index) => (
// // //                 <tr key={index} className={index % 2 === 0 ? "bg-gray-100" : ""}>
// // //                   <td className="border px-2 py-2">{payment.paymentDate}</td>
// // //                   <td className="border px-2 py-2">{payment.paymentNumber}</td>
// // //                   <td className="border px-2 py-2">{payment.paymentTo}</td>
// // //                   <td className="border px-2 py-2">{payment.paymentAmount}</td>
// // //                 </tr>
// // //               ))}
// // //             </tbody>
// // //           </table>
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default Payment;




// // // import React, { useState, useEffect } from 'react';
// // // import axios from 'axios';

// // // const Payment = () => {
// // //   const [paymentType, setPaymentType] = useState('cash');
// // //   const [paymentDate, setPaymentDate] = useState('');
// // //   const [paymentNumber, setPaymentNumber] = useState('');
// // //   const [paymentTo, setPaymentTo] = useState('');
// // //   const [paymentAmount, setPaymentAmount] = useState('');
// // //   const [paymentRemark, setPaymentRemark] = useState('');
// // //   const [isSaved, setIsSaved] = useState(false);
// // //   const [formErrors, setFormErrors] = useState({});
// // //   const [paymentHistory, setPaymentHistory] = useState([]);
// // //   const [filteredPaymentHistory, setFilteredPaymentHistory] = useState([]);
// // //   const [selectedDate, setSelectedDate] = useState('');

// // //   useEffect(() => {
// // //     fetchPaymentHistory();
// // //   }, []);

// // //   useEffect(() => {
// // //     if (paymentDate) {
// // //       generatePaymentNumber(paymentDate);
// // //     }
// // //   }, [paymentDate]);

// // //   const fetchPaymentHistory = async () => {
// // //     try {
// // //       const response = await axios.get('http://localhost:5000/api/payments');
// // //       setPaymentHistory(response.data);
// // //       setFilteredPaymentHistory(response.data);
// // //     } catch (error) {
// // //       console.error('Error fetching payment history:', error);
// // //     }
// // //   };

// // //   const handlePaymentTypeChange = (event) => {
// // //     setPaymentType(event.target.value);
// // //   };

// // //   const handleDateChange = (event) => {
// // //     setPaymentDate(event.target.value);
// // //     setSelectedDate(event.target.value);
// // //   };

// // //   const generatePaymentNumber = async (date) => {
// // //     const formattedDate = new Date(date).toLocaleDateString('en-GB').split('/').reverse().join('');
// // //     try {
// // //       const response = await axios.get(`http://localhost:5000/api/payments?date=${formattedDate}`);
// // //       const paymentsOnDate = response.data;
// // //       let highestPaymentNumber = 0;
// // //       paymentsOnDate.forEach(payment => {
// // //         const parts = payment.paymentNumber.split('_');
// // //         const number = parseInt(parts[2], 10);
// // //         if (!isNaN(number) && number > highestPaymentNumber) {
// // //           highestPaymentNumber = number;
// // //         }
// // //       });
// // //       const newPaymentNumber = `cp_${formattedDate}_${(highestPaymentNumber + 1).toString().padStart(3, '0')}`;
// // //       setPaymentNumber(newPaymentNumber);
// // //     } catch (error) {
// // //       console.error('Error fetching payments:', error);
// // //     }
// // //   };
  
  

// // //   const handleSubmit = async (event) => {
// // //     event.preventDefault();

// // //     const errors = validateForm();
// // //     if (Object.keys(errors).length !== 0) {
// // //       setFormErrors(errors);
// // //       return;
// // //     }

// // //     const newPayment = {
// // //       paymentType,
// // //       paymentDate,
// // //       paymentNumber,
// // //       paymentTo,
// // //       paymentAmount,
// // //       paymentRemark,
// // //     };

// // //     try {
// // //       await axios.post('http://localhost:5000/api/payments', newPayment);
// // //       setPaymentDate('');
// // //       setPaymentNumber('');
// // //       setPaymentTo('');
// // //       setPaymentAmount('');
// // //       setPaymentRemark('');
// // //       setIsSaved(true);
// // //       setTimeout(() => {
// // //         setIsSaved(false);
// // //       }, 3000);
// // //       fetchPaymentHistory();
// // //     } catch (error) {
// // //       console.error('Error saving payment:', error);
// // //     }
// // //   };

// // //   const validateForm = () => {
// // //     const errors = {};

// // //     if (!paymentDate) {
// // //       errors.paymentDate = 'Payment date is required';
// // //     }

// // //     if (!paymentTo) {
// // //       errors.paymentTo = 'Payment to is required';
// // //     }

// // //     if (!paymentAmount) {
// // //       errors.paymentAmount = 'Payment amount is required';
// // //     }

// // //     return errors;
// // //   };

// // //   const handleDateFilter = (event) => {
// // //     const selectedDate = event.target.value;
// // //     setSelectedDate(selectedDate);
// // //     if (selectedDate) {
// // //       const formattedDate = new Date(selectedDate).toISOString(); // Convert to ISODate format
// // //       const filteredData = paymentHistory.filter(payment => payment.paymentDate && payment.paymentDate.startsWith(formattedDate));
// // //       setFilteredPaymentHistory(filteredData);
// // //     } else {
// // //       setFilteredPaymentHistory(paymentHistory); // If no date is selected, show all data
// // //     }
// // //   };

// // //   return (
// // //     <div className="p-4">
// // //       <h2 className="text-2xl font-bold mb-4">Make Payment</h2>
// // //       <form onSubmit={handleSubmit} className="bg-gray-100 p-6 rounded-lg shadow-md">
// // //         <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
// // //           <div className="flex items-center">
// // //             <label className="mr-2">Payment Type:</label>
// // //             <div>
// // //               <input type="radio" id="cash" value="cash" checked={paymentType === 'cash'} onChange={handlePaymentTypeChange} />
// // //               <label htmlFor="cash" className="mr-2 ml-1">Cash Payment </label>
// // //             </div>
// // //             <div>
// // //               <input type="radio" id="check" value="check" checked={paymentType === 'check'} onChange={handlePaymentTypeChange} />
// // //               <label htmlFor="check" className="mr-2 ml-1">Check Payment </label>
// // //             </div>
// // //           </div>
// // //           <div className="flex items-center">
// // //             <label className="mr-2">Payment Date:</label>
// // //             <input type="date" value={paymentDate} onChange={handleDateChange} />
// // //           </div>
// // //           <div className="flex items-center">
// // //             <label className="mr-2">Payment Number:</label>
// // //             <input type="text" value={paymentNumber} readOnly />
// // //           </div>
// // //           <div className="flex items-center">
// // //             <label className="mr-2">Payment To:</label>
// // //             <input type="text" value={paymentTo} onChange={(e) => setPaymentTo(e.target.value)} />
// // //           </div>
// // //           <div className="flex items-center">
// // //             <label className="mr-2">Payment Amount:</label>
// // //             <input type="number" value={paymentAmount} onChange={(e) => setPaymentAmount(e.target.value)} />
// // //           </div>
// // //           <div className="flex items-center">
// // //             <label className="mr-2">Remarks:</label>
// // //             <input type="text" value={paymentRemark} onChange={(e) => setPaymentRemark(e.target.value)} />
// // //           </div>
// // //         </div>
// // //         <div className="mt-4">
// // //           <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 mr-2 rounded-md">Save</button>
// // //           <button type="button" className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 mr-2 rounded-md">Cancel</button>
// // //           <button type="button" className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md">Save & Print</button>
// // //         </div>
// // //       </form>
// // //       {isSaved && <div className="mt-4 text-green-600">Data saved successfully!</div>}
// // //       {formErrors.paymentDate && <div className="mt-2 text-red-600">{formErrors.paymentDate}</div>}
// // //       {formErrors.paymentTo && <div className="mt-2 text-red-600">{formErrors.paymentTo}</div>}
// // //       {formErrors.paymentAmount && <div className="mt-2 text-red-600">{formErrors.paymentAmount}</div>}

// // //       <div className="mt-8">
// // //         <h2 className="text-2xl font-bold mb-4">Payment History</h2>
// // //         <div className="mb-4">
// // //           <label htmlFor="dateFilter" className="mr-2">Filter by Date:</label>
// // //           <input type="date" id="dateFilter" value={selectedDate} onChange={handleDateFilter} />
// // //         </div>
// // //         <div className="overflow-hidden border rounded-lg shadow-md">
// // //           <table className="mx-auto w-one-quarters table-fixed">
// // //             <thead className="bg-gray-800 text-white">
// // //               <tr>
// // //                 <th className="px-2 py-2 w-1/4">Date</th>
// // //                 <th className="px-2 py-2 w-1/4">Payment Number</th>
// // //                 <th className="px-2 py-2 w-1/4">Payment To</th>
// // //                 <th className="px-2 py-2 w-1/4">Amount</th>
// // //               </tr>
// // //             </thead>
// // //             <tbody>
// // //               {filteredPaymentHistory.map((payment, index) => (
// // //                 <tr key={index} className={index % 2 === 0 ? "bg-gray-100" : ""}>
// // //                   <td className="border px-2 py-2">{payment.paymentDate}</td>
// // //                   <td className="border px-2 py-2">{payment.paymentNumber}</td>
// // //                   <td className="border px-2 py-2">{payment.paymentTo}</td>
// // //                   <td className="border px-2 py-2">{payment.paymentAmount}</td>
// // //                 </tr>
// // //               ))}
// // //             </tbody>
// // //           </table>
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default Payment;
// // //copy the code
// // // import React, { useState, useEffect } from 'react';
// // // import axios from 'axios';

// // // const Payment = () => {
// // //   const [paymentType, setPaymentType] = useState('cash');
// // //   const [paymentDate, setPaymentDate] = useState('');
// // //   const [paymentNumber, setPaymentNumber] = useState('');
// // //   const [paymentTo, setPaymentTo] = useState('');
// // //   const [paymentAmount, setPaymentAmount] = useState('');
// // //   const [paymentRemark, setPaymentRemark] = useState('');
// // //   const [isSaved, setIsSaved] = useState(false);
// // //   const [formErrors, setFormErrors] = useState({});
// // //   const [paymentHistory, setPaymentHistory] = useState([]);
// // //   const [filteredPaymentHistory, setFilteredPaymentHistory] = useState([]);
// // //   const [selectedDate, setSelectedDate] = useState('');

// // //   useEffect(() => {
// // //     fetchPaymentHistory();
// // //   }, []);

// // //   useEffect(() => {
// // //     if (paymentDate) {
// // //       generatePaymentNumber(paymentDate);
// // //     }
// // //   }, [paymentDate]);

// // //   const fetchPaymentHistory = async () => {
// // //     try {
// // //       const response = await axios.get('http://localhost:5000/api/payments');
// // //       setPaymentHistory(response.data);
// // //       setFilteredPaymentHistory(response.data);
// // //     } catch (error) {
// // //       console.error('Error fetching payment history:', error);
// // //     }
// // //   };

// // //   const handlePaymentTypeChange = (event) => {
// // //     setPaymentType(event.target.value);
// // //   };

// // //   const handleDateChange = (event) => {
// // //     setPaymentDate(event.target.value);
// // //     setSelectedDate(event.target.value);
// // //   };

// // //   const generatePaymentNumber = async (date) => {
// // //     const formattedDate = new Date(date).toLocaleDateString('en-GB').split('/').reverse().join('');
// // //     try {
// // //       const response = await axios.get(`http://localhost:5000/api/payments?date=${formattedDate}`);
// // //       const paymentsOnDate = response.data;
// // //       let highestPaymentNumber = 0;
// // //       paymentsOnDate.forEach(payment => {
// // //         const parts = payment.paymentNumber.split('_');
// // //         const number = parseInt(parts[2], 10);
// // //         if (!isNaN(number) && number > highestPaymentNumber) {
// // //           highestPaymentNumber = number;
// // //         }
// // //       });
// // //       const newPaymentNumber = `cp_${formattedDate}_${(highestPaymentNumber + 1).toString().padStart(3, '0')}`;
// // //       setPaymentNumber(newPaymentNumber);
// // //     } catch (error) {
// // //       console.error('Error fetching payments:', error);
// // //     }
// // //   };

// // //   const handleSubmit = async (event) => {
// // //     event.preventDefault();

// // //     const errors = validateForm();
// // //     if (Object.keys(errors).length !== 0) {
// // //       setFormErrors(errors);
// // //       return;
// // //     }

// // //     const newPayment = {
// // //       paymentType,
// // //       paymentDate,
// // //       paymentNumber,
// // //       paymentTo,
// // //       paymentAmount,
// // //       paymentRemark,
// // //     };

// // //     try {
// // //       await axios.post('http://localhost:5000/api/payments', newPayment);
// // //       setPaymentDate('');
// // //       setPaymentNumber('');
// // //       setPaymentTo('');
// // //       setPaymentAmount('');
// // //       setPaymentRemark('');
// // //       setIsSaved(true);
// // //       setTimeout(() => {
// // //         setIsSaved(false);
// // //       }, 3000);
// // //       fetchPaymentHistory();
// // //     } catch (error) {
// // //       console.error('Error saving payment:', error);
// // //     }
// // //   };

// // //   const validateForm = () => {
// // //     const errors = {};

// // //     if (!paymentDate) {
// // //       errors.paymentDate = 'Payment date is required';
// // //     }

// // //     if (!paymentTo) {
// // //       errors.paymentTo = 'Payment to is required';
// // //     }

// // //     if (!paymentAmount) {
// // //       errors.paymentAmount = 'Payment amount is required';
// // //     }

// // //     return errors;
// // //   };

// // //   const handleDateFilter = (event) => {
// // //     const selectedDate = event.target.value;
// // //     setSelectedDate(selectedDate);
// // //     if (selectedDate) {
// // //       const formattedDate = new Date(selectedDate).toISOString(); // Convert to ISODate format
// // //       const filteredData = paymentHistory.filter(payment => payment.paymentDate && payment.paymentDate.startsWith(formattedDate));
// // //       setFilteredPaymentHistory(filteredData);
// // //     } else {
// // //       setFilteredPaymentHistory(paymentHistory); // If no date is selected, show all data
// // //     }
// // //   };

// // //   return (
// // //     <div className="p-4">
// // //       <h2 className="text-2xl font-bold mb-4">Make Payment</h2>
// // //       <form onSubmit={handleSubmit} className="bg-gray-100 p-6 rounded-lg shadow-md">
// // //         <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
// // //           {/* Payment Type */}
// // //           <div className="flex items-center">
// // //             <label className="mr-2">Payment Type:</label>
// // //             <div>
// // //               <input type="radio" id="cash" value="cash" checked={paymentType === 'cash'} onChange={handlePaymentTypeChange} />
// // //               <label htmlFor="cash" className="mr-2 ml-1">Cash Payment </label>
// // //             </div>
// // //             <div>
// // //               <input type="radio" id="check" value="check" checked={paymentType === 'check'} onChange={handlePaymentTypeChange} />
// // //               <label htmlFor="check" className="mr-2 ml-1">Check Payment </label>
// // //             </div>
// // //           </div>
// // //           {/* Payment Date */}
// // //           <div className="flex items-center">
// // //             <label className="mr-2">Payment Date:</label>
// // //             <input type="date" value={paymentDate} onChange={handleDateChange} />
// // //           </div>
// // //           {/* Payment Number */}
// // //           <div className="flex items-center">
// // //             <label className="mr-2">Payment Number:</label>
// // //             <input type="text" value={paymentNumber} readOnly />
// // //           </div>
// // //           {/* Payment To */}
// // //           <div className="flex items-center">
// // //             <label className="mr-2">Payment To:</label>
// // //             <input type="text" value={paymentTo} onChange={(e) => setPaymentTo(e.target.value)} />
// // //           </div>
// // //           {/* Payment Amount */}
// // //           <div className="flex items-center">
// // //             <label className="mr-2">Payment Amount:</label>
// // //             <input type="number" value={paymentAmount} onChange={(e) => setPaymentAmount(e.target.value)} />
// // //           </div>
// // //           {/* Remarks */}
// // //           <div className="flex items-center">
// // //             <label className="mr-2">Remarks:</label>
// // //             <input type="text" value={paymentRemark} onChange={(e) => setPaymentRemark(e.target.value)} />
// // //           </div>
// // //         </div>
// // //         {/* Submit Buttons */}
// // //         <div className="mt-4">
// // //           <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 mr-2 rounded-md">Save</button>
// // //           <button type="button" className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 mr-2 rounded-md">Cancel</button>
// // //           <button type="button" className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md">Save & Print</button>
// // //         </div>
// // //       </form>
// // //       {/* Success Message */}
// // //       {isSaved && <div className="mt-4 text-green-600">Data saved successfully!</div>}
// // //       {/* Form Errors */}
// // //       {formErrors.paymentDate && <div className="mt-2 text-red-600">{formErrors.paymentDate}</div>}
// // //       {formErrors.paymentTo && <div className="mt-2 text-red-600">{formErrors.paymentTo}</div>}
// // //       {formErrors.paymentAmount && <div className="mt-2 text-red-600">{formErrors.paymentAmount}</div>}

// // //       {/* Payment History */}
// // //       <div className="mt-8">
// // //         <h2 className="text-2xl font-bold mb-4">Payment History</h2>
// // //         {/* Date Filter */}
// // //         <div className="mb-4">
// // //           <label htmlFor="dateFilter" className="mr-2">Filter by Date:</label>
// // //           <input type="date" id="dateFilter" value={selectedDate} onChange={handleDateFilter} />
// // //         </div>
// // //         {/* Payment History Table */}
// // //         <div className="overflow-hidden border rounded-lg shadow-md">
// // //           <table className="mx-auto w-one-quarters table-fixed">
// // //             <thead className="bg-gray-800 text-white">
// // //               <tr>
// // //                 <th className="px-2 py-2 w-1/4">Date</th>
// // //                 <th className="px-2 py-2 w-1/4">Payment Number</th>
// // //                 <th className="px-2 py-2 w-1/4">Payment To</th>
// // //                 <th className="px-2 py-2 w-1/4">Amount</th>
// // //               </tr>
// // //             </thead>
// // //             <tbody>
// // //               {filteredPaymentHistory.map((payment, index) => (
// // //                 <tr key={index} className={index % 2 === 0 ? "bg-gray-100" : ""}>
// // //                   <td className="border px-2 py-2">{payment.paymentDate}</td>
// // //                   <td className="border px-2 py-2">{payment.paymentNumber}</td>
// // //                   <td className="border px-2 py-2">{payment.paymentTo}</td>
// // //                   <td className="border px-2 py-2">{payment.paymentAmount}</td>
// // //                 </tr>
// // //               ))}
// // //             </tbody>
// // //           </table>
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default Payment;




// // // // above change the  apyment number automatically
// // // // import React, { useState, useEffect } from 'react';
// // // // import axios from 'axios';

// // // // const Payment = () => {
// // // //   const [paymentType, setPaymentType] = useState('cash');
// // // //   const [paymentDate, setPaymentDate] = useState('');
// // // //   const [paymentNumber, setPaymentNumber] = useState('');
// // // //   const [paymentTo, setPaymentTo] = useState('');
// // // //   const [paymentAmount, setPaymentAmount] = useState('');
// // // //   const [paymentRemark, setPaymentRemark] = useState('');
// // // //   const [isSaved, setIsSaved] = useState(false);
// // // //   const [formErrors, setFormErrors] = useState({});
// // // //   const [paymentHistory, setPaymentHistory] = useState([]);
// // // //   const [filteredPaymentHistory, setFilteredPaymentHistory] = useState([]);
// // // //   const [selectedDate, setSelectedDate] = useState('');

// // // //   useEffect(() => {
// // // //     fetchPaymentHistory();
// // // //   }, []);

// // // //   const fetchPaymentHistory = async () => {
// // // //     try {
// // // //       const response = await axios.get('http://localhost:5000/api/payments');
// // // //       setPaymentHistory(response.data);
// // // //       setFilteredPaymentHistory(response.data);
// // // //     } catch (error) {
// // // //       console.error('Error fetching payment history:', error);
// // // //     }
// // // //   };

// // // //   const handlePaymentTypeChange = (event) => {
// // // //     setPaymentType(event.target.value);
// // // //   };

// // // //   const handleSubmit = async (event) => {
// // // //     event.preventDefault();

// // // //     const errors = validateForm();
// // // //     if (Object.keys(errors).length !== 0) {
// // // //       setFormErrors(errors);
// // // //       return;
// // // //     }

// // // //     const newPayment = {
// // // //       paymentType,
// // // //       paymentDate,
// // // //       paymentNumber,
// // // //       paymentTo,
// // // //       paymentAmount,
// // // //       paymentRemark,
// // // //     };

// // // //     try {
// // // //       await axios.post('http://localhost:5000/api/payments', newPayment);
// // // //       setPaymentDate('');
// // // //       setPaymentNumber('');
// // // //       setPaymentTo('');
// // // //       setPaymentAmount('');
// // // //       setPaymentRemark('');
// // // //       setIsSaved(true);
// // // //       setTimeout(() => {
// // // //         setIsSaved(false);
// // // //       }, 3000);
// // // //       fetchPaymentHistory();
// // // //     } catch (error) {
// // // //       console.error('Error saving payment:', error);
// // // //     }
// // // //   };

// // // //   const validateForm = () => {
// // // //     const errors = {};

// // // //     if (!paymentDate) {
// // // //       errors.paymentDate = 'Payment date is required';
// // // //     }

// // // //     if (!paymentNumber) {
// // // //       errors.paymentNumber = 'Payment number is required';
// // // //     }

// // // //     if (!paymentTo) {
// // // //       errors.paymentTo = 'Payment to is required';
// // // //     }

// // // //     if (!paymentAmount) {
// // // //       errors.paymentAmount = 'Payment amount is required';
// // // //     }

// // // //     return errors;
// // // //   };

// // // //   const handleDateFilter = (event) => {
// // // //     const selectedDate = event.target.value;
// // // //     setSelectedDate(selectedDate);
// // // //     if (selectedDate) {
// // // //       const formattedDate = new Date(selectedDate).toISOString(); // Convert to ISODate format
// // // //       const filteredData = paymentHistory.filter(payment => payment.paymentDate && payment.paymentDate.startsWith(formattedDate));
// // // //       setFilteredPaymentHistory(filteredData);
// // // //     } else {
// // // //       setFilteredPaymentHistory(paymentHistory); // If no date is selected, show all data
// // // //     }
// // // //   };
   

// // // //   return (
// // // //     <div className="p-4">
// // // //       <h2 className="text-2xl font-bold mb-4">Make Payment</h2>
// // // //       <form onSubmit={handleSubmit} className="bg-gray-100 p-6 rounded-lg shadow-md">
// // // //       <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
// // // //           <div className="flex items-center">
// // // //             <label className="mr-2">Payment Type:</label>
// // // //             <div>
// // // //               <input type="radio" id="cash" value="cash" checked={paymentType === 'cash'} onChange={handlePaymentTypeChange} />
// // // //               <label htmlFor="cash" className="mr-2 ml-1">Cash</label>
// // // //             </div>
// // // //             <div>
// // // //               <input type="radio" id="check" value="check" checked={paymentType === 'check'} onChange={handlePaymentTypeChange} />
// // // //               <label htmlFor="check" className="mr-2 ml-1">Check</label>
// // // //             </div>
// // // //           </div>
// // // //           <div className="flex items-center">
// // // //             <label className="mr-2">Payment Date:</label>
// // // //             <input type="date" value={paymentDate} onChange={(e) => setPaymentDate(e.target.value)} />
// // // //           </div>
// // // //           <div className="flex items-center">
// // // //             <label className="mr-2">Payment Number:</label>
// // // //             <input type="text" value={paymentNumber} onChange={(e) => setPaymentNumber(e.target.value)} />
// // // //           </div>
// // // //           <div className="flex items-center">
// // // //             <label className="mr-2">Payment To:</label>
// // // //             <input type="text" value={paymentTo} onChange={(e) => setPaymentTo(e.target.value)} />
// // // //           </div>
// // // //           <div className="flex items-center">
// // // //             <label className="mr-2">Payment Amount:</label>
// // // //             <input type="number" value={paymentAmount} onChange={(e) => setPaymentAmount(e.target.value)} />
// // // //           </div>
// // // //           <div className="flex items-center">
// // // //             <label className="mr-2">Remarks:</label>
// // // //             <input type="text" value={paymentRemark} onChange={(e) => setPaymentRemark(e.target.value)} />
// // // //           </div>
// // // //         </div>  
// // // //         <div className="mt-4">
// // // //           <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 mr-2 rounded-md">Save</button>
// // // //           <button type="button" className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 mr-2 rounded-md">Cancel</button>
// // // //           <button type="button" className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md">Save & Print</button>
// // // //         </div>
// // // //       </form>
// // // //       {isSaved && <div className="mt-4 text-green-600">Data saved successfully!</div>}
// // // //       {formErrors.paymentDate && <div className="mt-2 text-red-600">{formErrors.paymentDate}</div>}
// // // //       {formErrors.paymentNumber && <div className="mt-2 text-red-600">{formErrors.paymentNumber}</div>}
// // // //       {formErrors.paymentTo && <div className="mt-2 text-red-600">{formErrors.paymentTo}</div>}
// // // //       {formErrors.paymentAmount && <div className="mt-2 text-red-600">{formErrors.paymentAmount}</div>}

// // // //       <div className="mt-8">
// // // //         <h2 className="text-2xl font-bold mb-4">Payment History</h2>
// // // //         <div className="mb-4">
// // // //           <label htmlFor="dateFilter" className="mr-2">Filter by Date:</label>
// // // //           <input type="date" id="dateFilter" value={selectedDate} onChange={handleDateFilter} />
// // // //         </div>
// // // //         <div className="overflow-hidden border rounded-lg shadow-md">
// // // //           <table className="mx-auto w-one-quarters table-fixed">
// // // //             <thead className="bg-gray-800 text-white">
// // // //               <tr>
// // // //                 <th className="px-2 py-2 w-1/4">Date</th>
// // // //                 <th className="px-2 py-2 w-1/4">Payment Number</th>
// // // //                 <th className="px-2 py-2 w-1/4">Payment To</th>
// // // //                 <th className="px-2 py-2 w-1/4">Amount</th>
// // // //               </tr>
// // // //             </thead>
// // // //             <tbody>
// // // //               {filteredPaymentHistory.map((payment, index) => (
// // // //                 <tr key={index} className={index % 2 === 0 ? "bg-gray-100" : ""}>
// // // //                   <td className="border px-2 py-2">{payment.paymentDate}</td>
// // // //                   <td className="border px-2 py-2">{payment.paymentNumber}</td>
// // // //                   <td className="border px-2 py-2">{payment.paymentTo}</td>
// // // //                   <td className="border px-2 py-2">{payment.paymentAmount}</td>
// // // //                 </tr>
// // // //               ))}
// // // //             </tbody>
// // // //           </table>
// // // //         </div>
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // };
 
// // // // export default Payment;




// // import React, { useState, useEffect } from 'react';
// // import axios from 'axios';

// // const Payment = () => {
// //   const [paymentType, setPaymentType] = useState('cash');
// //   const [paymentDate, setPaymentDate] = useState('');
// //   const [paymentNumber, setPaymentNumber] = useState('');
// //   const [paymentTo, setPaymentTo] = useState('');
// //   const [paymentAmount, setPaymentAmount] = useState('');
// //   const [paymentRemark, setPaymentRemark] = useState('');
// //   const [isSaved, setIsSaved] = useState(false);
// //   const [formErrors, setFormErrors] = useState({});
// //   const [paymentHistory, setPaymentHistory] = useState([]);
// //   const [filteredPaymentHistory, setFilteredPaymentHistory] = useState([]);
// //   const [selectedDate, setSelectedDate] = useState('');

// //   useEffect(() => {
// //     fetchPaymentHistory();
// //   }, []);

// //   useEffect(() => {
// //     if (paymentDate) {
// //       generatePaymentNumber(paymentDate);
// //     }
// //   }, [paymentDate]);

// //   const fetchPaymentHistory = async () => {
// //     try {
// //       const response = await axios.get('http://localhost:5000/api/payments');
// //       setPaymentHistory(response.data);
// //       setFilteredPaymentHistory(response.data);
// //     } catch (error) {
// //       console.error('Error fetching payment history:', error);
// //     }
// //   };

// //   const handlePaymentTypeChange = (event) => {
// //     setPaymentType(event.target.value);
// //   };

// //   const handleDateChange = (event) => {
// //     setPaymentDate(event.target.value);
// //     setSelectedDate(event.target.value);
// //   };

// //   const generatePaymentNumber = async (date) => {
// //     const formattedDate = new Date(date).toLocaleDateString('en-GB').split('/').reverse().join('');
// //     try {
// //       const response = await axios.get(`http://localhost:5000/api/payments?date=${formattedDate}`);
// //       const paymentsOnDate = response.data;
// //       let highestPaymentNumber = 0;
// //       paymentsOnDate.forEach(payment => {
// //         const parts = payment.paymentNumber.split('_');
// //         const number = parseInt(parts[2], 10);
// //         if (!isNaN(number) && number > highestPaymentNumber) {
// //           highestPaymentNumber = number;
// //         }
// //       });
// //       const newPaymentNumber = `cp_${formattedDate}_${(highestPaymentNumber + 1).toString().padStart(3, '0')}`;
// //       setPaymentNumber(newPaymentNumber);
// //     } catch (error) {
// //       console.error('Error fetching payments:', error);
// //     }
// //   };

// //   const handleSubmit = async (event) => {
// //     event.preventDefault();

// //     const errors = validateForm();
// //     if (Object.keys(errors).length !== 0) {
// //       setFormErrors(errors);
// //       return;
// //     }

// //     const newPayment = {
// //       paymentType,
// //       paymentDate,
// //       paymentNumber,
// //       paymentTo,
// //       paymentAmount,
// //       paymentRemark,
// //     };

// //     try {
// //       await axios.post('http://localhost:5000/api/payments', newPayment);
// //       setPaymentDate('');
// //       setPaymentNumber('');
// //       setPaymentTo('');
// //       setPaymentAmount('');
// //       setPaymentRemark('');
// //       setIsSaved(true);
// //       setTimeout(() => {
// //         setIsSaved(false);
// //       }, 3000);
// //       fetchPaymentHistory();
// //     } catch (error) {
// //       console.error('Error saving payment:', error);
// //     }
// //   };

// //   const validateForm = () => {
// //     const errors = {};

// //     if (!paymentDate) {
// //       errors.paymentDate = 'Payment date is required';
// //     }

// //     if (!paymentTo) {
// //       errors.paymentTo = 'Payment to is required';
// //     }

// //     if (!paymentAmount) {
// //       errors.paymentAmount = 'Payment amount is required';
// //     }

// //     return errors;
// //   };

// //   const handleDateFilter = (event) => {
// //     const selectedDate = event.target.value;
// //     setSelectedDate(selectedDate);
// //     if (selectedDate) {
// //       const formattedDate = new Date(selectedDate).toISOString(); // Convert to ISODate format
// //       const filteredData = paymentHistory.filter(payment => payment.paymentDate && payment.paymentDate.startsWith(formattedDate));
// //       setFilteredPaymentHistory(filteredData);
// //     } else {
// //       setFilteredPaymentHistory(paymentHistory); // If no date is selected, show all data
// //     }
// //   };

// //   return (
// //     <div className="p-4">
// //       <h2 className="text-2xl font-bold mb-4">Make Payment</h2>
// //       <form onSubmit={handleSubmit} className="bg-gray-100 p-6 rounded-lg shadow-md">
// //         <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
// //           {/* Payment form inputs */}
// //           <div className="flex items-center">
// //             <label className="mr-2">Payment Type:</label>
// //             <div>
// //               <input type="radio" id="cash" value="cash" checked={paymentType === 'cash'} onChange={handlePaymentTypeChange} />
// //               <label htmlFor="cash" className="mr-2 ml-1">Cash Payment </label>
// //             </div>
// //             <div>
// //               <input type="radio" id="check" value="check" checked={paymentType === 'check'} onChange={handlePaymentTypeChange} />
// //               <label htmlFor="check" className="mr-2 ml-1">Cheque Payment </label>
// //             </div>
// //           </div>
// //           {/* Payment Date */}
// //           <div className="flex items-center">
// //             <label className="mr-2">Payment Date:</label>
// //             <input type="date" value={paymentDate} onChange={handleDateChange} />
// //           </div>
// //           {/* Payment Number */}
// //           <div className="flex items-center">
// //             <label className="mr-2">Payment Number:</label>
// //             <input type="text" value={paymentNumber} readOnly />
// //           </div>
// //           {/* Payment To */}
// //           <div className="flex items-center">
// //             <label className="mr-2">Payment To:</label>
// //             <input type="text" value={paymentTo} onChange={(e) => setPaymentTo(e.target.value)} />
// //           </div>
// //           {/* Payment Amount */}
// //           <div className="flex items-center">
// //             <label className="mr-2">Payment Amount:</label>
// //             <input type="number" value={paymentAmount} onChange={(e) => setPaymentAmount(e.target.value)} />
// //           </div>
// //           {/* Remarks */}
// //           <div className="flex items-center">
// //             <label className="mr-2">Remarks:</label>
// //             <input type="text" value={paymentRemark} onChange={(e) => setPaymentRemark(e.target.value)} />
// //           </div>
// //         </div>
// //         <div className="mt-4">
// //           <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 mr-2 rounded-md">Save</button>
// //           <button type="button" className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 mr-2 rounded-md">Cancel</button>
// //           <button type="button" className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md">Save & Print</button>
// //         </div>
// //       </form>
// //       {isSaved && <div className="mt-4 text-green-600">Data saved successfully!</div>}
// //       {formErrors.paymentDate && <div className="mt-2 text-red-600">{formErrors.paymentDate}</div>}
// //       {formErrors.paymentTo && <div className="mt-2 text-red-600">{formErrors.paymentTo}</div>}
// //       {formErrors.paymentAmount && <div className="mt-2 text-red-600">{formErrors.paymentAmount}</div>}

// //       <div className="mt-8">
// //         <h2 className="text-2xl font-bold mb-4">Payment History</h2>
// //         <div className="mb-4">
// //           <label htmlFor="dateFilter" className="mr-2">Filter by Date:</label>
// //           <input type="date" id="dateFilter" value={selectedDate} onChange={handleDateFilter} />
// //         </div>
// //         <div className="overflow-hidden border rounded-lg shadow-md">
// //           <table className="mx-auto w-one-quarters table-fixed">
// //             <thead className="bg-gray-800 text-white">
// //               <tr>
// //                 <th className="px-2 py-2 w-1/4">Serial Number</th>
// //                 <th className="px-2 py-2 w-1/4">Payment Number</th>
// //                 <th className="px-2 py-2 w-1/4">Payment To</th>
// //                 <th className="px-2 py-2 w-1/4">Amount</th>
// //               </tr>
// //             </thead>
// //             <tbody>
// //               {filteredPaymentHistory.map((payment, index) => (
// //                 <tr key={index} className={index % 2 === 0 ? "bg-gray-100" : ""}>
// //                   <td className="border px-2 py-2">{index + 1}</td>
// //                   <td className="border px-2 py-2">{payment.paymentNumber}</td>
// //                   <td className="border px-2 py-2">{payment.paymentTo}</td>
// //                   <td className="border px-2 py-2">{payment.paymentAmount}</td>
// //                 </tr>
// //               ))}
// //             </tbody>
// //           </table>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Payment;

// // // import React, { useState, useEffect } from 'react';
// // // import axios from 'axios';

// // // const Payment = () => {
// // //   const [paymentType, setPaymentType] = useState('cash');
// // //   const [paymentDate, setPaymentDate] = useState('');
// // //   const [paymentNumber, setPaymentNumber] = useState('');
// // //   const [paymentTo, setPaymentTo] = useState('');
// // //   const [paymentAmount, setPaymentAmount] = useState('');
// // //   const [paymentRemark, setPaymentRemark] = useState('');
// // //   const [isSaved, setIsSaved] = useState(false);
// // //   const [formErrors, setFormErrors] = useState({});
// // //   const [paymentHistory, setPaymentHistory] = useState([]);
// // //   const [filteredPaymentHistory, setFilteredPaymentHistory] = useState([]);
// // //   const [selectedDate, setSelectedDate] = useState('');

// // //   useEffect(() => {
// // //     fetchPaymentHistory();
// // //   }, []);

// // //   useEffect(() => {
// // //     if (paymentDate) {
// // //       generatePaymentNumber(paymentDate);
// // //     }
// // //   }, [paymentDate]);

// // //   const fetchPaymentHistory = async () => {
// // //     try {
// // //       const response = await axios.get('http://localhost:5000/api/payments');
// // //       setPaymentHistory(response.data);
// // //       setFilteredPaymentHistory(response.data);
// // //     } catch (error) {
// // //       console.error('Error fetching payment history:', error);
// // //     }
// // //   };

// // //   const handlePaymentTypeChange = (event) => {
// // //     setPaymentType(event.target.value);
// // //   };

// // //   const handleDateChange = (event) => {
// // //     setPaymentDate(event.target.value);
// // //     setSelectedDate(event.target.value);
// // //   };

// // //   const generatePaymentNumber = async (date) => {
// // //     const formattedDate = new Date(date).toLocaleDateString('en-GB').split('/').reverse().join('');
// // //     try {
// // //       const response = await axios.get(`http://localhost:5000/api/payments?date=${formattedDate}`);
// // //       const paymentsOnDate = response.data;
// // //       let highestPaymentNumber = 0;
// // //       paymentsOnDate.forEach(payment => {
// // //         const parts = payment.paymentNumber.split('_');
// // //         const number = parseInt(parts[2], 10);
// // //         if (!isNaN(number) && number > highestPaymentNumber) {
// // //           highestPaymentNumber = number;
// // //         }
// // //       });
// // //       const newPaymentNumber = `cp_${formattedDate}_${(highestPaymentNumber + 1).toString().padStart(3, '0')}`;
// // //       setPaymentNumber(newPaymentNumber);
// // //     } catch (error) {
// // //       console.error('Error fetching payments:', error);
// // //     }
// // //   };

// // //   const handleSubmit = async (event) => {
// // //     event.preventDefault();

// // //     const errors = validateForm();
// // //     if (Object.keys(errors).length !== 0) {
// // //       setFormErrors(errors);
// // //       return;
// // //     }

// // //     const newPayment = {
// // //       paymentType,
// // //       paymentDate,
// // //       paymentNumber,
// // //       paymentTo,
// // //       paymentAmount,
// // //       paymentRemark,
// // //     };

// // //     try {
// // //       await axios.post('http://localhost:5000/api/payments', newPayment);
// // //       setPaymentDate('');
// // //       setPaymentNumber('');
// // //       setPaymentTo('');
// // //       setPaymentAmount('');
// // //       setPaymentRemark('');
// // //       setIsSaved(true);
// // //       setTimeout(() => {
// // //         setIsSaved(false);
// // //       }, 3000);
// // //       fetchPaymentHistory();
// // //     } catch (error) {
// // //       console.error('Error saving payment:', error);
// // //     }
// // //   };

// // //   const validateForm = () => {
// // //     const errors = {};

// // //     if (!paymentDate) {
// // //       errors.paymentDate = 'Payment date is required';
// // //     }

// // //     if (!paymentTo) {
// // //       errors.paymentTo = 'Payment to is required';
// // //     }

// // //     if (!paymentAmount) {
// // //       errors.paymentAmount = 'Payment amount is required';
// // //     }

// // //     return errors;
// // //   };

// // //   const handleDateFilter = (event) => {
// // //     const selectedDate = event.target.value;
// // //     setSelectedDate(selectedDate);
// // //     if (selectedDate) {
// // //       const formattedDate = new Date(selectedDate).toISOString(); // Convert to ISODate format
// // //       const filteredData = paymentHistory.filter(payment => payment.paymentDate && payment.paymentDate.startsWith(formattedDate));
// // //       setFilteredPaymentHistory(filteredData);
// // //     } else {
// // //       setFilteredPaymentHistory(paymentHistory); // If no date is selected, show all data
// // //     }
// // //   };

// // //   return (
// // //     <div className="p-4">
// // //       <h2 className="text-2xl font-bold mb-4">Make Payment</h2>
// // //       <form onSubmit={handleSubmit} className="bg-gray-100 p-6 rounded-lg shadow-md">
// // //         <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
// // //           {/* Payment Type */}
// // //           <div className="flex items-center">
// // //             <label className="mr-2">Payment Type:</label>
// // //             <div>
// // //               <input type="radio" id="cash" value="cash" checked={paymentType === 'cash'} onChange={handlePaymentTypeChange} />
// // //               <label htmlFor="cash" className="mr-2 ml-1">Cash Payment </label>
// // //             </div>
// // //             <div>
// // //               <input type="radio" id="check" value="check" checked={paymentType === 'check'} onChange={handlePaymentTypeChange} />
// // //               <label htmlFor="check" className="mr-2 ml-1">Check Payment </label>
// // //             </div>
// // //           </div>
// // //           {/* Payment Date */}
// // //           <div className="flex items-center">
// // //             <label className="mr-2">Payment Date:</label>
// // //             <input type="date" value={paymentDate} onChange={handleDateChange} />
// // //           </div>
// // //           {/* Payment Number */}
// // //           <div className="flex items-center">
// // //             <label className="mr-2">Payment Number:</label>
// // //             <input type="text" value={paymentNumber} readOnly />
// // //           </div>
// // //           {/* Payment To */}
// // //           <div className="flex items-center">
// // //             <label className="mr-2">Payment To:</label>
// // //             <input type="text" value={paymentTo} onChange={(e) => setPaymentTo(e.target.value)} />
// // //           </div>
// // //           {/* Payment Amount */}
// // //           <div className="flex items-center">
// // //             <label className="mr-2">Payment Amount:</label>
// // //             <input type="number" value={paymentAmount} onChange={(e) => setPaymentAmount(e.target.value)} />
// // //           </div>
// // //           {/* Remarks */}
// // //           <div className="flex items-center">
// // //             <label className="mr-2">Remarks:</label>
// // //             <input type="text" value={paymentRemark} onChange={(e) => setPaymentRemark(e.target.value)} />
// // //           </div>
// // //         </div>
// // //         {/* Submit Buttons */}
// // //         <div className="mt-4">
// // //           <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 mr-2 rounded-md">Save</button>
// // //           <button type="button" className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 mr-2 rounded-md">Cancel</button>
// // //           <button type="button" className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md">Save & Print</button>
// // //         </div>
// // //       </form>
// // //       {/* Success Message */}
// // //       {isSaved && <div className="mt-4 text-green-600">Data saved successfully!</div>}
// // //       {/* Form Errors */}
// // //       {formErrors.paymentDate && <div className="mt-2 text-red-600">{formErrors.paymentDate}</div>}
// // //       {formErrors.paymentTo && <div className="mt-2 text-red-600">{formErrors.paymentTo}</div>}
// // //       {formErrors.paymentAmount && <div className="mt-2 text-red-600">{formErrors.paymentAmount}</div>}

// // //       {/* Payment History */}
// // //       <div className="mt-8">
// // //         <h2 className="text-2xl font-bold mb-4">Payment History</h2>
// // //         {/* Date Filter */}
// // //         <div className="mb-4">
// // //           <label htmlFor="dateFilter" className="mr-2">Filter by Date:</label>
// // //           <input type="date" id="dateFilter" value={selectedDate} onChange={handleDateFilter} />
// // //         </div>
// // //         {/* Payment History Table */}
// // //         <div className="overflow-hidden border rounded-lg shadow-md">
// // //           <table className="mx-auto w-one-quarters table-fixed">
// // //             <thead className="bg-gray-800 text-white">
// // //               <tr>
// // //                 <th className="px-2 py-2 w-1/4">Date</th>
// // //                 <th className="px-2 py-2 w-1/4">Payment Number</th>
// // //                 <th className="px-2 py-2 w-1/4">Payment To</th>
// // //                 <th className="px-2 py-2 w-1/4">Amount</th>
// // //               </tr>
// // //             </thead>
// // //             <tbody>
// // //               {filteredPaymentHistory.map((payment, index) => (
// // //                 <tr key={index} className={index % 2 === 0 ? "bg-gray-100" : ""}>
// // //                   <td className="border px-2 py-2">{payment.paymentDate}</td>
// // //                   <td className="border px-2 py-2">{payment.paymentNumber}</td>
// // //                   <td className="border px-2 py-2">{payment.paymentTo}</td>
// // //                   <td className="border px-2 py-2">{payment.paymentAmount}</td>
// // //                 </tr>
// // //               ))}
// // //             </tbody>
// // //           </table>
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default Payment;



// // import React, { useState, useEffect } from 'react';
// // import axios from 'axios';

// // const Payment = () => {
// //   const [paymentType, setPaymentType] = useState('cash');
// //   const [paymentDate, setPaymentDate] = useState('');
// //   const [paymentNumber, setPaymentNumber] = useState('');
// //   const [paymentTo, setPaymentTo] = useState('');
// //   const [paymentAmount, setPaymentAmount] = useState('');
// //   const [paymentRemark, setPaymentRemark] = useState('');
// //   const [isSaved, setIsSaved] = useState(false);
// //   const [formErrors, setFormErrors] = useState({});
// //   const [paymentHistory, setPaymentHistory] = useState([]);
// //   const [filteredPaymentHistory, setFilteredPaymentHistory] = useState([]);
// //   const [selectedDate, setSelectedDate] = useState('');

// //   useEffect(() => {
// //     fetchPaymentHistory();
// //   }, []);

// //   useEffect(() => {
// //     if (paymentDate) {
// //       generatePaymentNumber(paymentDate);
// //     }
// //   }, [paymentDate]);

// //   const fetchPaymentHistory = async () => {
// //     try {
// //       const response = await axios.get('http://localhost:5000/api/payments');
// //       setPaymentHistory(response.data);
// //       setFilteredPaymentHistory(response.data);
// //     } catch (error) {
// //       console.error('Error fetching payment history:', error);
// //     }
// //   };

// //   const handlePaymentTypeChange = (event) => {
// //     setPaymentType(event.target.value);
// //   };

// //   const handleDateChange = (event) => {
// //     setPaymentDate(event.target.value);
// //     setSelectedDate(event.target.value);
// //   };

// //   const generatePaymentNumber = async (date) => {
// //     const formattedDate = new Date(date).toLocaleDateString('en-GB').split('/').reverse().join('');
// //     try {
// //       const response = await axios.get(`http://localhost:5000/api/payments?date=${formattedDate}`);
// //       const paymentsOnDate = response.data;
// //       let highestPaymentNumber = 0;
// //       paymentsOnDate.forEach(payment => {
// //         const parts = payment.paymentNumber.split('_');
// //         const number = parseInt(parts[2], 10);
// //         if (!isNaN(number) && number > highestPaymentNumber) {
// //           highestPaymentNumber = number;
// //         }
// //       });
// //       const newPaymentNumber = `cp_${formattedDate}_${(highestPaymentNumber + 1).toString().padStart(3, '0')}`;
// //       setPaymentNumber(newPaymentNumber);
// //     } catch (error) {
// //       console.error('Error fetching payments:', error);
// //     }
// //   };

// //   const handleSubmit = async (event) => {
// //     event.preventDefault();

// //     const errors = validateForm();
// //     if (Object.keys(errors).length !== 0) {
// //       setFormErrors(errors);
// //       return;
// //     }

// //     const newPayment = {
// //       paymentType,
// //       paymentDate,
// //       paymentNumber,
// //       paymentTo,
// //       paymentAmount,
// //       paymentRemark,
// //     };

// //     try {
// //       await axios.post('http://localhost:5000/api/payments', newPayment);
// //       setPaymentDate('');
// //       setPaymentNumber('');
// //       setPaymentTo('');
// //       setPaymentAmount('');
// //       setPaymentRemark('');
// //       setIsSaved(true);
// //       setTimeout(() => {
// //         setIsSaved(false);
// //       }, 3000);
// //       fetchPaymentHistory();
// //     } catch (error) {
// //       console.error('Error saving payment:', error);
// //     }
// //   };

// //   const validateForm = () => {
// //     const errors = {};

// //     if (!paymentDate) {
// //       errors.paymentDate = 'Payment date is required';
// //     }

// //     if (!paymentTo) {
// //       errors.paymentTo = 'Payment to is required';
// //     }

// //     if (!paymentAmount) {
// //       errors.paymentAmount = 'Payment amount is required';
// //     }

// //     return errors;
// //   };

// //   const handleDateFilter = (event) => {
// //     const selectedDate = event.target.value;
// //     setSelectedDate(selectedDate);
// //     if (selectedDate) {
// //       const formattedDate = new Date(selectedDate).toISOString(); // Convert to ISODate format
// //       const filteredData = paymentHistory.filter(payment => payment.paymentDate && payment.paymentDate.startsWith(formattedDate));
// //       setFilteredPaymentHistory(filteredData);
// //     } else {
// //       setFilteredPaymentHistory(paymentHistory); // If no date is selected, show all data
// //     }
// //   };

// //   return (
// //     <div className="p-4">
// //       <h2 className="text-2xl font-bold mb-4">Make Payment</h2>
// //       <form onSubmit={handleSubmit} className="bg-gray-100 p-6 rounded-lg shadow-md">
// //         <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
// //           {/* Payment form inputs */}
// //           <div className="flex items-center">
// //             <label className="mr-2">Payment Type:</label>
// //             <div>
// //               <input type="radio" id="cash" value="cash" checked={paymentType === 'cash'} onChange={handlePaymentTypeChange} />
// //               <label htmlFor="cash" className="mr-2 ml-1">Cash Payment </label>
// //             </div>
// //             <div>
// //               <input type="radio" id="check" value="check" checked={paymentType === 'check'} onChange={handlePaymentTypeChange} />
// //               <label htmlFor="check" className="mr-2 ml-1">Cheque Payment </label>
// //             </div>
// //           </div>
// //           {/* Payment Date */}
// //           <div className="flex items-center">
// //             <label className="mr-2">Payment Date:</label>
// //             <input type="date" value={paymentDate} onChange={handleDateChange} />
// //           </div>
// //           {/* Payment Number */}
// //           <div className="flex items-center">
// //             <label className="mr-2">Payment Number:</label>
// //             <input type="text" value={paymentNumber} readOnly />
// //           </div>
// //           {/* Payment To */}
// //           <div className="flex items-center">
// //             <label className="mr-2">Payment To:</label>
// //             <input type="text" value={paymentTo} onChange={(e) => setPaymentTo(e.target.value)} />
// //           </div>
// //           {/* Payment Amount */}
// //           <div className="flex items-center">
// //             <label className="mr-2">Payment Amount:</label>
// //             <input type="number" value={paymentAmount} onChange={(e) => setPaymentAmount(e.target.value)} />
// //           </div>
// //           {/* Remarks */}
// //           <div className="flex items-center">
// //             <label className="mr-2">Remarks:</label>
// //             <input type="text" value={paymentRemark} onChange={(e) => setPaymentRemark(e.target.value)} />
// //           </div>
// //         </div>
// //         <div className="mt-4">
// //           <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 mr-2 rounded-md">Save</button>
// //           <button type="button" className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 mr-2 rounded-md">Cancel</button>
// //           <button type="button" className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md">Save & Print</button>
// //         </div>
// //       </form>
// //       {isSaved && <div className="mt-4 text-green-600">Data saved successfully!</div>}
// //       {formErrors.paymentDate && <div className="mt-2 text-red-600">{formErrors.paymentDate}</div>}
// //       {formErrors.paymentTo && <div className="mt-2 text-red-600">{formErrors.paymentTo}</div>}
// //       {formErrors.paymentAmount && <div className="mt-2 text-red-600">{formErrors.paymentAmount}</div>}

// //       <div className="mt-8">
// //         <h2 className="text-2xl font-bold mb-4">Payment History</h2>
// //         <div className="mb-4">
// //           <label htmlFor="dateFilter" className="mr-2">Filter by Date:</label>
// //           <input type="date" id="dateFilter" value={selectedDate} onChange={handleDateFilter} />
// //         </div>
// //         <div className="overflow-hidden border rounded-lg shadow-md">
// //           <table className="mx-auto w-one-quarters table-fixed">
// //             <thead className="bg-gray-800 text-white">
// //               <tr>
// //                 <th className="px-2 py-2 w-1/4">Serial Number</th>
// //                 <th className="px-2 py-2 w-1/4">Payment Number</th>
// //                 <th className="px-2 py-2 w-1/4">Payment To</th>
// //                 <th className="px-2 py-2 w-1/4">Amount</th>
// //               </tr>
// //             </thead>
// //             <tbody>
// //               {filteredPaymentHistory.map((payment, index) => (
// //                 <tr key={index} className={index % 2 === 0 ? "bg-gray-100" : ""}>
// //                   <td className="border px-2 py-2">{index + 1}</td>
// //                   <td className="border px-2 py-2">{payment.paymentNumber}</td>
// //                   <td className="border px-2 py-2">{payment.paymentTo}</td>
// //                   <td className="border px-2 py-2">{payment.paymentAmount}</td>
// //                 </tr>
// //               ))}
// //             </tbody>
// //           </table>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Payment;

// // import React, { useState, useEffect } from 'react';
// // import axios from 'axios';

// // const Payment = () => {
// //   const [paymentType, setPaymentType] = useState('cash');
// //   const [paymentDate, setPaymentDate] = useState(new Date().toISOString().split('T')[0]); // Initialize with today's date
// //   const [paymentNumber, setPaymentNumber] = useState('');
// //   const [paymentTo, setPaymentTo] = useState('');
// //   const [paymentAmount, setPaymentAmount] = useState('');
// //   const [paymentRemark, setPaymentRemark] = useState('');
// //   const [isSaved, setIsSaved] = useState(false);
// //   const [formErrors, setFormErrors] = useState({});
// //   const [paymentHistory, setPaymentHistory] = useState([]);
// //   const [filteredPaymentHistory, setFilteredPaymentHistory] = useState([]);
// //   const [selectedDate, setSelectedDate] = useState('');

// //   useEffect(() => {
// //     fetchPaymentHistory();
// //   }, []);

// //   useEffect(() => {
// //     if (paymentDate) {
// //       generatePaymentNumber(paymentDate);
// //     }
// //   }, [paymentDate]);

// //   const fetchPaymentHistory = async () => {
// //     try {
// //       const response = await axios.get('http://localhost:5000/api/payments');
// //       setPaymentHistory(response.data);
// //       setFilteredPaymentHistory(response.data);
// //     } catch (error) {
// //       console.error('Error fetching payment history:', error);
// //     }
// //   };

// //   useEffect(() => {
// //     if (paymentDate) {
// //       setSelectedDateClass('border-blue-500');
// //     } else {
// //       setSelectedDateClass('');
// //     }
// //   }, [paymentDate]);

// //   const handlePaymentTypeChange = (event) => {
// //     setPaymentType(event.target.value);
// //   };

// //   const handleDateChange = (event) => {
// //     setPaymentDate(event.target.value);
// //   };

// //   const generatePaymentNumber = async (date) => {
// //     const formattedDate = new Date(date).toLocaleDateString('en-GB').split('/').reverse().join('');
// //     try {
// //       const response = await axios.get(`http://localhost:5000/api/payments?date=${formattedDate}`);
// //       const paymentsOnDate = response.data;
// //       let highestPaymentNumber = 0;
// //       paymentsOnDate.forEach(payment => {
// //         const parts = payment.paymentNumber.split('_');
// //         const number = parseInt(parts[2], 10);
// //         if (!isNaN(number) && number > highestPaymentNumber) {
// //           highestPaymentNumber = number;
// //         }
// //       });
// //       const newPaymentNumber = `cp_${formattedDate}_${(highestPaymentNumber + 1).toString().padStart(3, '0')}`;
// //       setPaymentNumber(newPaymentNumber);
// //     } catch (error) {
// //       console.error('Error fetching payments:', error);
// //     }
// //   };

// //   const handleSubmit = async (event) => {
// //     event.preventDefault();

// //     const errors = validateForm();
// //     if (Object.keys(errors).length !== 0) {
// //       setFormErrors(errors);
// //       return;
// //     }

// //     const newPayment = {
// //       paymentType,
// //       paymentDate,
// //       paymentNumber,
// //       paymentTo,
// //       paymentAmount,
// //       paymentRemark,
// //     };

// //     try {
// //       await axios.post('http://localhost:5000/api/payments', newPayment);
// //       setPaymentDate('');
// //       setPaymentNumber('');
// //       setPaymentTo('');
// //       setPaymentAmount('');
// //       setPaymentRemark('');
// //       setIsSaved(true);
// //       setTimeout(() => {
// //         setIsSaved(false);
// //       }, 3000);
// //       fetchPaymentHistory();
// //     } catch (error) {
// //       console.error('Error saving payment:', error);
// //     }
// //   };

// //   const validateForm = () => {
// //     const errors = {};

// //     if (!paymentDate) {
// //       errors.paymentDate = 'Payment date is required';
// //     }

// //     if (!paymentTo) {
// //       errors.paymentTo = 'Payment to is required';
// //     }

// //     if (!paymentAmount) {
// //       errors.paymentAmount = 'Payment amount is required';
// //     }

// //     return errors;
// //   };

// //   const handleDateFilter = (event) => {
// //     const selectedDate = event.target.value;
// //     setSelectedDate(selectedDate);
// //     if (selectedDate) {
// //       const formattedDate = new Date(selectedDate).toISOString(); // Convert to ISODate format
// //       const filteredData = paymentHistory.filter(payment => payment.paymentDate && payment.paymentDate.startsWith(formattedDate));
// //       setFilteredPaymentHistory(filteredData);
// //     } else {
// //       setFilteredPaymentHistory(paymentHistory); // If no date is selected, show all data
// //     }
// //   };

// //   const [selectedDateClass, setSelectedDateClass] = useState('');

// //   const handleSaveAndPrint = async (event) => {
// //     event.preventDefault(); // Prevent default form submission behavior
  
// //     // Save the payment data
// //     const errors = validateForm();
// //     if (Object.keys(errors).length !== 0) {
// //       setFormErrors(errors);
// //       return;
// //     }
  
// //     const newPayment = {
// //       paymentType,
// //       paymentDate,
// //       paymentNumber,
// //       paymentTo,
// //       paymentAmount,
// //       paymentRemark,
// //     };
  
// //     try {
// //       await axios.post('http://localhost:5000/api/payments', newPayment);
// //       setIsSaved(true);
// //       setTimeout(() => {
// //         setIsSaved(false);
// //       }, 3000);
// //       fetchPaymentHistory();
  
// //       // Reset form fields
// //       setPaymentDate('');
// //       setPaymentNumber('');
// //       setPaymentTo('');
// //       setPaymentAmount('');
// //       setPaymentRemark('');
// //     } catch (error) {
// //       console.error('Error saving payment:', error);
// //     }
  
// //     // Trigger printing action
// //     window.print();
// //   };
   
  
  

// //   return (
// //     <div className="p-4">
// //       <h2 className="text-2xl font-bold mb-4">Make Payment</h2>
// //       <form onSubmit={handleSubmit} className="bg-gray-100 p-6 rounded-lg shadow-md">
// //         <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
// //           <div className="flex items-center">
// //             <label className="mr-2">Payment Type:</label>
// //             <div>
// //               <input type="radio" id="cash" value="cash" checked={paymentType === 'cash'} onChange={handlePaymentTypeChange} />
// //               <label htmlFor="cash" className="mr-2 ml-1">Cash Payment </label>
// //             </div>
// //             <div>
// //               <input type="radio" id="check" value="check" checked={paymentType === 'check'} onChange={handlePaymentTypeChange} />
// //               <label htmlFor="check" className="mr-2 ml-1">Check Payment </label>
// //             </div>
// //           </div>
// //           <div className="flex items-center">
// //             <label className="mr-2">Payment Date:</label>
// //             <input type="date" value={paymentDate} onChange={handleDateChange} className={`border ${selectedDateClass}`} />
// //           </div>
// //           <div className="flex items-center">
// //             <label className="mr-2">Payment Number:</label>
// //             <input type="text" value={paymentNumber} onChange={(e) => setPaymentNumber(e.target.value)} placeholder="Payment Number" />
// //           </div>
// //           <div className="flex items-center">
// //             <label className="mr-2">Payment To:</label>
// //             <input type="text" value={paymentTo} onChange={(e) => setPaymentTo(e.target.value)} placeholder="Payment To" />
// //           </div>
// //           <div className="flex items-center">
// //             <label className="mr-2">Payment Amount:(in words)</label>
// //             <input type="number" value={paymentAmount} onChange={(e) => setPaymentAmount(e.target.value)} placeholder="Payment Amount" />
// //             <span className="text-gray-400"></span>
// //           </div>
// //           <div className="flex items-center">
// //             <label className="mr-2">Remarks:</label>
// //             <textarea
// //               value={paymentRemark}
// //               onChange={(e) => setPaymentRemark(e.target.value)}
// //               placeholder="Remarks"
// //               rows={5} // Set the number of rows to 5 or adjust as needed
// //               className="resize-none w-full px-3 py-2 border rounded-md" // Additional styling
// //             />
// //           </div>   
// //         </div>
// //         <div className="mt-4">
// //           <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 mr-2 rounded-md">Save</button>
// //           <button type="button" className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 mr-2 rounded-md">Cancel</button>
// //           <button type="button" onClick={handleSaveAndPrint} className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md">Save & Print</button>

// //           {/* <button type="button" className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md">Save & Print</button> */}
// //         </div>
// //       </form>
// //       {isSaved && <div className="mt-4 text-green-600">Data saved successfully!</div>}
// //       {formErrors.paymentDate && <div className="mt-2 text-red-600">{formErrors.paymentDate}</div>}
// //       {formErrors.paymentTo && <div className="mt-2 text-red-600">{formErrors.paymentTo}</div>}
// //       {formErrors.paymentAmount && <div className="mt-2 text-red-600">{formErrors.paymentAmount}</div>}

// //       <div className="mt-8">
// //         <h2 className="text-2xl font-bold mb-4">Payment History</h2>
// //         <div className="mb-4">
// //           <label htmlFor="dateFilter" className="mr-2">Filter by Date:</label>
// //           <input type="date" id="dateFilter" value={selectedDate} onChange={handleDateFilter} />
// //         </div>
// //         <div className="overflow-hidden border rounded-lg shadow-md">
// //           <table className="mx-auto w-one-quarters table-fixed">
// //             <thead className="bg-gray-800 text-white">
// //               <tr>
// //                 <th className="px-2 py-2 w-1/4">Serial Number</th>
// //                 <th className="px-2 py-2 w-1/4">Payment Number</th>
// //                 <th className="px-2 py-2 w-1/4">Payment To</th>
// //                 <th className="px-2 py-2 w-1/4">Amount</th>
// //               </tr>
// //             </thead>
// //             <tbody>
// //               {filteredPaymentHistory.map((payment, index) => (
// //                 <tr key={index} className={index % 2 === 0 ? "bg-gray-100" : ""}>
// //                   <td className="border px-2 py-2">{index + 1}</td>
// //                   <td className="border px-2 py-2">{payment.paymentNumber}</td>
// //                   <td className="border px-2 py-2">{payment.paymentTo}</td>
// //                   <td className="border px-2 py-2">{payment.paymentAmount}</td>
// //                 </tr>
// //               ))}
// //             </tbody>
// //           </table>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Payment;
// //    Here is Evry thing is fine  
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import './print.css'; // Import print.css
// // import Receipt from './Receipt';
// import './Receipt.css';
// const Receipt = ({ paymentData }) => {
//   return (
//     <div className="receipt-container">
//       <h2>Payment Receipt</h2>
//       <div>
//         <strong>Payment Type:</strong> {paymentData.paymentType}
//       </div>
//       <div>
//         <strong>Payment Date:</strong> {paymentData.paymentDate}
//       </div>
//       <div>
//         <strong>Payment Number:</strong> {paymentData.paymentNumber}
//       </div>
//       <div>
//         <strong>Payment To:</strong> {paymentData.paymentTo}
//       </div>
//       <div>
//         <strong>Payment Amount:</strong> {paymentData.paymentAmount}
//       </div>
//       <div>
//         <strong>Remarks:</strong> {paymentData.paymentRemark}
//       </div>
//     </div>
//   );
// };

// const Payment = () => {
//   const [paymentType, setPaymentType] = useState('cash');
//   const [paymentDate, setPaymentDate] = useState(new Date().toISOString().split('T')[0]); // Initialize with today's date
//   const [paymentNumber, setPaymentNumber] = useState('');
//   const [paymentTo, setPaymentTo] = useState('');
//   const [paymentAmount, setPaymentAmount] = useState('');
//   const [paymentRemark, setPaymentRemark] = useState('');
//   const [isSaved, setIsSaved] = useState(false);
//   const [formErrors, setFormErrors] = useState({});
//   const [paymentHistory, setPaymentHistory] = useState([]);
//   const [filteredPaymentHistory, setFilteredPaymentHistory] = useState([]);
//   const [selectedDate, setSelectedDate] = useState('');
//   const [showReceipt, setShowReceipt] = useState(false);
//   const [receiptData, setReceiptData] = useState(null);

//   useEffect(() => {
//     fetchPaymentHistory();
//   }, []);

//   useEffect(() => {
//     if (paymentDate) {
//       generatePaymentNumber(paymentDate);
//     }
//   }, [paymentDate]);

//   const fetchPaymentHistory = async () => {
//     try {
//       const response = await axios.get('http://localhost:5000/api/payments');
//       setPaymentHistory(response.data);
//       setFilteredPaymentHistory(response.data);
//     } catch (error) {
//       console.error('Error fetching payment history:', error);
//     }
//   };

//   useEffect(() => {
//     if (paymentDate) {
//       setSelectedDateClass('border-blue-500');
//     } else {
//       setSelectedDateClass('');
//     }
//   }, [paymentDate]);

//   const handlePaymentTypeChange = (event) => {
//     setPaymentType(event.target.value);
//   };

//   const handleDateChange = (event) => {
//     setPaymentDate(event.target.value);
//   };

//   const generatePaymentNumber = async (date) => {
//     const formattedDate = new Date(date).toLocaleDateString('en-GB').split('/').reverse().join('');
//     try {
//       const response = await axios.get(`http://localhost:5000/api/payments?date=${formattedDate}`);
//       const paymentsOnDate = response.data;
//       let highestPaymentNumber = 0;
//       paymentsOnDate.forEach(payment => {
//         const parts = payment.paymentNumber.split('_');
//         const number = parseInt(parts[2], 10);
//         if (!isNaN(number) && number > highestPaymentNumber) {
//           highestPaymentNumber = number;
//         }
//       });
//       const newPaymentNumber = `cp_${formattedDate}_${(highestPaymentNumber + 1).toString().padStart(3, '0')}`;
//       setPaymentNumber(newPaymentNumber);
//     } catch (error) {
//       console.error('Error fetching payments:', error);
//     }
//   };

//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     const errors = validateForm();
//     if (Object.keys(errors).length !== 0) {
//       setFormErrors(errors);
//       return;
//     }

//     const newPayment = {
//       paymentType,
//       paymentDate,
//       paymentNumber,
//       paymentTo,
//       paymentAmount,
//       paymentRemark,
//     };

//     try {
//       await axios.post('http://localhost:5000/api/payments', newPayment);
//       setPaymentDate('');
//       setPaymentNumber('');
//       setPaymentTo('');
//       setPaymentAmount('');
//       setPaymentRemark('');
//       setIsSaved(true);
//       setTimeout(() => {
//         setIsSaved(false);
//       }, 3000);
//       fetchPaymentHistory();
//       setShowReceipt(true);
//       setReceiptData(newPayment);
//     } catch (error) {
//       console.error('Error saving payment:', error);
//     }
//   };

//   const validateForm = () => {
//     const errors = {};

//     if (!paymentDate) {
//       errors.paymentDate = 'Payment date is required';
//     }

//     if (!paymentTo) {
//       errors.paymentTo = 'Payment to is required';
//     }

//     if (!paymentAmount) {
//       errors.paymentAmount = 'Payment amount is required';
//     }

//     return errors;
//   };

//   const handleDateFilter = (event) => {
//     const selectedDate = event.target.value;
//     setSelectedDate(selectedDate);
//     if (selectedDate) {
//       const formattedDate = new Date(selectedDate).toISOString(); // Convert to ISODate format
//       const filteredData = paymentHistory.filter(payment => payment.paymentDate && payment.paymentDate.startsWith(formattedDate));
//       setFilteredPaymentHistory(filteredData);
//     } else {
//       setFilteredPaymentHistory(paymentHistory); // If no date is selected, show all data
//     }
//   };

//   const [selectedDateClass, setSelectedDateClass] = useState('');

//   const handleSaveAndPrint = async (event) => {
//     event.preventDefault(); // Prevent default form submission behavior
  
//     // Save the payment data
//     const errors = validateForm();
//     if (Object.keys(errors).length !== 0) {
//       setFormErrors(errors);
//       return;
//     }
  
//     const newPayment = {
//       paymentType,
//       paymentDate,
//       paymentNumber,
//       paymentTo,
//       paymentAmount,
//       paymentRemark,
//     };
  
//     try {
//       await axios.post('http://localhost:5000/api/payments', newPayment);
//       setIsSaved(true);
//       setTimeout(() => {
//         setIsSaved(false);
//       }, 3000);
//       fetchPaymentHistory();
  
//       // Reset form fields
//       setPaymentDate('');
//       setPaymentNumber('');
//       setPaymentTo('');
//       setPaymentAmount('');
//       setPaymentRemark('');
  
//       // Trigger printing action
//       printPaymentForm(newPayment);
//     } catch (error) {
//       console.error('Error saving payment:', error);
//     }
//   };

//   const printPaymentForm = (paymentData) => {
//     setShowReceipt(true);
//     setReceiptData(paymentData);
//     window.print();
//   };

//   const handleCancel = () => {
//     setShowReceipt(false);
//     setReceiptData(null);
//     setPaymentDate('');
//     setPaymentNumber('');
//     setPaymentTo('');
//     setPaymentAmount('');
//     setPaymentRemark('');
//   };
   
//   return (
//     <div className="p-4">
//       <h2 className="text-2xl font-bold mb-4">Make Payment</h2>
//       <form onSubmit={handleSubmit} className="bg-gray-100 p-6 rounded-lg shadow-md">
//         <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//           <div className="flex items-center">
//             <label className="mr-2">Payment Type:</label>
//             <div>
//               <input type="radio" id="cash" value="cash" checked={paymentType === 'cash'} onChange={handlePaymentTypeChange} />
//               <label htmlFor="cash" className="mr-2 ml-1">Cash Payment </label>
//             </div>
//             <div>
//               <input type="radio" id="check" value="check" checked={paymentType === 'check'} onChange={handlePaymentTypeChange} />
//               <label htmlFor="check" className="mr-2 ml-1">Check Payment </label>
//             </div>
//           </div>
//           <div className="flex items-center">
//             <label className="mr-2">Payment Date:</label>
//             <input type="date" value={paymentDate} onChange={handleDateChange} className={`border ${selectedDateClass}`} />
//           </div>
//           <div className="flex items-center">
//             <label className="mr-2">Payment Number:</label>
//             <input type="text" value={paymentNumber} onChange={(e) => setPaymentNumber(e.target.value)} placeholder="Payment Number" />
//           </div>
//           <div className="flex items-center">
//             <label className="mr-2">Payment To:</label>
//             <input type="text" value={paymentTo} onChange={(e) => setPaymentTo(e.target.value)} placeholder="Payment To" />
//           </div>
//           <div className="flex items-center">
//             <label className="mr-2">Payment Amount:(in words)</label>
//             <input type="number" value={paymentAmount} onChange={(e) => setPaymentAmount(e.target.value)} placeholder="Payment Amount" />
//             <span className="text-gray-400"></span>
//           </div>
//           <div className="flex items-center">
//             <label className="mr-2">Remarks:</label>
//             <textarea
//               value={paymentRemark}
//               onChange={(e) => setPaymentRemark(e.target.value)}
//               placeholder="Remarks"
//               rows={5} // Set the number of rows to 5 or adjust as needed
//               className="resize-none w-full px-3 py-2 border rounded-md" // Additional styling
//             />
//           </div>   
//         </div>
//         <div className="mt-4">
//           <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 mr-2 rounded-md">Save</button>
//           <button type="button" onClick={handleCancel} className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 mr-2 rounded-md">Cancel</button>
//           <button type="button" onClick={handleSaveAndPrint} className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md">Save & Print</button>
//         </div>
//       </form>
//       {isSaved && <div className="mt-4 text-green-600">Data saved successfully!</div>}
//       {formErrors.paymentDate && <div className="mt-2 text-red-600">{formErrors.paymentDate}</div>}
//       {formErrors.paymentTo && <div className="mt-2 text-red-600">{formErrors.paymentTo}</div>}
//       {formErrors.paymentAmount && <div className="mt-2 text-red-600">{formErrors.paymentAmount}</div>}

//       {showReceipt && receiptData && <Receipt paymentData={receiptData} />}

//       <div className="mt-8">
//         <h2 className="text-2xl font-bold mb-4">Payment History</h2>
//         <div className="mb-4">
//           <label htmlFor="dateFilter" className="mr-2">Filter by Date:</label>
//           <input type="date" id="dateFilter" value={selectedDate} onChange={handleDateFilter} />
//         </div>
//         <div className="overflow-hidden border rounded-lg shadow-md">
//           <table className="mx-auto w-one-quarters table-fixed">
//             <thead className="bg-gray-800 text-white">
//               <tr>
//                 <th className="px-2 py-2 w-1/4">Serial Number</th>
//                 <th className="px-2 py-2 w-1/4">Payment Number</th>
//                 <th className="px-2 py-2 w-1/4">Payment To</th>
//                 <th className="px-2 py-2 w-1/4">Amount</th>
//               </tr>
//             </thead>
//             <tbody>
//               {filteredPaymentHistory.map((payment, index) => (
//                 <tr key={index} className={index % 2 === 0 ? "bg-gray-100" : ""}>
//                   <td className="border px-2 py-2">{index + 1}</td>
//                   <td className="border px-2 py-2">{payment.paymentNumber}</td>
//                   <td className="border px-2 py-2">{payment.paymentTo}</td>
//                   <td className="border px-2 py-2">{payment.paymentAmount}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Payment;

//Without DropDown
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import './print.css'; // Import print.css
// import './Receipt.css';

// const Receipt = ({ paymentData }) => {
//   return (
//     <div className="receipt-container">
//       <h2>Payment Receipt</h2>
//       <div>
//         <strong>Payment Type:</strong> {paymentData.paymentType}
//       </div>
//       <div>
//         <strong>Payment Date:</strong> {paymentData.paymentDate}
//       </div>
//       <div>
//         <strong>Payment Number:</strong> {paymentData.paymentNumber}
//       </div>
//       <div>
//         <strong>Payment To:</strong> {paymentData.paymentTo}
//       </div>
//       <div>
//         <strong>Payment Amount:</strong> {paymentData.paymentAmount}
//       </div>
//       <div>
//         <strong>Remarks:</strong> {paymentData.paymentRemark}
//       </div>
//       {paymentData.paymentType === 'check' && (
//         <>
//           <div>
//             <strong>Check Number:</strong> {paymentData.checkNumber}
//           </div>
//           <div>
//             <strong>Bank Account Number:</strong> {paymentData.bankAccountNumber}
//           </div>
//           <div>
//             <strong>Payment From:</strong> {paymentData.paymentFrom}
//           </div>
//           <div>
//             <strong>Section Name:</strong> {paymentData.sectionName}
//           </div>
//         </>
//       )}
//     </div>
//   );
// };

// const Payment = () => {
//   const [paymentType, setPaymentType] = useState('cash');
//   const [paymentDate, setPaymentDate] = useState(new Date().toISOString().split('T')[0]); // Initialize with today's date
//   const [paymentNumber, setPaymentNumber] = useState('');
//   const [paymentTo, setPaymentTo] = useState('');
//   const [paymentAmount, setPaymentAmount] = useState('');
//   const [paymentRemark, setPaymentRemark] = useState('');
//   const [checkNumber, setCheckNumber] = useState('');
//   const [bankAccountNumber, setBankAccountNumber] = useState('');
//   const [paymentFrom, setPaymentFrom] = useState('');
//   const [sectionName, setSectionName] = useState('');
//   const [isSaved, setIsSaved] = useState(false);
//   const [formErrors, setFormErrors] = useState({});
//   const [paymentHistory, setPaymentHistory] = useState([]);
//   const [filteredPaymentHistory, setFilteredPaymentHistory] = useState([]);
//   const [selectedDate, setSelectedDate] = useState('');
//   const [showReceipt, setShowReceipt] = useState(false);
//   const [receiptData, setReceiptData] = useState(null);

//   useEffect(() => {
//     fetchPaymentHistory();
//   }, []);

//   useEffect(() => {
//     if (paymentDate) {
//       generatePaymentNumber(paymentDate);
//     }
//   }, [paymentDate]);

//   const fetchPaymentHistory = async () => {
//     try {
//       const response = await axios.get('http://localhost:5000/api/payments');
//       setPaymentHistory(response.data);
//       setFilteredPaymentHistory(response.data);
//     } catch (error) {
//       console.error('Error fetching payment history:', error);
//     }
//   };

//   useEffect(() => {
//     if (paymentDate) {
//       setSelectedDateClass('border-blue-500');
//     } else {
//       setSelectedDateClass('');
//     }
//   }, [paymentDate]);

//   const handlePaymentTypeChange = (event) => {
//     setPaymentType(event.target.value);
//   };

//   const handleDateChange = (event) => {
//     setPaymentDate(event.target.value);
//   };

//   const generatePaymentNumber = async (date) => {
//     const formattedDate = new Date(date).toLocaleDateString('en-GB').split('/').reverse().join('');
//     try {
//       const response = await axios.get(`http://localhost:5000/api/payments?date=${formattedDate}`);
//       const paymentsOnDate = response.data;
//       let highestPaymentNumber = 0;
//       paymentsOnDate.forEach(payment => {
//         const parts = payment.paymentNumber.split('_');
//         const number = parseInt(parts[2], 10);
//         if (!isNaN(number) && number > highestPaymentNumber) {
//           highestPaymentNumber = number;
//         }
//       });
//       const newPaymentNumber = `cp_${formattedDate}_${(highestPaymentNumber + 1).toString().padStart(3, '0')}`;
//       setPaymentNumber(newPaymentNumber);
//     } catch (error) {
//       console.error('Error fetching payments:', error);
//     }
//   };

//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     const errors = validateForm();
//     if (Object.keys(errors).length !== 0) {
//       setFormErrors(errors);
//       return;
//     }

//     const newPayment = {
//       paymentType,
//       paymentDate,
//       paymentNumber,
//       paymentTo,
//       paymentAmount,
//       paymentRemark,
//       checkNumber, // Added check number for check payment
//       bankAccountNumber, // Added bank account number for check payment
//       paymentFrom, // Added payment from for check payment
//       sectionName, // Added section name for check payment
//     };

//     try {
//       await axios.post('http://localhost:5000/api/payments', newPayment);
//       setPaymentDate('');
//       setPaymentNumber('');
//       setPaymentTo('');
//       setPaymentAmount('');
//       setPaymentRemark('');
//       setCheckNumber('');
//       setBankAccountNumber('');
//       setPaymentFrom('');
//       setSectionName('');
//       setIsSaved(true);
//       setTimeout(() => {
//         setIsSaved(false);
//       }, 3000);
//       fetchPaymentHistory();
//       setShowReceipt(true);
//       setReceiptData(newPayment);
//     } catch (error) {
//       console.error('Error saving payment:', error);
//     }
//   };

//   const validateForm = () => {
//     const errors = {};

//     if (!paymentDate) {
//       errors.paymentDate = 'Payment date is required';
//     }

//     if (!paymentTo) {
//       errors.paymentTo = 'Payment to is required';
//     }

//     if (!paymentAmount) {
//       errors.paymentAmount = 'Payment amount is required';
//     }

//     if (paymentType === 'check') {
//       if (!checkNumber) {
//         errors.checkNumber = 'Check number is required';
//       }

//       if (!bankAccountNumber) {
//         errors.bankAccountNumber = 'Bank account number is required';
//       }

//       if (!paymentFrom) {
//         errors.paymentFrom = 'Payment from is required';
//       }

//       if (!sectionName) {
//         errors.sectionName = 'Section name is required';
//       }
//     }

//     return errors;
//   };

//   const handleDateFilter = (event) => {
//     const selectedDate = event.target.value;
//     setSelectedDate(selectedDate);
//     if (selectedDate) {
//       const formattedDate = new Date(selectedDate).toISOString(); // Convert to ISODate format
//       const filteredData = paymentHistory.filter(payment => payment.paymentDate && payment.paymentDate.startsWith(formattedDate));
//       setFilteredPaymentHistory(filteredData);
//     } else {
//       setFilteredPaymentHistory(paymentHistory); // If no date is selected, show all data
//     }
//   };

//   const [selectedDateClass, setSelectedDateClass] = useState('');

//   const handleSaveAndPrint = async (event) => {
//     event.preventDefault(); // Prevent default form submission behavior

//     // Save the payment data
//     const errors = validateForm();
//     if (Object.keys(errors).length !== 0) {
//       setFormErrors(errors);
//       return;
//     }

//     const newPayment = {
//       paymentType,
//       paymentDate,
//       paymentNumber,
//       paymentTo,
//       paymentAmount,
//       paymentRemark,
//       checkNumber, // Added check number for check payment
//       bankAccountNumber, // Added bank account number for check payment
//       paymentFrom, // Added payment from for check payment
//       sectionName, // Added section name for check payment
//     };

//     try {
//       await axios.post('http://localhost:5000/api/payments', newPayment);
//       setIsSaved(true);
//       setTimeout(() => {
//         setIsSaved(false);
//       }, 3000);
//       fetchPaymentHistory();

//       // Reset form fields
//       setPaymentDate('');
//       setPaymentNumber('');
//       setPaymentTo('');
//       setPaymentAmount('');
//       setPaymentRemark('');
//       setCheckNumber('');
//       setBankAccountNumber('');
//       setPaymentFrom('');
//       setSectionName('');

//       // Trigger printing action
//       printPaymentForm(newPayment);
//     } catch (error) {
//       console.error('Error saving payment:', error);
//     }
//   };

//   const printPaymentForm = (paymentData) => {
//     setShowReceipt(true);
//     setReceiptData(paymentData);
//     window.print();
//   };

//   const handleCancel = () => {
//     setShowReceipt(false);
//     setReceiptData(null);
//     setPaymentDate('');
//     setPaymentNumber('');
//     setPaymentTo('');
//     setPaymentAmount('');
//     setPaymentRemark('');
//     setCheckNumber('');
//     setBankAccountNumber('');
//     setPaymentFrom('');
//     setSectionName('');
//   };

//   return (
//     <div className="p-4">
//       <h2 className="text-2xl font-bold mb-4">Make Payment</h2>
//       <form onSubmit={handleSubmit} className="bg-gray-100 p-6 rounded-lg shadow-md">
//         <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//           <div className="flex items-center">
//             <label className="mr-2">Payment Type:</label>
//             <div>
//               <input type="radio" id="cash" value="cash" checked={paymentType === 'cash'} onChange={handlePaymentTypeChange} />
//               <label htmlFor="cash" className="mr-2 ml-1">Cash Payment </label>
//             </div>
//             <div>
//               <input type="radio" id="check" value="check" checked={paymentType === 'check'} onChange={handlePaymentTypeChange} />
//               <label htmlFor="check" className="mr-2 ml-1">Check Payment </label>
//             </div>
//           </div>
//           <div className="flex items-center">
//             <label className="mr-2">Payment Date:</label>
//             <input type="date" value={paymentDate} onChange={handleDateChange} className={`border ${selectedDateClass}`} />
//           </div>
//           <div className="flex items-center">
//             <label className="mr-2">Payment Number:</label>
//             <input type="text" value={paymentNumber} onChange={(e) => setPaymentNumber(e.target.value)} placeholder="Payment Number" />
//           </div>
//           <div className="flex items-center">
//             <label className="mr-2">Payment To:</label>
//             <input type="text" value={paymentTo} onChange={(e) => setPaymentTo(e.target.value)} placeholder="Payment To" />
//           </div>
//           <div className="flex items-center">
//             <label className="mr-2">Payment Amount:(in words)</label>
//             <input type="number" value={paymentAmount} onChange={(e) => setPaymentAmount(e.target.value)} placeholder="Payment Amount" />
//             <span className="text-gray-400"></span>
//           </div>
//           <div className="flex items-center">
//             <label className="mr-2">Remarks:</label>
//             <textarea
//               value={paymentRemark}
//               onChange={(e) => setPaymentRemark(e.target.value)}
//               placeholder="Remarks"
//               rows={5} // Set the number of rows to 5 or adjust as needed
//               className="resize-none w-full px-3 py-2 border rounded-md" // Additional styling
//             />
//           </div>
//           {paymentType === 'check' && (
//             <>
//               <div className="flex items-center">
//                 <label className="mr-2">Check Number:</label>
//                 <input type="text" value={checkNumber} onChange={(e) => setCheckNumber(e.target.value)} placeholder="Check Number" />
//               </div>
//               <div className="flex items-center">
//                 <label className="mr-2">Bank Account Number:</label>
//                 <input type="number" value={bankAccountNumber} onChange={(e) => setBankAccountNumber(e.target.value)} placeholder="Bank Account Number" />
//               </div>
//               <div className="flex items-center">
//                 <label className="mr-2">Payment From:</label>
//                 <input type="text" value={paymentFrom} onChange={(e) => setPaymentFrom(e.target.value)} placeholder="Payment From" />
//               </div>
//               <div className="flex items-center">
//                 <label className="mr-2">Section Name:</label>
//                 <input type="text" value={sectionName} onChange={(e) => setSectionName(e.target.value)} placeholder="Section Name" />
//               </div>
//             </>
//           )}
//         </div>
//         <div className="mt-4">
//           <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 mr-2 rounded-md">Save</button>
//           <button type="button" onClick={handleCancel} className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 mr-2 rounded-md">Cancel</button>
//           <button type="button" onClick={handleSaveAndPrint} className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md">Save & Print</button>
//         </div>
//       </form>
//       {isSaved && <div className="mt-4 text-green-600">Data saved successfully!</div>}
//       {formErrors.paymentDate && <div className="mt-2 text-red-600">{formErrors.paymentDate}</div>}
//       {formErrors.paymentTo && <div className="mt-2 text-red-600">{formErrors.paymentTo}</div>}
//       {formErrors.paymentAmount && <div className="mt-2 text-red-600">{formErrors.paymentAmount}</div>}
//       {formErrors.checkNumber && <div className="mt-2 text-red-600">{formErrors.checkNumber}</div>}
//       {formErrors.bankAccountNumber && <div className="mt-2 text-red-600">{formErrors.bankAccountNumber}</div>}
//       {formErrors.paymentFrom && <div className="mt-2 text-red-600">{formErrors.paymentFrom}</div>}
//       {formErrors.sectionName && <div className="mt-2 text-red-600">{formErrors.sectionName}</div>}

//       {showReceipt && receiptData && <Receipt paymentData={receiptData} />}

//       <div className="mt-8">
//         <h2 className="text-2xl font-bold mb-4">Payment History</h2>
//         <div className="mb-4">
//           <label htmlFor="dateFilter" className="mr-2">Filter by Date:</label>
//           <input type="date" id="dateFilter" value={selectedDate} onChange={handleDateFilter} />
//         </div>
//         <div className="overflow-hidden border rounded-lg shadow-md">
//           <table className="mx-auto w-one-quarters table-fixed">
//             <thead className="bg-gray-800 text-white">
//               <tr>
//                 <th className="px-2 py-2 w-1/4">Serial Number</th>
//                 <th className="px-2 py-2 w-1/4">Payment Number</th>
//                 <th className="px-2 py-2 w-1/4">Payment To</th>
//                 <th className="px-2 py-2 w-1/4">Amount</th>
//               </tr>
//             </thead>
//             <tbody>
//               {filteredPaymentHistory.map((payment, index) => (
//                 <tr key={index} className={index % 2 === 0 ? "bg-gray-100" : ""}>
//                   <td className="border px-2 py-2">{index + 1}</td>
//                   <td className="border px-2 py-2">{payment.paymentNumber}</td>
//                   <td className="border px-2 py-2">{payment.paymentTo}</td>
//                   <td className="border px-2 py-2">{payment.paymentAmount}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Payment;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './print.css'; // Import print.css
import './Receipt.css';


const Receipt = ({ paymentData }) => {
  return (
    <div className="receipt-container">
      <h2>Payment Receipt</h2>
      <div>
        <strong>Payment Type:</strong> {paymentData.paymentType}
      </div>
      <div>
        <strong>Payment Date:</strong> {paymentData.paymentDate}
      </div>
      <div>
        <strong>Payment Number:</strong> {paymentData.paymentNumber}
      </div>
      <div>
        <strong>Payment To:</strong> {paymentData.paymentTo}
      </div>
      <div>
        <strong>Payment Amount:</strong> {paymentData.paymentAmount}
      </div>
      <div>
        <strong>Remarks:</strong> {paymentData.paymentRemark}
      </div>
      {paymentData.paymentType === 'check' && (
        <>
          <div>
            <strong>Check Number:</strong> {paymentData.checkNumber}
          </div>
          <div>
            <strong>Bank Account Number:</strong> {paymentData.bankAccountNumber}
          </div>
          <div>
            <strong>Payment From:</strong> {paymentData.paymentFrom}
          </div>
          <div>
            <strong>Section Name:</strong> {paymentData.sectionName}
          </div>
        </>
      )}
    </div>
  );
};

const Payment = () => {
  const [paymentType, setPaymentType] = useState('cash');
  const [paymentDate, setPaymentDate] = useState(new Date().toISOString().split('T')[0]); // Initialize with today's date
  const [paymentNumber, setPaymentNumber] = useState('');
  const [paymentTo, setPaymentTo] = useState('');
  const [paymentAmount, setPaymentAmount] = useState('');
  const [paymentRemark, setPaymentRemark] = useState('');
  const [checkNumber, setCheckNumber] = useState('');
  const [bankAccountNumber, setBankAccountNumber] = useState('');
  const [paymentFrom, setPaymentFrom] = useState('');
  const [sectionName, setSectionName] = useState('');
  const [isSaved, setIsSaved] = useState(false);
  const [formErrors, setFormErrors] = useState({});
  const [paymentHistory, setPaymentHistory] = useState([]);
  const [filteredPaymentHistory, setFilteredPaymentHistory] = useState([]);
  const [selectedDate, setSelectedDate] = useState('');
  const [showReceipt, setShowReceipt] = useState(false);
  const [receiptData, setReceiptData] = useState(null);

  useEffect(() => {
    fetchPaymentHistory();
  }, []);

  useEffect(() => {
    if (paymentDate) {
      generatePaymentNumber(paymentDate);
    }
  }, [paymentDate]);

  const fetchPaymentHistory = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/payments');
      setPaymentHistory(response.data);
      setFilteredPaymentHistory(response.data);
    } catch (error) {
      console.error('Error fetching payment history:', error);
    }
  };

  useEffect(() => {
    if (paymentDate) {
      setSelectedDateClass('border-blue-500');
    } else {
      setSelectedDateClass('');
    }
  }, [paymentDate]);

  const handlePaymentTypeChange = (event) => {
    setPaymentType(event.target.value);
  };

  const handleDateChange = (event) => {
    setPaymentDate(event.target.value);
  };

  const generatePaymentNumber = async (date) => {
    const formattedDate = new Date(date).toLocaleDateString('en-GB').split('/').reverse().join('');
    try {
      const response = await axios.get(`http://localhost:5000/api/payments?date=${formattedDate}`);
      const paymentsOnDate = response.data;
      let highestPaymentNumber = 0;
      paymentsOnDate.forEach(payment => {
        const parts = payment.paymentNumber.split('_');
        const number = parseInt(parts[2], 10);
        if (!isNaN(number) && number > highestPaymentNumber) {
          highestPaymentNumber = number;
        }
      });
      const newPaymentNumber = `cp_${formattedDate}_${(highestPaymentNumber + 1).toString().padStart(3, '0')}`;
      setPaymentNumber(newPaymentNumber);
    } catch (error) {
      console.error('Error fetching payments:', error);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const errors = validateForm();
    if (Object.keys(errors).length !== 0) {
      setFormErrors(errors);
      return;
    }

    const newPayment = {
      paymentType,
      paymentDate,
      paymentNumber,
      paymentTo,
      paymentAmount,
      paymentRemark,
      checkNumber,
      bankAccountNumber,
      paymentFrom,
      sectionName,
    };

    try {
      await axios.post('http://localhost:5000/api/payments', newPayment);
      setPaymentDate('');
      setPaymentNumber('');
      setPaymentTo('');
      setPaymentAmount('');
      setPaymentRemark('');
      setCheckNumber('');
      setBankAccountNumber('');
      setPaymentFrom('');
      setSectionName('');
      setIsSaved(true);
      setTimeout(() => {
        setIsSaved(false);
      }, 3000);
      fetchPaymentHistory();
      setShowReceipt(true);
      setReceiptData(newPayment);
    } catch (error) {
      console.error('Error saving payment:', error);
    }
  };

  const validateForm = () => {
    const errors = {};

    if (!paymentDate) {
      errors.paymentDate = 'Payment date is required';
    }

    if (!paymentTo) {
      errors.paymentTo = 'Payment to is required';
    }

    if (!paymentAmount) {
      errors.paymentAmount = 'Payment amount is required';
    }

    if (paymentType === 'check' && !checkNumber) {
      errors.checkNumber = 'Check number is required';
    }

    if (paymentType === 'check' && !bankAccountNumber) {
      errors.bankAccountNumber = 'Bank account number is required';
    }

    if (paymentType === 'check' && !paymentFrom) {
      errors.paymentFrom = 'Payment from is required';
    }

    if (paymentType === 'check' && !sectionName) {
      errors.sectionName = 'Section name is required';
    }

    return errors;
  };

  const handleDateFilter = (event) => {
    const selectedDate = event.target.value;
    setSelectedDate(selectedDate);
    if (selectedDate) {
      const formattedDate = new Date(selectedDate).toISOString(); // Convert to ISODate format
      const filteredData = paymentHistory.filter(payment => payment.paymentDate && payment.paymentDate.startsWith(formattedDate));
      setFilteredPaymentHistory(filteredData);
    } else {
      setFilteredPaymentHistory(paymentHistory); // If no date is selected, show all data
    }
  };

  const [selectedDateClass, setSelectedDateClass] = useState('');

  const handleSaveAndPrint = async (event) => {
    event.preventDefault(); // Prevent default form submission behavior

    // Save the payment data
    const errors = validateForm();
    if (Object.keys(errors).length !== 0) {
      setFormErrors(errors);
      return;
    }

    const newPayment = {
      paymentType,
      paymentDate,
      paymentNumber,
      paymentTo,
      paymentAmount,
      paymentRemark,
      checkNumber,
      bankAccountNumber,
      paymentFrom,
      sectionName,
    };

    try {
      await axios.post('http://localhost:5000/api/payments', newPayment);
      setIsSaved(true);
      setTimeout(() => {
        setIsSaved(false);
      }, 3000);
      fetchPaymentHistory();

      // Reset form fields
      setPaymentDate('');
      setPaymentNumber('');
      setPaymentTo('');
      setPaymentAmount('');
      setPaymentRemark('');
      setCheckNumber('');
      setBankAccountNumber('');
      setPaymentFrom('');
      setSectionName('');

      // Trigger printing action
      printPaymentForm(newPayment);
    } catch (error) {
      console.error('Error saving payment:', error);
    }
  };

  const printPaymentForm = (paymentData) => {
    setShowReceipt(true);
    setReceiptData(paymentData);
    window.print();
  };

  const handleCancel = () => {
    setShowReceipt(false);
    setReceiptData(null);
    setPaymentDate('');
    setPaymentNumber('');
    setPaymentTo('');
    setPaymentAmount('');
    setPaymentRemark('');
    setCheckNumber('');
    setBankAccountNumber('');
    setPaymentFrom('');
    setSectionName('');
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Make Payment</h2>
      <form onSubmit={handleSubmit} className="bg-gray-100 p-6 rounded-lg shadow-md">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="flex items-center">
            <label className="mr-2">Payment Type:</label>
            <div>
              <input type="radio" id="cash" value="cash" checked={paymentType === 'cash'} onChange={handlePaymentTypeChange} />
              <label htmlFor="cash" className="mr-2 ml-1">Cash Payment </label>
            </div>
            <div>
              <input type="radio" id="check" value="check" checked={paymentType === 'check'} onChange={handlePaymentTypeChange} />
              <label htmlFor="check" className="mr-2 ml-1">Check Payment </label>
            </div>
          </div>
          <div className="flex items-center">
            <label className="mr-2">Payment Date:</label>
            <input type="date" value={paymentDate} onChange={handleDateChange} className={`border ${selectedDateClass}`} />
          </div>
          <div className="flex items-center">
            <label className="mr-2">Payment Number:</label>
            <input type="text" value={paymentNumber} onChange={(e) => setPaymentNumber(e.target.value)} placeholder="Payment Number" />
          </div>
          <div className="flex items-center">
            <label className="mr-2">Payment To:</label>
            <input type="text" value={paymentTo} onChange={(e) => setPaymentTo(e.target.value)} placeholder="Payment To" />
          </div>
          <div className="flex items-center">
            <label className="mr-2">Payment Amount:(in words)</label>
            <input type="number" value={paymentAmount} onChange={(e) => setPaymentAmount(e.target.value)} placeholder="Payment Amount" />
            <span className="text-gray-400"></span>
          </div>
          <div className="flex items-center">
            <label className="mr-2">Remarks:</label>
            <textarea
              value={paymentRemark}
              onChange={(e) => setPaymentRemark(e.target.value)}
              placeholder="Remarks"
              rows={5} // Set the number of rows to 5 or adjust as needed
              className="resize-none w-full px-3 py-2 border rounded-md" // Additional styling
            />
          </div>
          {paymentType === 'check' && (
            <>
              <div className="flex items-center">
                <label className="mr-2">Check Number:</label>
                <input type="text" value={checkNumber} onChange={(e) => setCheckNumber(e.target.value)} placeholder="Check Number" />
              </div>
              <div className="flex items-center">
                <label className="mr-2">Bank Account Number:</label>
                <select value={bankAccountNumber} onChange={(e) => setBankAccountNumber(e.target.value)} className="border rounded-md px-3 py-2">
                  <option value="">Select Bank Account Number</option>
                  <option value="123456">123456</option>
                  <option value="987650">987650</option>
                  <option value="556789">556789</option>
                </select>
              </div>
              <div className="flex items-center">
                <label className="mr-2">Payment From:</label>
                <select value={paymentFrom} onChange={(e) => setPaymentFrom(e.target.value)} className="border rounded-md px-3 py-2">
                  <option value="">Select Payment From</option>
                  <option value="Bank A">Bank A</option>
                  <option value="Bank B">Bank B</option>
                  <option value="Bank C">Bank C</option>
                  <option value="Bank D">Bank D</option>
                </select>
              </div>
              <div className="flex items-center">
                <label className="mr-2">Section Name:</label>
                <select value={sectionName} onChange={(e) => setSectionName(e.target.value)} className="border rounded-md px-3 py-2">
                  <option value="">Select Section Name</option>
                  <option value="1A">1A</option>
                  <option value="2B">2B</option>
                  <option value="3C">3C</option>
                  <option value="4D">4D</option>
                </select>
              </div>
            </>
          )}
        </div>
        <div className="mt-4">
          <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 mr-2 rounded-md">Save</button>
          <button type="button" onClick={handleCancel} className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 mr-2 rounded-md">Cancel</button>
          <button type="button" onClick={handleSaveAndPrint} className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md">Save & Print</button>
        </div>
      </form>
      {isSaved && <div className="mt-4 text-green-600">Data saved successfully!</div>}
      {formErrors.paymentDate && <div className="mt-2 text-red-600">{formErrors.paymentDate}</div>}
      {formErrors.paymentTo && <div className="mt-2 text-red-600">{formErrors.paymentTo}</div>}
      {formErrors.paymentAmount && <div className="mt-2 text-red-600">{formErrors.paymentAmount}</div>}
      {formErrors.checkNumber && <div className="mt-2 text-red-600">{formErrors.checkNumber}</div>}
      {formErrors.bankAccountNumber && <div className="mt-2 text-red-600">{formErrors.bankAccountNumber}</div>}
      {formErrors.paymentFrom && <div className="mt-2 text-red-600">{formErrors.paymentFrom}</div>}
      {formErrors.sectionName && <div className="mt-2 text-red-600">{formErrors.sectionName}</div>}

      {showReceipt && receiptData && <Receipt paymentData={receiptData} />}

      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4">Payment History</h2>
        <div className="mb-4">
          <label htmlFor="dateFilter" className="mr-2">Filter by Date:</label>
          <input type="date" id="dateFilter" value={selectedDate} onChange={handleDateFilter} />
        </div>
        <div className="overflow-hidden border rounded-lg shadow-md">
          <table className="mx-auto w-one-quarters table-fixed">
            <thead className="bg-gray-800 text-white">
              <tr>
                <th className="px-2 py-2 w-1/4">Serial Number</th>
                <th className="px-2 py-2 w-1/4">Payment Number</th>
                <th className="px-2 py-2 w-1/4">Payment To</th>
                <th className="px-2 py-2 w-1/4">Amount</th>
              </tr>
            </thead>
            <tbody>
              {filteredPaymentHistory.map((payment, index) => (
                <tr key={index} className={index % 2 === 0 ? "bg-gray-100" : ""}>
                  <td className="border px-2 py-2">{index + 1}</td>
                  <td className="border px-2 py-2">{payment.paymentNumber}</td>
                  <td className="border px-2 py-2">{payment.paymentTo}</td>
                  <td className="border px-2 py-2">{payment.paymentAmount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Payment;
