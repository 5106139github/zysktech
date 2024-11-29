import React from 'react';
import { Header } from './components/layout/Header';
import { Hero } from './components/home/Hero';
import { DashboardPreview } from './components/home/DashboardPreview';
import { Features } from './components/home/Features';
import { Testimonial } from './components/home/Testimonial';
import { FAQ } from './components/home/FAQ';
import { Footer } from './components/layout/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <DashboardPreview />
        <Features />
        <Testimonial />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}

export default App;