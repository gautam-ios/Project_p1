import React, { useState, useEffect } from 'react';
import axios from 'axios';


const Receipt = ({ receiptData }) => {
  return (
    <div className="receipt-container">
      <h2>Receipt</h2>
      <div>
        <strong>Receipt Type:</strong> {receiptData.receiptType}
      </div>
      <div>
        <strong>Receipt Date:</strong> {receiptData.receiptDate}
      </div>
      <div>
        <strong>Receipt Number:</strong> {receiptData.receiptNumber}
      </div>
      <div>
        <strong>Received From:</strong> {receiptData.donorName}
      </div>
      <div>
        <strong>Donor Address:</strong> {receiptData.donorAddress}
      </div>
      <div>
        <strong>Donor Mobile:</strong> {receiptData.donorMobile}
      </div>
      <div>
        <strong>Item Details:</strong>
      </div>
      <div>
        <strong>Item Name:</strong> {receiptData.itemName}
      </div>
      <div>
        <strong>Number of Pieces:</strong> {receiptData.numberOfPieces}
      </div>
      <div>
        <strong>Weight:</strong> {receiptData.weight}
      </div>
      <div>
        <strong>Remarks:</strong> {receiptData.remark}
      </div>
    </div>
  );
};

const ReceiptPage = () => {
  const [receiptType, setReceiptType] = useState('cash');
  const [receiptDate, setReceiptDate] = useState(new Date().toISOString().split('T')[0]); // Initialize with today's date
  const [receiptNumber, setReceiptNumber] = useState('');
  const [donorName, setDonorName] = useState('');
  const [donorAddress, setDonorAddress] = useState('');
  const [donorMobile, setDonorMobile] = useState('');
  const [itemName, setItemName] = useState('');
  const [numberOfPieces, setNumberOfPieces] = useState('');
  const [weight, setWeight] = useState('');
  const [remark, setRemark] = useState('');
  const [isSaved, setIsSaved] = useState(false);
  const [formErrors, setFormErrors] = useState({});
  const [receiptHistory, setReceiptHistory] = useState([]);
  const [filteredReceiptHistory, setFilteredReceiptHistory] = useState([]);
  const [selectedDate, setSelectedDate] = useState('');
  const [showReceipt, setShowReceipt] = useState(false);

  useEffect(() => {
    fetchReceiptHistory();
  }, []);

  useEffect(() => {
    if (receiptDate) {
      generateReceiptNumber(receiptDate);
    }
  }, [receiptDate]);

  const fetchReceiptHistory = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/receipts');
      setReceiptHistory(response.data);
      setFilteredReceiptHistory(response.data);
    } catch (error) {
      console.error('Error fetching receipt history:', error);
    }
  };

  useEffect(() => {
    if (receiptDate) {
      setSelectedDateClass('border-blue-500');
    } else {
      setSelectedDateClass('');
    }
  }, [receiptDate]);

  const handleReceiptTypeChange = (event) => {
    setReceiptType(event.target.value);
  };

  const handleDateChange = (event) => {
    setReceiptDate(event.target.value);
  };

  const generateReceiptNumber = async (date) => {
    const formattedDate = new Date(date).toLocaleDateString('en-GB').split('/').reverse().join('');
    try {
      const response = await axios.get(`http://localhost:5000/api/receipts?date=${formattedDate}`);
      const receiptsOnDate = response.data;
      let highestReceiptNumber = 0;
      receiptsOnDate.forEach(receipt => {
        const parts = receipt.receiptNumber.split('_');
        const number = parseInt(parts[2], 10);
        if (!isNaN(number) && number > highestReceiptNumber) {
          highestReceiptNumber = number;
        }
      });
      const newReceiptNumber = `receipt_${formattedDate}_${(highestReceiptNumber + 1).toString().padStart(3, '0')}`;
      setReceiptNumber(newReceiptNumber);
    } catch (error) {
      console.error('Error fetching receipts:', error);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const errors = validateForm();
    if (Object.keys(errors).length !== 0) {
      setFormErrors(errors);
      return;
    }

    const newReceipt = {
      receiptType,
      receiptDate,
      receiptNumber,
      donorName,
      donorAddress,
      donorMobile,
      itemName,
      numberOfPieces,
      weight,
      remark,
    };

    try {
      await axios.post('http://localhost:5000/api/receipts', newReceipt);
      setReceiptType('cash');
      setReceiptDate('');
      setReceiptNumber('');
      setDonorName('');
      setDonorAddress('');
      setDonorMobile('');
      setItemName('');
      setNumberOfPieces('');
      setWeight('');
      setRemark('');
      setIsSaved(true);
      setTimeout(() => {
        setIsSaved(false);
      }, 3000);
      fetchReceiptHistory();
      setShowReceipt(true);
    } catch (error) {
      console.error('Error saving receipt:', error);
    }
  };

  const validateForm = () => {
    const errors = {};

    if (!receiptDate) {
      errors.receiptDate = 'Receipt date is required';
    }

    if (!donorName) {
      errors.donorName = 'Donor name is required';
    }

    if (!donorAddress) {
      errors.donorAddress = 'Donor address is required';
    }

    if (!donorMobile) {
      errors.donorMobile = 'Donor mobile is required';
    }

    if (!itemName) {
      errors.itemName = 'Item name is required';
    }

    if (!numberOfPieces) {
      errors.numberOfPieces = 'Number of pieces is required';
    }

    if (!weight) {
      errors.weight = 'Weight is required';
    }

    return errors;
  };

  const handleDateFilter = (event) => {
    const selectedDate = event.target.value;
    setSelectedDate(selectedDate);
    if (selectedDate) {
      const formattedDate = new Date(selectedDate).toISOString(); // Convert to ISODate format
      const filteredData = receiptHistory.filter(receipt => receipt.receiptDate && receipt.receiptDate.startsWith(formattedDate));
      setFilteredReceiptHistory(filteredData);
    } else {
      setFilteredReceiptHistory(receiptHistory); // If no date is selected, show all data
    }
  };

  const [selectedDateClass, setSelectedDateClass] = useState('');

  const handleCancel = () => {
    setShowReceipt(false);
    setReceiptType('cash');
    setReceiptDate('');
    setReceiptNumber('');
    setDonorName('');
    setDonorAddress('');
    setDonorMobile('');
    setItemName('');
    setNumberOfPieces('');
    setWeight('');
    setRemark('');
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Receipt</h2>
      <form onSubmit={handleSubmit} className="bg-gray-100 p-6 rounded-lg shadow-md">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="flex items-center">
            <label className="mr-2">Receipt Type:</label>
            <div>
              <input type="radio" id="cash" value="cash" checked={receiptType === 'cash'} onChange={handleReceiptTypeChange} />
              <label htmlFor="cash" className="mr-2 ml-1">Cash </label>
            </div>
            <div>
              <input type="radio" id="gold" value="gold" checked={receiptType === 'gold'} onChange={handleReceiptTypeChange} />
              <label htmlFor="gold" className="mr-2 ml-1">Gold </label>
            </div>
            <div>
              <input type="radio" id="silver" value="silver" checked={receiptType === 'silver'} onChange={handleReceiptTypeChange} />
              <label htmlFor="silver" className="mr-2 ml-1">Silver </label>
            </div>
          </div>
          <div className="flex items-center">
            <label className="mr-2">Receipt Date:</label>
            <input type="date" value={receiptDate} onChange={handleDateChange} className={`border ${selectedDateClass}`} />
          </div>
          <div className="flex items-center">
            <label className="mr-2">Receipt Number:</label>
            <input type="text" value={receiptNumber} onChange={(e) => setReceiptNumber(e.target.value)} placeholder="Receipt Number" />
          </div>
          <div className="flex items-center">
            <label className="mr-2">Received From:</label>
            <input type="text" value={donorName} onChange={(e) => setDonorName(e.target.value)} placeholder="Received From" />
          </div>
          <div className="flex items-center">
            <label className="mr-2">Donor Address:</label>
            <input type="text" value={donorAddress} onChange={(e) => setDonorAddress(e.target.value)} placeholder="Donor Address" />
          </div>
          <div className="flex items-center">
            <label className="mr-2">Donor Mobile:</label>
            <input type="text" value={donorMobile} onChange={(e) => setDonorMobile(e.target.value)} placeholder="Donor Mobile" />
          </div>
          <div className="flex items-center">
            <label className="mr-2">Item Name:</label>
            <input type="text" value={itemName} onChange={(e) => setItemName(e.target.value)} placeholder="Item Name" />
          </div>
          <div className="flex items-center">
            <label className="mr-2">Number of Pieces:</label>
            <input type="number" value={numberOfPieces} onChange={(e) => setNumberOfPieces(e.target.value)} placeholder="Number of Pieces" />
          </div>
          <div className="flex items-center">
            <label className="mr-2">Weight:</label>
            <input type="text" value={weight} onChange={(e) => setWeight(e.target.value)} placeholder="Weight" />
          </div>
          <div className="flex items-center">
            <label className="mr-2">Remarks:</label>
            <textarea
              value={remark}
              onChange={(e) => setRemark(e.target.value)}
              placeholder="Remarks"
              rows={5} // Set the number of rows to 5 or adjust as needed
              className="resize-none w-full px-3 py-2 border rounded-md" // Additional styling
            />
          </div>
        </div>
        <div className="mt-4">
          <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 mr-2 rounded-md">Save</button>
          <button type="button" onClick={handleCancel} className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 mr-2 rounded-md">Cancel</button>
        </div>
      </form>
      {isSaved && <div className="mt-4 text-green-600">Data saved successfully!</div>}
      {formErrors.receiptDate && <div className="mt-2 text-red-600">{formErrors.receiptDate}</div>}
      {formErrors.donorName && <div className="mt-2 text-red-600">{formErrors.donorName}</div>}
      {formErrors.donorAddress && <div className="mt-2 text-red-600">{formErrors.donorAddress}</div>}
      {formErrors.donorMobile && <div className="mt-2 text-red-600">{formErrors.donorMobile}</div>}
      {formErrors.itemName && <div className="mt-2 text-red-600">{formErrors.itemName}</div>}
      {formErrors.numberOfPieces && <div className="mt-2 text-red-600">{formErrors.numberOfPieces}</div>}
      {formErrors.weight && <div className="mt-2 text-red-600">{formErrors.weight}</div>}

      {showReceipt && (
        <Receipt
          receiptData={{
            receiptType,
            receiptDate,
            receiptNumber,
            donorName,
            donorAddress,
            donorMobile,
            itemName,
            numberOfPieces,
            weight,
            remark,
          }}
        />
      )}

      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4">Receipt History</h2>
        <div className="mb-4">
          <label htmlFor="dateFilter" className="mr-2">Filter by Date:</label>
          <input type="date" id="dateFilter" value={selectedDate} onChange={handleDateFilter} />
        </div>
        <div className="overflow-hidden border rounded-lg shadow-md">
          <table className="mx-auto w-one-quarters table-fixed">
            <thead className="bg-gray-800 text-white">
              <tr>
                <th className="px-2 py-2 w-1/4">Serial Number</th>
                <th className="px-2 py-2 w-1/4">Receipt Number</th>
                <th className="px-2 py-2 w-1/4">Received From</th>
                <th className="px-2 py-2 w-1/4">Amount</th>
              </tr>
            </thead>
            <tbody>
              {filteredReceiptHistory.map((receipt, index) => (
                <tr key={index} className={index % 2 === 0 ? "bg-gray-100" : ""}>
                  <td className="border px-2 py-2">{index + 1}</td>
                  <td className="border px-2 py-2">{receipt.receiptNumber}</td>
                  <td className="border px-2 py-2">{receipt.donorName}</td>
                  <td className="border px-2 py-2">{receipt.itemName}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ReceiptPage;
