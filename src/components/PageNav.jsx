import React, { useEffect, useState } from 'react'
import Logo from './Logo'
import styles from './PageNav.module.css'
import { Link, NavLink } from 'react-router-dom'
import { FaBars, FaSearch, FaShoppingCart } from 'react-icons/fa'
import SearchBar from './SearchBar'
import { useCart } from '../context/CartContextProvider'
import { FaX } from 'react-icons/fa6'
import MobileMenu from './MobileMenu'

function PageNav({includeSearch = true}) {
  const [isSearchClicked, setIsSearchClicked] = useState(false)
  const [isMenuActive, setIsMenuActive] = useState(false)
  const {cart} = useCart()
  const totalCartQuantity = cart.length
  return (
    <>
      <nav className={styles.pageNav} data-aos="zoom-in">
          <Logo />
          <ul className={styles.listNav}>
              <li>
                <NavLink to={'/shop'}>Shop</NavLink>
              </li>
              <li>
                <NavLink to={'/about'}>About us</NavLink>
              </li>
              <li>
                <NavLink to={'/contact'}>Contact us</NavLink>
              </li>
          </ul>
          <div className={styles.icons}>
            {includeSearch ? <div>
              {isSearchClicked ? <SearchBar setIsSearchClicked={setIsSearchClicked} /> :<FaSearch size={'15px'} color='#fff' onClick={() => setIsSearchClicked(true)} data-aos="zoom-out"/>}
            </div> : ''}
            <Link to={'/cart'}><FaShoppingCart size={'20px'} color='#fff'/></Link>
            <p className={styles.cartQuantity}>{totalCartQuantity}</p>
          </div>
          
            <div className={styles.menuIcon} data-aos="fade-out" onClick={() => setIsMenuActive((active) => !active)}>
                {isMenuActive ? <FaX color='#fff' size={'20px'} /> : <FaBars color='#fff' size={'20px'} />}
            </div>
      </nav>

      {isMenuActive ? <MobileMenu /> : ''}
    </>
  )
}

export default PageNav