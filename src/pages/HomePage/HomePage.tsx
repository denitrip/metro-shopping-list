import React from 'react'
import {HeaderComponent} from "../../components/Header/Header";
import {ShoppingCardComponent} from "../../components/ShoppingItemCard/ShoppingItemCard";
import {FooterComponent} from "../../components/Footer/Footer";

import './HomePage.css'

export const HomePageComponent: React.FC = () => {
    const shoppingItems = [{skillName: 'Chat GPT', skillProgress: 7}, {skillName: 'Kotlin', skillProgress: 2}, {skillName: 'HTML', skillProgress: 4}, {skillName: 'CSS', skillProgress: 3}, {skillName: 'Java', skillProgress: 3}, {skillName: 'Git', skillProgress: 3}, {skillName: 'Typescript', skillProgress: 3},]

    return <div className='container'>
        <HeaderComponent/>
        <div className="container__body">
            {shoppingItems.map(item =><ShoppingCardComponent item={item}/>)}
        </div>
        <FooterComponent/>
    </div>
}