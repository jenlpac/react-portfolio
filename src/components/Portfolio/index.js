import React from 'react';
// import ImageList from '../ImageList/index';

import photo from '../../assets/teachmeto.JPG';

function Portfolio() {
    return (
        <section>
            <div>
                <h1>Portfolio</h1>
                <br></br>
                <p>Here's a taste of my recent work.</p>
                <br></br>
                
            </div>
            <div>
            <a href="https://floating-spire-39046.herokuapp.com/">
            <img className="webpage"
                src={photo}
                alt="Teach me to Home Page"
                style={{ width: "40%" }}
                
            />
            </a>
        </div>
        </section>
    );
}

export default Portfolio;