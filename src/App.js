import './Style/bootstrap-rtl.min.css';
// import './Style/main-style.css';
import HomePage from './Pages/HomePage/HomePage';
import PhoneGoodsPage from './Pages/PhoneGoodsPage/PhoneGoodsPage';
import LaptopGoodsPage from './Pages/LaptopGoodsPage/LaptopGoodsPage';
import ShopBasketPage from './Pages/ShopBasketPage/ShopBasketPage';
import AboutUsPage from './Pages/AboutUsPage/AboutUsPage';
import ContactPage from './Pages/ContactPage/ContactPage';
import {Switch, Route} from "react-router-dom";
import Layout from './Layout/Layout';
import LoginPage from './Pages/LoginPage/LoginPage';
import SignupPage from './Pages/SignupPage/SignupPage';
import ForgotPassPage from './Pages/ForgotPassPage/ForgotPassPage';
import PhonePage from './Pages/PhonePage/PhonePage';
import ProfilePage from './Pages/ProfilePage/ProfilePage';
import FavoriteList from './Pages/FavoriteList/FavoriteList';

export default function App() {

    return ( 
    <> 
     <Switch>
            <Route exact path='/login'>
                <LoginPage />
            </Route>
            <Route exact path='/signup'>
                <SignupPage />
            </Route>
            <Route exact path='/forgotpass'>
                <ForgotPassPage />
            </Route>
        <Layout>
            <Route path='/' exact>
                <HomePage/>
            </Route>
            <Route path='/profile' exact>
                <ProfilePage/>
            </Route>
            <Route path='/profile/favorite' exact>
                <FavoriteList/>
            </Route>
            <Route exact path='/phones'>
                <PhonePage />
            </Route>
            <Route exact path='/phones/:id'>
                <PhoneGoodsPage/>
            </Route>
            <Route exact path='/goods/laptop/:id'>
                <LaptopGoodsPage/>
            </Route>
            <Route exact path='/shopbasket'>
                <ShopBasketPage/>
            </Route>
            <Route exact path='/aboutus'>
                <AboutUsPage/>
            </Route>
            <Route exact path='/contact'>
                <ContactPage/>
            </Route>
        </Layout>
      </Switch> 
    </>
  )
}