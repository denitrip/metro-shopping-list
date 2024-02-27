import React from 'react'

import './Header.css'

export const HeaderComponent: React.FC = () => {
    const handleClick = () => {
        console.log('click');
    }

    return <div className='header__container' onClick={handleClick}>
        header content
    </div>
}