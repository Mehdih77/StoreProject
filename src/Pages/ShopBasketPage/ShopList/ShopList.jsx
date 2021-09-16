import React from 'react'
import {useDispatch} from 'react-redux';
import {addToBasket, removeFromBasket} from '../../../redux/shopSlice';
import './shoplist.css'

export default function ShopList({currentProducts}) {

  const dispatch = useDispatch();

  const hanldeAddItemToBasket = (items) => {
    dispatch(addToBasket(items));
  }

  const hanldeRemoveItemFromBasket = (items) => {
    dispatch(removeFromBasket(items));
  }

  return ( 
    <> 
      {currentProducts.map((items) => ( 
        <> 
        <div key={items.id} className='shop-list'>
            <div className="card shop-list-card mb-3">
                <div className="row">
                    <div className="col-md-3">
                        <img src={items.img} className="card-img shop-list-img" alt="shop-img"/>
                    </div>
                    <div className="col-md-9">
                        <div className="card-body">
                            <h5 className="card-title shop-list-card-title">{items.name}</h5>
                            <div className="card-text shop-list-card-body">
                                <p>
                                    <i className="fas fa-award"></i>
                                    گارانتی اصالت و سلامت فیزیکی کالا</p>
                                <p>
                                    <i className="fas fa-store"></i>
                                    آنلاین شاپ
                                </p>
                                <p>
                                    <i className="fas fa-shipping-fast"></i>
                                    ارسال توسط آنلاین شاپ
                                </p>
                            </div>
                        </div>
                        <div className='shop-list-qty'>
                            <button
                                onClick={() => hanldeAddItemToBasket(items)}
                                className='shop-list-qty-add'>+</button>
                            <p className='shop-list-qty-number'>{items.qty}</p>
                            <button
                                onClick={() => hanldeRemoveItemFromBasket(items)}
                                className='shop-list-qty-remove'>-</button>
                        </div>
                        <div className='shop-list-price'>
                            <p>{items.price}
                                تومان</p>
                        </div>
                    </div>
                </div>
            </div>
        </div> 
       </>
      ))}
  </>
)}