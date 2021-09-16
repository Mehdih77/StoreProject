import React from 'react';
import Loader from "react-loader-spinner";

export default function Loading() {
    return (
        <Loader
        type="Circles"
        color="#00BFFF"
        height={50}
        width={50}
        timeout={3000} //3 secs
      />
    )
}