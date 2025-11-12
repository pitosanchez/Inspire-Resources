/**
 * Patient Testimonials - Real Stories, Real Hope
 * Authentic patient experiences to inspire and inform
 */

export default function Testimonials() {
  const testimonials = [
    {
      name: "Maria G.",
      age: "52, Phoenix AZ",
      role: "Transplant Recipient - 3 years",
      story:
        "I was terrified at first, but the care team walked me through every single step. Today, I'm hiking with my grandkids and living my best life. This transplant gave me a second chance.",
      highlight: "Back to hiking and enjoying life",
      hasVideo: true,
    },
    {
      name: "David L.",
      age: "45, Tucson AZ",
      role: "Living Donor & Recipient Success",
      story:
        "My sister gave me the greatest gift. The support we received as a family made all the difference. We both recovered well and our bond is stronger than ever.",
      highlight: "Family bonds strengthened",
      hasVideo: false,
    },
    {
      name: "Carmen R.",
      age: "38, Mesa AZ",
      role: "Pre-Transplant Journey",
      story:
        "I'm currently waiting for my transplant, and the education and support I've received has made this waiting period so much easier. I know I'm in good hands.",
      highlight: "Feeling prepared and supported",
      hasVideo: false,
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-brand-50 to-accent-50">
      <div className="container">
        <div className="text-center mb-12">
          <div className="inline-block px-4 py-2 bg-accent-500 text-white text-sm font-medium rounded-full mb-4">
            Real Patient Stories
          </div>
          <h2 className="text-3xl md:text-4xl font-serif font-semibold text-neutral-800 mb-4">
            Voices of Hope and Healing
          </h2>
          <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
            Hear from real patients and families who have walked this path
            before you. Their stories offer hope, practical advice, and genuine
            connection.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-12">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="backdrop-blur-lg bg-white/90 border-2 border-white/50 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
            >
              {/* Patient info with photo placeholder */}
              <div className="flex items-start gap-4 mb-6">
                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-brand-200 to-accent-200 rounded-full flex items-center justify-center">
                  <svg
                    className="w-8 h-8 text-brand-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-neutral-800 mb-1">
                    {testimonial.name}
                  </h3>
                  <p className="text-sm text-neutral-600">{testimonial.age}</p>
                  <p className="text-sm text-brand-600 font-medium">
                    {testimonial.role}
                  </p>
                </div>
                {testimonial.hasVideo && (
                  <div className="flex-shrink-0">
                    <div className="bg-accent-100 text-accent-700 p-2 rounded-lg">
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                  </div>
                )}
              </div>

              {/* Quote */}
              <blockquote className="mb-6">
                <p className="text-neutral-700 leading-relaxed italic">
                  "{testimonial.story}"
                </p>
              </blockquote>

              {/* Highlight badge */}
              <div className="inline-flex items-center gap-2 bg-accent-100 text-accent-800 px-4 py-2 rounded-full text-sm font-medium">
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                {testimonial.highlight}
              </div>
            </div>
          ))}
        </div>

        {/* Video Testimonials CTA */}
        <div className="text-center">
          <div className="inline-block backdrop-blur-lg bg-white/90 border-2 border-white/50 rounded-2xl p-8 shadow-xl max-w-2xl">
            <h3 className="text-2xl font-serif font-semibold text-neutral-800 mb-3">
              Watch Full Video Testimonials
            </h3>
            <p className="text-neutral-600 mb-6">
              See complete patient stories with video interviews and detailed
              journeys
            </p>
            <button className="inline-flex items-center gap-2 bg-brand-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-brand-600 transition-all duration-300 hover:shadow-lg hover:scale-105">
              <svg
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              View All Stories
            </button>
          </div>
        </div>

        {/* Consent Notice */}
        <div className="mt-8 text-center">
          <p className="text-sm text-neutral-500 max-w-2xl mx-auto">
            All patient stories shared with written consent. Names may be
            abbreviated to protect privacy. Photos are representative and used
            with permission.
          </p>
        </div>
      </div>
    </section>
  );
}
