import { useEffect, useState } from 'react';

export default function useScrollDirection() {
    const [scrollDir, setScrollDir] = useState('up');

    useEffect(() => {
        let lastScrollY = window.scrollY;
        const updateDirection = () => {
            const currentScrollY = window.scrollY;
            if (Math.abs(currentScrollY - lastScrollY) > 10) {
                setScrollDir(currentScrollY > lastScrollY ? 'down' : 'up');
                lastScrollY = currentScrollY > 0 ? currentScrollY : 0;
            }
        };
        window.addEventListener('scroll', updateDirection);
        return () => window.removeEventListener('scroll', updateDirection);
    }, []);

    return scrollDir;
}