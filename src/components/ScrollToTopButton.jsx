import { useEffect, useRef, useState } from 'react';
import { FaArrowUp } from 'react-icons/fa';

export default function ScrollToTopButton() {
    const [isVisible, setIsVisible] = useState(false);
    const [isNearFooter, setIsNearFooter] = useState(false);
    const buttonRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            setIsVisible(window.scrollY > 300);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => setIsNearFooter(entry.isIntersecting),
            { root: null, threshold: 0 }
        );

        const footer = document.getElementById('footer');
        if (footer) observer.observe(footer);
        return () => {
            if (footer) observer.unobserve(footer);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        isVisible && (
            <div
                ref={buttonRef}
                className={`fixed z-50 right-[4vw] sm:right-[2vw] md:right-[1vw] transition-all duration-300 
                    ${isNearFooter ? 'bottom-[6rem] xs:bottom-[7.2rem]' : 'bottom-[1vw]'
                    }
                `}
            >
                <button
                    onClick={scrollToTop}
                    className="p-3 bg-accent text-white rounded-full shadow-lg hover:bg-opacity-90 transition outline-none focus:outline-none focus:ring-0 border-none"
                    aria-label="Volver arriba"
                >
                    <FaArrowUp />
                </button>
            </div>
        )
    );
}