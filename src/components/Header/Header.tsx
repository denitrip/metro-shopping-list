import React from 'react'

import './Header.css'

export const HeaderComponent: React.FC = () => {
    const handleClick = () => {
        console.log('click');
    }

    return <div className='header__container' onClick={handleClick}>

        <div className="position"> <a href="http://localhost:5173/"> <img className="MDApprenticeship" src="PicsArt_ (1).png"/> </a>
        </div>
        <div className="header__container1"> Düsseldorf</div>
        <div className="header__container1"> Düsseldorf Hi</div>
        <div className="LogInSignUp">
            <div className="LogInMargin"> Log in</div>
            <div className="SignUoMargin"> Sign Up</div>
        </div>

    </div>
}