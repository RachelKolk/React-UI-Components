import React from 'react';
import './Header.css';

function HeaderContent(props) {
    return (
        <React.Fragment>
            <p className="header-paragraph">"Let's learn React by building simple interfaces with components. Don't try to overthink it,
            just keep it simple and have fun. Once you feel comfortable using components you are well on your way
            to mastering React!"</p>
        </React.Fragment>
    );
}

export default HeaderContent;