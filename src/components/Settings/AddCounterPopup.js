// // import React from 'react';

// // const AddCounterPopup = ({ onSave, onClose, counterName, setCounterName }) => {
// //     return (
// //         <div className="fixed z-10 inset-0 overflow-y-auto">
// //             <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
// //                 <div className="fixed inset-0 transition-opacity" aria-hidden="true">
// //                     <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
// //                 </div>

// //                 <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

// //                 <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full" role="dialog" aria-modal="true" aria-labelledby="modal-headline">
// //                     <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
// //                         <div className="sm:flex sm:items-start">
// //                             <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-blue-100 sm:mx-0 sm:h-10 sm:w-10">
// //                                 <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
// //                                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
// //                                 </svg>
// //                             </div>
// //                             <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
// //                                 <h3 className="text-lg leading-6 font-medium text-gray-900" id="modal-headline">
// //                                     Add Counter
// //                                 </h3>
// //                                 <div className="mt-2">
// //                                     <input
// //                                         type="text"
// //                                         value={counterName}
// //                                         onChange={(e) => setCounterName(e.target.value)}
// //                                         placeholder="Enter counter name"
// //                                         className="border p-2 rounded-md w-full"
// //                                     />
// //                                 </div>
// //                             </div>
// //                         </div>
// //                     </div>
// //                     <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
// //                         <button onClick={onSave} type="button" className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm">
// //                             Save
// //                         </button>
// //                         <button onClick={onClose} type="button" className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">
// //                             Cancel
// //                         </button>
// //                     </div>
// //                 </div>
// //             </div>
// //         </div>
// //     );
// // };

// // export default AddCounterPopup;




// import React from 'react';

// const AddCounterPopup = ({ onSave, onClose, counterName, setCounterName }) => {
//     return (
//         <div className="fixed z-10 inset-0 overflow-y-auto">
//             <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
//                 <div className="fixed inset-0 transition-opacity" aria-hidden="true">
//                     <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
//                 </div>

//                 <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

//                 <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full" role="dialog" aria-modal="true" aria-labelledby="modal-headline">
//                     <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
//                         <div className="sm:flex sm:items-start">
//                             <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-blue-100 sm:mx-0 sm:h-10 sm:w-10">
//                                 <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
//                                 </svg>
//                             </div>
//                             <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
//                                 <h3 className="text-lg leading-6 font-medium text-gray-900" id="modal-headline">
//                                     Add Counter
//                                 </h3>
//                                 <div className="mt-2">
//                                     <input
//                                         type="text"
//                                         value={counterName}
//                                         onChange={(e) => setCounterName(e.target.value)}
//                                         placeholder="Enter counter name"
//                                         className="border p-2 rounded-md w-full"
//                                     />
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                     <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
//                         <button
//                             onClick={() => onSave(counterName)} // Call onSave function with counterName
//                             type="button"
//                             className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm"
//                         >
//                             Save
//                         </button>
//                         <button
//                             onClick={onClose}
//                             type="button"
//                             className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
//                         >
//                             Cancel
//                         </button>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default AddCounterPopup;
import React, { useState } from 'react';

const AddCounterPopup = ({ onSave, onClose, counterName, setCounterName }) => {
    return (
        <div className="fixed top-0 left-0 w-full h-full bg-gray-700 bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-lg shadow-md w-1/3">
                <h2 className="text-lg font-semibold mb-4">Add Counter</h2>
                <div className="mt-2">
                    <input
                        type="text"
                        value={counterName}
                        onChange={(e) => setCounterName(e.target.value)}
                        placeholder="Enter counter name"
                        className="border p-2 rounded-md w-full"
                    />
                </div>
                <div className="mt-4 flex justify-end">
                    <button
                        onClick={() => onSave(counterName)}
                        type="button"
                        className="bg-blue-500 text-white px-4 py-2 rounded-md mr-2"
                    >
                        Save
                    </button>
                    <button
                        onClick={onClose}
                        type="button"
                        className="bg-gray-500 text-white px-4 py-2 rounded-md"
                    >
                        Cancel
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AddCounterPopup;
