import React from 'react';
import './index.scss';
import Hero from './components/hero/hero';
import Branding from './components/branding/branding';

export default function App() {
  return (
    <div>
      <section>    
        <Hero />
      </section>
      <section>
        <Branding />
      </section>
    </div>
  );
}
