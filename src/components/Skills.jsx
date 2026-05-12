import { skills } from '../data/PortfolioData';
import { useScrollReveal } from '../hooks/useScrollReveal';

const Skills = () => {
    const revealRef = useScrollReveal();

    return (
        <section id="skills" className="skills-section reveal" ref={revealRef}>
            <h2>Skills & Technologies</h2>
            <div className="skills-container">
                {skills.map((skillGroup, index) => (
                    <div key={index} className="skill-group reveal" style={{ transitionDelay: `${index * 0.15}s` }}>
                        <h3>{skillGroup.category}</h3>
                        <div className="skill-tags">
                            {skillGroup.items.map((skill, i) => (
                                <span key={i} className="skill-tag">{skill}</span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            <style>{`
                .skills-container {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
                    gap: 2rem;
                    margin-top: 2rem;
                }
                
                .skill-group {
                    background: var(--card-bg);
                    backdrop-filter: blur(10px);
                    -webkit-backdrop-filter: blur(10px);
                    border-radius: 12px;
                    border: 1px solid var(--border-color);
                    padding: 1.5rem;
                    transition: transform 0.3s ease;
                }
                
                .skill-group:hover {
                    transform: translateY(-5px);
                    border-color: var(--accent);
                    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2), 0 0 15px var(--accent-transparent-hover);
                }
                
                .skill-group h3 {
                    color: var(--text-main);
                    font-size: 1.2rem;
                    margin-bottom: 1rem;
                    border-bottom: 1px solid var(--border-color);
                    padding-bottom: 0.5rem;
                }
                
                .skill-tags {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 10px;
                }
                
                .skill-tag {
                    background: var(--accent-transparent);
                    color: var(--accent);
                    padding: 6px 14px;
                    border-radius: 20px;
                    font-size: 0.9rem;
                    font-weight: 500;
                    border: 1px solid var(--accent-transparent-hover);
                }
            `}</style>
        </section>
    );
};

export default Skills;
