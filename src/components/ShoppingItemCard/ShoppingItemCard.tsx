import React, { useState } from 'react';
import './ShoppingItemCard.css';
import {SkillCard} from "../../pages/HomePage/HomePage.tsx";

type Props = {
    item: SkillCard,
    index: number,
    onRemove: (index: number) => void
}

export const ShoppingCardComponent: React.FC<Props> = ({item, onRemove,index}) => {
    const [level, setLevel] = useState(item.level);
    const filledSquares = Array(level).fill("filledSquare.png");
    const emptySquares = Array(10 - level).fill("emptySquare.png");
    const allSquares = filledSquares.concat(emptySquares);
    const handlePlusClick = () => {
        setLevel(level + 1);
    }

    const handleMinusClick = () => {
        setLevel(level - 1);
    }

    const onRemoveHandleClick = () => {
        onRemove(index)
    }

    return (
        <div className='shoppingCardItem'>
            <div className="cardContent">
                <div className="cardTitle">{item.title}</div>
                <div className="cardProgress">
                   <img onClick={handleMinusClick} className="plusMinusButton" src="minusButton.svg" alt="minus"/>
                    {allSquares.map((icon, index) => (
                        <img key={index} className="progressIcon" src={icon} alt="square" />
                    ))}
                   <img onClick={handlePlusClick} className="plusMinusButton" src="plusButton.svg" alt="plus"/>
                </div>
                <div className="progressTopic">"actual topic"</div>
                <div className="cardNote">Notes:</div>
            </div>
            <div className="sidebar">
                <img onClick={onRemoveHandleClick} className="xButton" src="xButton.png" alt="x"/>
            </div>
        </div>
    );
}
