import React from 'react'

import './ShoppingItemCard.css'

type Props = {
    item: {
        name: string;
    }
}

export const ShoppingCardComponent: React.FC<Props> = ({item}) => {
    return <div className='shoppingCardItem'>
        {item.name}
    </div>
}