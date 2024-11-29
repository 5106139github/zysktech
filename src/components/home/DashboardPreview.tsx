import React from 'react';
import Section from "../../images/Section.png"
export function DashboardPreview() {
  return (
    <div className="max-w-6xl mx-auto px-4 mb-20">
      <div className="rounded-2xl border shadow-xl p-4 bg-white">
        <img
          src={Section}
          alt="Analytics Dashboard"
          className="rounded-lg w-full"
        />
      </div>
    </div>
  );
}