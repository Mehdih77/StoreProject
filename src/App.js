import './Style/bootstrap-rtl.min.css';
import './Style/main-style.css';
import HomePage from './Pages/HomePage/HomePage';
import PhoneGoodsPage from './Pages/PhoneGoodsPage/PhoneGoodsPage';
import LaptopGoodsPage from './Pages/LaptopGoodsPage/LaptopGoodsPage';
import ShopBasketPage from './Pages/ShopBasketPage/ShopBasketPage';
import AboutUsPage from './Pages/AboutUsPage/AboutUsPage';
import ContactPage from './Pages/ContactPage/ContactPage';
import {Switch, Route, Redirect} from "react-router-dom";
import Layout from './Layout/Layout';
import LoginPage from './Pages/LoginPage/LoginPage';
import SignupPage from './Pages/SignupPage/SignupPage';
import ForgotPassPage from './Pages/ForgotPassPage/ForgotPassPage';
import PhonePage from './Pages/PhonePage/PhonePage';
import ProfilePage from './Pages/ProfilePage/ProfilePage';
import FavoriteList from './Pages/FavoriteList/FavoriteList';
import UpdateProfile from './Pages/UpdateProfile/UpdateProfile';
import { useAuth } from './ContextApi/AuthProvider';

export default function App() {

    const {currentUser} = useAuth();

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
                {(currentUser && currentUser.email) ? <ProfilePage/> : <Redirect to='/login' />}
            </Route>
            <Route path='/profile/favorite' exact>
                {(currentUser && currentUser.email) ? <FavoriteList/> : <Redirect to='/login' />}
            </Route>
            <Route path='/profile/update-profile' exact>
                {(currentUser && currentUser.email) ? <UpdateProfile/> : <Redirect to='/login' />}
            </Route>
            <Route exact path='/phones'>
                <PhonePage />
            </Route>
            <Route exact path='/phones/:id'>
                <PhoneGoodsPage/>
            </Route>
            <Route exact path='/laptops/:id'>
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