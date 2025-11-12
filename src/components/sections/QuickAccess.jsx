/**
 * Quick Access Cards - Patient-First Tools
 * Essential resources for transplant journey
 */

import Card from "../ui/Card";

export default function QuickAccess() {
  const quickActions = [
    {
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
          />
        </svg>
      ),
      title: "Pre-Transplant Checklist",
      description: "Track your preparation steps and required tests",
      color: "brand",
      badge: "Start Here",
    },
    {
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
          />
        </svg>
      ),
      title: "Medication Reminders",
      description: "Never miss a dose with our tracking system",
      color: "accent",
      badge: "Essential",
    },
    {
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
          />
        </svg>
      ),
      title: "Schedule Appointment",
      description: "Book consultations with your care team",
      color: "brand",
      badge: "Quick",
    },
    {
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
      ),
      title: "Support Groups",
      description: "Connect with others on the same journey",
      color: "warm",
      badge: "Community",
    },
  ];

  return (
    <section className="py-12 bg-neutral-50">
      <div className="container">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-sans font-semibold text-neutral-800 mb-3">
            Quick Access Patient Tools
          </h2>
          <p className="text-neutral-600 max-w-2xl mx-auto">
            Essential resources to support you through every step of your
            transplant journey
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {quickActions.map((action, index) => (
            <button
              key={index}
              className="card-float text-left bg-white border border-neutral-200 hover:border-brand-300 transition-all duration-300 group"
            >
              <div
                className={`inline-flex p-3 rounded-xl mb-4 ${
                  action.color === "brand"
                    ? "bg-brand-50 text-brand-600"
                    : action.color === "accent"
                    ? "bg-accent-50 text-accent-600"
                    : "bg-warm-50 text-warm-600"
                }`}
              >
                {action.icon}
              </div>

              <div className="flex items-start justify-between mb-2">
                <h3 className="text-lg font-semibold text-neutral-800 group-hover:text-brand-600 transition-colors">
                  {action.title}
                </h3>
                <span
                  className={`text-xs font-medium px-2 py-1 rounded-full ${
                    action.color === "brand"
                      ? "bg-brand-100 text-brand-700"
                      : action.color === "accent"
                      ? "bg-accent-100 text-accent-700"
                      : "bg-warm-100 text-warm-700"
                  }`}
                >
                  {action.badge}
                </span>
              </div>

              <p className="text-sm text-neutral-600 leading-relaxed">
                {action.description}
              </p>

              <div className="mt-4 flex items-center text-brand-600 font-medium text-sm group-hover:gap-2 transition-all">
                <span>Access Now</span>
                <svg
                  className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
