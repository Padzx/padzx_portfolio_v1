import React from 'react';
import './index.scss';
import Hero from './components/hero/hero';
import Branding from './components/branding/branding';
import Navbar from './components/navbar/navbar';
import Projects from './components/projects/projects';

export default function App() {
  return (
    <div>
      <section>
        <Navbar />
        <Hero />
      </section>
      <section>
        <Branding />
      </section>
      <section>
        <Projects />
      </section>
    </div>
  );
}
