import React, { useState } from 'react';
// import ImageList from '../ImageList/index';

import teachMe from '../../assets/teachmeto.JPG';
import cardSoc from '../../assets/cardsocial.JPG';
import sootheR from '../../assets/sootheR.jpg';
import budgetTrack from '../../assets/BudgetTracker.JPG';
import teamGen from '../../assets/TeamGenerator.JPG';
import empTracker from '../../assets/EETracker.JPG';
import scheduler from '../../assets/Scheduler.JPG';

function Portfolio() {

    const [projects] = useState([
        {
            image: teachMe,
            title: 'Teach Me To',
            link: 'https://floating-spire-39046.herokuapp.com/',
            github: 'https://github.com/jenlpac/teach-me-to',
            tech: 'Mongo | Express | React | Node | GraphQL | PWA',
            description: 'An application to search for (and create) articles and videos to learn and grow from.'
        },
        {
            image: cardSoc,
            title: 'Card Social',
            link: 'https://cryptic-shelf-96558.herokuapp.com/',
            github: 'https://github.com/jenlpac/CardSocial',
            tech: 'NodeJS | Express | MySQL | Sequelize | JavaScript',
            description: 'A mobile application for people to exchange personal, social and business details via electonic card.'
        },
        {
            image: sootheR,
            title: 'SootheR',
            link: 'https://devmadia.github.io/soother/',
            github: 'https://github.com/jenlpac/soother',
            tech: 'jQuery | JavaScript | Foundation | Sass | HTML | CSS',
            description: 'An online news reader application that saves searched articles and provides positive quotes to encourage relaxation while catching up on current events.'
        },
        {
            image: budgetTrack,
            title: 'Budget Tracker',
            link: 'https://fierce-journey-09739.herokuapp.com/',
            github: 'https://github.com/jenlpac/budget_tracker',
            tech: 'Express | NoSQL | IndexedDB | PWA',
            description: 'An app to track monetary transactions.'
        },
        {
            image: teamGen,
            title: 'Team Roster Generator',
            link: 'https://drive.google.com/file/d/1JIpKYJLCMeh-ydkU0-jNcCEMd6dEXlRe/view',
            github: 'https://github.com/jenlpac/team-profile-generator',
            tech: 'NodeJS | Jest | Inquirer | HTML',
            description: 'An application to create an employee team roster. Walkthrough demo provided.'
        },
        {
            image: empTracker,
            title: 'Back End Employee Tracker',
            link: 'https://drive.google.com/file/d/15y2L4Bi-VXa2ZbYqP6qw4k5_9XMTnOCO/view',
            github: 'https://github.com/jenlpac/employee-tracker',
            tech: 'MySQL | Inquirer | JavaScript',
            description: 'Content management system to view and manage company departments, roles, and employees'
        }
        // {
        //     image: ,
        //     title: ,
        //     link: ,
        //     github: ,
        //     tech: ,
        //     description:
        // }
    ])
    
    return (
        <section className={'section-container'}>
            <div>
                <h1>Portfolio</h1>
                <br></br>
                <p>Here are some of my recent projects with links to the working app or a demo, and the repository.</p>
                <br></br>
                
            </div>
            <div className="project-grid-container">
                {projects.map((project, i) => (
                    <section className={'project-grid-item'} key={project.title}>
                        <img className={'project-grid-img'} src={project.image} alt={project.title}></img>
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                        <p>{project.tech}</p>
                        <p>
                        <button data-link={project.link}>App</button>
                        <button data-link={project.github}>GitHub</button>
                        </p>
                    </section>
                ))}
                {/* <a href="https://floating-spire-39046.herokuapp.com/">
                <img className="webpage"
                    src={photo}
                    alt="Teach me to Home Page"
                    style={{ width: "40%" }}
                    
                />
                </a> */}
            </div>
        </section>
    );
}

export default Portfolio;