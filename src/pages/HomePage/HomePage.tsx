import React, {useState} from 'react';
import {HeaderComponent} from "../../components/Header/Header";
import {ShoppingCardComponent} from "../../components/ShoppingItemCard/ShoppingItemCard";
import {FooterComponent} from "../../components/Footer/Footer";

import './HomePage.css'

export type SkillCard = {
    title: string;
    level: number;
}

export const HomePageComponent: React.FC = () => {
    const [shoppingItems, setShoppingItems] = useState([
        {title: 'Chat GPT', level: 7},
        {title: 'Kotlin', level: 2},
        {title: 'HTML', level: 4},
        {title: 'CSS', level: 3},
        {title: 'Java', level: 3},
        {title: 'Git', level: 3},
        {title: 'Typescript', level: 3}
    ])

    const removeItem = (indexToRemove: number) => {
        setShoppingItems(prevItems => prevItems.filter((_, index) => index !== indexToRemove));
    };

    return <div className='container'>
        <HeaderComponent/>
        <div className="container__body">
            {shoppingItems.map((item: SkillCard, index: number) =>
                <ShoppingCardComponent
                    key={index}
                    item={item}
                    index={index}
                    onRemove={removeItem}
                />
            )}
        </div>
        <FooterComponent/>
    </div>
}