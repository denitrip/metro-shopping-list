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
        <div className="cardTitle">{item.skillname}</div>
        <div className="cardProgress">Progress: {item.skillprogress} of 10</div>
        <div className="progressTopic">"actual topic"</div>
        <div className="cardNote">Notes:</div>
    </div>
}