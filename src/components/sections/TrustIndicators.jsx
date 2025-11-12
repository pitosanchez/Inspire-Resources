/**
 * Trust Indicators & Accreditations
 * Building confidence through transparency and credentials
 */

export default function TrustIndicators() {
  const accreditations = [
    {
      name: "UNOS Member",
      description: "United Network for Organ Sharing",
      icon: "🏥",
    },
    {
      name: "Joint Commission",
      description: "Gold Seal of Approval",
      icon: "⭐",
    },
    {
      name: "HIPAA Compliant",
      description: "Your Privacy Protected",
      icon: "🔒",
    },
    {
      name: "ACS Verified",
      description: "American College of Surgeons",
      icon: "✓",
    },
  ];

  return (
    <section className="py-12 bg-white border-y border-neutral-200">
      <div className="container">
        <div className="text-center mb-8">
          <h3 className="text-xl font-semibold text-neutral-800 mb-2">
            Trusted & Accredited Care
          </h3>
          <p className="text-sm text-neutral-600">
            Our program maintains the highest standards in transplant care
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {accreditations.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-6 bg-neutral-50 rounded-xl border border-neutral-200 hover:border-brand-300 transition-all duration-300"
            >
              <div className="text-4xl mb-3">{item.icon}</div>
              <h4 className="font-semibold text-neutral-800 mb-1">
                {item.name}
              </h4>
              <p className="text-xs text-neutral-600">{item.description}</p>
            </div>
          ))}
        </div>

        {/* Additional Trust Elements */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="flex items-start gap-3 p-4 bg-accent-50 rounded-lg border border-accent-200">
            <svg
              className="w-6 h-6 text-accent-600 flex-shrink-0 mt-0.5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
              />
            </svg>
            <div>
              <h4 className="font-semibold text-neutral-800 text-sm mb-1">
                SSL Secured
              </h4>
              <p className="text-xs text-neutral-600">
                Your data is encrypted and protected
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3 p-4 bg-brand-50 rounded-lg border border-brand-200">
            <svg
              className="w-6 h-6 text-brand-600 flex-shrink-0 mt-0.5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
            <div>
              <h4 className="font-semibold text-neutral-800 text-sm mb-1">
                HIPAA Compliant
              </h4>
              <p className="text-xs text-neutral-600">
                Full privacy policy available
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3 p-4 bg-warm-50 rounded-lg border border-warm-200">
            <svg
              className="w-6 h-6 text-warm-600 flex-shrink-0 mt-0.5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <div>
              <h4 className="font-semibold text-neutral-800 text-sm mb-1">
                Last Updated
              </h4>
              <p className="text-xs text-neutral-600">
                {new Date().toLocaleDateString("en-US", {
                  month: "long",
                  year: "numeric",
                })}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
