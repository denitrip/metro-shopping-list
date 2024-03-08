import React from 'react'

import './LoginModal.css'

export const LoginModalComponent: React.FC = () => {
    return <div className='loginModal'>

        <a href="http://localhost:5173/" className="linkStyle">
            <button className="Xstyle"><img src="papamama.png" className="XIconName"/></button></a>
            <input type="email" placeholder="    Type Email"  className="inputStyle"/> <br/>
        <input type="password" placeholder="    Type Password"  className="inputStyle"/> <br/>
        <button className="loginStyle">login</button>
        <br/>
        <div className="textColor">Forgot your password?</div>
        <div className="textColor"> New to the platform? Create an account</div>


    </div>
}