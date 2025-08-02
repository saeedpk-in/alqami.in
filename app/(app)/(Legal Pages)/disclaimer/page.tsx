import React from 'react';

const DisclaimerPage = () => {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Disclaimer</h1>
      
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold text-gray-700 mb-4">Alqami Multani Mitti (Fuller's Earth) Product</h2>
        <p className="text-gray-600 mb-4">
          Our Multani Mitti (Fuller's Earth) product is sourced from natural clay deposits and is processed with minimal
          intervention to retain its purity. While it is known for its oil-absorbing and skin-soothing properties, individual
          skin reactions may vary based on allergies, existing skin conditions, or environmental factors.
        </p>
        
        <ul className="list-disc pl-5 space-y-2 text-gray-600 mb-4">
          <li>Always conduct a patch test behind the ear or on the wrist before applying to the face or body.</li>
          <li>Discontinue use immediately if irritation occurs.</li>
          <li>This product is intended for cosmetic use only and is not meant to diagnose, treat, or cure any skin disease.</li>
          <li>Pregnant or breastfeeding women and individuals under dermatological treatment should consult a healthcare professional before use.</li>
        </ul>
        
        <p className="text-gray-600">
          By using our products, you acknowledge that you have read and understood this disclaimer.
        </p>
      </div>
    </div>
  );
};

export default DisclaimerPage;