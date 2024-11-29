import React from 'react';

export function Hero() {
  return (
    <section className="max-w-4xl mx-auto text-center py-20 px-4">
      <h1 className="text-4xl md:text-5xl font-bold mb-6">
        Beautiful analytics to grow smarter
      </h1>
      <p className="text-xl text-gray-600 mb-8">
        Powerful, self-serve product and growth analytics to help you convert, engage, and retain more users. Trusted by over 4,000 startups.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <button className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700">
          Demo
        </button>
        <button className="border border-gray-300 px-6 py-3 rounded-lg hover:bg-gray-50">
          Sign up
        </button>
      </div>
    </section>
  );
}