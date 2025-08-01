// Disclaimer.js
export default function Disclaimer() {
  return (
    <div className="min-h-screen bg-emerald-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white shadow-sm rounded-xl overflow-hidden">
        {/* Header */}
        <div className="bg-emerald-800 text-white px-6 py-8 sm:px-10 sm:py-12">
          <h1 className="text-3xl sm:text-4xl font-bold">Disclaimer</h1>
          <p className="mt-2 text-emerald-200">Effective Date: July 11, 2025</p>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-10 space-y-8">
          <section className="space-y-4">
            <p className="text-gray-700 leading-relaxed">
              Eco Peedika is committed to transparency and customer awareness. This disclaimer outlines our responsibility and boundaries regarding the content and products we provide.
            </p>
          </section>

          {/* Section 1 */}
          <section className="space-y-4">
            <div className="flex items-start">
              <span className="text-2xl font-bold text-emerald-800 mr-3">1.</span>
              <div>
                <h2 className="text-2xl font-bold text-emerald-800">Product Suitability</h2>
                <p className="text-gray-700 leading-relaxed mt-2">
                  Our products are eco-conscious alternatives, but individual results may vary. We do not claim that using our products will completely eliminate environmental impact.
                </p>
              </div>
            </div>
          </section>

          {/* Section 2 */}
          <section className="space-y-4">
            <div className="flex items-start">
              <span className="text-2xl font-bold text-emerald-800 mr-3">2.</span>
              <div>
                <h2 className="text-2xl font-bold text-emerald-800">Accuracy of Information</h2>
                <p className="text-gray-700 leading-relaxed mt-2">
                  We strive to ensure all content on our website is accurate, up-to-date, and informative. However, we make no warranties regarding the completeness or reliability of this information.
                </p>
              </div>
            </div>
          </section>

          {/* Section 3 */}
          <section className="space-y-4">
            <div className="flex items-start">
              <span className="text-2xl font-bold text-emerald-800 mr-3">3.</span>
              <div>
                <h2 className="text-2xl font-bold text-emerald-800">Service Interruptions</h2>
                <p className="text-gray-700 leading-relaxed mt-2">
                  Website access may occasionally be suspended or restricted for maintenance, updates, or unforeseen circumstances. We are not responsible for any damages arising from such interruptions.
                </p>
              </div>
            </div>
          </section>

          {/* Section 4 */}
          <section className="space-y-4">
            <div className="flex items-start">
              <span className="text-2xl font-bold text-emerald-800 mr-3">4.</span>
              <div>
                <h2 className="text-2xl font-bold text-emerald-800">External Links</h2>
                <p className="text-gray-700 leading-relaxed mt-2">
                  Our site may contain links to third-party websites. We do not endorse or take responsibility for their content, terms, or privacy practices.
                </p>
              </div>
            </div>
          </section>

          {/* Section 5 */}
          <section className="space-y-4">
            <div className="flex items-start">
              <span className="text-2xl font-bold text-emerald-800 mr-3">5.</span>
              <div>
                <h2 className="text-2xl font-bold text-emerald-800">Legal Compliance</h2>
                <p className="text-gray-700 leading-relaxed mt-2">
                  We operate under Indian law. Users accessing our services from outside India do so on their own initiative and are responsible for compliance with local laws.
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}