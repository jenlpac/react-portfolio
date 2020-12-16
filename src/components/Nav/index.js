import React, { useEffect } from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';
import Resume from '../../assets/Resume/Resume.pdf';

function Nav(props) {

    const {
        categories = [],
        setCurrentCategory,
        currentCategory,
    } = props;


    return (
        <header className="flex-row">
            <h2>
                <a href="/">Jenniffer Paczkowski</a>
            </h2>
            <nav>
                <ul className="flex-row">
                    <li className="li">
                        <a href="#about">Profile</a>
                    </li>
                    <li className={"li mx-2 ${currentCategory && 'navActive'}"}>
                        <a href="#portfolio">My Work</a>
                    </li>
                    <li className="li">
                        <a href="#contact">Contact</a>
                    </li>
                    <li className="li">
                        <a href={Resume}>Resume</a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Nav;