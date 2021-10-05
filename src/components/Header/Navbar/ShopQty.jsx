import { useEffect } from "react";
import { useSelector,useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { calcTotal, getCurrentProducts, getTotoalQty } from "../../../redux/shopSlice";

export default function ShopQty() {

    const currentProducts = useSelector(getCurrentProducts);
    const totoalQty = useSelector(getTotoalQty);
    const dispatch = useDispatch();

    
  useEffect(() => {
    dispatch(calcTotal());
  }, [currentProducts,dispatch])

    return (
        <Link to='/shopbasket' className="store-shop">
            <i className="fas fa-shopping-cart">
              <span className="qty-shop">{totoalQty}</span>
            </i>
        </Link>
    )
}
