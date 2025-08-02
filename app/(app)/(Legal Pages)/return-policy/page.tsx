import React from 'react';

const ReturnPolicyPage = () => {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Return & Refund Policy</h1>
      
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold text-gray-700 mb-4">General Policy</h2>
        <p className="text-gray-600 mb-4">
          Due to hygiene and product safety, we do not accept returns once the package is opened or used.
        </p>
        
        <h2 className="text-xl font-semibold text-gray-700 mb-4">Eligible Cases</h2>
        <p className="text-gray-600 mb-4">
          However, if you receive a product that is:
        </p>
        <ul className="list-disc pl-5 space-y-2 text-gray-600 mb-4">
          <li>Damaged during shipping</li>
          <li>Incorrect or not as described</li>
        </ul>
        
        <h2 className="text-xl font-semibold text-gray-700 mb-4">Resolution Process</h2>
        <p className="text-gray-600 mb-4">
          Please contact us within 48 hours of delivery with:
        </p>
        <ul className="list-disc pl-5 space-y-2 text-gray-600 mb-4">
          <li>Clear images of the product</li>
          <li>Order details and invoice</li>
        </ul>
        
        <p className="text-gray-600 mb-4">
          After verification, we may offer:
        </p>
        <ul className="list-disc pl-5 space-y-2 text-gray-600 mb-4">
          <li>Replacement of the same item</li>
          <li>Refund to the original payment method</li>
          <li>Store credit, based on your preference</li>
        </ul>
        
        <p className="text-gray-600">
          Note: Returned items must be unused, sealed, and sent back within 7 working days.
        </p>
      </div>
    </div>
  );
};

export default ReturnPolicyPage;