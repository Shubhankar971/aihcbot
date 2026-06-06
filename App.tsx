/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Technology from './components/Technology';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white selection:bg-blue-100 selection:text-blue-900 text-slate-900 font-sans scroll-smooth">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <About />
        <Technology />
        <Blog />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
