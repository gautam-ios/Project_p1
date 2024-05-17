// AddCounterForm.js

import React, { useState } from 'react';

const AddCounterForm = ({ onSave, onCancel }) => {
  const [counterName, setCounterName] = useState('');

  const handleSave = () => {
    onSave(counterName);
    setCounterName('');
  };

  const handleCancel = () => {
    onCancel();
    setCounterName('');
  };

  return (
    <div className="bg-white p-4 shadow-md rounded-md">
      <h2 className="text-lg font-semibold mb-4">Add Counter</h2>
      <div className="mb-4">
        <label htmlFor="counterName" className="block text-sm font-medium text-gray-700">
          Counter Name:
        </label>
        <input
          type="text"
          id="counterName"
          className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
          value={counterName}
          onChange={(e) => setCounterName(e.target.value)}
        />
      </div>
      <div className="flex justify-end">
        <button
          onClick={handleSave}
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 mr-2 rounded-md"
        >
          Save
        </button>
        <button
          onClick={handleCancel}
          className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded-md"
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default AddCounterForm;
