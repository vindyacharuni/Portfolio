import { projects } from '../data/PortfolioData';
import { useScrollReveal } from '../hooks/useScrollReveal';

const getTechLogo = (techName) => {
    const name = techName.toLowerCase();
    if (name.includes('react')) {
        return (
            <svg viewBox="-11.5 -10.23174 23 20.46348" width="14" height="14" style={{ marginRight: '6px' }}>
                <circle cx="0" cy="0" r="2.05" fill="#61dafb"/>
                <g stroke="#61dafb" strokeWidth="1" fill="none">
                    <ellipse rx="11" ry="4.2"/>
                    <ellipse rx="11" ry="4.2" transform="rotate(60)"/>
                    <ellipse rx="11" ry="4.2" transform="rotate(120)"/>
                </g>
            </svg>
        );
    }
    if (name.includes('node')) {
        return (
            <svg viewBox="0 0 24 24" width="14" height="14" fill="#339933" style={{ marginRight: '6px' }}>
                <path d="M11.874 0l-10.28 5.92v11.841l10.28 5.92 10.28-5.92V5.92z"/>
            </svg>
        );
    }
    // Generic Code Icon
    return (
        <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '6px' }}>
            <polyline points="16 18 22 12 16 6"></polyline>
            <polyline points="8 6 2 12 8 18"></polyline>
        </svg>
    );
};

const Projects = () => {
    const revealRef = useScrollReveal();

    return (
        <section id="projects" className="projects-section reveal" ref={revealRef}>
            <h2>Featured Projects</h2>

            <div className="projects-grid">
                {projects.map((project, index) => (
                    <div key={project.id} className="project-card reveal" style={{ transitionDelay: `${index * 0.15}s` }}>
                        <div className="project-image-container">
                            {project.video ? (
                                <video src={project.video} autoPlay loop muted playsInline className="project-media"></video>
                            ) : project.image ? (
                                <img src={project.image} alt={project.title} className="project-media" />
                            ) : (
                                <div className="project-media-placeholder">No Image</div>
                            )}
                        </div>
                        <div className="project-info">
                            <h3>{project.title}</h3>
                            <p>{project.description}</p>
                            <div className="tech-stack">
                                {(project.tech || []).filter(t => t.trim() !== "").map((tech, i) => (
                                    <span key={i} className="tech-tag">
                                        {getTechLogo(tech)}
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;