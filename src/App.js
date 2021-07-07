import React, {useEffect, useState} from 'react'
import './Style/bootstrap-rtl.min.css'
import HomePage from './Pages/HomePage/HomePage'
import GoodsPage from './Pages/GoodsPage/GoodsPage'
import ShopBasketPage from './Pages/ShopBasketPage/ShopBasketPage'
import AboutUsPage from './Pages/AboutUsPage/AboutUsPage'
import ContactPage from './Pages/ContactPage/ContactPage'
import './Style/main-style.css'
import {
  Switch,
  Route,
} from "react-router-dom";


export default function App() {


  const [cartItems, setCartItems] = useState([])

//   localStorage.setItem("shop",JSON.stringify(cartItems))

//   useEffect(() => {
//      localStorage.getItem("shop");
//   }, [])

    const onAdd = (items) => {
        const exist = cartItems.find((m) => m.id === items.id);
        if (exist) {
            setCartItems(
                cartItems.map((m) => 
                    m.id === items.id ? {...exist , qty: exist.qty + 1} : m
                )
            )
        } else {
            setCartItems([...cartItems , {...items, qty: 1}]);
        }
    }


    const onRemove = (items) => {
        const exist = cartItems.find(m => m.id === items.id);
        if(exist.qty === 1) {
            setCartItems( cartItems.filter((x) => x.id !== items.id))
        } else{
            setCartItems(
                cartItems.map((m) =>
                    m.id === items.id ? {...exist , qty: exist.qty - 1} : m
                )
            )
        }
    }


  return (
    <>
    <Switch>
    <Route path='/' exact>
        <HomePage cartItems={cartItems} onAdd={onAdd} />
    </Route>
    <Route path='/goods/:slug/:id'>
       <GoodsPage cartItems={cartItems} onAdd={onAdd} />
    </Route>
    <Route path='/shopbasket'>
        <ShopBasketPage cartItems={cartItems} onAdd={onAdd} onRemove={onRemove} /> 
    </Route>
    <Route path='/aboutus'>
        <AboutUsPage cartItems={cartItems} /> 
    </Route>
    <Route path='/contact'>
        <ContactPage cartItems={cartItems} /> 
    </Route>
    </Switch>
    </>
  )
}
