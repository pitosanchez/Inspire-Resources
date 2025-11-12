/**
 * Care Team Section - Meet Your Medical Professionals
 * Building trust through transparency
 */

export default function CareTeam() {
  const teamMembers = [
    {
      name: "Dr. Sarah Martinez",
      role: "Transplant Surgeon",
      specialty: "Kidney Transplantation",
      credentials: "MD, FACS",
      quote:
        "Every patient's journey is unique. Our team is committed to providing personalized care at every step.",
      contact: "Direct Line: (555) 123-4567",
    },
    {
      name: "Dr. James Chen",
      role: "Nephrologist",
      specialty: "Pre & Post-Transplant Care",
      credentials: "MD, PhD",
      quote:
        "Understanding your medications and lifestyle changes is crucial for long-term success.",
      contact: "Office: (555) 123-4568",
    },
    {
      name: "Maria Rodriguez, RN",
      role: "Transplant Coordinator",
      specialty: "Patient Navigation",
      credentials: "BSN, CCTC",
      quote:
        "I'm here to guide you through every appointment, test, and question you may have.",
      contact: "Direct: (555) 123-4569",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-semibold text-neutral-800 mb-4">
            Your Transplant Care Team
          </h2>
          <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
            Meet the dedicated professionals who will support you throughout
            your transplant journey. We're here for you every step of the way.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="card-float bg-white border border-neutral-200"
            >
              {/* Photo placeholder - would be real photos */}
              <div className="aspect-[4/5] bg-gradient-to-br from-brand-100 to-brand-200 rounded-xl mb-4 flex items-center justify-center overflow-hidden">
                <div className="text-center p-6">
                  <div className="w-24 h-24 mx-auto mb-4 bg-white rounded-full flex items-center justify-center">
                    <svg
                      className="w-12 h-12 text-brand-600"
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
                  <p className="text-sm text-brand-700 font-medium">
                    Professional Photo
                  </p>
                </div>
              </div>

              <div className="space-y-3">
                <div>
                  <h3 className="text-xl font-semibold text-neutral-800 mb-1">
                    {member.name}
                  </h3>
                  <p className="text-brand-600 font-medium">{member.role}</p>
                  <p className="text-sm text-neutral-600">
                    {member.credentials}
                  </p>
                </div>

                <div className="bg-neutral-50 rounded-lg p-4 border-l-4 border-brand-500">
                  <p className="text-sm text-neutral-700 italic leading-relaxed">
                    "{member.quote}"
                  </p>
                </div>

                <div className="space-y-2">
                  <p className="text-sm font-semibold text-neutral-800">
                    {member.specialty}
                  </p>
                  <div className="flex items-center gap-2 text-sm text-brand-600">
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                    <a
                      href={`tel:${member.contact.replace(/\D/g, "")}`}
                      className="hover:text-brand-700 font-medium"
                    >
                      {member.contact}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-12 pt-12 border-t border-neutral-200">
          <div className="flex flex-wrap items-center justify-center gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-brand-600 mb-1">500+</div>
              <p className="text-sm text-neutral-600">Successful Transplants</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent-600 mb-1">98%</div>
              <p className="text-sm text-neutral-600">Patient Satisfaction</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-brand-600 mb-1">24/7</div>
              <p className="text-sm text-neutral-600">Support Available</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent-600 mb-1">15+</div>
              <p className="text-sm text-neutral-600">Years Experience</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
