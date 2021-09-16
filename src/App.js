import './Style/bootstrap-rtl.min.css'
import HomePage from './Pages/HomePage/HomePage'
import GoodsPage from './Pages/GoodsPage/GoodsPage'
import ShopBasketPage from './Pages/ShopBasketPage/ShopBasketPage'
import AboutUsPage from './Pages/AboutUsPage/AboutUsPage'
import ContactPage from './Pages/ContactPage/ContactPage'
import './Style/main-style.css'
import {Switch, Route} from "react-router-dom";
import Layout from './Layout/Layout'

export default function App() {

    return ( 
    <> 
     <Switch>
        <Layout>
            <Route path='/' exact>
                <HomePage/>
            </Route>
            <Route path='/goods/:slug/:id'>
                <GoodsPage/>
            </Route>
            <Route path='/shopbasket'>
                <ShopBasketPage/>
            </Route>
            <Route path='/aboutus'>
                <AboutUsPage/>
            </Route>
            <Route path='/contact'>
                <ContactPage/>
            </Route>
        </Layout>
      </Switch> 
    </>
  )
}