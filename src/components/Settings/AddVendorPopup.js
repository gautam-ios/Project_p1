// // // import React, { useState } from 'react';
// // // import axios from 'axios';

// // // const AddVendorPopup = ({ onSave, onClose }) => {
// // //     const [vendor, setVendor] = useState({
// // //         vendorName: '',
// // //         businessName: '',
// // //         phone: '',
// // //         email: '',
// // //         address: '',
// // //         panNo: '',
// // //         gstNo: ''
// // //     });

// // //     const handleInputChange = (e) => {
// // //         const { name, value } = e.target;
// // //         setVendor({ ...vendor, [name]: value });
// // //     };

// // //     const handleSave = async () => {
// // //         try {
// // //             await axios.post('http://localhost:5000/api/vendor', vendor);
// // //             onSave(); // Call onSave callback to trigger parent component update
// // //             onClose(); // Close the popup
// // //         } catch (error) {
// // //             console.error('Error saving vendor details:', error);
// // //         }
// // //     };

// // //     return (
// // //         <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center z-50">
// // //             <div className="bg-white p-8 rounded-lg shadow-lg w-96">
// // //                 <h2 className="text-lg font-semibold mb-4">Add Vendor</h2>
// // //                 <input
// // //                     type="text"
// // //                     name="vendorName"
// // //                     value={vendor.vendorName}
// // //                     onChange={handleInputChange}
// // //                     placeholder="Vendor Name"
// // //                     className="border p-2 rounded-md mb-2 w-full"
// // //                 />
// // //                 <input
// // //                     type="text"
// // //                     name="businessName"
// // //                     value={vendor.businessName}
// // //                     onChange={handleInputChange}
// // //                     placeholder="Business Name"
// // //                     className="border p-2 rounded-md mb-2 w-full"
// // //                 />
// // //                 <input
// // //                     type="tel"
// // //                     name="phone"
// // //                     value={vendor.phone}
// // //                     onChange={handleInputChange}
// // //                     placeholder="Phone"
// // //                     className="border p-2 rounded-md mb-2 w-full"
// // //                 />
// // //                 <input
// // //                     type="email"
// // //                     name="email"
// // //                     value={vendor.email}
// // //                     onChange={handleInputChange}
// // //                     placeholder="Email"
// // //                     className="border p-2 rounded-md mb-2 w-full"
// // //                 />
// // //                 <input
// // //                     type="text"
// // //                     name="address"
// // //                     value={vendor.address}
// // //                     onChange={handleInputChange}
// // //                     placeholder="Address"
// // //                     className="border p-2 rounded-md mb-2 w-full"
// // //                 />
// // //                 <input
// // //                     type="text"
// // //                     name="panNo"
// // //                     value={vendor.panNo}
// // //                     onChange={handleInputChange}
// // //                     placeholder="PAN Number"
// // //                     className="border p-2 rounded-md mb-2 w-full"
// // //                 />
// // //                 <input
// // //                     type="text"
// // //                     name="gstNo"
// // //                     value={vendor.gstNo}
// // //                     onChange={handleInputChange}
// // //                     placeholder="GST Number"
// // //                     className="border p-2 rounded-md mb-2 w-full"
// // //                 />
// // //                 <div className="mt-4 flex justify-end">
// // //                     <button type="button" className="bg-blue-500 text-white px-4 py-2 rounded-md mr-2" onClick={handleSave}>Save</button>
// // //                     <button type="button" className="bg-gray-500 text-white px-4 py-2 rounded-md" onClick={onClose}>Cancel</button>
// // //                 </div>
// // //             </div>
// // //         </div>
// // //     );
// // // };

// // // export default AddVendorPopup;





// // /// this is code is workable code okay till first componate


// // import React, { useState } from 'react';
// // import axios from 'axios';

// // const AddVendorPopup = ({ onSave, onClose }) => {
// //     const [vendorName, setVendorName] = useState('');
// //     const [businessName, setBusinessName] = useState('');
// //     const [phone, setPhone] = useState('');
// //     const [email, setEmail] = useState('');
// //     const [address, setAddress] = useState('');
// //     const [panNo, setPanNo] = useState('');
// //     const [gstNo, setGstNo] = useState('');
// //     const [message, setMessage] = useState('');

// //     const handleSubmit = async () => {
// //         try {
// //             await onSave({ vendorName, businessName, phone, email, address, panNo, gstNo });
// //             setMessage('Data saved successfully!');
// //         } catch (error) {
// //             console.error('Error saving vendor data:', error);
// //             setMessage('Failed to save data. Please try again later.');
// //         }
// //     };

// //     return (
// //         <div className="fixed inset-0 bg-gray-700 bg-opacity-50 flex justify-center items-center">
// //             <div className="bg-white p-8 rounded-md shadow-md">
// //                 <button className="absolute top-0 right-0 p-2" onClick={onClose}>
// //                     <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
// //                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
// //                     </svg>
// //                 </button>
// //                 <h2 className="text-lg font-semibold mb-4">Add Vendor</h2>
// //                 <form onSubmit={handleSubmit}>
// //                     <div className="mb-4">
// //                         <label className="block text-sm font-medium text-gray-700">Vendor Name</label>
// //                         <input type="text" value={vendorName} onChange={(e) => setVendorName(e.target.value)} className="border p-2 rounded-md w-full" />
// //                     </div>
// //                     <div className="mb-4">
// //                         <label className="block text-sm font-medium text-gray-700">Business Name</label>
// //                         <input type="text" value={businessName} onChange={(e) => setBusinessName(e.target.value)} className="border p-2 rounded-md w-full" />
// //                     </div>
// //                     <div className="mb-4">
// //                         <label className="block text-sm font-medium text-gray-700">Phone</label>
// //                         <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} className="border p-2 rounded-md w-full" />
// //                     </div>
// //                     <div className="mb-4">
// //                         <label className="block text-sm font-medium text-gray-700">Email</label>
// //                         <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="border p-2 rounded-md w-full" />
// //                     </div>
// //                     <div className="mb-4">
// //                         <label className="block text-sm font-medium text-gray-700">Address</label>
// //                         <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} className="border p-2 rounded-md w-full" />
// //                     </div>
// //                     <div className="mb-4">
// //                         <label className="block text-sm font-medium text-gray-700">PAN No.</label>
// //                         <input type="text" value={panNo} onChange={(e) => setPanNo(e.target.value)} className="border p-2 rounded-md w-full" />
// //                     </div>
// //                     <div className="mb-4">
// //                         <label className="block text-sm font-medium text-gray-700">GST No.</label>
// //                         <input type="text" value={gstNo} onChange={(e) => setGstNo(e.target.value)} className="border p-2 rounded-md w-full" />
// //                     </div>
// //                     <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md mr-2">Save</button>
// //                     <button type="button" onClick={onClose} className="bg-gray-500 text-white px-4 py-2 rounded-md">Cancel</button>
// //                 </form>
// //                 {message && <p className="text-sm mt-4">{message}</p>}
// //             </div>
// //         </div>
// //     );
// // };

// // export default AddVendorPopup;



// // import React, { useState } from 'react';

// // const AddVendorPopup = ({ onSave, onClose }) => {
// //     const [vendor, setVendor] = useState({
// //         vendorName: '',
// //         businessName: '',
// //         phone: '',
// //         email: '',
// //         address: '',
// //         panNo: '',
// //         gstNo: ''
// //     });

// //     const handleChange = (e) => {
// //         const { name, value } = e.target;
// //         setVendor(prevState => ({
// //             ...prevState,
// //             [name]: value
// //         }));
// //     };

// //     const handleSubmit = (e) => {
// //         e.preventDefault();
// //         onSave(vendor);
// //         onClose();
// //     };

// //     return (
// //         <div className="fixed z-10 inset-0 overflow-y-auto">
// //             <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
// //                 <div className="fixed inset-0 transition-opacity" aria-hidden="true">
// //                     <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
// //                 </div>

// //                 <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

// //                 <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full" role="dialog" aria-modal="true" aria-labelledby="modal-headline">
// //                     <form onSubmit={handleSubmit}>
// //                         <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
// //                             <div className="sm:flex sm:items-start">
// //                                 <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-blue-100 sm:mx-0 sm:h-10 sm:w-10">
// //                                     <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
// //                                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
// //                                     </svg>
// //                                 </div>
// //                                 <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
// //                                     <h3 className="text-lg leading-6 font-medium text-gray-900" id="modal-headline">
// //                                         Add Vendor
// //                                     </h3>
// //                                     <div className="mt-2">
// //                                         <div className="grid grid-cols-1 gap-6">
// //                                             <div className="col-span-6 sm:col-span-3">
// //                                                 <label htmlFor="vendorName" className="block text-sm font-medium text-gray-700">Vendor Name</label>
// //                                                 <input
// //                                                     type="text"
// //                                                     name="vendorName"
// //                                                     id="vendorName"
// //                                                     value={vendor.vendorName}
// //                                                     onChange={handleChange}
// //                                                     required
// //                                                     className="mt-1 border p-2 rounded-md w-full"
// //                                                 />
// //                                             </div>

// //                                             <div className="col-span-6 sm:col-span-3">
// //                                                 <label htmlFor="businessName" className="block text-sm font-medium text-gray-700">Business Name</label>
// //                                                 <input
// //                                                     type="text"
// //                                                     name="businessName"
// //                                                     id="businessName"
// //                                                     value={vendor.businessName}
// //                                                     onChange={handleChange}
// //                                                     required
// //                                                     className="mt-1 border p-2 rounded-md w-full"
// //                                                 />
// //                                             </div>

// //                                             <div className="col-span-6 sm:col-span-3">
// //                                                 <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone</label>
// //                                                 <input
// //                                                     type="text"
// //                                                     name="phone"
// //                                                     id="phone"
// //                                                     value={vendor.phone}
// //                                                     onChange={handleChange}
// //                                                     required
// //                                                     className="mt-1 border p-2 rounded-md w-full"
// //                                                 />
// //                                             </div>

// //                                             <div className="col-span-6 sm:col-span-3">
// //                                                 <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
// //                                                 <input
// //                                                     type="email"
// //                                                     name="email"
// //                                                     id="email"
// //                                                     value={vendor.email}
// //                                                     onChange={handleChange}
// //                                                     required
// //                                                     className="mt-1 border p-2 rounded-md w-full"
// //                                                 />
// //                                             </div>

// //                                             <div className="col-span-6 sm:col-span-3">
// //                                                 <label htmlFor="address" className="block text-sm font-medium text-gray-700">Address</label>
// //                                                 <input
// //                                                     type="text"
// //                                                     name="address"
// //                                                     id="address"
// //                                                     value={vendor.address}
// //                                                     onChange={handleChange}
// //                                                     required
// //                                                     className="mt-1 border p-2 rounded-md w-full"
// //                                                 />
// //                                             </div>

// //                                             <div className="col-span-6 sm:col-span-3">
// //                                                 <label htmlFor="panNo" className="block text-sm font-medium text-gray-700">PAN Number</label>
// //                                                 <input
// //                                                     type="text"
// //                                                     name="panNo"
// //                                                     id="panNo"
// //                                                     value={vendor.panNo}
// //                                                     onChange={handleChange}
// //                                                     required
// //                                                     className="mt-1 border p-2 rounded-md w-full"
// //                                                 />
// //                                             </div>

// //                                             <div className="col-span-6 sm:col-span-3">
// //                                                 <label htmlFor="gstNo" className="block text-sm font-medium text-gray-700">GST Number</label>
// //                                                 <input
// //                                                     type="text"
// //                                                     name="gstNo"
// //                                                     id="gstNo"
// //                                                     value={vendor.gstNo}
// //                                                     onChange={handleChange}
// //                                                     required
// //                                                     className="mt-1 border p-2 rounded-md w-full"
// //                                                 />
// //                                             </div>
// //                                         </div>
// //                                     </div>
// //                                 </div>
// //                             </div>
// //                         </div>
// //                         <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
// //                             <button type="submit" className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm">
// //                                 Save
// //                             </button>
// //                             <button type="button" onClick={onClose} className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">
// //                                 Cancel
// //                             </button>
// //                         </div>
// //                     </form>
// //                 </div>
// //             </div>
// //         </div> 
// //     );
// // };

// // export default AddVendorPopup;

// import React, { useState } from 'react';

// const AddVendorPopup = ({ onSave, onClose }) => {
//     const [vendor, setVendor] = useState({
//         vendorName: '',
//         businessName: '',
//         phone: '',
//         email: '',
//         address: '',
//         panNo: '',
//         gstNo: ''
//     });

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setVendor(prevState => ({
//             ...prevState,
//             [name]: value
//         }));
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         onSave(vendor);
//         onClose();
//     };

//     return (
//         <div className="fixed top-0 left-0 w-full h-full bg-gray-700 bg-opacity-50 flex items-center justify-center z-50">
//             <div className="bg-white p-6 rounded-lg shadow-md w-1/3">
//                 <h2 className="text-lg font-semibold mb-4">Add Vendor</h2>
//                 <form onSubmit={handleSubmit}>
//                     <div className="grid grid-cols-1 gap-6">
//                         <div>
//                             <label htmlFor="vendorName" className="block text-sm font-medium text-gray-700">Vendor Name</label>
//                             <input
//                                 type="text"
//                                 name="vendorName"
//                                 id="vendorName"
//                                 value={vendor.vendorName}
//                                 onChange={handleChange}
//                                 required
//                                 className="mt-1 border p-2 rounded-md w-full"
//                             />
//                         </div>

//                         <div>
//                             <label htmlFor="businessName" className="block text-sm font-medium text-gray-700">Business Name</label>
//                             <input
//                                 type="text"
//                                 name="businessName"
//                                 id="businessName"
//                                 value={vendor.businessName}
//                                 onChange={handleChange}
//                                 required
//                                 className="mt-1 border p-2 rounded-md w-full"
//                             />
//                         </div>

//                         <div>
//                             <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone</label>
//                             <input
//                                 type="text"
//                                 name="phone"
//                                 id="phone"
//                                 value={vendor.phone}
//                                 onChange={handleChange}
//                                 required
//                                 className="mt-1 border p-2 rounded-md w-full"
//                             />
//                         </div>

//                         <div>
//                             <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
//                             <input
//                                 type="email"
//                                 name="email"
//                                 id="email"
//                                 value={vendor.email}
//                                 onChange={handleChange}
//                                 required
//                                 className="mt-1 border p-2 rounded-md w-full"
//                             />
//                         </div>

//                         <div>
//                             <label htmlFor="address" className="block text-sm font-medium text-gray-700">Address</label>
//                             <input
//                                 type="text"
//                                 name="address"
//                                 id="address"
//                                 value={vendor.address}
//                                 onChange={handleChange}
//                                 required
//                                 className="mt-1 border p-2 rounded-md w-full"
//                             />
//                         </div>

//                         <div>
//                             <label htmlFor="panNo" className="block text-sm font-medium text-gray-700">PAN Number</label>
//                             <input
//                                 type="text"
//                                 name="panNo"
//                                 id="panNo"
//                                 value={vendor.panNo}
//                                 onChange={handleChange}
//                                 required
//                                 className="mt-1 border p-2 rounded-md w-full"
//                             />
//                         </div>

//                         <div>
//                             <label htmlFor="gstNo" className="block text-sm font-medium text-gray-700">GST Number</label>
//                             <input
//                                 type="text"
//                                 name="gstNo"
//                                 id="gstNo"
//                                 value={vendor.gstNo}
//                                 onChange={handleChange}
//                                 required
//                                 className="mt-1 border p-2 rounded-md w-full"
//                             />
//                         </div>
//                     </div>
//                     <div className="mt-4 flex justify-end">
//                         <button
//                             type="submit"
//                             className="bg-blue-500 text-white px-4 py-2 rounded-md mr-2"
//                         >
//                             Save
//                         </button>
//                         <button
//                             type="button"
//                             onClick={onClose}
//                             className="bg-gray-500 text-white px-4 py-2 rounded-md"
//                         >
//                             Cancel
//                         </button>
//                     </div>
//                 </form>
//             </div>
//         </div>
//     );
// };

// export default AddVendorPopup;
import React, { useState } from 'react';

const AddVendorPopup = ({ onSave, onClose }) => {
    const [vendor, setVendor] = useState({
        vendorName: '',
        businessName: '',
        phone: '',
        email: '',
        address: '',
        panNo: '',
        gstNo: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setVendor(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSave(vendor);
        onClose();
    };

    return (
        <div className="fixed top-0 left-0 w-full h-full bg-gray-700 bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-lg shadow-md w-1/3">
                <h2 className="text-lg font-semibold mb-4">Add Vendor</h2>
                <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 gap-6">
                        <div>
                            <input
                                type="text"
                                name="vendorName"
                                id="vendorName"
                                value={vendor.vendorName}
                                onChange={handleChange}
                                required
                                placeholder="Vendor Name"
                                className="mt-1 border p-2 rounded-md w-full"
                            />
                        </div>

                        <div>
                            <input
                                type="text"
                                name="businessName"
                                id="businessName"
                                value={vendor.businessName}
                                onChange={handleChange}
                                required
                                placeholder="Business Name"
                                className="mt-1 border p-2 rounded-md w-full"
                            />
                        </div>

                        <div>
                            <input
                                type="text"
                                name="phone"
                                id="phone"
                                value={vendor.phone}
                                onChange={handleChange}
                                required
                                placeholder="Phone Number"
                                className="mt-1 border p-2 rounded-md w-full"
                            />
                        </div>

                        <div>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                value={vendor.email}
                                onChange={handleChange}
                                required
                                placeholder="Email Address"
                                className="mt-1 border p-2 rounded-md w-full"
                            />
                        </div>

                        <div>
                            <input
                                type="text"
                                name="address"
                                id="address"
                                value={vendor.address}
                                onChange={handleChange}
                                required
                                placeholder="Address"
                                className="mt-1 border p-2 rounded-md w-full"
                            />
                        </div>

                        <div>
                            <input
                                type="text"
                                name="panNo"
                                id="panNo"
                                value={vendor.panNo}
                                onChange={handleChange}
                                required
                                placeholder="PAN Number"
                                className="mt-1 border p-2 rounded-md w-full"
                            />
                        </div>

                        <div>
                            <input
                                type="text"
                                name="gstNo"
                                id="gstNo"
                                value={vendor.gstNo}
                                onChange={handleChange}
                                required
                                placeholder="GST Number"
                                className="mt-1 border p-2 rounded-md w-full"
                            />
                        </div>
                    </div>
                    <div className="mt-4 flex justify-end">
                        <button
                            type="submit"
                            className="bg-blue-500 text-white px-4 py-2 rounded-md mr-2"
                        >
                            Save
                        </button>
                        <button
                            type="button"
                            onClick={onClose}
                            className="bg-gray-500 text-white px-4 py-2 rounded-md"
                        >
                            Cancel
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddVendorPopup;
