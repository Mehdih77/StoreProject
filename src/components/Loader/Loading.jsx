import React from 'react';
import Loader from "react-loader-spinner";
import './Loading.css';

export default function Loading() {
  return (
    <div className='custom-loader'>
      <Loader
        type="Circles"
        color="#e61a32"
        height={100}
        width={100}
        timeout={50000} //3 secs
      />
    </div>
    )
}