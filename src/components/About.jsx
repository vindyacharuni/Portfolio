import { profileData } from '../data/PortfolioData';
import { useScrollReveal } from '../hooks/useScrollReveal';

const About = () => {
    const revealRef = useScrollReveal();

    return (
        <section id="about" className="about-section reveal" ref={revealRef}>
            <h2>About Me</h2>
            <div className="about-container">
                <div className="about-text">
                    <p>{profileData.about}</p>
                </div>
                <div className="about-image-wrapper">
                    <img src="./photo.jpg" alt="About Me" className="about-image" />
                    <div className="about-image-glow"></div>
                </div>
            </div>

            <style>{`
                .about-container {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    gap: 4rem;
                    margin-top: 0;
                }

                .about-text {
                    flex: 1;
                }

                .about-text p {
                    font-size: 1.15rem;
                    line-height: 1.8;
                }

                .about-image-wrapper {
                    flex: 1;
                    max-width: 400px;
                    position: relative;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }

                .about-image {
                    width: 100%;
                    border-radius: 12px;
                    border: 4px solid var(--bg-secondary);
                    box-shadow: 0 15px 30px rgba(0,0,0,0.3);
                    position: relative;
                    z-index: 2;
                    object-fit: cover;
                }

                .about-image-glow {
                    position: absolute;
                    width: 90%;
                    height: 90%;
                    background: var(--accent);
                    border-radius: 12px;
                    filter: blur(40px);
                    opacity: 0.15;
                    z-index: 1;
                    transform: translate(15px, 15px);
                }

                @media (max-width: 968px) {
                    .about-container {
                        flex-direction: column-reverse;
                        text-align: center;
                    }
                    
                    .about-image-wrapper {
                        max-width: 300px;
                        margin-bottom: 2rem;
                    }
                }
            `}</style>
        </section>
    );
};

export default About;