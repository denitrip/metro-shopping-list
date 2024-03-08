import React from 'react'

import './LoginModal.css'

type Props = {
    setIsLoginModalVisible: () => {}
}

export const LoginModalComponent: React.FC<Props> = ({setIsLoginModalVisible}) => {

    const onCloseHandleClick = () => {
        setIsLoginModalVisible(false);
    }

    return <div className='loginModal'>
        <button className="Xstyle" onClick={onCloseHandleClick}><img src="papamama.png" className="XIconName"/></button>
        <input type="email" placeholder="    Type Email"  className="inputStyle"/> <br/>
        <input type="password" placeholder="    Type Password"  className="inputStyle"/> <br/>
        <button className="loginStyle">login</button>
        <br/>
        <div className="textColor">Forgot your password?</div>
        <div className="textColor"> New to the platform? Create an account</div>


    </div>
}