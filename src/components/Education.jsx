import { education, certifications } from '../data/PortfolioData';
import { useScrollReveal } from '../hooks/useScrollReveal';

const Education = () => {
    const revealRef = useScrollReveal();

    return (
        <section id="education" className="education-section reveal" ref={revealRef}>
            <h2>Education & Certifications</h2>
            
            <div className="education-container">
                <div className="education-column">
                    <h3 className="column-title">Academic Background</h3>
                    <div className="education-timeline">
                        {education && education.length > 0 ? (
                            education.map((item) => (
                                <div key={item.id} className="education-card">
                                    <div className="education-header">
                                        <h3>{item.degree}</h3>
                                        <span className="duration">{item.duration}</span>
                                    </div>
                                    <h4 className="institution">{item.institution}</h4>
                                    <p className="details">{item.details}</p>
                                </div>
                            ))
                        ) : (
                            <p>Education details coming soon...</p>
                        )}
                    </div>
                </div>

                <div className="education-column">
                    <h3 className="column-title">Licenses & Certifications</h3>
                    <div className="education-timeline">
                        {certifications && certifications.length > 0 ? (
                            certifications.map((item) => (
                                <div key={item.id} className="education-card">
                                    <div className="education-header">
                                        <h3>{item.title}</h3>
                                        <span className="duration">{item.date}</span>
                                    </div>
                                    <h4 className="institution">{item.issuer}</h4>
                                    <p className="details">{item.details}</p>
                                </div>
                            ))
                        ) : (
                            <p>Certifications coming soon...</p>
                        )}
                    </div>
                </div>
            </div>
            
            <style>{`
                .education-container {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 3rem;
                    margin-top: 2rem;
                }
                
                .column-title {
                    font-size: 1.8rem;
                    color: var(--text-main);
                    margin-bottom: 1.5rem;
                }

                .education-timeline {
                    display: flex;
                    flex-direction: column;
                    gap: 2rem;
                }
                
                .education-card {
                    background: var(--card-bg);
                    backdrop-filter: blur(10px);
                    -webkit-backdrop-filter: blur(10px);
                    border-radius: 12px;
                    border: 1px solid var(--border-color);
                    padding: 1.2rem;
                    transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
                    position: relative;
                }
                
                .education-card:hover {
                    transform: translateY(-5px);
                    border-color: var(--accent);
                    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2), 0 0 15px var(--accent-transparent-hover);
                }
                
                .education-card::before {
                    content: '';
                    position: absolute;
                    left: -1px;
                    top: 10%;
                    width: 3px;
                    height: 80%;
                    background: var(--accent);
                    border-radius: 2px;
                    opacity: 0;
                    transition: opacity 0.3s;
                }
                
                .education-card:hover::before {
                    opacity: 1;
                }
                
                .education-header {
                    display: flex;
                    justify-content: space-between;
                    align-items: flex-start;
                    margin-bottom: 0.5rem;
                }
                
                .education-header h3 {
                    color: var(--text-main);
                    font-size: 1.3rem;
                    margin: 0;
                }
                
                .duration {
                    background: var(--accent-transparent);
                    color: var(--accent);
                    padding: 4px 12px;
                    border-radius: 20px;
                    font-size: 0.85rem;
                    font-weight: 600;
                    white-space: nowrap;
                    border: 1px solid var(--accent-transparent-hover);
                }
                
                .institution {
                    color: var(--text-light);
                    font-size: 1.1rem;
                    margin-bottom: 1rem;
                    font-weight: 500;
                }
                
                .details {
                    color: var(--text-light);
                    margin: 0;
                }
                
                @media (max-width: 968px) {
                    .education-container {
                        grid-template-columns: 1fr;
                        gap: 4rem;
                    }
                }

                @media (max-width: 768px) {
                    .education-header {
                        flex-direction: column;
                        gap: 0.5rem;
                    }
                }
            `}</style>
        </section>
    );
};

export default Education;
