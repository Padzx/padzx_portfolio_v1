import React from "react";
import { FiGithub } from "react-icons/fi";
import { RiLinkedinLine } from "react-icons/ri";
import { AiOutlineFork } from "react-icons/ai";

const Icons = () => {
    return(
        <div className="icons">
            <a href="https://github.com/Padzx" target="_blank" rel="noopener noreferrer">
                <FiGithub />
            </a>
            <a href="https://www.linkedin.com/in/gabriel-padilha-aa9083273/" target="_blank" rel="noopener noreferrer">
                <RiLinkedinLine />
            </a>
            <a href="https://github.com/Padzx/padzx_portfolio_v1" target="_blank" rel="noopener noreferrer">
                <AiOutlineFork />
            </a>
        </div>
    );
};

export default Icons;
