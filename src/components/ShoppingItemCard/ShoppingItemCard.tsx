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
        <div className="attributes">Progress: {item.skillprogress} of 10</div>
        <div className="attributes">actual topic</div>
    </div>
}