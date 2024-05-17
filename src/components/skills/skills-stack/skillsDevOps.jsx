

import React from 'react';
import { GrDocker } from "react-icons/gr";
import { FaAws, FaGitAlt, FaGitlab, FaJenkins } from "react-icons/fa";
import { SiKubernetes, SiTerraform, SiGithubactions } from "react-icons/si";


const SkillsDevOps = () => {

    return(

        <div className="skills-stack-1">
            <div className="grid-1">< GrDocker className="tech-icons-1"/></div>
            <div className="grid-1">< FaAws className="tech-icons-1"/></div>
            <div className="grid-1">< SiKubernetes className="tech-icons-1"/></div>
            <div className="grid-1">< FaGitAlt className="tech-icons-1"/></div>
            <div className="grid-1">< FaGitlab className="tech-icons-1"/></div>
            {/* <div className="grid-1">< SiTerraform className="tech-icons-1"/></div>
            <div className="grid-1">< FaJenkins className="tech-icons-1"/></div>
            <div className="grid-1">< SiGithubactions className="tech-icons-1"/></div> */}
        </div>
    );
}



export default SkillsDevOps;