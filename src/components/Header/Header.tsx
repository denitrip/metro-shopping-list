import React, {useState} from 'react'

import './Header.css'
import {LoginModalComponent} from "../LoginModal/LoginModal";

export const HeaderComponent: React.FC = () => {
    const [isLoginModalVisible, setIsLoginModalVisible] = useState<boolean>(false)

    return <div className='header__container'>

        <div className="position"> <a href="http://localhost:5173/"> <img className="MDApprenticeship" src="PicsArt_ (1).png"/> </a>
        </div>
        <div className="header__container1"> Düsseldorf</div>
        <div className="header__container1"> Düsseldorf Hi</div>
        <div className="LogInSignUp">
            <div className="LogInMargin"> Log in</div>
            <div className="SignUoMargin"> Sign Up</div>
        </div>

        {isLoginModalVisible && (<LoginModalComponent/>)}

    </div>
}