// ---> Home Component (Default) <---

import Navbar from "../components/navbar/navbar";
import Hero from "../components/hero/hero";
import Branding from "../components/branding/branding";
import Projects from "../components/projects/projects";
import Skills from "../components/skills/skills";
import Aboutme from "../components/aboutme/aboutme";





const Home = () => {


    return(

        <div>
            
            <section id="Home">
                <Navbar />
                <Hero />
            </section>
            <section>
                <Branding />
            </section>
            <section id="Aboutme">
                <Aboutme />
            </section>
            <section id="Skills">
                <Skills />
            </section>
            <section id="Projects">
                <Projects />
            </section>
        </div>
    );
}

export default Home;