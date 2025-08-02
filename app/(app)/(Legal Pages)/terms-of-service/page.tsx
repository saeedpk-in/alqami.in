import React from 'react';

const TermsOfServicePage = () => {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Terms of Service</h1>
      
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold text-gray-700 mb-4">Agreement</h2>
        <p className="text-gray-600 mb-4">
          By purchasing from us or using our website, you agree to the following:
        </p>
        <ul className="list-disc pl-5 space-y-2 text-gray-600 mb-4">
          <li>You are of legal age and capable of entering a contract.</li>
          <li>You will provide accurate delivery and contact information.</li>
          <li>Our products are meant for external use only and should be used as instructed.</li>
        </ul>
        
        <h2 className="text-xl font-semibold text-gray-700 mb-4">Pricing and Availability</h2>
        <p className="text-gray-600 mb-4">
          We reserve the right to change prices, product details, or cancel orders in case of unavailability or technical
          errors.
        </p>
        
        <h2 className="text-xl font-semibold text-gray-700 mb-4">Intellectual Property</h2>
        <p className="text-gray-600 mb-4">
          All content on our platform including logos, designs, and text is our intellectual property and cannot be
          reused without permission.
        </p>
        
        <h2 className="text-xl font-semibold text-gray-700 mb-4">Violations</h2>
        <p className="text-gray-600">
          Violations may result in legal action or denial of services.
        </p>
      </div>
    </div>
  );
};

export default TermsOfServicePage;