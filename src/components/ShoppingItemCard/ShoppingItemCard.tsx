import React from 'react'

import './ShoppingItemCard.css'

type Props = {
    item: {
        skillname: string;
        skillprogress: number;
    }
}

export const ShoppingCardComponent: React.FC<Props> = ({item}) => {
        const filledSquares = Array(item.skillprogress).fill("filledSquare.png");
        const emptySquares = Array(10 - item.skillprogress).fill("emptySquare.png");
        const allSquares = filledSquares.concat(emptySquares);
        return <div className='shoppingCardItem'>
            <div className="cardContent">
                <div className="cardTitle">{item.skillname}</div>
                <div className="cardProgress">
                    <img className="plusMinusButton" src="minusButton.png"/>
                    {allSquares.map((icon, index) => (
                        <img key={index} className="progressIcon" src={icon} alt="square" />
                    ))}
                    <img className="plusMinusButton" src="plusButton.png"/>
                </div>
                <div className="progressTopic">"actual topic"</div>
                <div className="cardNote">Notes:</div>
            </div>
            <div className="sidebar">
                <a href="https://github.com/denitrip/metro-shopping-list"><img className="xButton" src="xButton.png"/></a>

            </div>
        </div>
}