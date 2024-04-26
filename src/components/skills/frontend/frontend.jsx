import React from 'react';
import { FaVuejs, FaSass, FaCss3, FaReact, FaHtml5  } from 'react-icons/fa';
import { RiJavascriptFill } from "react-icons/ri";
import { TbBrandVscode } from "react-icons/tb";
import { SiVite } from "react-icons/si";




const FrontendSkills = () => {
  return (
    <div className="wrapper">
      <SkillBox icon={<RiJavascriptFill />} />
      <SkillBox icon={<FaVuejs />} />
      <SkillBox icon={<FaSass />} />
      <SkillBox icon={<FaCss3 />} />
      <SkillBox icon={<FaReact />} />
      <SkillBox icon={<FaHtml5 />} />
      <SkillBox icon={<TbBrandVscode />} />
      <SkillBox icon={<SiVite />} />
      {/* Adicione mais ícones conforme necessário */}
    </div>
  );
};

const SkillBox = ({ icon }) => {
  return (
    <div className="skill-frontend">
      {icon}
    </div>
  );
};

export default FrontendSkills;
