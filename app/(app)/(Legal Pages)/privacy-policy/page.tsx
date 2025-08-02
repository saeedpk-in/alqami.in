import React from 'react';

const PrivacyPolicyPage = () => {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Privacy Policy</h1>
      
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold text-gray-700 mb-4">Information Collection</h2>
        <p className="text-gray-600 mb-4">
          We are committed to protecting your privacy and safeguarding your personal information.
          Information collected from you such as your name, address, phone number, and email is used only for order
          processing, delivery, and customer service.
        </p>
        
        <h2 className="text-xl font-semibold text-gray-700 mb-4">Data Sharing</h2>
        <p className="text-gray-600 mb-4">
          We do not sell or share your personal data with third-party marketers. All online payments are processed
          through secure and encrypted gateways.
        </p>
        
        <h2 className="text-xl font-semibold text-gray-700 mb-4">Consent</h2>
        <p className="text-gray-600">
          By using our site or placing an order, you agree to our privacy practices as outlined in this policy.
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;