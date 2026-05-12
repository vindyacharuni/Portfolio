import { useState, useEffect } from 'react';

const Navbar = ({ theme, toggleTheme }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('hero');

    // Handle scroll spy
    useEffect(() => {
        const handleScroll = () => {
            const sections = ['hero', 'about', 'education', 'projects', 'blogs', 'contact'];
            const scrollPosition = window.scrollY + 100; // Offset for navbar

            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const { offsetTop, offsetHeight } = element;
                    if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                        setActiveSection(section);
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleScrollClick = (e, targetId) => {
        e.preventDefault();
        setIsOpen(false);
        const element = document.getElementById(targetId);
        if (element) {
            const navbarHeight = document.querySelector('.navbar').offsetHeight;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    };

    return (
        <nav className="navbar">
            <div className="nav-brand">Vindya.</div>

            {/* Navigation Links */}
            <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
                <li><a href="#hero" className={activeSection === 'hero' ? 'active-link' : ''} onClick={(e) => handleScrollClick(e, 'hero')}>Home</a></li>
                <li><a href="#about" className={activeSection === 'about' ? 'active-link' : ''} onClick={(e) => handleScrollClick(e, 'about')}>About</a></li>
                <li><a href="#education" className={activeSection === 'education' ? 'active-link' : ''} onClick={(e) => handleScrollClick(e, 'education')}>Education</a></li>
                <li><a href="#projects" className={activeSection === 'projects' ? 'active-link' : ''} onClick={(e) => handleScrollClick(e, 'projects')}>Projects</a></li>
                <li><a href="#blogs" className={activeSection === 'blogs' ? 'active-link' : ''} onClick={(e) => handleScrollClick(e, 'blogs')}>Blogs</a></li>
                <li><a href="#contact" className={activeSection === 'contact' ? 'active-link' : ''} onClick={(e) => handleScrollClick(e, 'contact')}>Contact</a></li>
            </ul>

            <div className="navbar-actions" style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <button 
                    onClick={toggleTheme} 
                    className="theme-toggle-btn"
                    aria-label="Toggle Theme"
                >
                    {theme === 'dark' ? (
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" height="20" width="20">
                            <circle cx="12" cy="12" r="5"></circle>
                            <line x1="12" y1="1" x2="12" y2="3"></line>
                            <line x1="12" y1="21" x2="12" y2="23"></line>
                            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                            <line x1="1" y1="12" x2="3" y2="12"></line>
                            <line x1="21" y1="12" x2="23" y2="12"></line>
                            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                            <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
                        </svg>
                    ) : (
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" height="20" width="20">
                            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                        </svg>
                    )}
                </button>
                {/* Mobile Menu Button */}
                <button className="menu-toggle" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? 'Close' : 'Menu'}
                </button>
            </div>

            <style>{`
                .theme-toggle-btn {
                    background: transparent;
                    border: none;
                    color: var(--text-main);
                    cursor: pointer;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    padding: 8px;
                    border-radius: 50%;
                    transition: all 0.3s ease;
                }
                .theme-toggle-btn:hover {
                    background: var(--bg-secondary);
                    color: var(--accent);
                }
                @media (max-width: 768px) {
                    .nav-brand {
                        flex-grow: 1;
                    }
                }
            `}</style>
        </nav>
    );
};

export default Navbar;