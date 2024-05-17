import React from "react";
import { FaReact, FaHtml5, FaCss3, FaAws, FaGitAlt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { GrDocker } from "react-icons/gr";
import { SiKubernetes } from "react-icons/si";


const SkillsFrontend = () => {
    return (
        <div className="skills-stack">
            <div className="grid"><FaReact className="tech-icons" /></div>
            <div className="grid"><FaHtml5 className="tech-icons" /></div>
            <div className="grid"><FaCss3 className="tech-icons" /></div>
            <div className="grid"><IoLogoJavascript className="tech-icons" /></div>
            <div className="grid docker"><GrDocker className="tech-icons" /></div>
            <div className="grid k8s"><SiKubernetes className="tech-icons" /></div>
            <div className="grid aws"><FaAws className="tech-icons" /></div>
            <div className="grid git"><FaGitAlt className="tech-icons" /></div>
        </div>
    );
}

export default SkillsFrontend;
