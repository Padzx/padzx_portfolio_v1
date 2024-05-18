import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { CiCircleChevDown } from "react-icons/ci";
import './hero.scss';

const Hero = () => {
    const [typedText, setTypedText] = useState('');
    const targetText = 'GABRIEL PADILHA';
    const skills = ['Frontend', 'Data Scientist', 'Cloud Architect', 'Freelancer'];
    const [currentSkillIndex, setCurrentSkillIndex] = useState(0);

    const textVariants = {
        initial: { x: -500, opacity: 0 },
        animate: { x: 0, opacity: 1, transition: { duration: 1, staggerChildren: 0.1 }},
    };

    useEffect(() => {
        let index = 0;
        const interval = setInterval(() => {
            setTypedText(targetText.slice(0, index)); 
            index++;
            if (index > targetText.length) clearInterval(interval); 
        }, 100); 
        return () => clearInterval(interval);
    }, [targetText]);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSkillIndex((prevIndex) => (prevIndex + 1) % skills.length);
        }, 2500); 
        return () => clearInterval(interval);
    }, [skills.length]);

    return (
        <div className="hero">
            <div className="wrapper">
                <motion.div
                    className="textContainer"
                    initial="initial"
                    animate="animate"
                    variants={textVariants} 
                >
                    <motion.h2
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1 }} 
                    >
                        {typedText}
                    </motion.h2>
                    <h1>DevOps Engineer</h1>
                    <motion.h3
                        initial={{ x: -100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        exit={{ x: 100, opacity: 0 }}
                        transition={{ duration: 0.5 }} 
                        key={currentSkillIndex}
                    >
                        {skills[currentSkillIndex]}
                    </motion.h3>
                    <div className="buttons">
                        <button>View Resume</button>
                        <a 
                            href="https://www.linkedin.com/in/gabriel-padilha-aa9083273/" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="button-link"
                        >
                            Contact Me
                        </a>
                    </div>
                    <motion.div
                        className="down"
                        animate={{ opacity: [1, 0] }} 
                        transition={{ duration: 1.9, repeat: Infinity }} 
                    >
                        <CiCircleChevDown />
                    </motion.div>
                </motion.div>
            </div>
        </div>
    );
}

export default Hero;
