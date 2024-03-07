import React, {useState} from 'react'

import './Header.css'
import {LoginModalComponent} from "../LoginModal/LoginModal";

export const HeaderComponent: React.FC = () => {
    const [isLoginModalVisible, setIsLoginModalVisible] = useState<boolean>(false)

    return <div className='header__container'>


        <div className="lupa">
            <div className="menuicon"><img className="colormolor" src="menu icon.png"/></div>
            <div className="position"><a href="http://localhost:5173/"> <img className="MDApprenticeship" src="PicsArt_ (1).png"/> </a> </div>
        </div>


        <div className="header__container1 MetroDigital"><a href="https://metro.digital/"> <img className="MD"
                                                                                                src="unnamed.png"/> </a>
        </div>

        <div className="header__container1 flexmex"><a href="https://www.metro.de/"> <img src="MetroDeutschland.png"
                                                                                          className="MetroDeutschland"/>
        </a></div>

        <div className="LogInSignUp">
            <button className="buttonsize"> Log in</button>
            <button className="buttonsize"> Sign Up</button>
        </div>

        {isLoginModalVisible && (<LoginModalComponent/>)}

    </div>
}