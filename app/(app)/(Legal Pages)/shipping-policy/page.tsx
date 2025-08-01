// ShippingPolicy.js
export default function ShippingPolicy() {
  return (
    <div className="min-h-screen bg-emerald-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white shadow-sm rounded-xl overflow-hidden">
        {/* Header */}
        <div className="bg-emerald-800 text-white px-6 py-8 sm:px-10 sm:py-12">
          <h1 className="text-3xl sm:text-4xl font-bold">Shipping and Delivery Policy</h1>
          <p className="mt-2 text-emerald-200">Effective Date: July 11, 2025</p>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-10 space-y-8">
          <section className="space-y-4">
            <p className="text-gray-700 leading-relaxed">
              Eco Peedika is committed to timely and safe delivery of your sustainable goods across India through our trusted courier partner, DTDC.
            </p>
          </section>

          {/* Section 1 */}
          <section className="space-y-4">
            <div className="flex items-start">
              <span className="text-2xl font-bold text-emerald-800 mr-3">1.</span>
              <div>
                <h2 className="text-2xl font-bold text-emerald-800">Processing and Dispatch Time</h2>
                <p className="text-gray-700 leading-relaxed mt-2">
                  Orders are processed within 1–2 business days. You will receive an email or WhatsApp message with tracking information once your order has shipped.
                </p>
              </div>
            </div>
          </section>

          {/* Section 2 */}
          <section className="space-y-4">
            <div className="flex items-start">
              <span className="text-2xl font-bold text-emerald-800 mr-3">2.</span>
              <div>
                <h2 className="text-2xl font-bold text-emerald-800">Delivery Timeframe</h2>
                <p className="text-gray-700 leading-relaxed mt-2">
                  Standard delivery typically takes 3–5 working days depending on your location. Remote or rural areas may require additional time.
                </p>
              </div>
            </div>
          </section>

          {/* Section 3 */}
          <section className="space-y-4">
            <div className="flex items-start">
              <span className="text-2xl font-bold text-emerald-800 mr-3">3.</span>
              <div>
                <h2 className="text-2xl font-bold text-emerald-800">Shipping Charges</h2>
                <p className="text-gray-700 leading-relaxed mt-2">
                  Shipping costs are calculated at checkout and vary based on order weight and destination. We occasionally offer free shipping promotions.
                </p>
              </div>
            </div>
          </section>

          {/* Section 4 */}
          <section className="space-y-4">
            <div className="flex items-start">
              <span className="text-2xl font-bold text-emerald-800 mr-3">4.</span>
              <div>
                <h2 className="text-2xl font-bold text-emerald-800">Packaging</h2>
                <p className="text-gray-700 leading-relaxed mt-2">
                  We use eco-conscious packaging wherever possible, such as paper wraps, jute cords, and recyclable boxes.
                </p>
              </div>
            </div>
          </section>

          {/* Section 5 */}
          <section className="space-y-4">
            <div className="flex items-start">
              <span className="text-2xl font-bold text-emerald-800 mr-3">5.</span>
              <div>
                <h2 className="text-2xl font-bold text-emerald-800">Delivery Areas</h2>
                <p className="text-gray-700 leading-relaxed mt-2">
                  We currently ship to all deliverable PIN codes in India. International shipping is not available at this time.
                </p>
              </div>
            </div>
          </section>

          {/* Section 6 */}
          <section className="space-y-4">
            <div className="flex items-start">
              <span className="text-2xl font-bold text-emerald-800 mr-3">6.</span>
              <div>
                <h2 className="text-2xl font-bold text-emerald-800">Delay and Non-Delivery</h2>
                <p className="text-gray-700 leading-relaxed mt-2">
                  Delays may occur due to weather, festivals, or logistics issues. In rare cases of non-delivery, we will assist you in coordinating with the courier service.
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}