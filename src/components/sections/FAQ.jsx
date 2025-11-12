/**
 * FAQ Section - Collapsible Answers to Common Questions
 * Patient-centered, easy-to-understand information
 */

import { useState } from "react";

function FAQItem({ question, answer, isOpen, onClick }) {
  return (
    <div className="border border-neutral-200 rounded-xl overflow-hidden bg-white">
      <button
        onClick={onClick}
        className="w-full text-left p-6 flex items-center justify-between hover:bg-neutral-50 transition-colors duration-200"
        aria-expanded={isOpen}
      >
        <span className="text-lg font-semibold text-neutral-800 pr-8">
          {question}
        </span>
        <svg
          className={`w-6 h-6 text-brand-600 flex-shrink-0 transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-96" : "max-h-0"
        }`}
      >
        <div className="px-6 pb-6 text-neutral-700 leading-relaxed">
          {answer}
        </div>
      </div>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "How long is the kidney transplant waiting list?",
      answer:
        "The waiting time varies significantly based on factors like blood type, tissue match, and geographic location. On average, the wait can range from a few months to several years. Living donor transplants can significantly reduce or eliminate waiting time. Our team will keep you informed about your position and any changes in your status.",
    },
    {
      question: "What medications will I need after a transplant?",
      answer:
        "You'll need immunosuppressive medications (anti-rejection drugs) for the rest of your life to protect your new kidney. These may include tacrolimus, mycophenolate, and prednisone. Our pharmacists work closely with you to understand each medication, manage side effects, and ensure you never miss a dose. We also provide medication assistance programs for those who qualify.",
    },
    {
      question: "Can I work after a kidney transplant?",
      answer:
        "Yes! Most transplant recipients return to work within 2-3 months after surgery. The timeline depends on your specific job requirements and recovery progress. Many patients report having more energy post-transplant than they did during dialysis. Our vocational counselors can help you plan your return to work and address any workplace accommodations you might need.",
    },
    {
      question: "What is a living donor, and how does it work?",
      answer:
        "A living donor is someone who donates one of their two healthy kidneys to you while both are living. Living donors can be family members, friends, or even altruistic strangers. Living donor transplants often have better outcomes and shorter waiting times. Our program includes comprehensive support for both donors and recipients throughout the entire process.",
    },
    {
      question: "How do I know if I'm a candidate for transplant?",
      answer:
        "Candidacy is determined through a comprehensive medical evaluation including blood tests, imaging, and consultations with our transplant team. Generally, you should be healthy enough for surgery and able to take immunosuppressive medications long-term. Age alone is not a barrier—we evaluate each patient individually. Contact us to schedule an initial consultation.",
    },
    {
      question: "What financial assistance is available?",
      answer:
        "Transplant can be expensive, but help is available. Medicare covers kidney transplants, and many private insurances do as well. We have financial counselors who specialize in transplant coverage and can help you navigate insurance, apply for grants, and access medication assistance programs. Don't let financial concerns prevent you from exploring your options.",
    },
    {
      question: "How do I prepare for transplant surgery?",
      answer:
        "Preparation includes maintaining good health, attending all appointments, completing required tests, and following your care team's guidance on diet and medications. We provide a detailed pre-transplant checklist and education sessions. Many patients find it helpful to prepare their home for recovery and arrange for help during the first few weeks post-surgery.",
    },
    {
      question: "What lifestyle changes will I need to make?",
      answer:
        "After transplant, you'll need to take medications daily, attend regular follow-up appointments, maintain a healthy diet, stay hydrated, exercise regularly, and avoid infections. You'll need to be cautious about certain foods and activities initially, but many restrictions ease over time. Our dietitians and lifestyle counselors provide personalized guidance throughout your journey.",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-neutral-50">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-semibold text-neutral-800 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
            Clear answers to common questions about kidney transplantation.
            Don't see your question? Contact us directly—we're here to help.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
            />
          ))}
        </div>

        {/* Contact CTA */}
        <div className="mt-12 text-center">
          <div className="inline-block backdrop-blur-lg bg-white border-2 border-brand-200 rounded-2xl p-8 shadow-lg max-w-2xl">
            <h3 className="text-xl font-semibold text-neutral-800 mb-3">
              Still Have Questions?
            </h3>
            <p className="text-neutral-600 mb-6">
              Our patient advocates are available to answer your questions and
              address your concerns
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+15551234567"
                className="inline-flex items-center justify-center gap-2 bg-brand-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-brand-600 transition-all duration-300 hover:shadow-lg"
              >
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
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                Call Us: (555) 123-4567
              </a>
              <a
                href="mailto:transplant@inspire.org"
                className="inline-flex items-center justify-center gap-2 bg-white text-brand-600 border-2 border-brand-500 px-6 py-3 rounded-lg font-semibold hover:bg-brand-50 transition-all duration-300"
              >
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
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                Email Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
