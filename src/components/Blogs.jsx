import { blogs } from '../data/PortfolioData';
import { useScrollReveal } from '../hooks/useScrollReveal';

const Blogs = () => {
    const revealRef = useScrollReveal();

    return (
        <section id="blogs" className="blogs-section reveal" ref={revealRef}>
            <h2>Latest Blogs</h2>
            
            <div className="blogs-grid">
                {blogs.map((blog, index) => (
                    <div key={blog.id} className="blog-card reveal" style={{ transitionDelay: `${index * 0.15}s` }}>
                        <div className="blog-image-container">
                            {blog.image ? (
                                <img src={blog.image} alt={blog.title} className="blog-media" />
                            ) : (
                                <div className="blog-media-placeholder">No Image</div>
                            )}
                        </div>
                        <div className="blog-info">
                            <h3>{blog.title}</h3>
                            <p>{blog.description}</p>
                            <a href={blog.link} target="_blank" rel="noopener noreferrer" className="btn-secondary read-more-btn">
                                Read More
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" height="16" width="16" style={{ marginLeft: '8px' }}>
                                    <line x1="5" y1="12" x2="19" y2="12"></line>
                                    <polyline points="12 5 19 12 12 19"></polyline>
                                </svg>
                            </a>
                        </div>
                    </div>
                ))}
            </div>

            <style>{`
                .blogs-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
                    gap: 2.5rem;
                    margin-top: 2rem;
                }
                
                .blog-card {
                    background: var(--card-bg);
                    backdrop-filter: blur(10px);
                    -webkit-backdrop-filter: blur(10px);
                    border-radius: 12px;
                    border: 1px solid var(--border-color);
                    overflow: hidden;
                    transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
                    display: flex;
                    flex-direction: column;
                }
                
                .blog-card:hover {
                    transform: translateY(-10px);
                    border-color: var(--accent);
                    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3), 0 0 15px var(--accent-transparent-hover);
                }
                
                .blog-image-container {
                    width: 100%;
                    height: 160px;
                    overflow: hidden;
                    position: relative;
                    background: var(--bg-secondary);
                }
                
                .blog-media {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    transition: transform 0.6s ease;
                }
                
                .blog-card:hover .blog-media {
                    transform: scale(1.05);
                }
                
                .blog-media-placeholder {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    height: 100%;
                    color: var(--text-light);
                    font-weight: 500;
                }
                
                .blog-info {
                    padding: 1.2rem;
                    flex-grow: 1;
                    display: flex;
                    flex-direction: column;
                }
                
                .blog-card h3 {
                    margin-bottom: 10px;
                    color: var(--text-main);
                    font-size: 1.4rem;
                }

                .blog-info p {
                    flex-grow: 1;
                    margin-bottom: 20px;
                }
                
                .read-more-btn {
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    width: fit-content;
                    padding: 8px 20px;
                    font-size: 0.95rem;
                }
            `}</style>
        </section>
    );
};

export default Blogs;
