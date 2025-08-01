// RefundPolicy.js
export default function RefundPolicy() {
  return (
    <div className="min-h-screen bg-emerald-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white shadow-sm rounded-xl overflow-hidden">
        {/* Header */}
        <div className="bg-emerald-800 text-white px-6 py-8 sm:px-10 sm:py-12">
          <h1 className="text-3xl sm:text-4xl font-bold">Refund and Cancellation Policy</h1>
          <p className="mt-2 text-emerald-200">Effective Date: July 11, 2025</p>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-10 space-y-8">
          <section className="space-y-4">
            <p className="text-gray-700 leading-relaxed">
              At Eco Peedika, we strive for customer satisfaction while staying true to our zero-waste principles. Due to the nature of our eco-friendly products, we follow a strict no-return and no-cancellation policy. However, we do offer limited refunds under specific conditions.
            </p>
          </section>

          {/* Section 1 */}
          <section className="space-y-4">
            <div className="flex items-start">
              <span className="text-2xl font-bold text-emerald-800 mr-3">1.</span>
              <div>
                <h2 className="text-2xl font-bold text-emerald-800">Non-Returnable Products</h2>
                <p className="text-gray-700 leading-relaxed mt-2">
                  All products sold by Eco Peedika are non-returnable due to hygiene, sustainability, and perishability concerns. Please read product descriptions carefully before placing an order.
                </p>
              </div>
            </div>
          </section>

          {/* Section 2 */}
          <section className="space-y-4">
            <div className="flex items-start">
              <span className="text-2xl font-bold text-emerald-800 mr-3">2.</span>
              <div>
                <h2 className="text-2xl font-bold text-emerald-800">Refund Eligibility</h2>
                <p className="text-gray-700 leading-relaxed mt-2">
                  Refunds are issued only under the following circumstances:
                </p>
                <ul className="mt-3 space-y-2 pl-5 list-disc text-gray-700">
                  <li>Incorrect item received</li>
                  <li>Product damaged during transit (with valid photo proof)</li>
                  <li>Duplicate or failed payment</li>
                </ul>
                <p className="text-gray-700 leading-relaxed mt-3">
                  Requests must be made within 3 days of delivery. Claims made beyond this window will not be considered.
                </p>
              </div>
            </div>
          </section>

          {/* Section 3 */}
          <section className="space-y-4">
            <div className="flex items-start">
              <span className="text-2xl font-bold text-emerald-800 mr-3">3.</span>
              <div>
                <h2 className="text-2xl font-bold text-emerald-800">Refund Process</h2>
                <p className="text-gray-700 leading-relaxed mt-2">
                  If approved, the refund will be credited to your original payment method within 5–7 business days. Refunds are handled through Razorpay and subject to their processing times.
                </p>
              </div>
            </div>
          </section>

          {/* Section 4 */}
          <section className="space-y-4">
            <div className="flex items-start">
              <span className="text-2xl font-bold text-emerald-800 mr-3">4.</span>
              <div>
                <h2 className="text-2xl font-bold text-emerald-800">No Cancellations</h2>
                <p className="text-gray-700 leading-relaxed mt-2">
                  Orders cannot be cancelled once placed, as we begin fulfillment immediately. Please review your order carefully before checkout.
                </p>
              </div>
            </div>
          </section>

          {/* Section 5 */}
          <section className="space-y-4">
            <div className="flex items-start">
              <span className="text-2xl font-bold text-emerald-800 mr-3">5.</span>
              <div>
                <h2 className="text-2xl font-bold text-emerald-800">Contact for Refunds</h2>
                <p className="text-gray-700 leading-relaxed mt-2">
                  For refund queries, please contact eco.peedika.in@gmail.com with your order ID and issue details.
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}