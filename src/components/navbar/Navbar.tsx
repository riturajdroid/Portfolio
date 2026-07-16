import { useState, useEffect } from 'react'
import NavbarElements from './NavbarElements'

const Navbar = () => {
    const [activeSection, setActiveSection] = useState('home');
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const sections = ['home', 'skills', 'projects', 'beyond', 'contact'];
        
        const observerOptions = {
            root: null,
            rootMargin: '-30% 0px -70% 0px',
            threshold: 0,
        };

        const observerCallback = (entries: IntersectionObserverEntry[]) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id);
                }
            });
        };

        const observer = new IntersectionObserver(observerCallback, observerOptions);

        sections.forEach((section) => {
            const element = document.getElementById(section);
            if (element) observer.observe(element);
        });

        return () => {
            sections.forEach((section) => {
                const element = document.getElementById(section);
                if (element) observer.unobserve(element);
            });
        };
    }, []);

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
        setMenuOpen(false);
    };

    const navLinks = [
        { label: 'Home', id: 'home' },
        { label: 'Skills', id: 'skills' },
        { label: 'Projects', id: 'projects' },
        { label: 'Beyond Code', id: 'beyond' },
        { label: 'Contact', id: 'contact' },
    ];

    return (
        <>
            {/* Main navbar bar */}
            <div className='fixed z-50 flex items-center justify-between w-full h-[72px] px-10 sm:px-16 lg:px-[50px] bg-black/50 backdrop-blur-md'>
                {/* Logo */}
                <div className='flex h-[48px] items-baseline cursor-pointer' onClick={() => scrollToSection('home')}>
                    <h1 className='text-[#ffffff] font-bold leading-none text-[42px] sm:text-[48px]'>
                        RS
                    </h1>
                    <div className='h-[20%] rounded-full aspect-square bg-[#2563EB]'></div>
                </div>

                {/* Desktop nav links */}
                <div className='hidden md:flex gap-6 lg:gap-20 text-[#ababab] font-bold leading-none text-[16px] lg:text-[18px]'>
                    {navLinks.map(({ label, id }) => (
                        <NavbarElements
                            key={id}
                            e={label}
                            isActive={activeSection === id}
                            onClick={() => scrollToSection(id)}
                        />
                    ))}
                </div>

                {/* Hamburger button (mobile only) */}
                <button
                    className='md:hidden flex flex-col justify-center items-center gap-[5px] w-[36px] h-[36px] cursor-pointer'
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle menu"
                >
                    <span className={`block h-[3px] w-full bg-white rounded transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-[8px]' : ''}`} />
                    <span className={`block h-[3px] w-full bg-white rounded transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
                    <span className={`block h-[3px] w-full bg-white rounded transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-[8px]' : ''}`} />
                </button>
            </div>

            {/* Mobile dropdown drawer */}
            <div className={`fixed z-40 top-[72px] left-0 w-full bg-black/90 backdrop-blur-md flex flex-col items-start px-8 py-4 gap-6 transition-all duration-300 md:hidden ${menuOpen ? 'opacity-100 pointer-events-auto translate-y-0' : 'opacity-0 pointer-events-none -translate-y-4'}`}>
                {navLinks.map(({ label, id }) => (
                    <NavbarElements
                        key={id}
                        e={label}
                        isActive={activeSection === id}
                        onClick={() => scrollToSection(id)}
                    />
                ))}
            </div>
        </>
    )
}

export default Navbar