import React from 'react';
import './index.scss';
import Hero from './components/hero/hero';
import Branding from './components/branding/branding';
import Navbar from './components/navbar/navbar';
import Projects from './components/projects/projects';
import Aboutme from './components/aboutme/aboutme';
import Skills from './components/skills/skills';

export default function App() {
  return (
    <div>
      <section id='Home'>
        <Navbar />
        <Hero />
      </section>
      <section>
        <Branding />
      </section>
      <section id='Aboutme'>
        <Aboutme />
      </section>
      <section id='Skills'>
        <Skills />
      </section>
      <section id='Projects'>
        <Projects />
      </section>
    </div>
  );
}
