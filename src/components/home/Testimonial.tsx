import React from 'react';

export function Testimonial() {
  return (
    <section className="py-20">
      <div className="max-w-4xl mx-auto text-center px-4">
        <h2 className="text-2xl font-bold mb-8">
          We've been using Untitled to kick start every new project and can't imagine working without it.
        </h2>
        <div className="flex items-center justify-center space-x-4">
          <img
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=100&h=100&q=80"
            alt="Profile"
            className="w-12 h-12 rounded-full"
          />
          <div className="text-left">
            <p className="font-semibold">Caroline Wu</p>
            <p className="text-gray-600">Product Manager, Sisyphus</p>
          </div>
        </div>
      </div>
    </section>
  );
}