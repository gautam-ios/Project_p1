import React, { useState } from 'react';

const AddDenominationPopup = ({ onSave, onClose }) => {
    const [denomination, setDenomination] = useState('');

    const handleSave = () => {
        onSave(denomination);
        setDenomination('');
    };

    return (
        <div className="fixed top-0 left-0 w-full h-full bg-gray-700 bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-lg shadow-md w-1/3">
                <h2 className="text-lg font-semibold mb-4">Add Denomination</h2>
                <input
                    type="text"
                    value={denomination}
                    onChange={(e) => setDenomination(e.target.value)}
                    placeholder="Enter denomination details"
                    className="border p-2 rounded-md w-full"
                />
                <div className="mt-4 flex justify-end">
                    <button type="button" className="bg-blue-500 text-white px-4 py-2 rounded-md mr-2" onClick={handleSave}>Save</button>
                    <button type="button" className="bg-gray-500 text-white px-4 py-2 rounded-md" onClick={onClose}>Cancel</button>
                </div>
            </div>
        </div>
    );
};

export default AddDenominationPopup;
