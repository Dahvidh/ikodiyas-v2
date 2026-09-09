import { useState } from "react";

const faqs = [
  {
    question: "What kind of projects do you edit?",
    answer:
      "We work across commercial films, brand content, music videos, wedding films, social media content, and corporate projects.",
  },
  {
    question: "Can you work with footage I already have?",
    answer:
      "Absolutely. You can send your existing footage and we can transform it into a polished, cinematic final edit.",
  },
  {
    question: "How long does an editing project take?",
    answer:
      "Turnaround depends on the project's length and complexity. Once we understand your requirements, we'll give you a clear delivery timeline before work begins.",
  },
  {
    question: "Can I request revisions?",
    answer:
      "Yes. We'll work with you through the revision process to make sure the final edit reflects the vision we agreed on.",
  },
  {
    question: "How do I start a project?",
    answer:
      "Use the Start Your Project button below and tell us what you're creating. We'll review your brief and get back to you with the next steps.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex((current) => (current === index ? null : index));
  };

  return (
    <section
      id="faq"
      className="relative overflow-hidden bg-[#050505] px-6 py-32 text-white md:py-40"
    >
      <div className="mx-auto max-w-5xl">
        {/* Header */}
        <div className="mb-20">
          <p className="mb-5 text-xs font-medium uppercase tracking-[0.3em] text-amber-400">
            FAQ
          </p>

          <h2 className="text-4xl font-semibold leading-[0.95] tracking-tight sm:text-5xl md:text-6xl">
            Questions,
            <br />
            <span className="text-white/40">answered.</span>
          </h2>
        </div>

        {/* Questions */}
        <div className="border-t border-white/10">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={faq.question}
                className="border-b border-white/10"
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-8 py-7 text-left transition-colors duration-300 hover:text-amber-400 md:py-9"
                >
                  <span className="text-lg font-medium sm:text-xl md:text-2xl">
                    {faq.question}
                  </span>

                  <span
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/20 text-xl transition-all duration-300 ${
                      isOpen
                        ? "rotate-45 border-amber-400 text-amber-400"
                        : "text-white/50"
                    }`}
                  >
                    +
                  </span>
                </button>

                <div
                  className={`grid transition-[grid-template-rows] duration-500 ${
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="max-w-3xl pb-8 pr-12 text-sm leading-relaxed text-white/50 sm:text-base md:text-lg">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}