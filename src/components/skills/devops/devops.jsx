import React from 'react';
import { GrDocker } from "react-icons/gr";
import { SiKubernetes, SiTerraform  } from "react-icons/si";
import { FaAws, FaGitlab, FaJenkins   } from "react-icons/fa";
import { SiYaml } from "react-icons/si";
import { SiGithubactions } from "react-icons/si";




const DevopsSkills = () => {

    return(

        <div className="wrapper">
            <SkillBox icon={<GrDocker />} />
            <SkillBox icon={<SiKubernetes />} />
            <SkillBox icon={<FaAws />} />
            <SkillBox icon={<FaGitlab />} />
            <SkillBox icon={<SiYaml />} />
            <SkillBox icon={<SiGithubactions />} />
            <SkillBox icon={<FaJenkins />} />
            <SkillBox icon={<SiTerraform />} />
            {/* Adicione mais ícones conforme necessário */}
        </div>
    );
}


const SkillBox = ({ icon }) => {
    return (
      <div className="skill-devops">
        {icon}
      </div>
    );
  };


export default DevopsSkills;