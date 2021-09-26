import './FavoriteList.css';
import NavProfilePage from '../ProfilePage/NavProfilePage/NavProfilePage';
import MainFavoriteList from './MainFavoriteList/MainFavoriteList';

export default function FavoriteList() {
    return (
        <section className='FavoriteList'>
            <div className="container">
                <div className="row">
                    <aside className="NavProfilePage col-md-3 mt-3">
                        <NavProfilePage/>
                    </aside>
                    <div className="col-md-9 mt-3">
                        <MainFavoriteList/>
                    </div>
                </div>
            </div>
        </section>
    )
}
