// PaymentPolicy.js
export default function PaymentPolicy() {
  return (
    <div className="min-h-screen bg-emerald-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white shadow-sm rounded-xl overflow-hidden">
        {/* Header */}
        <div className="bg-emerald-800 text-white px-6 py-8 sm:px-10 sm:py-12">
          <h1 className="text-3xl sm:text-4xl font-bold">Payment Policy</h1>
          <p className="mt-2 text-emerald-200">Effective Date: July 11, 2025</p>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-10 space-y-8">
          <section className="space-y-4">
            <p className="text-gray-700 leading-relaxed">
              Eco Peedika offers a secure and seamless payment experience through our trusted payment gateway, Razorpay.
            </p>
          </section>

          {/* Section 1 */}
          <section className="space-y-4">
            <div className="flex items-start">
              <span className="text-2xl font-bold text-emerald-800 mr-3">1.</span>
              <div>
                <h2 className="text-2xl font-bold text-emerald-800">Accepted Payment Methods</h2>
                <p className="text-gray-700 leading-relaxed mt-2">
                  We accept the following methods:
                </p>
                <ul className="mt-3 space-y-2 pl-5 list-disc text-gray-700">
                  <li>UPI (Google Pay, PhonePe, Paytm, etc.)</li>
                  <li>Debit/Credit Cards (Visa, MasterCard, RuPay)</li>
                  <li>Net Banking</li>
                  <li>Mobile Wallets</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 2 */}
          <section className="space-y-4">
            <div className="flex items-start">
              <span className="text-2xl font-bold text-emerald-800 mr-3">2.</span>
              <div>
                <h2 className="text-2xl font-bold text-emerald-800">Advance Payments Only</h2>
                <p className="text-gray-700 leading-relaxed mt-2">
                  We do not support Cash on Delivery. All orders must be paid in full before dispatch.
                </p>
              </div>
            </div>
          </section>

          {/* Section 3 */}
          <section className="space-y-4">
            <div className="flex items-start">
              <span className="text-2xl font-bold text-emerald-800 mr-3">3.</span>
              <div>
                <h2 className="text-2xl font-bold text-emerald-800">Secure Transactions</h2>
                <p className="text-gray-700 leading-relaxed mt-2">
                  Your payment details are encrypted and securely handled by Razorpay. Eco Peedika does not store any payment information.
                </p>
              </div>
            </div>
          </section>

          {/* Section 4 */}
          <section className="space-y-4">
            <div className="flex items-start">
              <span className="text-2xl font-bold text-emerald-800 mr-3">4.</span>
              <div>
                <h2 className="text-2xl font-bold text-emerald-800">Failed or Duplicate Payments</h2>
                <p className="text-gray-700 leading-relaxed mt-2">
                  In the event of a failed or duplicate transaction, Razorpay will automatically initiate a refund. Please allow 5–7 working days for the amount to reflect in your bank account.
                </p>
              </div>
            </div>
          </section>

          {/* Section 5 */}
          <section className="space-y-4">
            <div className="flex items-start">
              <span className="text-2xl font-bold text-emerald-800 mr-3">5.</span>
              <div>
                <h2 className="text-2xl font-bold text-emerald-800">Billing</h2>
                <p className="text-gray-700 leading-relaxed mt-2">
                  Invoices are sent via email immediately after successful payment. For GST invoices or special requests, please contact us directly.
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}