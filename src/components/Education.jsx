import { education } from '../data/PortfolioData';
import { useScrollReveal } from '../hooks/useScrollReveal';

const Education = () => {
    const revealRef = useScrollReveal();

    return (
        <section id="education" className="education-section reveal" ref={revealRef}>
            <h2>Education</h2>
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
            
            <style>{`
                .education-timeline {
                    display: flex;
                    flex-direction: column;
                    gap: 2rem;
                    margin-top: 2rem;
                    max-width: 800px;
                }
                
                .education-card {
                    background: var(--card-bg);
                    backdrop-filter: blur(10px);
                    -webkit-backdrop-filter: blur(10px);
                    border-radius: 12px;
                    border: 1px solid var(--border-color);
                    padding: 2rem;
                    transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
                    position: relative;
                }
                
                .education-card:hover {
                    transform: translateX(10px);
                    border-color: var(--accent);
                    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1), 0 0 15px rgba(244, 63, 94, 0.1);
                }
                
                .education-card::before {
                    content: '';
                    position: absolute;
                    left: -20px;
                    top: 50%;
                    transform: translateY(-50%);
                    width: 4px;
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
                    font-size: 1.4rem;
                    margin: 0;
                }
                
                .duration {
                    background: rgba(244, 63, 94, 0.1);
                    color: var(--accent);
                    padding: 4px 12px;
                    border-radius: 20px;
                    font-size: 0.85rem;
                    font-weight: 600;
                    white-space: nowrap;
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
                
                @media (max-width: 768px) {
                    .education-header {
                        flex-direction: column;
                        gap: 0.5rem;
                    }
                    
                    .education-card:hover {
                        transform: translateY(-5px);
                    }
                }
            `}</style>
        </section>
    );
};

export default Education;
