import React from "react";
import { FaReact, FaHtml5, FaCss3, FaAws, FaGitAlt, FaPython, FaJenkins, FaGitlab } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { GrDocker } from "react-icons/gr";
import { SiKubernetes, SiGithubactions, SiTerraform, SiMysql } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";

const SkillsStack = () => {
    return (
        <div className="skills-stack">
            <div className="grid react">
                <FaReact className="tech-icons" />
            </div>
            <div className="grid html">
                <FaHtml5 className="tech-icons" />
            </div>
            <div className="grid css">
                <FaCss3 className="tech-icons" />
            </div>
            <div className="grid js">
                <IoLogoJavascript className="tech-icons" />
            </div>
            <div className="grid gitActions">
                <SiGithubactions className="tech-icons" />
            </div>
            <div className="grid docker">
                <GrDocker className="tech-icons" />
            </div>
            <div className="grid k8s">
                <SiKubernetes className="tech-icons" />
            </div>
            <div className="grid aws">
                <FaAws className="tech-icons" />
            </div>
            <div className="grid git">
                <FaGitAlt className="tech-icons" />
            </div>
            <div className="grid python">
                <FaPython className="tech-icons" />
            </div>
            <div className="grid terraform">
                <SiTerraform className="tech-icons" />
            </div>
            <div className="grid jenkins">
                <FaJenkins className="tech-icons" />
            </div>
            <div className="grid gitlab">
                <FaGitlab className="tech-icons" />
            </div>
            <div className="grid mysql">
                <SiMysql className="tech-icons" />
            </div>
            <div className="grid postgresql">
                <BiLogoPostgresql className="tech-icons" />
            </div>
        </div>
    );
}

export default SkillsStack;
