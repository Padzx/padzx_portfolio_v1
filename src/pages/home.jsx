// ---> Home Component (Default) <---

import Navbar from "../components/navbar/navbar";
import Hero from "../components/hero/hero";
import Branding from "../components/branding/branding";
import Skills from "../components/skills/skills";

const Home = () => {


    return(

        <div>
            
            <section>
                <Navbar />
                <Hero />
                
            </section>
            <section>
                <Branding />
            </section>
            <section>
                <Skills />
            </section>
        </div>
    );
}

export default Home;