import React, { useState } from 'react'
import { Link } from 'react-router-dom'



export default function Appbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const closeMenu = () => {
        setIsOpen(false);
    };

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <Link to="/" className="navbar-brand" >THE EVENT HUB</Link>
                    <button className="navbar-toggler" type="button" onClick={toggleMenu} >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`} >
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link to="/" className="nav-link active" aria-current="page" onClick={closeMenu}>Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/model" className="nav-link active" href="/" onClick={closeMenu}>Event Wall</Link>
                            </li>
                            <li className="nav-item dropdown active">
                                <a className="nav-link dropdown-toggle active" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Deshboard
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><Link to="/eventhost" className="dropdown-item" href="/" onClick={closeMenu}>Event Host</Link></li>
                                    <li><a className="dropdown-item" href="/" onClick={closeMenu}>Interested people</a></li>

                                </ul>
                            </li>
                        </ul>
                        <form className="d-flex">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <Link to="/login" className="nav-link active" aria-current="page" href="/" onClick={closeMenu}>Login</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/signup" className="nav-link active" href="/" onClick={closeMenu}>Sign Up</Link>
                                </li>
                            </ul>

                        </form>
                    </div>
                </div>
            </nav>
        </>
    )
}
