import React, { useState } from 'react';
import './ShoppingItemCard.css';

type Props = {
    item: {
        skillName: string;
        skillProgress: number;
    }
}

export const ShoppingCardComponent: React.FC<Props> = ({ item }) => {
    const [level, setLevel] = useState(item.skillProgress);
    const filledSquares = Array(level).fill("filledSquare.png");
    const emptySquares = Array(10 - level).fill("emptySquare.png");
    const allSquares = filledSquares.concat(emptySquares);
    const handlePlusClick = () => {
        setLevel(level + 1);
    }

    const handleMinusClick = () => {
        setLevel(level - 1);
    }

    return (
        <div className='shoppingCardItem'>
            <div className="cardContent">
                <div className="cardTitle">{item.skillName}</div>
                <div className="cardProgress">
                   <img onClick={handleMinusClick} className="plusMinusButton" src="minusButton.png" alt="minus"/>
                    {allSquares.map((icon, index) => (
                        <img key={index} className="progressIcon" src={icon} alt="square" />
                    ))}
                   <img onClick={handlePlusClick} className="plusMinusButton" src="plusButton.png" alt="plus"/>
                </div>
                <div className="progressTopic">"actual topic"</div>
                <div className="cardNote">Notes:</div>
            </div>
            <div className="sidebar">
                <a href="https://github.com/denitrip/metro-shopping-list"><img className="xButton" src="xButton.png" alt="x"/></a>
            </div>
        </div>
    );
}
