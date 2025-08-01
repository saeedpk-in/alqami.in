// PrivacyPolicy.js
export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-emerald-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white shadow-sm rounded-xl overflow-hidden">
        {/* Header */}
        <div className="bg-emerald-800 text-white px-6 py-8 sm:px-10 sm:py-12">
          <h1 className="text-3xl sm:text-4xl font-bold">Privacy Policy</h1>
          <p className="mt-2 text-emerald-200">Effective Date: July 11, 2025</p>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-10 space-y-8">
          <section className="space-y-4">
            <p className="text-gray-700 leading-relaxed">
              Eco Peedika values your privacy and is committed to protecting your personal information. This Privacy Policy outlines how we collect, use, and safeguard your data when you interact with our website.
            </p>
          </section>

          {/* Section 1 */}
          <section className="space-y-4">
            <div className="flex items-start">
              <span className="text-2xl font-bold text-emerald-800 mr-3">1.</span>
              <div>
                <h2 className="text-2xl font-bold text-emerald-800">Information We Collect</h2>
                <p className="text-gray-700 leading-relaxed mt-2">
                  We collect personal details such as name, email address, phone number, and shipping address when you place an order. We may also collect non-personal data through cookies, IP addresses, and browsing behavior for analytics and improvements.
                </p>
              </div>
            </div>
          </section>

          {/* Section 2 */}
          <section className="space-y-4">
            <div className="flex items-start">
              <span className="text-2xl font-bold text-emerald-800 mr-3">2.</span>
              <div>
                <h2 className="text-2xl font-bold text-emerald-800">How We Use Your Information</h2>
                <p className="text-gray-700 leading-relaxed mt-2">
                  We use your data to:
                </p>
                <ul className="mt-3 space-y-2 pl-5 list-disc text-gray-700">
                  <li>Process and deliver orders</li>
                  <li>Communicate order updates</li>
                  <li>Improve our website and services</li>
                  <li>Respond to customer inquiries</li>
                  <li>Comply with legal obligations</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 3 */}
          <section className="space-y-4">
            <div className="flex items-start">
              <span className="text-2xl font-bold text-emerald-800 mr-3">3.</span>
              <div>
                <h2 className="text-2xl font-bold text-emerald-800">Data Sharing</h2>
                <p className="text-gray-700 leading-relaxed mt-2">
                  We do not sell or rent your personal information. We only share it with trusted third parties such as:
                </p>
                <ul className="mt-3 space-y-2 pl-5 list-disc text-gray-700">
                  <li>Courier services (e.g., DTDC) for delivery</li>
                  <li>Razorpay for secure payment processing</li>
                  <li>IT and technical support service providers, under confidentiality agreements</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 4 */}
          <section className="space-y-4">
            <div className="flex items-start">
              <span className="text-2xl font-bold text-emerald-800 mr-3">4.</span>
              <div>
                <h2 className="text-2xl font-bold text-emerald-800">Data Retention</h2>
                <p className="text-gray-700 leading-relaxed mt-2">
                  We retain your personal data for as long as necessary to provide services, comply with legal obligations, resolve disputes, and enforce our policies.
                </p>
              </div>
            </div>
          </section>

          {/* Section 5 */}
          <section className="space-y-4">
            <div className="flex items-start">
              <span className="text-2xl font-bold text-emerald-800 mr-3">5.</span>
              <div>
                <h2 className="text-2xl font-bold text-emerald-800">Data Security</h2>
                <p className="text-gray-700 leading-relaxed mt-2">
                  We use industry-standard security measures to protect your data, including encryption and secure servers. However, no method of transmission over the Internet is 100% secure.
                </p>
              </div>
            </div>
          </section>

          {/* Section 6 */}
          <section className="space-y-4">
            <div className="flex items-start">
              <span className="text-2xl font-bold text-emerald-800 mr-3">6.</span>
              <div>
                <h2 className="text-2xl font-bold text-emerald-800">Cookies and Tracking</h2>
                <p className="text-gray-700 leading-relaxed mt-2">
                  We use cookies to enhance your browsing experience, track preferences, and gather usage statistics. You can disable cookies in your browser settings, though this may affect site functionality.
                </p>
              </div>
            </div>
          </section>

          {/* Section 7 */}
          <section className="space-y-4">
            <div className="flex items-start">
              <span className="text-2xl font-bold text-emerald-800 mr-3">7.</span>
              <div>
                <h2 className="text-2xl font-bold text-emerald-800">Your Rights</h2>
                <p className="text-gray-700 leading-relaxed mt-2">
                  You have the right to request access to your data, correct inaccurate data, or request deletion by contacting us at eco.peedika.in@gmail.com.
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}