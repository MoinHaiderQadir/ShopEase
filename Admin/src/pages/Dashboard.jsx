// import React from "react";
// import {
//   CubeIcon,
//   ExclamationTriangleIcon,
//   UserGroupIcon,
//   BanknotesIcon,
// } from "@heroicons/react/24/outline";

// const Dashboard = () => {
//   // Dummy data for the table
//   const products = [
//     {
//       id: 1,
//       name: "Cement Bag",
//       category: "Construction Material",
//       quantity: 120,
//       status: "In Stock",
//       supplier: "BuildPro Ltd.",
//     },
//     {
//       id: 2,
//       name: "Steel Rod 8mm",
//       category: "Metal Supply",
//       quantity: 40,
//       status: "Low Stock",
//       supplier: "IronWorks Co.",
//     },
//     {
//       id: 3,
//       name: "PVC Pipe 2-inch",
//       category: "Plumbing",
//       quantity: 0,
//       status: "Out of Stock",
//       supplier: "PlumbMart",
//     },
//     {
//       id: 4,
//       name: "Bricks (1,000 pcs)",
//       category: "Construction Material",
//       quantity: 200,
//       status: "In Stock",
//       supplier: "RedStone Supplies",
//     },
//   ];

//   return (
//     <div className="p-6 space-y-6">
//       {/* Page Heading */}
//       <div>
//         <h2 className="text-3xl font-semibold text-gray-800 mb-1">
//           Dashboard Overview
//         </h2>
//         <p className="text-gray-500 text-sm">
//           Manage your inventory, suppliers, and reports all in one place.
//         </p>
//       </div>

//       {/* Stats Cards */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//         <div className="flex items-center bg-white shadow rounded-xl p-5 border border-gray-100">
//           <div className="p-3 bg-blue-100 text-blue-600 rounded-lg">
//             <CubeIcon className="h-8 w-8" />
//           </div>
//           <div className="ml-4">
//             <p className="text-gray-500 text-sm">Total Products</p>
//             <h3 className="text-xl font-semibold text-gray-800">1,245</h3>
//           </div>
//         </div>

//         <div className="flex items-center bg-white shadow rounded-xl p-5 border border-gray-100">
//           <div className="p-3 bg-yellow-100 text-yellow-600 rounded-lg">
//             <ExclamationTriangleIcon className="h-8 w-8" />
//           </div>
//           <div className="ml-4">
//             <p className="text-gray-500 text-sm">Low Stock Items</p>
//             <h3 className="text-xl font-semibold text-gray-800">37</h3>
//           </div>
//         </div>

//         <div className="flex items-center bg-white shadow rounded-xl p-5 border border-gray-100">
//           <div className="p-3 bg-green-100 text-green-600 rounded-lg">
//             <UserGroupIcon className="h-8 w-8" />
//           </div>
//           <div className="ml-4">
//             <p className="text-gray-500 text-sm">Suppliers</p>
//             <h3 className="text-xl font-semibold text-gray-800">12</h3>
//           </div>
//         </div>

//         <div className="flex items-center bg-white shadow rounded-xl p-5 border border-gray-100">
//           <div className="p-3 bg-purple-100 text-purple-600 rounded-lg">
//             <BanknotesIcon className="h-8 w-8" />
//           </div>
//           <div className="ml-4">
//             <p className="text-gray-500 text-sm">Total Revenue</p>
//             <h3 className="text-xl font-semibold text-gray-800">$83,500</h3>
//           </div>
//         </div>
//       </div>

//       {/* Products Table */}
//       <div className="bg-white shadow rounded-xl border border-gray-100 overflow-x-auto">
//         <table className="w-full text-left border-collapse">
//           <thead className="bg-gray-50 border-b">
//             <tr>
//               <th className="px-6 py-3 text-sm font-semibold text-gray-600">
//                 Product
//               </th>
//               <th className="px-6 py-3 text-sm font-semibold text-gray-600">
//                 Category
//               </th>
//               <th className="px-6 py-3 text-sm font-semibold text-gray-600">
//                 Quantity
//               </th>
//               <th className="px-6 py-3 text-sm font-semibold text-gray-600">
//                 Status
//               </th>
//               <th className="px-6 py-3 text-sm font-semibold text-gray-600">
//                 Supplier
//               </th>
//             </tr>
//           </thead>
//           <tbody>
//             {products.map((item) => (
//               <tr
//                 key={item.id}
//                 className="border-b hover:bg-gray-50 transition-colors"
//               >
//                 <td className="px-6 py-3 text-gray-800 font-medium whitespace-nowrap">
//                   {item.name}
//                 </td>
//                 <td className="px-6 py-3 text-gray-600 whitespace-nowrap">
//                   {item.category}
//                 </td>
//                 <td className="px-6 py-3 text-gray-600 whitespace-nowrap">
//                   {item.quantity}
//                 </td>
//                 <td className="px-6 py-3 whitespace-nowrap">
//                   <span
//                     className={`px-2 py-1 rounded-full text-xs font-medium ${
//                       item.status === "In Stock"
//                         ? "bg-green-100 text-green-700"
//                         : item.status === "Low Stock"
//                         ? "bg-yellow-100 text-yellow-700"
//                         : "bg-red-100 text-red-700"
//                     }`}
//                   >
//                     {item.status}
//                   </span>
//                 </td>
//                 <td className="px-6 py-3 text-gray-600 whitespace-nowrap">
//                   {item.supplier}
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;



// import React, { useEffect, useState } from "react";
// import {
//   CubeIcon,
//   ExclamationTriangleIcon,
//   UserGroupIcon,
//   BanknotesIcon,
// } from "@heroicons/react/24/outline";

// const Dashboard = () => {
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     const storedProducts = JSON.parse(localStorage.getItem("products")) || [];
//     setProducts(storedProducts);
//   }, []);

//   // Calculations
//   const totalProducts = products.length;
//   const lowStockThreshold = 50; // configurable
//   const lowStockCount = products.filter(
//     (p) => p.quantity > 0 && p.quantity <= lowStockThreshold
//   ).length;
//   const outOfStockCount = products.filter((p) => p.quantity === 0).length;
//   const totalQuantity = products.reduce((acc, p) => acc + Number(p.quantity), 0);
//   const totalRevenue = products.reduce(
//     (acc, p) => acc + p.price * p.quantity,
//     0
//   );

//   // Simple low-stock alert
//   const lowStockAlerts = products.filter(
//     (p) => p.quantity > 0 && p.quantity <= lowStockThreshold
//   );

//   return (
//     <div className="p-4 sm:p-6 space-y-6">
//       {/* Header */}
//       <div>
//         <h2 className="text-3xl font-semibold text-gray-800 mb-1">
//           Dashboard Overview
//         </h2>
//         <p className="text-gray-500 text-sm">
//           Monitor your stock levels, track revenue, and stay ahead of shortages.
//         </p>
//       </div>

//       {/* Stats Cards */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">
//         {/* Total Products */}
//         <div className="flex items-center bg-white shadow rounded-xl p-5 border border-gray-100">
//           <div className="p-3 bg-blue-100 text-blue-600 rounded-lg">
//             <CubeIcon className="h-8 w-8" />
//           </div>
//           <div className="ml-4">
//             <p className="text-gray-500 text-sm">Total Products</p>
//             <h3 className="text-xl font-semibold text-gray-800">
//               {totalProducts}
//             </h3>
//           </div>
//         </div>

//         {/* Low Stock */}
//         <div className="flex items-center bg-white shadow rounded-xl p-5 border border-gray-100">
//           <div className="p-3 bg-yellow-100 text-yellow-600 rounded-lg">
//             <ExclamationTriangleIcon className="h-8 w-8" />
//           </div>
//           <div className="ml-4">
//             <p className="text-gray-500 text-sm">Low Stock Items</p>
//             <h3 className="text-xl font-semibold text-gray-800">
//               {lowStockCount}
//             </h3>
//           </div>
//         </div>

//         {/* Out of Stock */}
//         <div className="flex items-center bg-white shadow rounded-xl p-5 border border-gray-100">
//           <div className="p-3 bg-red-100 text-red-600 rounded-lg">
//             <ExclamationTriangleIcon className="h-8 w-8" />
//           </div>
//           <div className="ml-4">
//             <p className="text-gray-500 text-sm">Out of Stock</p>
//             <h3 className="text-xl font-semibold text-gray-800">
//               {outOfStockCount}
//             </h3>
//           </div>
//         </div>

//         {/* Revenue */}
//         <div className="flex items-center bg-white shadow rounded-xl p-5 border border-gray-100">
//           <div className="p-3 bg-green-100 text-green-600 rounded-lg">
//             <BanknotesIcon className="h-8 w-8" />
//           </div>
//           <div className="ml-4">
//             <p className="text-gray-500 text-sm">Total Inventory Value</p>
//             <h3 className="text-xl font-semibold text-gray-800">
//               Rs. {totalRevenue.toLocaleString()}
//             </h3>
//           </div>
//         </div>
//       </div>

//       {/* Low Stock Alerts */}
//       {lowStockAlerts.length > 0 && (
//         <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4">
//           <h3 className="text-lg font-semibold text-yellow-700 flex items-center gap-2">
//             <ExclamationTriangleIcon className="h-5 w-5" />
//             Low Stock Alerts
//           </h3>
//           <ul className="mt-2 space-y-1 text-sm text-yellow-800">
//             {lowStockAlerts.map((item) => (
//               <li key={item.id}>
//                 ⚠️ <strong>{item.name}</strong> — only {item.quantity} left!
//               </li>
//             ))}
//           </ul>
//         </div>
//       )}

//       {/* Products Table */}
//       <div className="bg-white shadow rounded-xl border border-gray-100 overflow-x-auto">
//         <table className="w-full text-left border-collapse text-sm sm:text-base">
//           <thead className="bg-gray-50 border-b">
//             <tr>
//               <th className="px-6 py-3 font-semibold text-gray-600">Product</th>
//               <th className="px-6 py-3 font-semibold text-gray-600">Category</th>
//               <th className="px-6 py-3 font-semibold text-gray-600 text-right">
//                 Quantity
//               </th>
//               <th className="px-6 py-3 font-semibold text-gray-600 text-center">
//                 Status
//               </th>
//             </tr>
//           </thead>
//           <tbody>
//             {products.length === 0 ? (
//               <tr>
//                 <td
//                   colSpan="4"
//                   className="text-center text-gray-500 py-6 italic"
//                 >
//                   No products found. Add some inventory to get started.
//                 </td>
//               </tr>
//             ) : (
//               products.map((item) => {
//                 let status =
//                   item.quantity === 0
//                     ? "Out of Stock"
//                     : item.quantity <= lowStockThreshold
//                     ? "Low Stock"
//                     : "In Stock";

//                 return (
//                   <tr
//                     key={item.id}
//                     className="border-b hover:bg-gray-50 transition-colors"
//                   >
//                     <td className="px-6 py-3 font-medium text-gray-800 whitespace-nowrap">
//                       {item.name}
//                     </td>
//                     <td className="px-6 py-3 text-gray-600 whitespace-nowrap">
//                       {item.category}
//                     </td>
//                     <td className="px-6 py-3 text-gray-600 text-right whitespace-nowrap">
//                       {item.quantity}
//                     </td>
//                     <td className="px-6 py-3 text-center whitespace-nowrap">
//                       <span
//                         className={`px-2 py-1 rounded-full text-xs font-medium ${
//                           status === "In Stock"
//                             ? "bg-green-100 text-green-700"
//                             : status === "Low Stock"
//                             ? "bg-yellow-100 text-yellow-700"
//                             : "bg-red-100 text-red-700"
//                         }`}
//                       >
//                         {status}
//                       </span>
//                     </td>
//                   </tr>
//                 );
//               })
//             )}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;



// import React, { useEffect, useState } from "react";
// import {
//   CubeIcon,
//   ExclamationTriangleIcon,
//   UserGroupIcon,
//   BanknotesIcon,
// } from "@heroicons/react/24/outline";

// const Dashboard = () => {
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     const storedProducts = JSON.parse(localStorage.getItem("products")) || [];
//     setProducts(storedProducts);
//   }, []);

//   // Thresholds
//   const lowStockThreshold = 50;
//   const criticalStockThreshold = 3;

//   // Calculations
//   const totalProducts = products.length;
//   const lowStockCount = products.filter(
//     (p) => p.quantity > criticalStockThreshold && p.quantity <= lowStockThreshold
//   ).length;
//   const criticalStockCount = products.filter(
//     (p) => p.quantity > 0 && p.quantity <= criticalStockThreshold
//   ).length;
//   const outOfStockCount = products.filter((p) => p.quantity === 0).length;
//   const totalRevenue = products.reduce(
//     (acc, p) => acc + p.price * p.quantity,
//     0
//   );

//   // Alerts
//   const criticalAlerts = products.filter(
//     (p) => p.quantity > 0 && p.quantity <= criticalStockThreshold
//   );
//   const lowStockAlerts = products.filter(
//     (p) => p.quantity > criticalStockThreshold && p.quantity <= lowStockThreshold
//   );

//   return (
//     <div className="p-4 sm:p-6 space-y-6">
//       {/* Header */}
//       <div>
//         <h2 className="text-3xl font-semibold text-gray-800 mb-1">
//           Dashboard Overview
//         </h2>
//         <p className="text-gray-500 text-sm">
//           Keep tabs on your stock and never run out of supplies again.
//         </p>
//       </div>

//       {/* Stats Cards */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">
//         {/* Total Products */}
//         <div className="flex items-center bg-white shadow rounded-xl p-5 border border-gray-100">
//           <div className="p-3 bg-blue-100 text-blue-600 rounded-lg">
//             <CubeIcon className="h-8 w-8" />
//           </div>
//           <div className="ml-4">
//             <p className="text-gray-500 text-sm">Total Products</p>
//             <h3 className="text-xl font-semibold text-gray-800">
//               {totalProducts}
//             </h3>
//           </div>
//         </div>

//         {/* Low Stock */}
//         <div className="flex items-center bg-white shadow rounded-xl p-5 border border-gray-100">
//           <div className="p-3 bg-yellow-100 text-yellow-600 rounded-lg">
//             <ExclamationTriangleIcon className="h-8 w-8" />
//           </div>
//           <div className="ml-4">
//             <p className="text-gray-500 text-sm">Low Stock Items</p>
//             <h3 className="text-xl font-semibold text-gray-800">
//               {lowStockCount}
//             </h3>
//           </div>
//         </div>

//         {/* Critical Stock */}
//         <div className="flex items-center bg-white shadow rounded-xl p-5 border border-gray-100">
//           <div className="p-3 bg-red-100 text-red-600 rounded-lg">
//             <ExclamationTriangleIcon className="h-8 w-8" />
//           </div>
//           <div className="ml-4">
//             <p className="text-gray-500 text-sm">Critical Stock (≤3)</p>
//             <h3 className="text-xl font-semibold text-gray-800">
//               {criticalStockCount}
//             </h3>
//           </div>
//         </div>

//         {/* Inventory Value */}
//         <div className="flex items-center bg-white shadow rounded-xl p-5 border border-gray-100">
//           <div className="p-3 bg-green-100 text-green-600 rounded-lg">
//             <BanknotesIcon className="h-8 w-8" />
//           </div>
//           <div className="ml-4">
//             <p className="text-gray-500 text-sm">Total Inventory Value</p>
//             <h3 className="text-xl font-semibold text-gray-800">
//               Rs. {totalRevenue.toLocaleString()}
//             </h3>
//           </div>
//         </div>
//       </div>

//       {/* Critical Alerts */}
//       {criticalAlerts.length > 0 && (
//         <div className="bg-red-50 border border-red-200 rounded-xl p-4">
//           <h3 className="text-lg font-semibold text-red-700 flex items-center gap-2">
//             <ExclamationTriangleIcon className="h-5 w-5" />
//             ⚠️ Critical Stock Alerts
//           </h3>
//           <ul className="mt-2 space-y-1 text-sm text-red-800">
//             {criticalAlerts.map((item) => (
//               <li key={item.id}>
//                 🚨 <strong>{item.name}</strong> — only {item.quantity} left!
//               </li>
//             ))}
//           </ul>
//         </div>
//       )}

//       {/* Low Stock Alerts */}
//       {lowStockAlerts.length > 0 && (
//         <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4">
//           <h3 className="text-lg font-semibold text-yellow-700 flex items-center gap-2">
//             <ExclamationTriangleIcon className="h-5 w-5" />
//             Low Stock Alerts
//           </h3>
//           <ul className="mt-2 space-y-1 text-sm text-yellow-800">
//             {lowStockAlerts.map((item) => (
//               <li key={item.id}>
//                 ⚠️ <strong>{item.name}</strong> — only {item.quantity} remaining.
//               </li>
//             ))}
//           </ul>
//         </div>
//       )}

//       {/* Products Table */}
//       <div className="bg-white shadow rounded-xl border border-gray-100 overflow-x-auto">
//         <table className="w-full text-left border-collapse text-sm sm:text-base">
//           <thead className="bg-gray-50 border-b">
//             <tr>
//               <th className="px-6 py-3 font-semibold text-gray-600">Product</th>
//               <th className="px-6 py-3 font-semibold text-gray-600">Category</th>
//               <th className="px-6 py-3 font-semibold text-gray-600 text-right">
//                 Quantity
//               </th>
//               <th className="px-6 py-3 font-semibold text-gray-600 text-center">
//                 Status
//               </th>
//             </tr>
//           </thead>
//           <tbody>
//             {products.length === 0 ? (
//               <tr>
//                 <td
//                   colSpan="4"
//                   className="text-center text-gray-500 py-6 italic"
//                 >
//                   No products yet. Add some to start tracking inventory.
//                 </td>
//               </tr>
//             ) : (
//               products.map((item) => {
//                 let status =
//                   item.quantity === 0
//                     ? "Out of Stock"
//                     : item.quantity <= criticalStockThreshold
//                     ? "Critical"
//                     : item.quantity <= lowStockThreshold
//                     ? "Low Stock"
//                     : "In Stock";

//                 return (
//                   <tr
//                     key={item.id}
//                     className="border-b hover:bg-gray-50 transition-colors"
//                   >
//                     <td className="px-6 py-3 font-medium text-gray-800 whitespace-nowrap">
//                       {item.name}
//                     </td>
//                     <td className="px-6 py-3 text-gray-600 whitespace-nowrap">
//                       {item.category}
//                     </td>
//                     <td className="px-6 py-3 text-gray-600 text-right whitespace-nowrap">
//                       {item.quantity}
//                     </td>
//                     <td className="px-6 py-3 text-center whitespace-nowrap">
//                       <span
//                         className={`px-2 py-1 rounded-full text-xs font-medium ${
//                           status === "In Stock"
//                             ? "bg-green-100 text-green-700"
//                             : status === "Low Stock"
//                             ? "bg-yellow-100 text-yellow-700"
//                             : status === "Critical"
//                             ? "bg-red-200 text-red-800 font-semibold animate-pulse"
//                             : "bg-gray-100 text-gray-600"
//                         }`}
//                       >
//                         {status}
//                       </span>
//                     </td>
//                   </tr>
//                 );
//               })
//             )}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;




import React, { useEffect, useState } from "react";
import {
  CubeIcon,
  ExclamationTriangleIcon,
  BanknotesIcon,
} from "@heroicons/react/24/outline";

const Dashboard = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Load products from localStorage
    const storedProducts = JSON.parse(localStorage.getItem("products")) || [];
    setProducts(storedProducts);

    // Check for critical stock alerts
    const criticalProducts = storedProducts.filter((p) => p.quantity <= 3);
    if (criticalProducts.length > 0) {
      const alertMessage = criticalProducts
        .map((p) => `🚨 ${p.name} — only ${p.quantity} left!`)
        .join("\n");
      alert(`CRITICAL STOCK ALERT:\n${alertMessage}`);
    }
  }, []);

  // Thresholds
  const lowStockThreshold = 50;
  const criticalStockThreshold = 3;

  // Calculations
  const totalProducts = products.length;
  const lowStockCount = products.filter(
    (p) => p.quantity > criticalStockThreshold && p.quantity <= lowStockThreshold
  ).length;
  const criticalStockCount = products.filter(
    (p) => p.quantity > 0 && p.quantity <= criticalStockThreshold
  ).length;
  const totalRevenue = products.reduce(
    (acc, p) => acc + (p.price || 0) * (p.quantity || 0),
    0
  );

  // Alerts
  const criticalAlerts = products.filter((p) => p.quantity <= criticalStockThreshold);
  const lowStockAlerts = products.filter(
    (p) => p.quantity > criticalStockThreshold && p.quantity <= lowStockThreshold
  );

  return (
    <div className="p-4 sm:p-6 space-y-6">
      {/* Header */}
      <div>
        <h2 className="text-3xl font-semibold text-gray-800 mb-1">
          Dashboard Overview
        </h2>
        <p className="text-gray-500 text-sm">
          Keep tabs on your stock and never let your shelves run dry.
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">
        {/* Total Products */}
        <div className="flex items-center bg-white shadow rounded-xl p-5 border border-gray-100">
          <div className="p-3 bg-blue-100 text-blue-600 rounded-lg">
            <CubeIcon className="h-8 w-8" />
          </div>
          <div className="ml-4">
            <p className="text-gray-500 text-sm">Total Products</p>
            <h3 className="text-xl font-semibold text-gray-800">
              {totalProducts}
            </h3>
          </div>
        </div>

        {/* Low Stock */}
        <div className="flex items-center bg-white shadow rounded-xl p-5 border border-gray-100">
          <div className="p-3 bg-yellow-100 text-yellow-600 rounded-lg">
            <ExclamationTriangleIcon className="h-8 w-8" />
          </div>
          <div className="ml-4">
            <p className="text-gray-500 text-sm">Low Stock Items</p>
            <h3 className="text-xl font-semibold text-gray-800">
              {lowStockCount}
            </h3>
          </div>
        </div>

        {/* Critical Stock */}
        <div className="flex items-center bg-white shadow rounded-xl p-5 border border-gray-100">
          <div className="p-3 bg-red-100 text-red-600 rounded-lg">
            <ExclamationTriangleIcon className="h-8 w-8 animate-pulse" />
          </div>
          <div className="ml-4">
            <p className="text-gray-500 text-sm">Critical Stock (≤3)</p>
            <h3 className="text-xl font-semibold text-gray-800">
              {criticalStockCount}
            </h3>
          </div>
        </div>

        {/* Total Value */}
        <div className="flex items-center bg-white shadow rounded-xl p-5 border border-gray-100">
          <div className="p-3 bg-green-100 text-green-600 rounded-lg">
            <BanknotesIcon className="h-8 w-8" />
          </div>
          <div className="ml-4">
            <p className="text-gray-500 text-sm">Total Inventory Value</p>
            <h3 className="text-xl font-semibold text-gray-800">
              Rs. {totalRevenue.toLocaleString()}
            </h3>
          </div>
        </div>
      </div>

      {/* Critical Alerts */}
      {criticalAlerts.length > 0 && (
        <div className="bg-red-50 border border-red-200 rounded-xl p-4">
          <h3 className="text-lg font-semibold text-red-700 flex items-center gap-2">
            <ExclamationTriangleIcon className="h-5 w-5" />
            🚨 Critical Stock Alerts
          </h3>
          <ul className="mt-2 space-y-1 text-sm text-red-800">
            {criticalAlerts.map((item) => (
              <li key={item.id}>
                🔥 <strong>{item.name}</strong> — only {item.quantity} left!
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Low Stock Alerts */}
      {lowStockAlerts.length > 0 && (
        <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4">
          <h3 className="text-lg font-semibold text-yellow-700 flex items-center gap-2">
            <ExclamationTriangleIcon className="h-5 w-5" />
            ⚠️ Low Stock Alerts
          </h3>
          <ul className="mt-2 space-y-1 text-sm text-yellow-800">
            {lowStockAlerts.map((item) => (
              <li key={item.id}>
                ⚠️ <strong>{item.name}</strong> — only {item.quantity} remaining.
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Products Table */}
      <div className="bg-white shadow rounded-xl border border-gray-100 overflow-x-auto">
        <table className="w-full text-left border-collapse text-sm sm:text-base">
          <thead className="bg-gray-50 border-b">
            <tr>
              <th className="px-6 py-3 font-semibold text-gray-600">Product</th>
              <th className="px-6 py-3 font-semibold text-gray-600">Category</th>
              <th className="px-6 py-3 font-semibold text-gray-600 text-right">Quantity</th>
              <th className="px-6 py-3 font-semibold text-gray-600 text-center">Status</th>
            </tr>
          </thead>
          <tbody>
            {products.length === 0 ? (
              <tr>
                <td colSpan="4" className="text-center text-gray-500 py-6 italic">
                  No products found. Add some items to your inventory.
                </td>
              </tr>
            ) : (
              products.map((item) => {
                let status =
                  item.quantity === 0
                    ? "Out of Stock"
                    : item.quantity <= criticalStockThreshold
                    ? "Critical"
                    : item.quantity <= lowStockThreshold
                    ? "Low Stock"
                    : "In Stock";

                return (
                  <tr key={item.id} className="border-b hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-3 font-medium text-gray-800 whitespace-nowrap">
                      {item.name}
                    </td>
                    <td className="px-6 py-3 text-gray-600 whitespace-nowrap">
                      {item.category}
                    </td>
                    <td className="px-6 py-3 text-gray-600 text-right whitespace-nowrap">
                      {item.quantity}
                    </td>
                    <td className="px-6 py-3 text-center whitespace-nowrap">
                      <span
                        className={`px-2 py-1 rounded-full text-xs font-medium ${
                          status === "In Stock"
                            ? "bg-green-100 text-green-700"
                            : status === "Low Stock"
                            ? "bg-yellow-100 text-yellow-700"
                            : status === "Critical"
                            ? "bg-red-200 text-red-800 font-semibold animate-pulse"
                            : "bg-gray-100 text-gray-600"
                        }`}
                      >
                        {status}
                      </span>
                    </td>
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;
