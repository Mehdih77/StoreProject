import React from 'react'
import './shoplist.css'

export default function ShopList({cartItems, onAdd, onRemove}) {

  //const itemPrice = Number(items.price.toFixed(3)).toLocaleString().split(/\s/).join(',');


    return (
      <>
      {cartItems.map((items) => (
        <>
        <div className='shop-list'>
            <div className="card shop-list-card mb-3" >
  <div className="row">
    <div className="col-md-3">
      <img src={items.img} className="card-img shop-list-img" alt="shop-img" />
    </div>
    <div className="col-md-9">
      <div className="card-body">
        <h5 className="card-title shop-list-card-title">{items.name}</h5>
        <div className="card-text shop-list-card-body">
            <p> <i className="fas fa-award"></i> گارانتی اصالت و سلامت فیزیکی کالا</p>
            <p> <i className="fas fa-store"></i> آنلاین شاپ </p>
            <p> <i className="fas fa-shipping-fast"></i> ارسال توسط آنلاین شاپ </p>
        </div>
      </div>
      <div className='shop-list-qty'>
            <button onClick={() => onAdd(items)} className='shop-list-qty-add'>+</button>
                <p className='shop-list-qty-number'>{items.qty}</p>
            <button onClick={() => onRemove(items)} className='shop-list-qty-remove'>-</button>
      </div>
      <div className='shop-list-price'>
            <p>{items.price} تومان</p>
      </div>
    </div>
  </div>
</div>
        </div>
        </>
      ))}
</>
        )
}
