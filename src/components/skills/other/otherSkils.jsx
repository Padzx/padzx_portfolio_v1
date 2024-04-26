import React from 'react';
import { FaPython, FaLinux  } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";
import { SiApachehadoop, SiMysql, SiJupyter, SiPycharm } from "react-icons/si";
import { SiPowerbi } from "react-icons/si";





const OtherSkills = () => {

    return(

        <div className="wrapper">
            <SkillBox icon={<FaPython />} />
            <SkillBox icon={<BiLogoPostgresql />} />
            <SkillBox icon={<SiApachehadoop />} />
            <SkillBox icon={<SiMysql />} />
            <SkillBox icon={<SiPowerbi />} />
            <SkillBox icon={<FaLinux />} />
            <SkillBox icon={<SiJupyter />} />
            <SkillBox icon={<SiPycharm />} />
            {/* Adicione mais ícones conforme necessário */}
        </div>
    );
}


const SkillBox = ({ icon }) => {
    return (
      <div className="skill-others">
        {icon}
      </div>
    );
  };


export default OtherSkills;