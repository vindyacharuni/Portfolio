import { profileData } from '../data/PortfolioData';
import { useScrollReveal } from '../hooks/useScrollReveal';

const About = () => {
    const revealRef = useScrollReveal();

    return (
        <section id="about" className="about-section reveal" ref={revealRef}>
            <h2>About Me</h2>
            <div className="about-content">
                <p>{profileData.about}</p>
            </div>
        </section>
    );
};

export default About;