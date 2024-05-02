
// ----> Skills Component <----


import React from "react";
import './skills.scss'
import FrontendSkills from "./stack-set/frontend";
import DevopsSkills from "./stack-set/devops";
import OtherDevopsTools from "./stack-set/otherToolsDevops";

const Skills = () => {
  return (
      <div className="skills">
          <div className="titleContainer">
            <h2>
              Technologies
            </h2>
            <hr />
          </div>
        <div className="wrapper">
            <FrontendSkills />
        </div>
        <div>
          <DevopsSkills />
        </div>
        <div>
          <OtherDevopsTools />
        </div>
    </div>
  );
};

export default Skills;
