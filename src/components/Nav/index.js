import React, { useEffect } from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';

function Nav() {
    return (
        <header>
            <h2>
                <a href="/">Jenniffer Paczkowski</a>
            </h2>
            <nav>
                <ul className="flex-row">
                    <li className="li">
                        <a href="#about">Profile</a>
                    </li>
                    <li className="li">
                        <a href="#portfolio">My Work</a>
                    </li>
                    <li className="li">
                        <a href="#contact">Contact</a>
                    </li>
                    <li className="li">
                        <a href="#resume">Resume</a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Nav;