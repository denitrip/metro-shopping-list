import React from 'react'
import {HeaderComponent} from "../../components/Header/Header";
import {ShoppingCardComponent} from "../../components/ShoppingItemCard/ShoppingItemCard";
import {FooterComponent} from "../../components/Footer/Footer";

import './HomePage.css'

export const HomePageComponent: React.FC = () => {
    const shoppingItems = [{name: 'item1'}, {name: 'item2'}, {name: 'item3'}, {name: 'item4'}]

    return <div className='container'>
        <HeaderComponent/>
        <div className="container__body">
            {shoppingItems.map(item => <ShoppingCardComponent item={item}/>)}
        </div>
        <FooterComponent/>
    </div>
}