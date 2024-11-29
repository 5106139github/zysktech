import React from 'react';
import { BarChart3, MessageSquare, Users } from 'lucide-react';

const features = [
  {
    icon: <BarChart3 className="w-6 h-6" />,
    title: "Share team dataset",
    description: "Share live data with your team in just one click and analyze together in real-time."
  },
  {
    icon: <MessageSquare className="w-6 h-6" />,
    title: "Custom chat answers",
    description: "Get AI-powered insights directly within your chat interface for quick decision making."
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Manage team reports",
    description: "Create and share custom reports with your team members and stakeholders."
  }
];

export function Features() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Analytics that feels like it's from the future
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="p-6 bg-white rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}