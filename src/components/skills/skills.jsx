
// ----> Skills Component <----

import React from "react";
import './skills.scss'
import SkillsStack from "./skills-stack/skillsStack";

const Skills = () => {
  return (
      <div className="skills">
        <div className="wrapper">
          <div className="titleContainer">
            <h2>SkillsSet</h2>
            <hr />
            <div className="skillsContainer">
              <SkillsStack />
            </div>
          </div>
        </div>
    </div>
  );
};

export default Skills;
