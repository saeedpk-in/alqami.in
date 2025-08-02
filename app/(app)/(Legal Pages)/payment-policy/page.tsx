import React from 'react';

const PaymentPolicyPage = () => {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Payment Policy</h1>
      
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold text-gray-700 mb-4">Payment Methods</h2>
        <p className="text-gray-600 mb-4">
          We offer a variety of safe and secure payment methods to ensure a smooth shopping experience:
        </p>
        
        <ul className="list-disc pl-5 space-y-2 text-gray-600 mb-4">
          <li>UPI</li>
          <li>Net Banking</li>
          <li>Credit/Debit Cards</li>
          <li>Wallet Payments</li>
        </ul>
        
        <h2 className="text-xl font-semibold text-gray-700 mb-4 mt-6">Transaction Information</h2>
        <p className="text-gray-600 mb-4">
          All transactions are processed in INR (Indian Rupees). Orders will only be processed upon successful payment.
        </p>
        
        <h2 className="text-xl font-semibold text-gray-700 mb-4">Payment Issues</h2>
        <p className="text-gray-600">
          In case of any payment failure or deduction without confirmation, please contact our support team with your
          transaction ID. Such issues are usually resolved within 48 hours.
        </p>
      </div>
    </div>
  );
};

export default PaymentPolicyPage;