import React, { useState } from 'react';

import photo from '../../assets/teachmeto.JPG';

function ImageList() {
    // const [projects] = useState([
    //     {
    //         name: 'Teach Me To',
    //         link: 'https://floating-spire-39046.herokuapp.com/',
    //         github: 'https://github.com/jenlpac/teach-me-to',
    //         description: 'A react application to search for articles to learn from.'
    //     },
    //     {
    //         name: 'CardSocial',
    //         link: '',
    //         github: '',
    //         description: ''
    //     }
    // ])
    return (
        <div>
            <a href="https://floating-spire-39046.herokuapp.com/">
            <img className="webpage"
                src={photo}
                alt="Teach me to Home Page"
                style={{ width: "40%" }}
                
            />
            </a>
        </div>
    );
}

export default ImageList;