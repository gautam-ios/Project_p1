// // import React, { useEffect, useState } from 'react';

// // const Dashboard = () => {
// //   // State variables to hold payment data
// //   const [todaysPayments, setTodaysPayments] = useState([]);
// //   const [allPayments, setAllPayments] = useState([]);
// //   const [previousYearPayments, setPreviousYearPayments] = useState([]);
// //   const [previousToPreviousYearPayments, setPreviousToPreviousYearPayments] = useState([]);

// //   // Fetch payment data from backend API
// //   useEffect(() => {
// //     // Fetch today's payments
// //     // Placeholder data
// //     const todayPaymentsData = [
// //       { id: 1, amount: 100, payer: 'John Doe' },
// //       { id: 2, amount: 150, payer: 'Jane Smith' }
// //     ];
// //     setTodaysPayments(todayPaymentsData);

// //     // Fetch all payments
// //     // Placeholder data
// //     const allPaymentsData = [
// //       { id: 1, amount: 200, payer: 'Alice Johnson' },
// //       { id: 2, amount: 250, payer: 'Bob Williams' }
// //     ];
// //     setAllPayments(allPaymentsData);

// //     // Fetch previous year payments
// //     // Placeholder data
// //     const previousYearPaymentsData = [
// //       { id: 1, amount: 300, payer: 'Charlie Brown' },
// //       { id: 2, amount: 350, payer: 'Diana Martinez' }
// //     ];
// //     setPreviousYearPayments(previousYearPaymentsData);

// //     // Fetch previous to previous year payments
// //     // Placeholder data
// //     const previousToPreviousYearPaymentsData = [
// //       { id: 1, amount: 400, payer: 'Eva Davis' },
// //       { id: 2, amount: 450, payer: 'Frank Wilson' }
// //     ];
// //     setPreviousToPreviousYearPayments(previousToPreviousYearPaymentsData);
// //   }, []);

// //   return (
// //     <div className="flex flex-wrap gap-4 justify-center p-4">
// //       {/* Today's Payments Card */}
// //       <div className="bg-blue-200 p-4 rounded-lg shadow-md w-64">
// //         <h2 className="text-lg font-semibold mb-4">Today's Payments</h2>
// //         {todaysPayments.map(payment => (
// //           <div key={payment.id} className="mb-2">
// //             <p>{payment.payer}: ${payment.amount}</p>
// //           </div>
// //         ))}
// //       </div>

// //       {/* All Payments Card */}
// //       <div className="bg-green-200 p-4 rounded-lg shadow-md w-64">
// //         <h2 className="text-lg font-semibold mb-4">All Payments</h2>
// //         {allPayments.map(payment => (
// //           <div key={payment.id} className="mb-2">
// //             <p>{payment.payer}: ${payment.amount}</p>
// //           </div>
// //         ))}
// //       </div>

// //       {/* Previous Year Payments Card */}
// //       <div className="bg-gray-200 p-4 rounded-lg shadow-md w-64">
// //         <h2 className="text-lg font-semibold mb-4">Previous Year Payments</h2>
// //         {previousYearPayments.map(payment => (
// //           <div key={payment.id} className="mb-2">
// //             <p>{payment.payer}: ${payment.amount}</p>
// //           </div>
// //         ))}
// //       </div>

// //       {/* Previous to Previous Year Payments Card */}
// //       <div className="bg-yellow-200 p-4 rounded-lg shadow-md w-64">
// //         <h2 className="text-lg font-semibold mb-4">Previous to Previous Year Payments</h2>
// //         {previousToPreviousYearPayments.map(payment => (
// //           <div key={payment.id} className="mb-2">
// //             <p>{payment.payer}: ${payment.amount}</p>
// //           </div>
// //         ))}
// //       </div>
// //     </div>
// //   );
// // };

// // export default Dashboard;
// import React, { useEffect, useState } from 'react';

// const Dashboard = () => {
//   // State variables to hold payment data
//   const [todaysPayments, setTodaysPayments] = useState([]);
//   const [allPayments, setAllPayments] = useState([]);
//   const [previousYearPayments, setPreviousYearPayments] = useState([]);
//   const [previousToPreviousYearPayments, setPreviousToPreviousYearPayments] = useState([]);

//   // Fetch payment data from backend API
//   useEffect(() => {
//     // Fetch today's payments
//     // Placeholder data
//     const todayPaymentsData = [
//       { id: 1, amount: 100, payer: 'John Doe' },
//       { id: 2, amount: 150, payer: 'Jane Smith' }
//     ];
//     setTodaysPayments(todayPaymentsData);

//     // Fetch all payments
//     // Placeholder data
//     const allPaymentsData = [
//       { id: 1, amount: 200, payer: 'Alice Johnson' },
//       { id: 2, amount: 250, payer: 'Bob Williams' }
//     ];
//     setAllPayments(allPaymentsData);

//     // Fetch previous year payments
//     // Placeholder data
//     const previousYearPaymentsData = [
//       { id: 1, amount: 300, payer: 'Charlie Brown' },
//       { id: 2, amount: 350, payer: 'Diana Martinez' }
//     ];
//     setPreviousYearPayments(previousYearPaymentsData);

//     // Fetch previous to previous year payments
//     // Placeholder data
//     const previousToPreviousYearPaymentsData = [
//       { id: 1, amount: 400, payer: 'Eva Davis' },
//       { id: 2, amount: 450, payer: 'Frank Wilson' }
//     ];
//     setPreviousToPreviousYearPayments(previousToPreviousYearPaymentsData);
//   }, []);

//   return (
//     <div className="grid grid-cols-2 gap-4 p-4">
//       {/* Today's Payments Card */}
//       <div className="bg-blue-200 p-6 rounded-lg shadow-md">
//         <h2 className="text-lg font-semibold mb-4">Today's Payments</h2>
//         {todaysPayments.map(payment => (
//           <div key={payment.id} className="mb-2">
//             <p>{payment.payer}: ${payment.amount}</p>
//           </div>
//         ))}
//       </div>

//       {/* All Payments Card */}
//       <div className="bg-green-200 p-6 rounded-lg shadow-md">
//         <h2 className="text-lg font-semibold mb-4">All Payments</h2>
//         {allPayments.map(payment => (
//           <div key={payment.id} className="mb-2">
//             <p>{payment.payer}: ${payment.amount}</p>
//           </div>
//         ))}
//       </div>

//       {/* Previous Year Payments Card */}
//       <div className="bg-gray-200 p-6 rounded-lg shadow-md">
//         <h2 className="text-lg font-semibold mb-4">Previous Year Payments</h2>
//         {previousYearPayments.map(payment => (
//           <div key={payment.id} className="mb-2">
//             <p>{payment.payer}: ${payment.amount}</p>
//           </div>
//         ))}
//       </div>

//       {/* Previous to Previous Year Payments Card */}
//       <div className="bg-yellow-200 p-6 rounded-lg shadow-md">
//         <h2 className="text-lg font-semibold mb-4">Previous to Previous Year Payments</h2>
//         {previousToPreviousYearPayments.map(payment => (
//           <div key={payment.id} className="mb-2">
//             <p>{payment.payer}: ${payment.amount}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// // export default Dashboard;

// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const Dashboard = () => {
//   const [todaysTotalPayment, setTodaysTotalPayment] = useState(0);
//   const [topPayments, setTopPayments] = useState([]);

//   useEffect(() => {
//     const fetchTodaysPayments = async () => {
//       try {
//         const today = new Date().toISOString().split('T')[0];
//         const response = await axios.get(`http://localhost:5000/api/payments?date=${today}`);
//         const todayPaymentsData = response.data;
//         const total = todayPaymentsData.reduce((acc, payment) => acc + payment.paymentAmount, 0);
//         setTodaysTotalPayment(total);
//       } catch (error) {
//         console.error('Error fetching today\'s payments:', error);
//       }
//     };

//     const fetchTopPayments = async () => {
//       try {
//         const currentYear = new Date().getFullYear();
//         const response = await axios.get(`http://localhost:5000/api/payments/top?year=${currentYear}`);
//         setTopPayments(response.data);
//       } catch (error) {
//         console.error('Error fetching top payments:', error);
//       }
//     };

//     fetchTodaysPayments();
//     fetchTopPayments();
//   }, []);

//   return (
//     <div className="grid grid-cols-2 gap-4 p-4">
//       {/* Today's Payments Card */}
//       <div className="bg-blue-200 p-6 rounded-lg shadow-md">
//         <h2 className="text-lg font-semibold mb-4">Today's Payments</h2>
//         <p>Total Amount: ${todaysTotalPayment}</p>
//       </div>

//       {/* Today's Payment Card */}
//       <div className="bg-yellow-200 p-6 rounded-lg shadow-md">
//         <h2 className="text-lg font-semibold mb-4">Today's Payment</h2>
//         <p>Total Amount: ${todaysTotalPayment}</p>
//       </div>

//       {/* Previous Year Payments Card */}
//       <div className="bg-green-200 p-6 rounded-lg shadow-md">
//         <h2 className="text-lg font-semibold mb-4">Top Payments -FY {new Date().getFullYear()}</h2>
//         {topPayments.map((payment, index) => (
//           <div key={index}>
//             {/* <p>Payment To Name: {payment.paymentTo}</p>
//             <p>Payment Amount: {payment.paymentAmount}</p>
//             <p>Remarks: {payment.paymentRemark}</p>
//             <p>Payment Number: {payment.paymentNumber}</p> */}
//           </div>
//         ))}
//       </div>

//       {/* Previous to Previous Year Payments Card */}
//       <div className="bg-gray-200 p-6 rounded-lg shadow-md">
//         <h2 className="text-lg font-semibold mb-4">Top Payments -FY {new Date().getFullYear()}</h2>
//         {topPayments.slice(0, 4).map((payment, index) => (
//           <div key={index}>
//             <p>Payment To Name: {payment.paymentTo}</p>
//             <p>Payment Amount: {payment.paymentAmount}</p>
//             <p>Remarks: {payment.paymentRemark}</p>
//             <p>Payment Number: {payment.paymentNumber}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Dashboard;


import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Dashboard = () => {
  const [todaysTotalPayment, setTodaysTotalPayment] = useState(0);
  const [topPayments, setTopPayments] = useState([]);

  useEffect(() => {
    const fetchTodaysPayments = async () => {
      try {
        const today = new Date().toISOString().split('T')[0];
        const response = await axios.get(`http://localhost:5000/api/payments?date=${today}`);
        const todayPaymentsData = response.data;
        const total = todayPaymentsData.reduce((acc, payment) => acc + payment.paymentAmount, 0);
        setTodaysTotalPayment(total);
      } catch (error) {
        console.error('Error fetching today\'s payments:', error);
      }
    };

    const fetchTopPayments = async () => {
      try {
        const currentYear = new Date().getFullYear();
        const response = await axios.get(`http://localhost:5000/api/payments/top?year=${currentYear}`);
        setTopPayments(response.data);
      } catch (error) {
        console.error('Error fetching top payments:', error);
      }
    };

    fetchTodaysPayments();
    fetchTopPayments();
  }, []);

  return (
    <div className="grid grid-cols-2 gap-4 p-4">
      {/* Today's Payments Card */}
      <div className="bg-blue-200 p-6 rounded-lg shadow-md">
        <h2 className="text-lg font-semibold mb-4">Today's Payments</h2>
        <p>Total Amount: ${todaysTotalPayment}</p>
      </div>

      {/* Today's Payment Card */}
      <div className="bg-yellow-200 p-6 rounded-lg shadow-md">
        <h2 className="text-lg font-semibold mb-4">Today's Payment</h2>
        <p>Total Amount: ${todaysTotalPayment}</p>
      </div>

      {/* Previous Year Payments Card */}
      <div className="bg-green-200 p-6 rounded-lg shadow-md">
        <h2 className="text-lg font-semibold mb-4">Top Payments -FY {new Date().getFullYear()}</h2>
        {topPayments.map((payment, index) => (
          <div key={index} className={index !== 0 ? 'mt-6' : ''}>
            {/* <p>Payment To Name: {payment.paymentTo}</p>
            <p>Payment Amount: {payment.paymentAmount}</p>
            <p>Remarks: {payment.paymentRemark}</p>
            <p>Payment Number: {payment.paymentNumber}</p> */}
          </div>
        ))}
      </div>

      {/* Previous to Previous Year Payments Card */}
      <div className="bg-gray-200 p-6 rounded-lg shadow-md">
        <h2 className="text-lg font-semibold mb-4">Top Payments -FY {new Date().getFullYear()}</h2>
        {topPayments.slice(0, 4).map((payment, index) => (
          <div key={index} className={index !== 0 ? 'mt-6' : ''}>
            <p>Payment To Name: {payment.paymentTo}  </p>
            <p>Payment Amount: {payment.paymentAmount}</p>
            <p>Remarks: {payment.paymentRemark}</p>
            <p>Payment Number: {payment.paymentNumber}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;






// import React, { useEffect, useState } from 'react';

// const Dashboard = () => {
//   // State variables to hold payment data
//   const [todaysPayments, setTodaysPayments] = useState([]);
//   const [allPayments, setAllPayments] = useState([]);
//   const [previousYearPayments, setPreviousYearPayments] = useState([]);
//   const [previousToPreviousYearPayments, setPreviousToPreviousYearPayments] = useState([]);

//   // Fetch payment data from backend API
//   useEffect(() => {
//     // Fetch today's payments
//     // Placeholder data
//     const todayPaymentsData = [
//       { id: 1, amount: 100, payer: 'John Doe' },
//       { id: 2, amount: 150, payer: 'Jane Smith' }
//     ];
//     setTodaysPayments(todayPaymentsData);

//     // Fetch all payments
//     // Placeholder data
//     const allPaymentsData = [
//       { id: 1, amount: 200, payer: 'Alice Johnson' },
//       { id: 2, amount: 250, payer: 'Bob Williams' }
//     ];
//     setAllPayments(allPaymentsData);

//     // Fetch previous year payments
//     // Placeholder data
//     const previousYearPaymentsData = [
//       { id: 1, amount: 300, payer: 'Charlie Brown' },
//       { id: 2, amount: 350, payer: 'Diana Martinez' }
//     ];
//     setPreviousYearPayments(previousYearPaymentsData);

//     // Fetch previous to previous year payments
//     // Placeholder data
//     const previousToPreviousYearPaymentsData = [
//       { id: 1, amount: 400, payer: 'Eva Davis' },
//       { id: 2, amount: 450, payer: 'Frank Wilson' }
//     ];
//     setPreviousToPreviousYearPayments(previousToPreviousYearPaymentsData);
//   }, []);

//   return (
//     <div className="grid grid-cols-2 gap-4 p-4">
//       {/* Today's Payments Card */}
//       <div className="bg-blue-200 p-6 rounded-lg shadow-md">
//         <h2 className="text-lg font-semibold mb-4">Today's Payments</h2>
//         {todaysPayments.map(payment => (
//           <div key={payment.id} className="mb-2">
//             <p>{payment.payer}: ${payment.amount}</p>
//           </div>
//         ))}
//       </div>

//       {/* All Payments Card */}
//       <div className="bg-yellow-200 p-6 rounded-lg shadow-md">
//         <h2 className="text-lg font-semibold mb-4">All Payments</h2>
//         {allPayments.map(payment => (
//           <div key={payment.id} className="mb-2">
//             <p>{payment.payer}: ${payment.amount}</p>
//           </div>
//         ))}
//       </div>

//       {/* Previous Year Payments Card */}
//       <div className="bg-green-200 p-6 rounded-lg shadow-md">
//         <h2 className="text-lg font-semibold mb-4">Previous Year Payments</h2>
//         {previousYearPayments.map(payment => (
//           <div key={payment.id} className="mb-2">
//             <p>{payment.payer}: ${payment.amount}</p>
//           </div>
//         ))}
//       </div>

//       {/* Previous to Previous Year Payments Card */}
//       <div className="bg-gray-200 p-6 rounded-lg shadow-md">
//         <h2 className="text-lg font-semibold mb-4">Previous to Previous Year Payments</h2>
//         {previousToPreviousYearPayments.map(payment => (
//           <div key={payment.id} className="mb-2">
//             <p>{payment.payer}: ${payment.amount}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Dashboard;
