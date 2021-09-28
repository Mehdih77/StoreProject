import NavProfilePage from '../ProfilePage/NavProfilePage/NavProfilePage';
import MainUpdateProfile from './MainUpdateProfile/MainUpdateProfile';
import './UpdatePofile.css';

export default function UpdateProfile() {
    return (
        <section className='UpdateProfile'>
            <div className="container">
                <div className="row">
                    <aside className="col-md-3 mt-3">
                        <NavProfilePage/>
                    </aside>
                    <div className="col-md-9 mt-3">
                        <MainUpdateProfile/>
                    </div>
                </div>
            </div>
        </section>
    )
}
