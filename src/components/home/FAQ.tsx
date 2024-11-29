import React from 'react';

const faqs = [
  {
    question: "Is data fully encrypted?",
    answer: "Yes, all data is encrypted at rest and in transit using industry-standard encryption."
  },
  {
    question: "Can I integrate my own data?",
    answer: "Absolutely! We support various data integration methods including API and direct database connections."
  },
  {
    question: "How does pricing work?",
    answer: "We offer flexible pricing plans based on your needs, starting with a free tier for small teams."
  }
];

export function FAQ() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Frequently asked questions
        </h2>
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold mb-2">{faq.question}</h3>
              <p className="text-gray-600">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}