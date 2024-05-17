// import React from 'react';

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

// export default Receipt;
import React from 'react';
import './Receipt.css'; // Import receipt.css for styling

const Receipt = ({ paymentData }) => {
  return (
    <div className="receipt-container">
      <div className="receipt-header">
        <h2>Payment Receipt</h2>
      </div>
      <div className="receipt-content">
        <div className="receipt-row">
          <span className="receipt-label">Payment Type:</span>
          <span className="receipt-value">{paymentData.paymentType}</span>
        </div>
        <div className="receipt-row">
          <span className="receipt-label">Payment Date:</span>
          <span className="receipt-value">{paymentData.paymentDate}</span>
        </div>
        <div className="receipt-row">
          <span className="receipt-label">Payment Number:</span>
          <span className="receipt-value">{paymentData.paymentNumber}</span>
        </div>
        <div className="receipt-row">
          <span className="receipt-label">Payment To:</span>
          <span className="receipt-value">{paymentData.paymentTo}</span>
        </div>
        <div className="receipt-row">
          <span className="receipt-label">Payment Amount:</span>
          <span className="receipt-value">{paymentData.paymentAmount}</span>
        </div>
        <div className="receipt-row">
          <span className="receipt-label">Remarks:</span>
          <span className="receipt-value">{paymentData.paymentRemark}</span>
        </div>
      </div>
    </div>
  );
};

export default Receipt;
