// // // // VendorFormPopup.js
// // // import React, { useState } from 'react';

// // // const VendorFormPopup = ({ onSaveVendor, onCancelAddVendor }) => {
// // //     const [vendor, setVendor] = useState({
// // //         vendorName: '',
// // //         businessName: '',
// // //         phone: '',
// // //         email: '',
// // //         address: '',
// // //         panNo: '',
// // //         gstNo: ''
// // //     });

// // //     const handleChange = (e) => {
// // //         const { name, value } = e.target;
// // //         setVendor(prevVendor => ({
// // //             ...prevVendor,
// // //             [name]: value
// // //         }));
// // //     };

// // //     const handleSubmit = (e) => {
// // //         e.preventDefault();
// // //         onSaveVendor(vendor);
// // //     };

// // //     return (
// // //         <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-50">
// // //             <div className="bg-white p-8 rounded-lg">
// // //                 <h2 className="text-xl font-semibold mb-4">Add Vendor</h2>
// // //                 <form onSubmit={handleSubmit}>
// // //                     <input
// // //                         type="text"
// // //                         name="vendorName"
// // //                         value={vendor.vendorName}
// // //                         onChange={handleChange}
// // //                         placeholder="Vendor Name"
// // //                         className="border p-2 rounded-md mb-2 w-full"
// // //                     />
// // //                     <input
// // //                         type="text"
// // //                         name="businessName"
// // //                         value={vendor.businessName}
// // //                         onChange={handleChange}
// // //                         placeholder="Business Name"
// // //                         className="border p-2 rounded-md mb-2 w-full"
// // //                     />
// // //                     <input
// // //                         type="tel"
// // //                         name="phone"
// // //                         value={vendor.phone}
// // //                         onChange={handleChange}
// // //                         placeholder="Phone"
// // //                         className="border p-2 rounded-md mb-2 w-full"
// // //                     />
// // //                     <input
// // //                         type="email"
// // //                         name="email"
// // //                         value={vendor.email}
// // //                         onChange={handleChange}
// // //                         placeholder="Email"
// // //                         className="border p-2 rounded-md mb-2 w-full"
// // //                     />
// // //                     <input
// // //                         type="text"
// // //                         name="address"
// // //                         value={vendor.address}
// // //                         onChange={handleChange}
// // //                         placeholder="Address"
// // //                         className="border p-2 rounded-md mb-2 w-full"
// // //                     />
// // //                     <input
// // //                         type="text"
// // //                         name="panNo"
// // //                         value={vendor.panNo}
// // //                         onChange={handleChange}
// // //                         placeholder="PAN Number"
// // //                         className="border p-2 rounded-md mb-2 w-full"
// // //                     />
// // //                     <input
// // //                         type="text"
// // //                         name="gstNo"
// // //                         value={vendor.gstNo}
// // //                         onChange={handleChange}
// // //                         placeholder="GST Number"
// // //                         className="border p-2 rounded-md mb-2 w-full"
// // //                     />
// // //                     <div className="mt-2 flex justify-end">
// // //                         <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md mr-2">Save</button>
// // //                         <button type="button" className="bg-gray-500 text-white px-4 py-2 rounded-md" onClick={onCancelAddVendor}>Cancel</button>
// // //                     </div>
// // //                 </form>
// // //             </div>
// // //         </div>
// // //     );
// // // };

// // // export default VendorFormPopup;
// // import React, { useState } from 'react';
// // import axios from 'axios';

// // const VendorFormPopup = ({ onClose, onSave }) => {
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
// //         setVendor(prevVendor => ({
// //             ...prevVendor,
// //             [name]: value
// //         }));
// //     };

// //     const handleSubmit = async (e) => {
// //         e.preventDefault();
// //         try {
// //             await axios.post('http://localhost:5000/api/vendor', vendor);
// //             onSave();
// //             onClose();
// //         } catch (error) {
// //             console.error('Error saving vendor details:', error);
// //         }
// //     };

// //     return (
// //         <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-8 rounded-lg">
// //             <h2 className="text-xl font-semibold mb-4">Add Vendor</h2>
// //             <form onSubmit={handleSubmit}>
// //                 <div className="flex flex-wrap mb-4">
// //                     <input
// //                         type="text"
// //                         name="vendorName"
// //                         value={vendor.vendorName}
// //                         onChange={handleChange}
// //                         placeholder="Vendor Name"
// //                         className="border p-2 rounded-md mb-2 w-full"
// //                     />
// //                     <input
// //                         type="text"
// //                         name="businessName"
// //                         value={vendor.businessName}
// //                         onChange={handleChange}
// //                         placeholder="Business Name"
// //                         className="border p-2 rounded-md mb-2 w-full"
// //                     />
// //                     <input
// //                         type="tel"
// //                         name="phone"
// //                         value={vendor.phone}
// //                         onChange={handleChange}
// //                         placeholder="Phone"
// //                         className="border p-2 rounded-md mb-2 w-full"
// //                     />
// //                     <input
// //                         type="email"
// //                         name="email"
// //                         value={vendor.email}
// //                         onChange={handleChange}
// //                         placeholder="Email"
// //                         className="border p-2 rounded-md mb-2 w-full"
// //                     />
// //                     <input
// //                         type="text"
// //                         name="address"
// //                         value={vendor.address}
// //                         onChange={handleChange}
// //                         placeholder="Address"
// //                         className="border p-2 rounded-md mb-2 w-full"
// //                     />
// //                     <input
// //                         type="text"
// //                         name="panNo"
// //                         value={vendor.panNo}
// //                         onChange={handleChange}
// //                         placeholder="PAN Number"
// //                         className="border p-2 rounded-md mb-2 w-full"
// //                     />
// //                     <input
// //                         type="text"
// //                         name="gstNo"
// //                         value={vendor.gstNo}
// //                         onChange={handleChange}
// //                         placeholder="GST Number"
// //                         className="border p-2 rounded-md mb-2 w-full"
// //                     />
// //                 </div>
// //                 <div className="flex justify-end">
// //                     <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md mr-2">Save</button>
// //                     <button type="button" className="bg-gray-500 text-white px-4 py-2 rounded-md" onClick={onClose}>Cancel</button>
// //                 </div>
// //             </form>
// //         </div>
// //     );
// // };

// // export default VendorFormPopup;


// import React, { useState } from 'react';
// import axios from 'axios';

// const VendorFormPopup = ({ onClose, onSave }) => {
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
//         setVendor(prevVendor => ({
//             ...prevVendor,
//             [name]: value
//         }));
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         try {
//             await axios.post('http://localhost:5000/api/vendor', vendor);
//             onSave();
//             onClose();
//         } catch (error) {
//             console.error('Error saving vendor details:', error);
//         }
//     };

//     return (
//         <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-75 z-50">
//             <div className="bg-white p-8 rounded-lg z-50">
//                 <h2 className="text-xl font-semibold mb-4">Add Vendor</h2>
//                 <form onSubmit={handleSubmit}>
//                     <div className="flex flex-wrap mb-4">
//                         <input
//                             type="text"
//                             name="vendorName"
//                             value={vendor.vendorName}
//                             onChange={handleChange}
//                             placeholder="Vendor Name"
//                             className="border p-2 rounded-md mb-2 w-full"
//                         />
//                         <input
//                             type="text"
//                             name="businessName"
//                             value={vendor.businessName}
//                             onChange={handleChange}
//                             placeholder="Business Name"
//                             className="border p-2 rounded-md mb-2 w-full"
//                         />
//                         <input
//                             type="tel"
//                             name="phone"
//                             value={vendor.phone}
//                             onChange={handleChange}
//                             placeholder="Phone"
//                             className="border p-2 rounded-md mb-2 w-full"
//                         />
//                         <input
//                             type="email"
//                             name="email"
//                             value={vendor.email}
//                             onChange={handleChange}
//                             placeholder="Email"
//                             className="border p-2 rounded-md mb-2 w-full"
//                         />
//                         <input
//                             type="text"
//                             name="address"
//                             value={vendor.address}
//                             onChange={handleChange}
//                             placeholder="Address"
//                             className="border p-2 rounded-md mb-2 w-full"
//                         />
//                         <input
//                             type="text"
//                             name="panNo"
//                             value={vendor.panNo}
//                             onChange={handleChange}
//                             placeholder="PAN Number"
//                             className="border p-2 rounded-md mb-2 w-full"
//                         />
//                         <input
//                             type="text"
//                             name="gstNo"
//                             value={vendor.gstNo}
//                             onChange={handleChange}
//                             placeholder="GST Number"
//                             className="border p-2 rounded-md mb-2 w-full"
//                         />
//                     </div>
//                     <div className="flex justify-end">
//                         <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md mr-2">Save</button>
//                         <button type="button" className="bg-gray-500 text-white px-4 py-2 rounded-md" onClick={onClose}>Cancel</button>
//                     </div>
//                 </form>
//             </div>
//         </div>
//     );
// };

// export default VendorFormPopup;
import React, { useState } from 'react';
import axios from 'axios';

const VendorFormPopup = ({ onClose, onSaveVendor, onCancelAddVendor }) => {
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
        setVendor(prevVendor => ({
            ...prevVendor,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5000/api/vendor', vendor);
            onSaveVendor(vendor); // Pass the vendor details to the parent component
            onClose(); // Close the popup
        } catch (error) {
            console.error('Error saving vendor details:', error);
        }
    };


    return (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-75 z-50">
            <div className="bg-white p-8 rounded-lg z-50">
                <h2 className="text-xl font-semibold mb-4">Add Vendor</h2>
                <form onSubmit={handleSubmit}>
                    <div className="flex flex-wrap mb-4">
                        <input
                            type="text"
                            name="vendorName"
                            value={vendor.vendorName}
                            onChange={handleChange}
                            placeholder="Vendor Name"
                            className="border p-2 rounded-md mb-2 w-full"
                        />
                        <input
                            type="text"
                            name="businessName"
                            value={vendor.businessName}
                            onChange={handleChange}
                            placeholder="Business Name"
                            className="border p-2 rounded-md mb-2 w-full"
                        />
                        <input
                            type="tel"
                            name="phone"
                            value={vendor.phone}
                            onChange={handleChange}
                            placeholder="Phone"
                            className="border p-2 rounded-md mb-2 w-full"
                        />
                        <input
                            type="email"
                            name="email"
                            value={vendor.email}
                            onChange={handleChange}
                            placeholder="Email"
                            className="border p-2 rounded-md mb-2 w-full"
                        />
                        <input
                            type="text"
                            name="address"
                            value={vendor.address}
                            onChange={handleChange}
                            placeholder="Address"
                            className="border p-2 rounded-md mb-2 w-full"
                        />
                        <input
                            type="text"
                            name="panNo"
                            value={vendor.panNo}
                            onChange={handleChange}
                            placeholder="PAN Number"
                            className="border p-2 rounded-md mb-2 w-full"
                        />
                        <input
                            type="text"
                            name="gstNo"
                            value={vendor.gstNo}
                            onChange={handleChange}
                            placeholder="GST Number"
                            className="border p-2 rounded-md mb-2 w-full"
                        />
                    </div>
                    <div className="flex justify-end">
                        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md mr-2">Save</button>
                        <button type="button" className="bg-gray-500 text-white px-4 py-2 rounded-md" onClick={onCancelAddVendor}>Cancel</button>
                    </div>

                </form>
            </div>
        </div>
    );
};

export default VendorFormPopup;
