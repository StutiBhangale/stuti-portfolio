import React, { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import "./Navbar.css";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const closeMenu = () => setMenuOpen(false);
        window.addEventListener("resize", closeMenu);
        return () => window.removeEventListener("resize", closeMenu);
    }, []);

    const handleNavClick = () => setMenuOpen(false);

    return (
        <nav className="navbar" aria-label="Primary navigation">
            <a className="navbar-logo" href="/#home" onClick={handleNavClick}>
                Stuti Bhangale
            </a>

            <button
                className="menu-toggle"
                type="button"
                aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
                aria-expanded={menuOpen}
                onClick={() => setMenuOpen((open) => !open)}
            >
                {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>

            <div className={`navbar-links ${menuOpen ? "is-open" : ""}`}>
                <a href="/#home" onClick={handleNavClick}>Home</a>
                <a href="/#projects" onClick={handleNavClick}>Projects</a>
                <a href="/#experience" onClick={handleNavClick}>Experience</a>
                <a href="/#skills" onClick={handleNavClick}>Skills</a>
                <a href="/#achievement" onClick={handleNavClick}>Achievements</a>
                <a href="/#contact" onClick={handleNavClick}>Contact</a>
            </div>
        </nav>
    );
};

export default Navbar;
