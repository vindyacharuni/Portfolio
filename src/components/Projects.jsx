import { useState, useMemo } from 'react';
import { projects } from '../data/portfolioData';
import { useScrollReveal } from '../hooks/useScrollReveal';

const Projects = () => {
    const [filter, setFilter] = useState('All');
    const revealRef = useScrollReveal();

    const allTechs = useMemo(() => {
        const techs = new Set();
        projects.forEach(project => {
            project.tech.forEach(t => techs.add(t));
        });
        return ['All', ...Array.from(techs)];
    }, []);

    const filteredProjects = useMemo(() => {
        if (filter === 'All') return projects;
        return projects.filter(project => project.tech.includes(filter));
    }, [filter]);

    return (
        <section id="projects" className="projects-section reveal" ref={revealRef}>
            <h2>Featured Projects</h2>
            
            <div className="filter-container">
                {allTechs.map(tech => (
                    <button
                        key={tech}
                        className={`filter-btn ${filter === tech ? 'active' : ''}`}
                        onClick={() => setFilter(tech)}
                    >
                        {tech}
                    </button>
                ))}
            </div>

            <div className="projects-grid">
                {filteredProjects.map((project, index) => (
                    <div key={project.id} className="project-card reveal" style={{ animationDelay: `${index * 0.15}s` }}>
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
                                {project.tech.map((tech, i) => (
                                    <span key={i} className="tech-tag">{tech}</span>
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