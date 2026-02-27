import { useState, useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";

export default function Header() {
    useEffect(() => {
        AOS.init();
    }, []);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 100);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className={`header ${scrolled ? 'scrolled' : ''}`} data-aos="fade-down">
            <div className="logo">
                <h2 style={{ cursor: 'pointer' }} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>TaskFlow</h2>
            </div>
            <div className="nav">
                <h2 onClick={() => document.getElementById('funcionalidades')?.scrollIntoView({ behavior: 'smooth' })}>Funcionalities</h2>
                <h2 onClick={() => document.getElementById('hiw')?.scrollIntoView({ behavior: 'smooth' })}>How it works</h2>
                <h2 onClick={() => document.getElementById('cta')?.scrollIntoView({ behavior: 'smooth' })}>Plans</h2>
            </div>
        </header>
    )
}