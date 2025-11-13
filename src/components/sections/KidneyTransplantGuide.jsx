import { useState } from "react";
import { useLanguage } from "../../utils/LanguageContext";
import Card, { CardContent, CardHeader, CardTitle } from "../ui/Card";
import Button from "../ui/Button";
import Badge from "../ui/Badge";

export default function KidneyTransplantGuide() {
  const { t } = useLanguage();
  const [activeStep, setActiveStep] = useState(0);
  const [openAccordion, setOpenAccordion] = useState(null);
  const [quizAnswers, setQuizAnswers] = useState({});

  const roadmapSteps = [
    {
      number: 1,
      title: t("roadmap.step1.title"),
      icon: "💬",
      description: t("roadmap.step1.desc"),
      action: t("roadmap.step1.action"),
    },
    {
      number: 2,
      title: t("roadmap.step2.title"),
      icon: "📋",
      description: t("roadmap.step2.desc"),
      action: t("roadmap.step2.action"),
    },
    {
      number: 3,
      title: t("roadmap.step3.title"),
      icon: "🏥",
      description: t("roadmap.step3.desc"),
      action: t("roadmap.step3.action"),
    },
    {
      number: 4,
      title: t("roadmap.step4.title"),
      icon: "⏳",
      description: t("roadmap.step4.desc"),
      action: t("roadmap.step4.action"),
    },
    {
      number: 5,
      title: t("roadmap.step5.title"),
      icon: "⚕️",
      description: t("roadmap.step5.desc"),
      action: t("roadmap.step5.action"),
    },
    {
      number: 6,
      title: t("roadmap.step6.title"),
      icon: "🌟",
      description: t("roadmap.step6.desc"),
      action: t("roadmap.step6.action"),
    },
  ];

  const benefits = [
    {
      icon: "💪",
      title: t("benefits.longer"),
      description: t("benefits.longer.desc"),
    },
    {
      icon: "✨",
      title: t("benefits.quality"),
      description: t("benefits.quality.desc"),
    },
    {
      icon: "🍽️",
      title: t("benefits.diet"),
      description: t("benefits.diet.desc"),
    },
    {
      icon: "✈️",
      title: t("benefits.travel"),
      description: t("benefits.travel.desc"),
    },
  ];

  const eligibilityFactors = [
    {
      category: t("eligibility.medical"),
      icon: "🏥",
      items: [
        t("eligibility.medical.1"),
        t("eligibility.medical.2"),
        t("eligibility.medical.3"),
        t("eligibility.medical.4"),
      ],
    },
    {
      category: t("eligibility.lifestyle"),
      icon: "🚭",
      items: [
        t("eligibility.lifestyle.1"),
        t("eligibility.lifestyle.2"),
        t("eligibility.lifestyle.3"),
        t("eligibility.lifestyle.4"),
      ],
    },
    {
      category: t("eligibility.support"),
      icon: "👥",
      items: [
        t("eligibility.support.1"),
        t("eligibility.support.2"),
        t("eligibility.support.3"),
        t("eligibility.support.4"),
      ],
    },
    {
      category: t("eligibility.financial"),
      icon: "💳",
      items: [
        t("eligibility.financial.1"),
        t("eligibility.financial.2"),
        t("eligibility.financial.3"),
        t("eligibility.financial.4"),
      ],
    },
  ];

  const myths = [
    {
      myth: t("myth1"),
      fact: t("fact1"),
    },
    {
      myth: t("myth2"),
      fact: t("fact2"),
    },
    {
      myth: t("myth3"),
      fact: t("fact3"),
    },
    {
      myth: t("myth4"),
      fact: t("fact4"),
    },
    {
      myth: t("myth5"),
      fact: t("fact5"),
    },
  ];

  const quizQuestions = [
    {
      question: t("quiz.q1"),
      options: [t("quiz.q1.a"), t("quiz.q1.b"), t("quiz.q1.c"), t("quiz.q1.d")],
      correct: 1,
    },
    {
      question: t("quiz.q2"),
      options: [t("quiz.q2.a"), t("quiz.q2.b"), t("quiz.q2.c"), t("quiz.q2.d")],
      correct: 1,
    },
    {
      question: t("quiz.q3"),
      options: [t("quiz.q3.a"), t("quiz.q3.b"), t("quiz.q3.c"), t("quiz.q3.d")],
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
            <span>{t("guide.label")}</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-neutral-900 mb-6">
            {t("guide.title")}
          </h1>
          <p className="text-xl text-neutral-600 leading-relaxed mb-8">
            {t("guide.intro")}
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button
              href="#roadmap"
              size="lg"
              className="bg-brand-500 text-white hover:bg-brand-600"
            >
              {t("guide.cta.start")}
            </Button>
            <Button href="#quiz" variant="secondary" size="lg">
              {t("guide.cta.quiz")}
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
              {t("roadmap.title")}
            </h2>
            <p className="text-lg text-neutral-600">
              {t("roadmap.subtitle")}
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
                {t("roadmap.previous")}
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
                {t("roadmap.next")}
              </Button>
            </div>
          </Card>
        </div>

        {/* Eligibility Requirements */}
        <div className="max-w-6xl mx-auto mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif text-neutral-900 mb-4">
              {t("eligibility.title")}
            </h2>
            <p className="text-lg text-neutral-600">
              {t("eligibility.intro")}
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
              {t("eligibility.note")}
            </p>
            <p className="text-brand-800">
              {t("eligibility.note.desc")}
            </p>
          </Card>
        </div>

        {/* Living Donor Information */}
        <div className="max-w-6xl mx-auto mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif text-neutral-900 mb-4">
              {t("donor.title")}
            </h2>
            <p className="text-lg text-neutral-600">
              {t("donor.intro")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card variant="accent" className="p-6 text-center">
              <div className="text-5xl mb-4">⚡</div>
              <h3 className="text-xl font-semibold text-accent-900 mb-2">
                {t("donor.faster")}
              </h3>
              <p className="text-accent-800">
                {t("donor.faster.desc")}
              </p>
            </Card>
            <Card variant="warm" className="p-6 text-center">
              <div className="text-5xl mb-4">💪</div>
              <h3 className="text-xl font-semibold text-warm-900 mb-2">
                {t("donor.outcomes")}
              </h3>
              <p className="text-warm-800">
                {t("donor.outcomes.desc")}
              </p>
            </Card>
            <Card variant="brand" className="p-6 text-center">
              <div className="text-5xl mb-4">🎯</div>
              <h3 className="text-xl font-semibold text-brand-900 mb-2">
                {t("donor.scheduled")}
              </h3>
              <p className="text-brand-800">
                {t("donor.scheduled.desc")}
              </p>
            </Card>
          </div>

          <Card
            variant="elevated"
            className="mt-8 p-8 bg-gradient-to-br from-accent-50 to-white"
          >
            <h3 className="text-2xl font-serif text-neutral-900 mb-4">
              {t("donor.types")}
            </h3>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-accent-500 text-white rounded-xl flex items-center justify-center font-bold">
                  1
                </div>
                <div>
                  <h4 className="font-semibold text-neutral-900 mb-1">
                    {t("donor.directed")}
                  </h4>
                  <p className="text-neutral-700">
                    {t("donor.directed.desc")}
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-accent-500 text-white rounded-xl flex items-center justify-center font-bold">
                  2
                </div>
                <div>
                  <h4 className="font-semibold text-neutral-900 mb-1">
                    {t("donor.paired")}
                  </h4>
                  <p className="text-neutral-700">
                    {t("donor.paired.desc")}
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-accent-500 text-white rounded-xl flex items-center justify-center font-bold">
                  3
                </div>
                <div>
                  <h4 className="font-semibold text-neutral-900 mb-1">
                    {t("donor.altruistic")}
                  </h4>
                  <p className="text-neutral-700">
                    {t("donor.altruistic.desc")}
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
              {t("myths.title")}
            </h2>
            <p className="text-lg text-neutral-600">
              {t("myths.intro")}
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
                        {t("myth.label")}
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
                          {t("fact.label")}
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
                {t("quiz.title")}
              </h2>
              <p className="text-lg text-neutral-600">
                {t("quiz.intro")}
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
                    {t("quiz.score")}{" "}
                    {
                      Object.values(quizAnswers).filter(
                        (answer, index) =>
                          answer === quizQuestions[index].correct
                      ).length
                    }{" "}
                    {t("quiz.outof")} {quizQuestions.length}!
                  </p>
                  <Button
                    onClick={() => setQuizAnswers({})}
                    variant="accent"
                    size="sm"
                    className="mt-4"
                  >
                    {t("quiz.retry")}
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
              {t("guide.final.title")}
            </h2>
            <p className="text-xl mb-8 opacity-95">
              {t("guide.final.desc")}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                href="#resources"
                variant="accent"
                size="lg"
                className="shadow-xl hover:shadow-2xl font-semibold"
              >
                {t("guide.final.resources")}
              </Button>
              <Button
                href="https://optn.transplant.hrsa.gov/members/member-directory/"
                target="_blank"
                rel="noopener noreferrer"
                variant="orange"
                size="lg"
                className="shadow-xl hover:shadow-2xl font-semibold"
              >
                {t("guide.final.centers")}
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
