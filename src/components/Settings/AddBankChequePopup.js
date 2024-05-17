// import React, { useState } from 'react';

// const AddBankChequePopup = ({ onSave, onClose }) => {
//     const [bankCheque, setBankCheque] = useState({
//         bankName: '',
//         accountNumber: '',
//         ifscCode: '',
//         branchName: '',
//         chequeNumber: ''
//     });

//     const handleSave = () => {
//         onSave(bankCheque);
//         onClose();
//     };

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setBankCheque({ ...bankCheque, [name]: value });
//     };

//     return (
//         <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-900 bg-opacity-50">
//             <div className="bg-white p-8 rounded-lg">
//                 <h2 className="text-lg font-semibold mb-4">Add Bank/Cheque Details</h2>
//                 <input
//                     type="text"
//                     name="bankName"
//                     value={bankCheque.bankName}
//                     onChange={handleChange}
//                     placeholder="Enter Bank Name"
//                     className="border p-2 rounded-md w-full mb-2"
//                 />
//                 <input
//                     type="text"
//                     name="accountNumber"
//                     value={bankCheque.accountNumber}
//                     onChange={handleChange}
//                     placeholder="Enter Account Number"
//                     className="border p-2 rounded-md w-full mb-2"
//                 />
//                 <input
//                     type="text"
//                     name="ifscCode"
//                     value={bankCheque.ifscCode}
//                     onChange={handleChange}
//                     placeholder="Enter IFSC Code"
//                     className="border p-2 rounded-md w-full mb-2"
//                 />
//                 <input
//                     type="text"
//                     name="branchName"
//                     value={bankCheque.branchName}
//                     onChange={handleChange}
//                     placeholder="Enter Branch Name"
//                     className="border p-2 rounded-md w-full mb-2"
//                 />
//                 <input
//                     type="text"
//                     name="chequeNumber"
//                     value={bankCheque.chequeNumber}
//                     onChange={handleChange}
//                     placeholder="Enter Cheque Number"
//                     className="border p-2 rounded-md w-full mb-4"
//                 />
//                 <div className="flex justify-end">
//                     <button
//                         type="button"
//                         className="bg-blue-500 text-white px-4 py-2 rounded-md mr-2"
//                         onClick={handleSave}
//                     >
//                         Save
//                     </button>
//                     <button
//                         type="button"
//                         className="bg-gray-500 text-white px-4 py-2 rounded-md"
//                         onClick={onClose}
//                     >
//                         Cancel
//                     </button>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default AddBankChequePopup;
// import React, { useState } from 'react';

// const AddBankChequePopup = ({ onSave, onClose }) => {
//     const [bankCheque, setBankCheque] = useState({
//         type: 'bank',
//         bankName: '',
//         accountNumber: '',
//         ifscCode: '',
//         branchName: '',
//         chequeNumber: ''
//     });

//     const handleSave = () => {
//         onSave(bankCheque);
//         onClose();
//     };

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setBankCheque({ ...bankCheque, [name]: value });
//     };

//     const handleRadioChange = (e) => {
//         const { value } = e.target;
//         setBankCheque({ ...bankCheque, type: value });
//     };

//     return (
//         <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-900 bg-opacity-50">
//             <div className="bg-white p-8 rounded-lg">
//                 <h2 className="text-lg font-semibold mb-4">Add Bank/Cheque Details</h2>
//                 <div className="flex items-center mb-4">
//                     <input
//                         type="radio"
//                         id="bank"
//                         name="type"
//                         value="bank"
//                         checked={bankCheque.type === 'bank'}
//                         onChange={handleRadioChange}
//                         className="mr-2"
//                     />
//                     <label htmlFor="bank" className="mr-4">Bank</label>
//                     <input
//                         type="radio"
//                         id="cheque"
//                         name="type"
//                         value="cheque"
//                         checked={bankCheque.type === 'cheque'}
//                         onChange={handleRadioChange}
//                         className="mr-2"
//                     />
//                     <label htmlFor="cheque">Cheque</label>
//                 </div>
//                 <input
//                     type="text"
//                     name="bankName"
//                     value={bankCheque.bankName}
//                     onChange={handleChange}
//                     placeholder="Enter Bank Name"
//                     className="border p-2 rounded-md w-full mb-2"
//                 />
//                 <input
//                     type="text"
//                     name="accountNumber"
//                     value={bankCheque.accountNumber}
//                     onChange={handleChange}
//                     placeholder="Enter Account Number"
//                     className="border p-2 rounded-md w-full mb-2"
//                 />
//                 <input
//                     type="text"
//                     name="ifscCode"
//                     value={bankCheque.ifscCode}
//                     onChange={handleChange}
//                     placeholder="Enter IFSC Code"
//                     className="border p-2 rounded-md w-full mb-2"
//                 />
//                 <input
//                     type="text"
//                     name="branchName"
//                     value={bankCheque.branchName}
//                     onChange={handleChange}
//                     placeholder="Enter Branch Name"
//                     className="border p-2 rounded-md w-full mb-2"
//                 />
//                 {bankCheque.type === 'cheque' && (
//                     <input
//                         type="text"
//                         name="chequeNumber"
//                         value={bankCheque.chequeNumber}
//                         onChange={handleChange}
//                         placeholder="Enter Cheque Number"
//                         className="border p-2 rounded-md w-full mb-4"
//                     />
//                 )}
//                 <div className="flex justify-end">
//                     <button
//                         type="button"
//                         className="bg-blue-500 text-white px-4 py-2 rounded-md mr-2"
//                         onClick={handleSave}
//                     >
//                         Save
//                     </button>
//                     <button
//                         type="button"
//                         className="bg-gray-500 text-white px-4 py-2 rounded-md"
//                         onClick={onClose}
//                     >
//                         Cancel
//                     </button>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default AddBankChequePopup;
import React, { useState } from 'react';

const AddBankChequePopup = ({ onSave, onClose }) => {
    const [bankCheque, setBankCheque] = useState({
        type: 'bank',
        bankName: '',
        accountNumber: '',
        ifscCode: '',
        branchName: '',
        chequeNumber: ''
    });

    const handleSave = () => {
        onSave(bankCheque);
        onClose();
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setBankCheque({ ...bankCheque, [name]: value });
    };

    const handleRadioChange = (e) => {
        const { value } = e.target;
        setBankCheque({ ...bankCheque, type: value });
    };

    return (
        <div className="fixed top-0 left-0 w-full h-full bg-gray-700 bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-lg shadow-md w-1/3">
                <h2 className="text-lg font-semibold mb-4">Add Bank/Cheque Details</h2>
                <div className="flex items-center mb-4">
                    <input
                        type="radio"
                        id="bank"
                        name="type"
                        value="bank"
                        checked={bankCheque.type === 'bank'}
                        onChange={handleRadioChange}
                        className="mr-2"
                    />
                    <label htmlFor="bank" className="mr-4">Bank</label>
                    <input
                        type="radio"
                        id="cheque"
                        name="type"
                        value="cheque"
                        checked={bankCheque.type === 'cheque'}
                        onChange={handleRadioChange}
                        className="mr-2"
                    />
                    <label htmlFor="cheque">Cheque</label>
                </div>
                <input
                    type="text"
                    name="bankName"
                    value={bankCheque.bankName}
                    onChange={handleChange}
                    placeholder="Enter Bank Name"
                    className="border p-2 rounded-md w-full mb-2"
                />
                <input
                    type="text"
                    name="accountNumber"
                    value={bankCheque.accountNumber}
                    onChange={handleChange}
                    placeholder="Enter Account Number"
                    className="border p-2 rounded-md w-full mb-2"
                />
                <input
                    type="text"
                    name="ifscCode"
                    value={bankCheque.ifscCode}
                    onChange={handleChange}
                    placeholder="Enter IFSC Code"
                    className="border p-2 rounded-md w-full mb-2"
                />
                <input
                    type="text"
                    name="branchName"
                    value={bankCheque.branchName}
                    onChange={handleChange}
                    placeholder="Enter Branch Name"
                    className="border p-2 rounded-md w-full mb-2"
                />
                {bankCheque.type === 'cheque' && (
                    <input
                        type="text"
                        name="chequeNumber"
                        value={bankCheque.chequeNumber}
                        onChange={handleChange}
                        placeholder="Enter Cheque Number"
                        className="border p-2 rounded-md w-full mb-4"
                    />
                )}
                <div className="flex justify-end">
                    <button
                        type="button"
                        className="bg-blue-500 text-white px-4 py-2 rounded-md mr-2"
                        onClick={handleSave}
                    >
                        Save
                    </button>
                    <button
                        type="button"
                        className="bg-gray-500 text-white px-4 py-2 rounded-md"
                        onClick={onClose}
                    >
                        Cancel
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AddBankChequePopup;
