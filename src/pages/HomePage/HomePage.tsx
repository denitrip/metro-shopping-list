import React from 'react'
import {HeaderComponent} from "../../components/Header/Header";
import {ShoppingCardComponent} from "../../components/ShoppingItemCard/ShoppingItemCard";
import {FooterComponent} from "../../components/Footer/Footer";

import './HomePage.css'

export const HomePageComponent: React.FC = () => {
    return <div className='container'>
        <HeaderComponent/>
        <div className="container__body">
            <ShoppingCardComponent/>
            <ShoppingCardComponent/>
            <ShoppingCardComponent/>
            <ShoppingCardComponent/>
        </div>
        <FooterComponent/>
    </div>
}