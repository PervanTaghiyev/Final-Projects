import React from 'react'
import { NavLink } from 'react-router-dom'
import { CiSearch } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import { HiOutlineShoppingCart } from "react-icons/hi";
import "./index.scss"




const Header = () => {
  return (
    <header>
        <div className="header">
            <div className="header-banner">
                <img src="https://preview.colorlib.com/theme/timezone/assets/img/logo/logo.png" alt="logo" />

                <nav>
                    <ul>
                        <li>
                            <NavLink>Home</NavLink>
                        </li>
                        <li>
                            <NavLink>Shop</NavLink>
                        </li>
                        <li>
                            <NavLink>About</NavLink>
                        </li>
                        <li>
                            <NavLink>Latest</NavLink>
                        </li>
                        <li>
                            <NavLink>Blog</NavLink>
                        </li>
                        <li>
                            <NavLink>Pages</NavLink>
                        </li>
                        <li>
                            <NavLink>Contact</NavLink>
                        </li>
                    </ul>
                </nav>
                <div className="icons">
                <CiSearch />
                <CiUser />
                <HiOutlineShoppingCart />
                </div>
            </div>
        </div>
    </header>
  )
}

export default Header