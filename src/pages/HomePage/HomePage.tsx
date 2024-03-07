import React from 'react'
import {HeaderComponent} from "../../components/Header/Header";
import {ShoppingCardComponent} from "../../components/ShoppingItemCard/ShoppingItemCard";
import {FooterComponent} from "../../components/Footer/Footer";

import './HomePage.css'

export const HomePageComponent: React.FC = () => {
    const shoppingItems = [{skillname: 'C++', skillprogress: 2}, {skillname: 'Kotlin', skillprogress: 2}, {skillname: 'HTML', skillprogress: 4}, {skillname: 'CSS', skillprogress: 3}, {skillname: 'Java', skillprogress: 3}, {skillname: 'Git', skillprogress: 3}, {skillname: 'Typescript', skillprogress: 3},]

    return <div className='container'>
        <HeaderComponent/>
        <div className="container__body">
            {shoppingItems.map(item => <ShoppingCardComponent item={item}/>)}
        </div>
        <FooterComponent/>
    </div>
}