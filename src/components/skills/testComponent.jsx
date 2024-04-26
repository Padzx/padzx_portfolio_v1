// TestComponent.js
import React from "react";
import ExperienceLevel from "../types/ExperienceLevel";


const TestComponent = () => {
  return (
    <div>
      <h2>Teste das Bolinhas de Experiência</h2>
      <div style={{ display: "flex", gap: "10px" }}>
        <ExperienceLevel level={1} />
        <ExperienceLevel level={2} />
        <ExperienceLevel level={3} />
        <ExperienceLevel level={4} />
        <ExperienceLevel level={5} />
      </div>
    </div>
  );
};

export default TestComponent;
