/**
 * Kidney Transplant Guide - Following AKF Handbook Structure
 * Sections 1-8 as per AKF Transplant Toolkit (Pages 1-52)
 */

import { useState } from "react";
import { useLanguage } from "../../utils/LanguageContext";
import Card from "../ui/Card";
import Button from "../ui/Button";
import Badge from "../ui/Badge";
import {
  useScrollAnimation,
  useStaggerAnimation,
} from "../../hooks/useScrollAnimation";

export default function KidneyTransplantGuide() {
  const { t } = useLanguage();
  const [activeStep, setActiveStep] = useState(0);
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (index) => {
    setOpenSection(openSection === index ? null : index);
  };

  // Section 1: Kidney Transplant Overview
  const overviewRef = useScrollAnimation();
  
  // Section 2: Kidney Transplant Roadmap
  const roadmapSteps = [
    {
      number: 1,
      title: t("roadmap.step1.title"),
      description: t("roadmap.step1.desc"),
      action: t("roadmap.step1.action"),
    },
    {
      number: 2,
      title: t("roadmap.step2.title"),
      description: t("roadmap.step2.desc"),
      action: t("roadmap.step2.action"),
    },
    {
      number: 3,
      title: t("roadmap.step3.title"),
      description: t("roadmap.step3.desc"),
      action: t("roadmap.step3.action"),
    },
    {
      number: 4,
      title: t("roadmap.step4.title"),
      description: t("roadmap.step4.desc"),
      action: t("roadmap.step4.action"),
    },
    {
      number: 5,
      title: t("roadmap.step5.title"),
      description: t("roadmap.step5.desc"),
      action: t("roadmap.step5.action"),
    },
    {
      number: 6,
      title: t("roadmap.step6.title"),
      description: t("roadmap.step6.desc"),
      action: t("roadmap.step6.action"),
    },
  ];

  // Section 4: Eligibility Requirements
  const eligibilityFactors = [
    {
      category: t("eligibility.medical"),
      items: [
        t("eligibility.medical.1"),
        t("eligibility.medical.2"),
        t("eligibility.medical.3"),
        t("eligibility.medical.4"),
      ],
    },
    {
      category: t("eligibility.lifestyle"),
      items: [
        t("eligibility.lifestyle.1"),
        t("eligibility.lifestyle.2"),
        t("eligibility.lifestyle.3"),
        t("eligibility.lifestyle.4"),
      ],
    },
    {
      category: t("eligibility.support"),
      items: [
        t("eligibility.support.1"),
        t("eligibility.support.2"),
        t("eligibility.support.3"),
        t("eligibility.support.4"),
      ],
    },
    {
      category: t("eligibility.financial"),
      items: [
        t("eligibility.financial.1"),
        t("eligibility.financial.2"),
        t("eligibility.financial.3"),
        t("eligibility.financial.4"),
      ],
    },
  ];

  return (
    <section
      id="transplant-guide"
      className="py-16 md:py-24 lg:py-32 bg-gradient-to-br from-neutral-50 via-white to-brand-50"
    >
      <div className="container mx-auto px-6 md:px-8 lg:px-12">
        {/* Top Section with AKF Background Image */}
        <div
          className="relative rounded-3xl overflow-hidden mb-20"
          style={{
            backgroundImage: `url(${import.meta.env.BASE_URL}images/AKFpic.webp)`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        >
          {/* Backdrop blur overlay - lighter for more image visibility */}
          <div className="absolute inset-0 backdrop-blur-sm bg-white/25 z-0"></div>

          <div className="relative z-10 p-8 md:p-12">
            {/* Hero Header */}
            <div className="max-w-4xl mx-auto text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/90 backdrop-blur-sm text-brand-600 text-sm md:text-base font-medium rounded-full mb-5 md:mb-6 shadow-md">
                <span>📖</span>
                <span>{t("guide.label")}</span>
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-semibold text-neutral-900 mb-6 md:mb-8">
                {t("guide.title")}
              </h1>
              <p className="text-xl text-neutral-800 leading-relaxed mb-8 drop-shadow-md font-medium">
                {t("guide.intro")}
              </p>
            </div>

            {/* SECTION 1: KIDNEY TRANSPLANT OVERVIEW - Top portion */}
            <div id="overview" ref={overviewRef} className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-serif text-neutral-900 mb-4 drop-shadow-lg">
                  {t("guide.overview.title") || "Kidney Transplant Overview"}
                </h2>
              </div>

              <Card variant="elevated" className="p-8 mb-8 bg-white/98 backdrop-blur-sm shadow-xl">
                <h3 className="text-2xl font-serif text-neutral-900 mb-4">
                  {t("guide.overview.what.title") || "What is a kidney transplant?"}
                </h3>
                <p className="text-lg text-neutral-700 leading-relaxed mb-6">
                  {t("guide.overview.what.text") || "A kidney transplant is a treatment option for you if your kidneys are not working well enough on their own. This is called kidney failure, also called end stage kidney disease or end stage renal disease. It is a surgery to give a person with kidney failure (the recipient) a healthy kidney from someone else (the donor)."}
                </p>

                <h3 className="text-2xl font-serif text-neutral-900 mb-4">
                  {t("guide.overview.why.title") || "Why should I consider getting a transplant?"}
                </h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-xl font-semibold text-neutral-900 mb-2">
                      {t("guide.overview.why.quality.title") || "Improve your quality of life"}
                    </h4>
                    <p className="text-neutral-700 leading-relaxed">
                      {t("guide.overview.why.quality.text") || "While a kidney transplant is a major surgery and can seem scary, there can be many positive lifestyle changes. You may be able to return to the life you lived before kidney failure. You will no longer need dialysis and have fewer food and drink limits (restrictions), but it will still be important to keep a healthy weight and eat healthy foods."}
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>

        {/* Rest of SECTION 1: KIDNEY TRANSPLANT OVERVIEW - Continue below background */}
        <div className="max-w-4xl mx-auto mb-20">
          <Card variant="elevated" className="p-8 mb-8">
            <div className="space-y-4 mb-6">
              <div>
                <h4 className="text-xl font-semibold text-neutral-900 mb-2">
                  {t("guide.overview.why.longer.title") || "Increase your chance of living longer"}
                </h4>
                <p className="text-neutral-700 leading-relaxed">
                  {t("guide.overview.why.longer.text") || "Studies show that people who get a kidney transplant have a higher chance of living longer than people who stay on dialysis. On average:"}
                </p>
                <ul className="list-disc list-inside mt-2 space-y-2 text-neutral-700">
                  <li>{t("guide.overview.why.longer.stat1") || "People who are on dialysis have a 40% chance of living after 5 years with kidney failure."}</li>
                  <li>{t("guide.overview.why.longer.stat2") || "People who get a kidney transplant have a 80% chance of living after 5 years with kidney failure."}</li>
                </ul>
              </div>
            </div>

            <h3 className="text-2xl font-serif text-neutral-900 mb-4">
              {t("guide.overview.when.title") || "When is the right time to get a kidney transplant?"}
            </h3>
            <p className="text-lg text-neutral-700 leading-relaxed mb-4">
              {t("guide.overview.when.text") || "The right time for you to get a kidney transplant may be different from others. Your doctor will work with you to decide the right time for you to get a transplant. If possible, the best time to get a transplant is before you need dialysis, which is called a preemptive transplant."}
            </p>

            <div className="bg-brand-50 p-6 rounded-lg mb-6">
              <h4 className="text-lg font-semibold text-neutral-900 mb-2">
                {t("guide.overview.egfr.title") || "eGFR Test"}
              </h4>
              <p className="text-neutral-700 leading-relaxed">
                {t("guide.overview.egfr.text") || "Estimated glomerular filtration (eGFR) is a measure of how well your kidneys filter and remove waste products. Your doctor will use your results from the eGFR blood test to help decide when to refer you for evaluation for a transplant. A normal eGFR is 90 or more. You can be placed on the waitlist for a kidney transplant as soon as your eGFR is 20 or lower. But your doctor may refer you for evaluation before your eGFR is 20. Ask your doctor about a referral when your eGFR is 30 or less."}
              </p>
            </div>

            <h3 className="text-2xl font-serif text-neutral-900 mb-4">
              {t("guide.overview.options.title") || "What are my transplant options?"}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="p-6 bg-gradient-to-br from-accent-50 to-white">
                <h4 className="text-xl font-semibold text-neutral-900 mb-3">
                  {t("guide.overview.living.title") || "Living Donor Transplant"}
                </h4>
                <p className="text-neutral-700 mb-4">
                  {t("guide.overview.living.desc") || "A living donor kidney transplant is surgery where doctors give you a kidney from a person who is alive and chooses to donate one of their two healthy kidneys."}
                </p>
                <ul className="space-y-2 text-sm text-neutral-700">
                  <li>• {t("guide.overview.living.directed") || "Directed donation - from someone you know"}</li>
                  <li>• {t("guide.overview.living.paired") || "Paired exchange (kidney swap)"}</li>
                  <li>• {t("guide.overview.living.altruistic") || "Altruistic donation - from a stranger"}</li>
                  <li>• {t("guide.overview.living.voucher") || "Transplant voucher program"}</li>
                </ul>
              </Card>
              <Card className="p-6 bg-gradient-to-br from-brand-50 to-white">
                <h4 className="text-xl font-semibold text-neutral-900 mb-3">
                  {t("guide.overview.deceased.title") || "Deceased Donor Transplant"}
                </h4>
                <p className="text-neutral-700">
                  {t("guide.overview.deceased.desc") || "A deceased donor kidney transplant is a surgery where doctors give you a kidney from an organ donor who has died. The average wait time is 3-5 years for a deceased donor's kidney and may be longer or shorter in some parts of the country."}
                </p>
              </Card>
            </div>
          </Card>
        </div>

        {/* SECTION 2: KIDNEY TRANSPLANT ROADMAP */}
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
                  className={`w-12 h-12 rounded-full flex items-center justify-center text-lg font-bold transition-all duration-300 ${
                    index <= activeStep
                      ? "bg-brand-500 text-white shadow-lg scale-110"
                      : "bg-white text-neutral-400 border-2 border-neutral-300"
                  }`}
                >
                  {step.number}
                </button>
              ))}
            </div>
          </div>

          {/* Active Step Details */}
          <Card variant="elevated" className="p-8 bg-gradient-to-br from-white to-brand-50">
            <div className="flex items-start gap-6">
              <div className="flex-shrink-0 w-20 h-20 bg-brand-500 text-white rounded-2xl flex items-center justify-center text-4xl shadow-lg">
                {roadmapSteps[activeStep].number}
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

        {/* SECTION 3: THE TRANSPLANT CENTER */}
        <div id="transplant-center" className="max-w-4xl mx-auto mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif text-neutral-900 mb-4">
              {t("guide.center.title") || "The Transplant Center"}
            </h2>
          </div>

          <Card variant="elevated" className="p-8">
            <h3 className="text-2xl font-serif text-neutral-900 mb-4">
              {t("guide.center.what.title") || "What is a Transplant Center?"}
            </h3>
            <p className="text-lg text-neutral-700 leading-relaxed mb-6">
              {t("guide.center.what.text") || "A transplant center is a hospital with a special team of doctors, nurses, and other healthcare workers who help people get organ transplants. These centers have the experience and resources needed for transplant surgery and care."}
            </p>

            <h3 className="text-2xl font-serif text-neutral-900 mb-4">
              {t("guide.center.why.title") || "Why the Transplant Center Matters"}
            </h3>
            <p className="text-lg text-neutral-700 leading-relaxed mb-4">
              {t("guide.center.why.text") || "Choosing the right transplant center is important because different centers have different rules and requirements, wait times vary, and you want a team you trust and feel comfortable with."}
            </p>

            <h3 className="text-2xl font-serif text-neutral-900 mb-4">
              {t("guide.center.team.title") || "The Transplant Team"}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                t("guide.center.team.coordinator") || "Transplant Coordinator - Your main contact person",
                t("guide.center.team.surgeons") || "Transplant Surgeons - Perform the surgery",
                t("guide.center.team.nephrologists") || "Nephrologists - Manage your kidney health",
                t("guide.center.team.nurses") || "Nurses - Provide day-to-day care",
                t("guide.center.team.social") || "Social Workers - Help with support and resources",
                t("guide.center.team.financial") || "Financial Coordinators - Help with insurance and costs",
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-2">
                  <span className="text-brand-500 mt-1">✓</span>
                  <span className="text-neutral-700">{item}</span>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* SECTION 4: ELIGIBILITY REQUIREMENTS */}
        <div id="eligibility" className="max-w-6xl mx-auto mb-20">
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
                <h3 className="text-xl font-semibold text-neutral-900 mb-4">
                  {factor.category}
                </h3>
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

        {/* SECTION 5: CAREGIVER ROLE */}
        <div id="caregiver" className="max-w-4xl mx-auto mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif text-neutral-900 mb-4">
              {t("guide.caregiver.title") || "Caregiver Role"}
            </h2>
          </div>

          <Card variant="elevated" className="p-8">
            <h3 className="text-2xl font-serif text-neutral-900 mb-4">
              {t("guide.caregiver.what.title") || "What is a Caregiver?"}
            </h3>
            <p className="text-lg text-neutral-700 leading-relaxed mb-6">
              {t("guide.caregiver.what.text") || "A caregiver is someone who helps you during your transplant journey. This person supports you before, during, and after your transplant surgery. Having a good caregiver is very important for your recovery and success."}
            </p>

            <h3 className="text-2xl font-serif text-neutral-900 mb-4">
              {t("guide.caregiver.why.title") || "Why You Need a Caregiver"}
            </h3>
            <p className="text-lg text-neutral-700 leading-relaxed mb-4">
              {t("guide.caregiver.why.text") || "After your transplant, you'll need help with many things: getting to appointments, taking medications, daily tasks, emotional support, and watching for problems. Transplant centers require that you have a reliable caregiver."}
            </p>

            <h3 className="text-2xl font-serif text-neutral-900 mb-4">
              {t("guide.caregiver.who.title") || "Who Can Be Your Caregiver?"}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                t("guide.caregiver.who.family") || "Family Members",
                t("guide.caregiver.who.friends") || "Friends",
                t("guide.caregiver.who.others") || "Other Support People",
              ].map((item, index) => (
                <div key={index} className="text-center p-4 bg-neutral-50 rounded-lg">
                  <p className="font-semibold text-neutral-900">{item}</p>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* SECTION 6: FINDING A LIVING DONOR */}
        <div id="finding-donor" className="max-w-4xl mx-auto mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif text-neutral-900 mb-4">
              {t("guide.finding.title") || "Finding a Living Donor"}
            </h2>
          </div>

          <Card variant="elevated" className="p-8">
            <h3 className="text-2xl font-serif text-neutral-900 mb-4">
              {t("guide.finding.why.title") || "Why Consider a Living Donor?"}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              {[
                { title: t("donor.faster"), desc: t("donor.faster.desc") },
                { title: t("donor.outcomes"), desc: t("donor.outcomes.desc") },
                { title: t("donor.scheduled"), desc: t("donor.scheduled.desc") },
              ].map((benefit, index) => (
                <div key={index} className="p-4 bg-accent-50 rounded-lg">
                  <h4 className="font-semibold text-neutral-900 mb-2">{benefit.title}</h4>
                  <p className="text-sm text-neutral-700">{benefit.desc}</p>
                </div>
              ))}
            </div>

            <h3 className="text-2xl font-serif text-neutral-900 mb-4">
              {t("guide.finding.who.title") || "Who Can Be a Living Donor?"}
            </h3>
            <p className="text-lg text-neutral-700 leading-relaxed mb-4">
              {t("guide.finding.who.text") || "Many people can be living donors. Don't assume someone can't donate - let the transplant center evaluate them. Family members, friends, coworkers, and sometimes even strangers (altruistic donors) can donate."}
            </p>

            <div className="bg-brand-50 p-6 rounded-lg">
              <p className="font-semibold text-neutral-900 mb-2">
                {t("guide.finding.matching.title") || "Important Facts About Matching"}
              </p>
              <p className="text-neutral-700">
                {t("guide.finding.matching.text") || "Race and ethnicity don't matter for matching! This is a common myth. Your donor doesn't need to be the same race or ethnicity as you."}
              </p>
            </div>
          </Card>
        </div>

        {/* SECTION 7: BECOMING A LIVING DONOR */}
        <div id="becoming-donor" className="max-w-4xl mx-auto mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif text-neutral-900 mb-4">
              {t("guide.becoming.title") || "Becoming a Living Donor"}
            </h2>
          </div>

          <Card variant="elevated" className="p-8">
            <h3 className="text-2xl font-serif text-neutral-900 mb-4">
              {t("guide.becoming.what.title") || "What is Living Donation?"}
            </h3>
            <p className="text-lg text-neutral-700 leading-relaxed mb-6">
              {t("guide.becoming.what.text") || "Living donation is when a healthy person gives one of their kidneys to someone who needs a transplant. This is a generous and life-saving gift that helps someone in need."}
            </p>

            <h3 className="text-2xl font-serif text-neutral-900 mb-4">
              {t("guide.becoming.safe.title") || "Is Living Donation Safe?"}
            </h3>
            <div className="bg-accent-50 p-6 rounded-lg mb-6">
              <p className="text-lg font-semibold text-neutral-900 mb-2">
                {t("guide.becoming.safe.answer") || "Yes, living donation is very safe for healthy donors."}
              </p>
              <ul className="list-disc list-inside space-y-2 text-neutral-700 mt-4">
                <li>{t("guide.becoming.safe.fact1") || "You can live a completely normal life with one kidney"}</li>
                <li>{t("guide.becoming.safe.fact2") || "Your remaining kidney will do the work of two"}</li>
                <li>{t("guide.becoming.safe.fact3") || "Most donors recover quickly and have no long-term problems"}</li>
                <li>{t("guide.becoming.safe.fact4") || "Donors live just as long as people who don't donate"}</li>
              </ul>
            </div>

            <h3 className="text-2xl font-serif text-neutral-900 mb-4">
              {t("guide.becoming.who.title") || "Who Can Be a Living Donor?"}
            </h3>
            <p className="text-lg text-neutral-700 leading-relaxed">
              {t("guide.becoming.who.text") || "Usually age 18 to 65, in good overall health, have two healthy kidneys, no serious health problems, normal blood pressure and kidney function, and willing and able to donate voluntarily."}
            </p>
          </Card>
        </div>

        {/* SECTION 8: QUESTIONS TO ASK YOUR TRANSPLANT TEAM */}
        <div id="questions" className="max-w-4xl mx-auto mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif text-neutral-900 mb-4">
              {t("guide.questions.title") || "Questions to Ask Your Transplant Team"}
            </h2>
          </div>

          <Card variant="elevated" className="p-8">
            <h3 className="text-2xl font-serif text-neutral-900 mb-4">
              {t("guide.questions.why.title") || "Why Asking Questions Matters"}
            </h3>
            <p className="text-lg text-neutral-700 leading-relaxed mb-6">
              {t("guide.questions.why.text") || "Asking questions helps you understand your transplant journey better, feel more confident and prepared, make informed decisions about your care, and build trust with your care team."}
            </p>

            <div className="space-y-6">
              {[
                { title: t("guide.questions.starting.title") || "Questions About Getting Started", items: [
                  t("guide.questions.starting.1") || "When should I start thinking about a transplant?",
                  t("guide.questions.starting.2") || "How do I get started with the evaluation?",
                  t("guide.questions.starting.3") || "How long does the whole process take?",
                ]},
                { title: t("guide.questions.evaluation.title") || "Questions About Evaluation", items: [
                  t("guide.questions.evaluation.1") || "How long will my evaluation take?",
                  t("guide.questions.evaluation.2") || "What tests will I need?",
                  t("guide.questions.evaluation.3") || "What are your requirements for transplant?",
                ]},
                { title: t("guide.questions.waitlist.title") || "Questions About Being on the Waitlist", items: [
                  t("guide.questions.waitlist.1") || "How long will I wait for a kidney?",
                  t("guide.questions.waitlist.2") || "What should I do while I wait?",
                  t("guide.questions.waitlist.3") || "How will you contact me when a kidney is available?",
                ]},
                { title: t("guide.questions.surgery.title") || "Questions About Surgery", items: [
                  t("guide.questions.surgery.1") || "How long will the surgery take?",
                  t("guide.questions.surgery.2") || "How long will I stay in the hospital?",
                  t("guide.questions.surgery.3") || "What will recovery be like?",
                ]},
                { title: t("guide.questions.medications.title") || "Questions About Medications", items: [
                  t("guide.questions.medications.1") || "What medications will I need to take?",
                  t("guide.questions.medications.2") || "How long will I need to take them?",
                  t("guide.questions.medications.3") || "What are the side effects?",
                ]},
              ].map((category, index) => (
                <div key={index}>
                  <h4 className="text-xl font-semibold text-neutral-900 mb-3">
                    {category.title}
                  </h4>
                  <ul className="space-y-2 ml-4">
                    {category.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-neutral-700">
                        <span className="text-brand-500 mt-1">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="mt-8 p-6 bg-brand-50 rounded-lg">
              <p className="text-lg font-semibold text-neutral-900 mb-2">
                {t("guide.questions.remember") || "Remember: There are no silly questions. Your transplant team wants you to understand everything. Don't be afraid to ask anything you're wondering about."}
              </p>
            </div>
          </Card>
        </div>

        {/* Final CTA */}
        <div className="max-w-4xl mx-auto">
          <Card
            variant="elevated"
            className="p-8 md:p-12 text-center bg-gradient-to-br from-brand-100 to-brand-200 text-neutral-900"
          >
            <h2 className="text-3xl md:text-4xl font-serif mb-4 text-neutral-900">
              {t("guide.final.title")}
            </h2>
            <p className="text-xl mb-8 text-neutral-700">
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
