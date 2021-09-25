import './ProfilePage.css';
import NavProfilePage from "./NavProfilePage/NavProfilePage";
import MainProfilePage from './MainProfilePage/MainProfilePage';

export default function ProfilePage() {
    return (
        <section className='ProfilePage'>
            <div className="container">
                <aside className="NavProfilePage col-md-3 mt-3">
                    <NavProfilePage/>
                </aside>
                <div className="col-md-9 mt-3">
                    <MainProfilePage/>
                </div>
            </div>
        </section>
    )
}
