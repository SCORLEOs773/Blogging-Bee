import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext } from './ThemeContext';
import Logo from '../images/bb.png';
import Bee from '../images/bee gif.gif';
import NavBg from '../images/navbg.jpg';
import './Navbar.css';


export default function Navbar() {
    const { theme, toggleTheme } = useContext(ThemeContext);
    const [beeAnimation, setBeeAnimation] = useState(false);
    const [navBg, setNavBg] = useState(
        theme === 'light'
            ? 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXnpm startALhGtOnrAA6t84KiEbQHUYEPUyXlNhgNGg&usqp=CAU'
            : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfOubNd_JUmXwGzUEF6CEKfLrSK1sdHLnSjQ&usqp=CAU'
    );
    const [darkMode, setDarkMode] = useState(theme === 'dark');


    useEffect(() => {
        const timeout = setTimeout(() => {
            setBeeAnimation(true);
            setTimeout(() => {
                setBeeAnimation(false);
            }, 5000);
        }, 10000);

        return () => clearTimeout(timeout);
    }, []);

    const handleToggleTheme = () => {
        toggleTheme();
        setNavBg(
            theme === 'light'
                ? 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfOubNd_JUmXwGzUEF6CEKfLrSK1sdHLnSjQ&usqp=CAU'
                : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXALhGtOnrAA6t84KiEbQHUYEPUyXlNhgNGg&usqp=CAU'
        );
        setDarkMode((prevMode) => !prevMode);
    };

    // https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7TcPgebGnEu5W_w_s0-9r04BYt6tnZayiYw&usqp=CAU


    return (
        // <nav className={`navbar navbar-expand-lg ${theme === 'light' ? 'bg-light' : 'bg-dark'} `} style={{ backgroundImage: `url(${NavBg})` }}>

        <nav className={`navbar navbar-expand-lg ${darkMode ? 'bg-dark-subtle text-white' : 'bg-light'} `} style={{ backgroundImage: `url(${navBg})` }}>
            <div className="container-fluid">
                <div className="flying-bee">
                    <img src={Bee} alt="The Blogging Bee" height={'120px'} />
                </div>

                {/* <a className={`navbar-brand ${theme === 'dark' ? 'text-white' : ''}`} href="/">The Blogging Bee</a> */}

                <Link className={`navbar-brand ${theme === 'dark' ? 'text-white' : ''}`} to="/">
                    <img src={Logo} alt="The Blogging Bee" height={'130px'} />
                </Link>

                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>

                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">

                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                        <li className="nav-item">
                            <Link className={`nav-link active ${theme === 'dark' ? 'text-white' : ''}`} aria-current="page" to={"/"}>Home</Link>
                        </li>

                        <li className='nav-item'>
                            <Link className={`nav-link ${theme === 'dark' ? 'text-white' : ''}`} to={"/submit"}>Write a Blog</Link>
                        </li>

                        <li className='nav-item'>
                            <Link className={`nav-link ${theme === 'dark' ? 'text-white' : ''}`} to={"/about"}>About</Link>
                        </li>

                        <li className='nav-item'>
                            <Link className={`nav-link ${theme === 'dark' ? 'text-white' : ''}`} to={"/contact"}>Contact</Link>
                        </li>

                    </ul>

                    <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>
            </div>
            <div className="text-center mt-2">
                <button className={`btn ${theme === 'light' ? 'btn-dark' : 'btn-light'} mx-4`} onClick={handleToggleTheme} >
                    {darkMode ? 'Light Mode' : 'Dark Mode'}
                    <i className={`fa-regular ${theme === 'light' ? 'fa-moon' : 'fa-sun'} mx-1`}></i>
                </button>

            </div>
        </nav>
    );
}
