import React from 'react'
import Navbar from './Navbar/Navbar'

export default function Header({cartItems}) {
    return (
        <>
        <header className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
          <Navbar cartItems={cartItems} />
        </header>
        </>
    )
}
