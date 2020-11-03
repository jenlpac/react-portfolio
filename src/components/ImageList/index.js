import React from 'react';

import photo from '../../assets/teachmeto.JPG';

function ImageList() {
    return (
        <div className="container">
            <a href="https://floating-spire-39046.herokuapp.com/">
            <img className="webpic"
                src={photo}
                alt="Teach me to Homepage"
                style={{ width: "100%" }}>
                    
            </img>
            </a>
        </div>
    );
}

export default ImageList;