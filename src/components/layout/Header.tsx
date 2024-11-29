import React from 'react';
import { User } from 'lucide-react';

export function Header() {
  return (
    <header className="w-full py-4 px-6 flex items-center justify-between border-b">
      <div className="flex items-center space-x-8">
        <h1 className="text-xl font-semibold">untitled.ai</h1>
        <nav className="hidden md:flex space-x-6">
          <a href="#" className="text-gray-600 hover:text-gray-900">Home</a>
          <a href="#" className="text-gray-600 hover:text-gray-900">Products</a>
          <a href="#" className="text-gray-600 hover:text-gray-900">Resources</a>
          <a href="#" className="text-gray-600 hover:text-gray-900">Pricing</a>
        </nav>
      </div>
      <button className="p-2 rounded-full hover:bg-gray-100">
        <User className="w-5 h-5" />
      </button>
    </header>
  );
}