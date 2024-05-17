import React from "react";
import { FaReact, FaHtml5, FaCss3   } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";



const SkillsFrontend = () => {
    return (
        <div className="skills-stack">
            <div className="grid">< FaReact className="tech-icons"/> </div>
            <div className="grid">< FaHtml5 className="tech-icons"/> </div>
            <div className="grid">< FaCss3 className="tech-icons"/></div>
            <div className="grid">< IoLogoJavascript className="tech-icons"/></div>
        </div>
    );
}

export default SkillsFrontend;
