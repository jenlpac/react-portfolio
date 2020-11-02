import React from 'react';

import photo from '../../assets/teachmeto.JPG';

function ImageList() {
    return (
        <div>
            <a href="https://floating-spire-39046.herokuapp.com/">
            <img className="webpage"
                src={photo}
                alt="Teach me to Homepage"
                style={{ width: "40%" }}
                
            />
            </a>
        </div>
    );
}

export default ImageList;