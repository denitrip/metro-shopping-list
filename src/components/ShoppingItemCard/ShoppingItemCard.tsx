import React from 'react'

import './ShoppingItemCard.css'

type Props = {
    item: {
        skillname: string;
        skillprogress: number;
    }
}

export const ShoppingCardComponent: React.FC<Props> = ({item}) => {
    return <div className='shoppingCardItem'>
        <div className="title">{item.skillname}</div>
        <div className="statue">Progress: {item.skillprogress} of 10</div>
        <div className="topic">"actual topic"</div>
        <div className="note">Notes:</div>
    </div>
}