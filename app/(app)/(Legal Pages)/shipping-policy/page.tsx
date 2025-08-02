import React from 'react';

const ShippingPolicyPage = () => {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Shipping Policy</h1>
      
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold text-gray-700 mb-4">Order Processing</h2>
        <p className="text-gray-600 mb-4">
          We aim to process and dispatch all orders within 1-2 business days, excluding Sundays and holidays.
        </p>
        
        <h2 className="text-xl font-semibold text-gray-700 mb-4">Delivery Estimates</h2>
        <ul className="list-disc pl-5 space-y-2 text-gray-600 mb-4">
          <li>Within Kerala: 2-4 working days</li>
          <li>South India: 3-5 working days</li>
          <li>Rest of India: 4-7 working days</li>
        </ul>
        
        <h2 className="text-xl font-semibold text-gray-700 mb-4">Free Shipping</h2>
        <p className="text-gray-600 mb-4">
          Free shipping is available on orders above INR 999.
        </p>
        
        <h2 className="text-xl font-semibold text-gray-700 mb-4">Tracking Information</h2>
        <p className="text-gray-600 mb-4">
          You will receive tracking details once your order is shipped.
        </p>
        
        <h2 className="text-xl font-semibold text-gray-700 mb-4">Delivery Delays</h2>
        <p className="text-gray-600">
          We are not responsible for delays due to courier issues, weather conditions, or regional restrictions.
        </p>
      </div>
    </div>
  );
};

export default ShippingPolicyPage;