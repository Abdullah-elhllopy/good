/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import './style.scss'
const Navbar = () => {
    return (

    <div>
        <header class="site-header">
            <div class="wrapper site-header__wrapper">
                <a href="#" class="brand"><span>The Furnish</span></a>
                <nav class="nav">
                    <ul class="nav__wrapper" >
                        <a class="nav__item1" href="#">Shop</a>
                        <a class="nav__item2" href="#">Collection</a>
                        <a class="nav__item3" href="#"><img src = {require('../../images/Path 1@2x.png').default} alt=""/> </a> 
                    </ul>
                </nav>
            </div>
        </header>
    </div>
    )
}

export default Navbar
