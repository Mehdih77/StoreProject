import { useDispatch, useSelector } from "react-redux";
import { addFavorite, removeFavorite, selectAllFavorite } from "../../redux/favoriteSlice";
import { addNotice, removeNotice, selectAllNotice } from "../../redux/noticeSlice";
import { toast } from 'react-toastify';

export default function GoodsPageIcons({getCurrentProducts}) {

    
    const allFavorite = useSelector(selectAllFavorite);
    const allNotice = useSelector(selectAllNotice);
    const dispatch = useDispatch();

    // add & remove favorite item 
    const existFavorite = getCurrentProducts && allFavorite.findIndex(item => item.id === getCurrentProducts.id);
    const handleFavorite = () => {
        if (existFavorite >= 0) {
            dispatch(removeFavorite(getCurrentProducts.id));
            toast.error('از علاقه مندی ها حذف شد', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                });
        } else {
            dispatch(addFavorite(getCurrentProducts));
            toast.success('به علاقه مندی ها افزوده شد', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                });
        }
    }
    // add & remove notice item 
    const existNotice = getCurrentProducts && allNotice.findIndex(item => item.id === getCurrentProducts.id);
    const handleNotice = () => {
        if (existNotice >= 0) {
            dispatch(removeNotice(getCurrentProducts.id));
            toast.error('از اطلاع رسانی ها حذف شد', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                });
        } else {
            dispatch(addNotice(getCurrentProducts));
            toast.warning('به اطلاع رسانی ها افزوده شد', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                });
        }
    }
    
    return (
        <div className='col-6 col-md-1 goodspage-icons'>
                        <ul>
                            <li>
                                {existFavorite >= 0 ? <i onClick={handleFavorite} class="fas fa-heart active-favorite"></i>
                                : <i onClick={handleFavorite} title='افزودن به علاقه مندی ها' className="far fa-heart"></i>
                                }
                            </li>
                            <li>
                                <i title='اشتراک گذاری' className="fas fa-share-alt"></i>
                            </li>
                            <li>
                                {existNotice >= 0 ? <i onClick={handleNotice} title='حذف از اطلاع رسانی' class="fas fa-bell active-notice"></i>
                                : <i onClick={handleNotice} title='افزودن به اطلاع رسانی' className="far fa-bell"></i>
                                }
                            </li>
                            <li>
                                <i title='نمودار قیمت' className="far fa-chart-bar"></i>
                            </li>
                        </ul>
                    </div>
    )
}
