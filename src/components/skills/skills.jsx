
// ----> Skills Component <----

import React from "react";
import './skills.scss'
import SkillsFrontend from "./skills-stack/skillsFrontend";
// import SkillsDevOps from "./skills-stack/skillsDevOps";

const Skills = () => {
  return (
      <div className="skills">
        <div className="wrapper">
          <div className="titleContainer">
            <h2>SkillsSet</h2>
            <hr />
            <div className="skillsContainer">
              <SkillsFrontend />
              {/* <SkillsDevOps /> */}
            </div>
          </div>
        </div>
    </div>
  );
};

export default Skills;
