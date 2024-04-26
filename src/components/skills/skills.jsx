import './skills.scss'
import FrontendSkills from './frontend/frontend';
import DevopsSkills from './devops/devops';
import OtherSkills from './other/otherSkils';

const Skills = () => {

    return(

        <div className="skills">
            <div className="wrapper">
            <FrontendSkills />
            <DevopsSkills />
            <OtherSkills />
            </div>
        </div>
    );
}

export default Skills;