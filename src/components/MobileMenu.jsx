import React from 'react'
import styles from './MobileMenu.module.css'
import { NavLink } from 'react-router-dom'

function MobileMenu() {
  return (
        <ul className={styles.menu} data-aos="fade-down">
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
  )
}

export default MobileMenu