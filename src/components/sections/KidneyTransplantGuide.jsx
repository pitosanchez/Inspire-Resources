import { useState } from "react";
import Card, { CardContent, CardHeader, CardTitle } from "../ui/Card";
import Button from "../ui/Button";
import Badge from "../ui/Badge";

export default function KidneyTransplantGuide() {
  const [activeStep, setActiveStep] = useState(0);
  const [openAccordion, setOpenAccordion] = useState(null);
  const [quizAnswers, setQuizAnswers] = useState({});

  const roadmapSteps = [
    {
      number: 1,
      title: "Talk with Your Doctor",
      icon: "💬",
      description:
        "Start the conversation when your eGFR is 25-35. Ask about referral options when your eGFR is 30 or less.",
      action: "Schedule a conversation with your nephrologist",
    },
    {
      number: 2,
      title: "Get Referred",
      icon: "📋",
      description:
        "Your nephrologist or dialysis social worker will refer you to a transplant center, or you can call one yourself.",
      action: "Contact transplant center for evaluation",
    },
    {
      number: 3,
      title: "Complete Evaluation",
      icon: "🏥",
      description:
        "Meet with the transplant team for tests and screenings. This typically takes about 3 months or less.",
      action: "Attend evaluation appointments",
    },
    {
      number: 4,
      title: "Join the Waitlist",
      icon: "⏳",
      description:
        "Average wait time is 3-5 years for deceased donor, or 3-6 months with a living donor.",
      action: "Stay healthy and keep contact info updated",
    },
    {
      number: 5,
      title: "Transplant Surgery",
      icon: "⚕️",
      description:
        "Surgery takes 3-4 hours. You'll stay in the hospital for 3-5 days after surgery.",
      action: "Prepare mentally and physically",
    },
    {
      number: 6,
      title: "Recovery",
      icon: "🌟",
      description:
        "Most people fully recover after 3 months. You'll meet with your team regularly for the first 6 weeks.",
      action: "Follow post-transplant care plan",
    },
  ];

  const benefits = [
    {
      icon: "💪",
      title: "Live Longer",
      description: "80% survival rate after 5 years vs 40% on dialysis",
    },
    {
      icon: "✨",
      title: "Better Quality of Life",
      description: "No more dialysis, fewer restrictions, more energy",
    },
    {
      icon: "🍽️",
      title: "Fewer Diet Limits",
      description: "More freedom with food and drink choices",
    },
    {
      icon: "✈️",
      title: "Travel Easier",
      description: "Work and travel without dialysis constraints",
    },
  ];

  const eligibilityFactors = [
    {
      category: "Medical Health",
      icon: "🏥",
      items: [
        "Cancer-free (or cleared by oncologist)",
        "No active infections",
        "Heart/lung/circulation health",
        "Controlled chronic conditions",
      ],
    },
    {
      category: "Lifestyle",
      icon: "🚭",
      items: [
        "No current substance use disorder",
        "Healthy BMI (varies by center)",
        "Compliance with medical care",
        "Non-smoker",
      ],
    },
    {
      category: "Support System",
      icon: "👥",
      items: [
        "Reliable caregiver available",
        "Transportation to appointments",
        "Stable housing",
        "Updated contact information",
      ],
    },
    {
      category: "Financial",
      icon: "💳",
      items: [
        "Health insurance coverage",
        "Ability to afford medications",
        "Financial coordinator assistance",
        "Access to support resources",
      ],
    },
  ];

  const myths = [
    {
      myth: "A transplant is a cure for kidney failure",
      fact: "A transplant is a treatment option, not a cure. You may need medications for life and possibly future transplants.",
    },
    {
      myth: "I can only get a transplant after starting dialysis",
      fact: "The best time is actually BEFORE dialysis (preemptive transplant) when your eGFR is 20 or below.",
    },
    {
      myth: "All transplant centers are the same",
      fact: "Centers have different eligibility requirements, acceptance criteria, and processes. Shop around!",
    },
    {
      myth: "It's very hard to qualify for a kidney transplant",
      fact: "Actually, most people who apply for a kidney transplant are accepted onto the waitlist.",
    },
    {
      myth: "My living donor must be a family member",
      fact: "Donors can be friends, coworkers, or even altruistic strangers. Race and ethnicity don't affect matching.",
    },
  ];

  const quizQuestions = [
    {
      question: "What is the average wait time for a deceased donor kidney?",
      options: ["1-2 years", "3-5 years", "7-10 years", "6 months"],
      correct: 1,
    },
    {
      question:
        "When should you start talking to your doctor about a transplant?",
      options: [
        "When eGFR is 90",
        "When eGFR is 25-35",
        "Only after starting dialysis",
        "When eGFR is 10",
      ],
      correct: 1,
    },
    {
      question: "How long do living donor kidneys typically last?",
      options: ["5-10 years", "10-15 years", "15-20 years", "20-25 years"],
      correct: 2,
    },
  ];

  const toggleAccordion = (index) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

  const handleQuizAnswer = (questionIndex, answerIndex) => {
    setQuizAnswers({ ...quizAnswers, [questionIndex]: answerIndex });
  };

  return (
    <section
      id="transplant-guide"
      className="py-20 bg-gradient-to-br from-neutral-50 via-white to-brand-50"
    >
      <div className="container mx-auto px-6">
        {/* Hero Header */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-100 text-brand-700 text-sm font-medium rounded-full mb-4">
            <span>📖</span>
            <span>Your Complete Guide</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-neutral-900 mb-6">
            Kidney Transplant Guide
          </h1>
          <p className="text-xl text-neutral-600 leading-relaxed mb-8">
            Everything you need to know about kidney transplants — from
            evaluation to recovery. This guide empowers you to navigate your
            transplant journey with confidence.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button
              href="#roadmap"
              size="lg"
              className="bg-brand-500 text-white hover:bg-brand-600"
            >
              Start Your Journey
            </Button>
            <Button href="#quiz" variant="secondary" size="lg">
              Test Your Knowledge
            </Button>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-6xl mx-auto mb-20">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="card-float text-center bg-gradient-to-br from-white to-brand-50"
              style={{
                animation: `float ${3 + index * 0.3}s ease-in-out infinite`,
                animationDelay: `${index * 0.1}s`,
              }}
            >
              <div className="text-5xl mb-3">{benefit.icon}</div>
              <h3 className="text-lg font-semibold text-neutral-900 mb-2">
                {benefit.title}
              </h3>
              <p className="text-sm text-neutral-600">{benefit.description}</p>
            </div>
          ))}
        </div>

        {/* Interactive Roadmap */}
        <div id="roadmap" className="max-w-6xl mx-auto mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif text-neutral-900 mb-4">
              Your Transplant Roadmap
            </h2>
            <p className="text-lg text-neutral-600">
              6 steps from consultation to recovery
            </p>
          </div>

          {/* Progress Bar */}
          <div className="relative mb-12">
            <div className="absolute top-1/2 left-0 right-0 h-2 bg-neutral-200 rounded-full -translate-y-1/2" />
            <div
              className="absolute top-1/2 left-0 h-2 bg-brand-500 rounded-full -translate-y-1/2 transition-all duration-500"
              style={{
                width: `${(activeStep / (roadmapSteps.length - 1)) * 100}%`,
              }}
            />
            <div className="relative flex justify-between">
              {roadmapSteps.map((step, index) => (
                <button
                  key={index}
                  onClick={() => setActiveStep(index)}
                  className={`w-12 h-12 rounded-full flex items-center justify-center text-2xl transition-all duration-300 ${
                    index <= activeStep
                      ? "bg-brand-500 text-white shadow-lg scale-110"
                      : "bg-white text-neutral-400 border-2 border-neutral-300"
                  }`}
                >
                  {step.icon}
                </button>
              ))}
            </div>
          </div>

          {/* Active Step Details */}
          <Card
            variant="elevated"
            className="p-8 bg-gradient-to-br from-white to-brand-50"
          >
            <div className="flex items-start gap-6">
              <div className="flex-shrink-0 w-20 h-20 bg-brand-500 text-white rounded-2xl flex items-center justify-center text-4xl shadow-lg">
                {roadmapSteps[activeStep].icon}
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-3">
                  <Badge variant="brand" size="lg">
                    Step {roadmapSteps[activeStep].number}
                  </Badge>
                  <h3 className="text-2xl font-serif text-neutral-900">
                    {roadmapSteps[activeStep].title}
                  </h3>
                </div>
                <p className="text-lg text-neutral-700 mb-4">
                  {roadmapSteps[activeStep].description}
                </p>
                <div className="flex items-center gap-2 text-brand-600 font-semibold">
                  <span>✓</span>
                  <span>{roadmapSteps[activeStep].action}</span>
                </div>
              </div>
            </div>
            <div className="flex gap-3 mt-6">
              <Button
                onClick={() => setActiveStep(Math.max(0, activeStep - 1))}
                disabled={activeStep === 0}
                variant="outline"
                size="sm"
              >
                ← Previous
              </Button>
              <Button
                onClick={() =>
                  setActiveStep(
                    Math.min(roadmapSteps.length - 1, activeStep + 1)
                  )
                }
                disabled={activeStep === roadmapSteps.length - 1}
                size="sm"
              >
                Next →
              </Button>
            </div>
          </Card>
        </div>

        {/* Eligibility Requirements */}
        <div className="max-w-6xl mx-auto mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif text-neutral-900 mb-4">
              Am I Eligible?
            </h2>
            <p className="text-lg text-neutral-600">
              Most people who apply are accepted! Here's what transplant centers
              look for:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {eligibilityFactors.map((factor, index) => (
              <Card
                key={index}
                variant="elevated"
                className="p-6 bg-gradient-to-br from-white to-accent-50 hover:shadow-2xl transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="text-4xl">{factor.icon}</div>
                  <h3 className="text-xl font-semibold text-neutral-900">
                    {factor.category}
                  </h3>
                </div>
                <ul className="space-y-2">
                  {factor.items.map((item, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-neutral-700"
                    >
                      <span className="text-brand-500 mt-1">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>

          <Card variant="brand" className="mt-8 p-6 text-center">
            <p className="text-lg text-brand-900 font-semibold mb-2">
              💙 Don't meet all requirements? Don't give up!
            </p>
            <p className="text-brand-800">
              Many factors can be improved (like weight, quitting smoking, or
              getting infections treated). Every transplant center has different
              criteria — you might be accepted at another center.
            </p>
          </Card>
        </div>

        {/* Living Donor Information */}
        <div className="max-w-6xl mx-auto mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif text-neutral-900 mb-4">
              Living Donor Benefits
            </h2>
            <p className="text-lg text-neutral-600">
              Living donor kidneys last 15-20 years on average (vs 10-15 for
              deceased donors)
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card variant="accent" className="p-6 text-center">
              <div className="text-5xl mb-4">⚡</div>
              <h3 className="text-xl font-semibold text-accent-900 mb-2">
                Faster Process
              </h3>
              <p className="text-accent-800">
                3-6 months vs 3-5 years wait time
              </p>
            </Card>
            <Card variant="warm" className="p-6 text-center">
              <div className="text-5xl mb-4">💪</div>
              <h3 className="text-xl font-semibold text-warm-900 mb-2">
                Better Outcomes
              </h3>
              <p className="text-warm-800">
                Higher success rates and kidney longevity
              </p>
            </Card>
            <Card variant="brand" className="p-6 text-center">
              <div className="text-5xl mb-4">🎯</div>
              <h3 className="text-xl font-semibold text-brand-900 mb-2">
                Scheduled Surgery
              </h3>
              <p className="text-brand-800">
                Plan ahead instead of waiting for "the call"
              </p>
            </Card>
          </div>

          <Card
            variant="elevated"
            className="mt-8 p-8 bg-gradient-to-br from-accent-50 to-white"
          >
            <h3 className="text-2xl font-serif text-neutral-900 mb-4">
              Types of Living Donation
            </h3>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-accent-500 text-white rounded-xl flex items-center justify-center font-bold">
                  1
                </div>
                <div>
                  <h4 className="font-semibold text-neutral-900 mb-1">
                    Directed Donation
                  </h4>
                  <p className="text-neutral-700">
                    From someone you know (family, friend, coworker)
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-accent-500 text-white rounded-xl flex items-center justify-center font-bold">
                  2
                </div>
                <div>
                  <h4 className="font-semibold text-neutral-900 mb-1">
                    Paired Exchange (Kidney Swap)
                  </h4>
                  <p className="text-neutral-700">
                    When your donor isn't a match, swap with another pair
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-accent-500 text-white rounded-xl flex items-center justify-center font-bold">
                  3
                </div>
                <div>
                  <h4 className="font-semibold text-neutral-900 mb-1">
                    Altruistic Donation
                  </h4>
                  <p className="text-neutral-700">
                    From a stranger who wants to help anyone in need
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Myths & Facts Accordion */}
        <div className="max-w-4xl mx-auto mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif text-neutral-900 mb-4">
              Myths vs Facts
            </h2>
            <p className="text-lg text-neutral-600">
              Let's clear up common misconceptions
            </p>
          </div>

          <div className="space-y-4">
            {myths.map((item, index) => (
              <Card
                key={index}
                variant="elevated"
                className="overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-xl"
                onClick={() => toggleAccordion(index)}
              >
                <div className="p-6">
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-4 flex-1">
                      <Badge variant="destructive" size="lg">
                        MYTH
                      </Badge>
                      <p className="font-semibold text-neutral-900">
                        {item.myth}
                      </p>
                    </div>
                    <svg
                      className={`w-6 h-6 text-neutral-400 transition-transform duration-300 ${
                        openAccordion === index ? "rotate-180" : ""
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>

                  {openAccordion === index && (
                    <div className="mt-4 pt-4 border-t border-neutral-200 animate-fade-in">
                      <div className="flex items-start gap-4">
                        <Badge variant="success" size="lg">
                          FACT
                        </Badge>
                        <p className="text-neutral-700 flex-1">{item.fact}</p>
                      </div>
                    </div>
                  )}
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Interactive Quiz */}
        <div id="quiz" className="max-w-4xl mx-auto mb-20">
          <Card
            variant="elevated"
            className="p-8 bg-gradient-to-br from-brand-50 to-accent-50"
          >
            <div className="text-center mb-8">
              <div className="text-5xl mb-4">🧠</div>
              <h2 className="text-3xl font-serif text-neutral-900 mb-4">
                Test Your Knowledge
              </h2>
              <p className="text-lg text-neutral-600">
                See how much you've learned!
              </p>
            </div>

            <div className="space-y-8">
              {quizQuestions.map((q, qIndex) => (
                <div
                  key={qIndex}
                  className="bg-white rounded-2xl p-6 shadow-md"
                >
                  <p className="font-semibold text-neutral-900 mb-4">
                    {qIndex + 1}. {q.question}
                  </p>
                  <div className="space-y-3">
                    {q.options.map((option, oIndex) => {
                      const isSelected = quizAnswers[qIndex] === oIndex;
                      const isCorrect = q.correct === oIndex;
                      const showResult = quizAnswers[qIndex] !== undefined;

                      return (
                        <button
                          key={oIndex}
                          onClick={() => handleQuizAnswer(qIndex, oIndex)}
                          disabled={showResult}
                          className={`w-full text-left p-4 rounded-xl border-2 transition-all duration-300 ${
                            showResult && isCorrect
                              ? "bg-green-50 border-green-500 text-green-900"
                              : showResult && isSelected && !isCorrect
                              ? "bg-red-50 border-red-500 text-red-900"
                              : isSelected
                              ? "bg-brand-50 border-brand-500"
                              : "bg-white border-neutral-300 hover:border-brand-400"
                          }`}
                        >
                          <div className="flex items-center gap-3">
                            <div
                              className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                                showResult && isCorrect
                                  ? "border-green-500 bg-green-500 text-white"
                                  : showResult && isSelected && !isCorrect
                                  ? "border-red-500 bg-red-500 text-white"
                                  : isSelected
                                  ? "border-brand-500 bg-brand-500 text-white"
                                  : "border-neutral-300"
                              }`}
                            >
                              {showResult && isCorrect && "✓"}
                              {showResult && isSelected && !isCorrect && "✗"}
                            </div>
                            <span>{option}</span>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>

            {Object.keys(quizAnswers).length === quizQuestions.length && (
              <div className="mt-8 text-center animate-fade-in">
                <Card variant="brand" className="p-6">
                  <div className="text-4xl mb-3">
                    {Object.values(quizAnswers).filter(
                      (answer, index) => answer === quizQuestions[index].correct
                    ).length === quizQuestions.length
                      ? "🎉"
                      : "💪"}
                  </div>
                  <p className="text-xl font-semibold text-brand-900 mb-2">
                    You scored{" "}
                    {
                      Object.values(quizAnswers).filter(
                        (answer, index) =>
                          answer === quizQuestions[index].correct
                      ).length
                    }{" "}
                    out of {quizQuestions.length}!
                  </p>
                  <Button
                    onClick={() => setQuizAnswers({})}
                    variant="primary"
                    size="sm"
                    className="mt-4 bg-white text-brand-600 hover:bg-neutral-50"
                  >
                    Try Again
                  </Button>
                </Card>
              </div>
            )}
          </Card>
        </div>

        {/* Call to Action */}
        <div className="max-w-4xl mx-auto">
          <Card
            variant="elevated"
            className="p-8 md:p-12 text-center bg-gradient-to-br from-brand-500 to-brand-600 text-white"
          >
            <div className="text-5xl mb-4">🌟</div>
            <h2 className="text-3xl md:text-4xl font-serif mb-4">
              Ready to Start Your Journey?
            </h2>
            <p className="text-xl mb-8 opacity-95">
              Talk to your doctor about kidney transplant options. You deserve a
              chance at a healthier, fuller life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                href="#resources"
                size="lg"
                className="bg-white text-brand-600 hover:bg-neutral-50 shadow-xl hover:shadow-2xl font-semibold"
              >
                Find Resources
              </Button>
              <Button
                href="https://optn.transplant.hrsa.gov/members/member-directory/"
                target="_blank"
                rel="noopener noreferrer"
                variant="ghost"
                size="lg"
                className="bg-transparent backdrop-blur-md text-white border-2 border-white hover:bg-white/20 font-semibold"
              >
                Find a Transplant Center
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
