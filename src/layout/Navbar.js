import React from 'react';

const Navbar = () => {
    return (
        <section>
        <a className="menu-toggle rounded" href="/">
            <i className="fas fa-bars"></i>
        </a>
        <nav id="sidebar-wrapper">
            <ul className="sidebar-nav">
                <li className="sidebar-nav-item">
                    <a className="js-scroll-trigger" href="/">Home</a>
                </li>
                <li className="sidebar-nav-item">
                    <a className="js-scroll-trigger" href="./index.html">About</a>
                </li>
                <li className="sidebar-nav-item">
                    <a className="js-scroll-trigger" href="./portfolio.html">Portfolio</a>
                </li>
                <li className="sidebar-nav-item">
                    <a className="js-scroll-trigger" href="./contact.html">Contact</a>
                </li>
            </ul>
        </nav>
        </section>

    );
};

export default Navbar;
